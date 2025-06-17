import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X,  ChevronDown, ChevronUp,} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mobileMenuVariants, navItemVariants } from '../utils/framerVariants';
import { navList } from '../data/homeData';
import logo from '../assets/tbc-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setOpenSubmenu(null);

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollToId: href } });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // window.location.href = href; 
      navigate(href);
    }
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="" className="md:h-12 h-8 mr-2" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navList.map((item) => (
              <div key={item.name} className="relative group">
                <motion.a
                  href={item.href}
                  onClick={(e) => item.submenu ? toggleSubmenu(item.name) : handleAnchorClick(e, item.href)}
                  className={`flex items-center space-x-1 hover:text-sky-800 transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.submenu && (
                    <span className="ml-1">
                      {openSubmenu === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  )}
                </motion.a>

                {item.submenu && (
                  <AnimatePresence>
                    {openSubmenu === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 md:w-56 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => handleAnchorClick(e, subItem.href)}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-sky-800 transition-colors duration-200 flex items-center space-x-2"
                          >
                            {subItem.icon}
                            <span>{subItem.name}</span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <motion.a
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${isScrolled ? 'text-sky-800' : 'text-white'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute top-16 left-4 right-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <motion.div className="flex flex-col space-y-4">
                {navList.map((item, i) => (
                  <div key={item.name}>
                    <motion.a
                      href={item.href}
                      onClick={(e) => item.submenu ? toggleSubmenu(item.name) : handleAnchorClick(e, item.href)}
                      className="flex items-center justify-between space-x-2 text-gray-700 hover:text-sky-800 transition-colors duration-300 py-2"
                      custom={i}
                      initial="closed"
                      animate="open"
                      variants={navItemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      {item.submenu && (
                        <span>
                          {openSubmenu === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </span>
                      )}
                    </motion.a>

                    {item.submenu && openSubmenu === item.name && (
                      <motion.div
                        className="ml-6 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.submenu.map((subItem, j) => (
                          <motion.a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => handleAnchorClick(e, subItem.href)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-sky-800 transition-colors duration-200 py-1 pl-4"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.05 }}
                          >
                            {subItem.icon}
                            <span>{subItem.name}</span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;