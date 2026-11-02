import React, { Component } from 'react'
import { init } from 'ityped'
import { motion } from 'framer-motion'

export default class BriefType extends Component {
  componentDidMount() {
    const myElement = document.querySelector('#myElement')
    init(myElement, { 
      showCursor: false,
      loop: true,
      typeSpeed: 100,
      backSpeed: 1,
      strings: [
        "Web & App Builder 🚀",
        "Database Savvy 💾",
        "Problem Solver 🧩",
        "UX Focused 🎨",
        "Debug Ninja 🐞",
        "Quick Learner ⚡"
      ]
    })
  }

  render() {
    return (
      <motion.div 
        className="mt-5 ms-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 theme-text"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
    
        <h3 
          id="myElement" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-600"
        >
        </h3>
      </motion.div>
    )
  }
}
