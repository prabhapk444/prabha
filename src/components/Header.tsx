import React, { useState, useCallback, lazy, Suspense } from 'react';
import { useTheme } from '../context/ThemeContext';

const Sun = lazy(() => import('lucide-react').then((module) => ({ default: module.Sun })));
const Moon = lazy(() => import('lucide-react').then((module) => ({ default: module.Moon })));
const Menu = lazy(() => import('lucide-react').then((module) => ({ default: module.Menu })));

const Header = React.memo(() => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleTheme = useCallback(() => toggleTheme(), [toggleTheme]);
  const handleMenuToggle = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Portfolio</h1>

          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {section}
              </a>
            ))}
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors motion-reduce:transition-none"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <Suspense fallback={<span>Loading...</span>}>
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </Suspense>
            </button>
          </div>

          <button
            onClick={handleMenuToggle}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring focus:ring-blue-500"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </Suspense>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {['About', 'Skills', 'Projects', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {section}
              </a>
            ))}
            <button
              onClick={handleToggleTheme}
              className="w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 mt-4 flex justify-center items-center motion-reduce:transition-none"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <Suspense fallback={<span>Loading...</span>}>
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </Suspense>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
});

export default Header;
