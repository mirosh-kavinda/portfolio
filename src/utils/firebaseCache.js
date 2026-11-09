import { get, goOffline, goOnline, ref } from "firebase/database";
import { db } from "../firebaseConfig";

/**
 * Reads a Realtime Database path, keeping a copy in localStorage so repeat
 * visits within `ttlMs` cost no database download. Content changes in the
 * Firebase console show up for visitors once their copy is older than that.
 */
export const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

const PREFIX = "fbcache:";
let active = 0;

function readCache(path) {
  try {
    return JSON.parse(localStorage.getItem(PREFIX + path));
  } catch {
    return null;
  }
}

function writeCache(path, value) {
  try {
    localStorage.setItem(PREFIX + path, JSON.stringify({ t: Date.now(), v: value }));
  } catch {
    // Storage full or blocked (private mode): just skip caching
  }
}

export async function getCached(path, ttlMs = CACHE_TTL_MS) {
  const cached = readCache(path);
  if (cached && Date.now() - cached.t < ttlMs) return cached.v;

  // One-off reads don't need a live socket; closing it afterwards keeps us
  // well under the free plan's 100 simultaneous connections.
  if (active++ === 0) goOnline(db);
  try {
    const snapshot = await get(ref(db, path));
    const value = snapshot.exists() ? snapshot.val() : null;
    writeCache(path, value);
    return value;
  } catch (error) {
    if (cached) return cached.v; // offline or blocked: show the last copy
    throw error;
  } finally {
    if (--active === 0) goOffline(db);
  }
}
