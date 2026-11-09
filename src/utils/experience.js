// Date helpers for experience entries. Dates are "YYYY-MM" strings.

function parse(value) {
  if (!value || typeof value !== "string") return null;
  const [year, month = "1"] = value.split("-");
  const y = Number(year);
  const m = Number(month);
  if (!y || !m) return null;
  return { y, m };
}

export function formatMonth(value) {
  const d = parse(value);
  if (!d) return "";
  return new Date(d.y, d.m - 1, 1).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/** Whole months covered by an entry, counting both the first and last month. */
export function monthsBetween(start, end) {
  const s = parse(start);
  if (!s) return 0;
  const now = new Date();
  const e = parse(end) || { y: now.getFullYear(), m: now.getMonth() + 1 };
  return Math.max(0, (e.y - s.y) * 12 + (e.m - s.m) + 1);
}

export function formatDuration(months) {
  if (!months) return "";
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ");
}

/** "Dec 2024 – Present · 1 yr", or "" when the entry has no start date. */
export function describePeriod(item) {
  const start = formatMonth(item.start);
  if (!start) return "";
  const end = item.current || !item.end ? "Present" : formatMonth(item.end);
  const duration = formatDuration(monthsBetween(item.start, item.current ? null : item.end));
  return [`${start} – ${end}`, duration].filter(Boolean).join(" · ");
}

/** Merge consecutive entries from the same company into one group. */
export function groupByCompany(items) {
  const groups = [];
  items.forEach((item) => {
    const last = groups[groups.length - 1];
    if (last && last.company === item.company) {
      last.roles.push(item);
    } else {
      groups.push({
        key: item.id || item.company,
        company: item.company,
        companyUrl: item.companyUrl,
        logo: item.logo,
        location: item.location,
        roles: [item],
      });
    }
  });
  return groups;
}

export function initials(name = "") {
  return name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

/** Total time in industry, or 0 when any entry is missing a start date. */
export function totalMonths(items) {
  if (!items.length || items.some((i) => !parse(i.start))) return 0;
  return items.reduce(
    (sum, i) => sum + monthsBetween(i.start, i.current ? null : i.end),
    0
  );
}
