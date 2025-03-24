import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Search, Users, MessageCircle, ChevronDown, Shield, Gift, Crown, Bell, Menu, Mail, Facebook, Twitter, Instagram, Youtube, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from './components/ui/button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Find Matches", href: "#" },
    { label: "Success Stories", href: "#" },
    { label: "Premium Plans", href: "#" },
    { label: "Help", href: "#" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-rose-600"
            >
              <Heart className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">HeartMatch</span>
            </motion.div>
            <div className="hidden md:flex ml-10 space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-600 hover:text-rose-600 px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="ghost">Login</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button>Register Free</Button>
              </motion.div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-rose-600"
                  >
                    {item.label}
                  </a>
                ))}
                <Button variant="ghost" className="w-full text-left">Login</Button>
                <Button className="w-full">Register Free</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function RegistrationForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Start Your Journey Today</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">I am a</label>
          <div className="mt-1 flex space-x-4">
            <Button variant="outline" className="flex-1">Man</Button>
            <Button variant="outline" className="flex-1">Woman</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Looking for</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500">
              <option>Woman</option>
              <option>Man</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
        </div>
        <Button className="w-full">Create Free Profile</Button>
      </form>
    </motion.div>
  );
}

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-rose-50 to-rose-100 pt-32 pb-20 bg-[url('hero.png')] bg-cover bg-center">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-rose-500 sm:text-5xl md:text-6xl"
        >
          Find Your Perfect Match
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          Join millions of happy couples who found their soulmate with HeartMatch. Start your journey to lasting love today.
        </motion.p>
        <RegistrationForm />
      </div>
    </motion.div>
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
    >
      <ChevronDown className="w-6 h-6 text-rose-600" />
    </motion.div>
  </div>
  
  );
}

function Features() {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Matching",
      description: "Our AI-powered matching system analyzes compatibility based on interests, values, and lifestyle"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Profiles",
      description: "Every profile is manually verified to ensure a safe and authentic dating experience"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Secure Chat",
      description: "Connect safely with potential matches through our encrypted messaging system"
    },
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Premium Features",
      description: "Unlock advanced features like video calls, profile highlights, and priority matching"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Notifications",
      description: "Get real-time alerts about matches, messages, and profile visitors"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Special Events",
      description: "Join exclusive online and offline events to meet compatible matches"
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Why Choose HeartMatch?</h2>
          <p className="mt-4 text-lg text-gray-500">Discover the features that make us the perfect platform for finding true love</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="text-rose-600 mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SuccessStories() {
  const stories = [
    {
      names: "Sarah & John",
      location: "New York, USA",
      story: "We found each other on HeartMatch and got married within a year. It was meant to be!",
      image: "story1-400x300.png?wedding&sig=1"
    },
    {
      names: "Maria & David",
      location: "London, UK",
      story: "After countless failed dates, HeartMatch's matching system helped us find true love.",
      image: "story2-400x300.png?couple&sig=2"
    },
    {
      names: "Priya & Raj",
      location: "Mumbai, India",
      story: "Thanks to HeartMatch, we found our perfect match despite living in different cities.",
      image: "story3-400x300.png?wedding&sig=3"
    }
  ];

  return (
    <div className="bg-rose-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600">Real couples who found their perfect match on HeartMatch</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                src={story.image}
                alt="Success Story"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="text-lg font-semibold mb-1"
              >
                {story.names}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 + index * 0.2 }}
                className="text-sm text-gray-500 mb-2"
              >
                {story.location}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="text-gray-600"
              >
                "{story.story}"
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  const blogs = [
    {
      title: "Finding Love in the Digital Age",
      excerpt: "Discover how modern technology is revolutionizing the way we find and maintain relationships.",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: "blog1-600x400.png?dating&sig=1",
      author: "Emma Wilson"
    },
    {
      title: "5 Tips for a Successful First Date",
      excerpt: "Expert advice on making your first meeting memorable and meaningful.",
      date: "Mar 12, 2024",
      readTime: "4 min read",
      image: "blog2-600x400.png?coffee&sig=2",
      author: "James Miller"
    },
    {
      title: "Understanding Compatibility",
      excerpt: "Learn about the key factors that contribute to long-lasting relationships.",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      image: "blog3-600x400.png?couple&sig=3",
      author: "Dr. Sarah Chen"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Relationship Insights</h2>
          <p className="mt-4 text-lg text-gray-500">Expert advice and tips for your journey to finding love</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{blog.date}</span>
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-500">{blog.author}</span>
                  </div>
                  <Button variant="ghost" className="text-rose-600 hover:text-rose-700">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "HeartMatch's unique matching algorithm helped me find my soulmate. We're getting married next month!",
      author: "Jessica, 28",
      location: "San Francisco",
      image: "tesimonial1-100x100.png?woman&sig=1"
    },
    {
      quote: "The quality of matches and the security features made me feel safe throughout my journey.",
      author: "Michael, 34",
      location: "Toronto",
      image: "testimonial2-100x100.png?man&sig=2"
    },
    {
      quote: "I appreciate how HeartMatch focuses on meaningful connections rather than superficial matches.",
      author: "Sophia, 31",
      location: "London",
      image: "testimonial3-100x100.png?woman&sig=3"
    }
  ];

  return (
    <div className="py-16 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">What Our Members Say</h2>
          <p className="mt-4 text-lg text-gray-600">Real stories from real people who found love on HeartMatch</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsletterSection() {
  return (
    <div className="py-16 bg-rose-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Mail className="h-12 w-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Get expert relationship advice, dating tips, and special offers delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border-2 border-rose-400 focus:outline-none focus:border-white"
              />
              <Button className="bg-white text-rose-600 hover:bg-rose-50">
                Subscribe
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center text-white mb-4">
              <Heart className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">HeartMatch</span>
            </div>
            <p className="text-sm text-gray-400">
              Bringing hearts together since 2024. Your trusted platform for finding meaningful relationships.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Download our app:
            </p>
            <div className="flex space-x-4 mt-2">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                App Store
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 HeartMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <AnimatePresence>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <SuccessStories />
                <BlogSection />
                <TestimonialsSection />
                <NewsletterSection />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;