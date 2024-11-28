
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imageSrc from '/public/2024-11-13-15-40-35-024.jpeg';


export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src={imageSrc}
                alt="Prabhakaran S"
                loading='lazy'
                className="rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-lg bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              S Prabhakaran, B.Sc., M.C.A.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                General Manager at Thrive Boost, passionate about creating innovative solutions
                that make a difference. With expertise in full-stack development and a keen eye
                for design, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you'll find me exploring new technologies, playing cricket,
                or enjoying music. I believe in continuous learning and staying updated with
                the latest industry trends.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}