import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Instagram } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      setFormData({ name: '', email: '', message: '' });
    },
    [formData]
  );

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Let's Collaborate and Connect
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-500" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:viperprabhakaran@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500"
                    aria-label="Send email to viperprabhakaran@gmail.com"
                  >
                    viperprabhakaran@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-500" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <a
                    href="tel:+916383786437"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500"
                    aria-label="Call phone number +91 6383786437"
                  >
                    +91 6383786437
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-500" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sedan Kinatru Street, Thiruthangal - 626130
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://github.com/prabhapk444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg hover:text-primary-500"
                  aria-label="Visit GitHub profile"
                >
                  <Github className="w-6 h-6 text-primary-500" />
                </a>
                <a
                  href="https://instagram.com/prabha_karan_444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg hover:text-primary-500"
                  aria-label="Visit Instagram profile"
                >
                  <Instagram className="w-6 h-6 text-primary-500" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" autoComplete='off'>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                  aria-required="true"
                  aria-label="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                  aria-required="true"
                  aria-label="Your Email Address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                  aria-required="true"
                  aria-label="Your Message"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
                aria-label="Send Message"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
