import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Code2 } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    gsap.from('.hero-text', {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out'
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <motion.div 
            className="inline-block mb-4 p-2 bg-primary-100 dark:bg-primary-900 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="w-8 h-8 text-primary-500" />
          </motion.div>

          <motion.h1 
            className="hero-text text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Prabhakaran S
          </motion.h1>
          
          <motion.div
            className="hero-text text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700 font-semibold">
              Freelance Developer
            </span>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Turning ideas into reality through code
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}