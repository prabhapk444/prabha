import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Work Experience
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Timeline Line */}
            <div className="absolute hidden md:block left-1/2 -translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                
                

             
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                      {exp.duration}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-primary-500 mt-1.5">•</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
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
