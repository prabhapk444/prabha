import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.degree}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {edu.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}