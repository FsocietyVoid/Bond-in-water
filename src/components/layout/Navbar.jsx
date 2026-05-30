import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navLinks, specialtyLinks, brandInfo } from '../../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="/" className="text-white font-bold text-2xl tracking-[0.2em] uppercase">
          {brandInfo.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-300 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center text-neutral-300 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300 py-2">
              Habitats <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-neutral-900 border border-white/10 shadow-2xl py-4 flex flex-col"
                >
                  {specialtyLinks.map((subLink) => (
                    <a
                      key={subLink.name}
                      href={subLink.href}
                      className="px-6 py-3 text-neutral-400 hover:text-white hover:bg-white/5 text-xs tracking-widest uppercase transition-all duration-300"
                    >
                      {subLink.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href={navLinks.find(link => link.name === 'Contact')?.href}
            className="text-neutral-300 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-neutral-950 border-t border-white/10 flex flex-col items-center pt-12 space-y-6 overflow-hidden"
          >
            {[...navLinks, ...specialtyLinks].map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-xl tracking-widest uppercase"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
