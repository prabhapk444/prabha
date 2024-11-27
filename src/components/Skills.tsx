import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Languages, Terminal } from 'lucide-react'; 
import { skills } from '../data/skills';

const iconMap = {
  Code2,
  Database,
  Languages,
  Terminal 
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

 
  const categories = ['Frontend', 'Backend', 'Programming Language', 'Database'];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((category, index) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => {
                      const Icon = iconMap[skill.icon as keyof typeof iconMap];
                      return (
                        <motion.div
                          key={skill.name}
                          className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex items-center space-x-4">
                            <Icon className="w-6 h-6 text-primary-500" />
                            <span className="text-gray-700 dark:text-gray-200">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
