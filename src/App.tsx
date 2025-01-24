import React, { useState } from 'react';
import { Truck, Clock, CreditCard, Leaf, MapPin, Search, ShoppingBag, Shield, Phone, Package, Navigation } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CategoryCardProps {
  image: string;
  title: string;
}

function App() {
  const [location, setLocation] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Location Search */}
      <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <div className="absolute w-20 h-20 bg-green-200 rounded-full -top-10 -left-10 animate-pulse" />
        <div className="absolute w-32 h-32 bg-green-100 rounded-full -bottom-16 -right-16 animate-pulse delay-300" />

        <div className="px-8">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Your Groceries, <span className="text-green-500">Faster Than Ever!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Skip the waiting—get your essentials delivered in under 10 minutes!
              </p>

              {/* Enhanced Delivery Animation */}
        {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="animate-delivery">
            <div className="relative">
              <Truck className="w-16 h-16 text-green-500" />
              <Package className="w-8 h-8 text-green-400 absolute -right-2 -top-2 animate-float" />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div> */}

              {/* Enhanced Location Search */}
              <div className="max-w-xl mx-auto mb-12 relative">
                <div
                  className={`relative transition-all duration-300 ${
                    isSearchFocused ? 'transform scale-105' : ''
                  }`}
                >
                  <div className="relative flex items-center">
                    <div className="absolute left-4 w-8 h-8 flex items-center justify-center">
                      <div className={`relative ${isSearchFocused ? 'location-ring' : ''}`}>
                        <Navigation className={`w-5 h-5 ${isSearchFocused ? 'text-green-500' : 'text-gray-400'} transition-colors duration-300`} />
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Where should we deliver your groceries?"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      className={`w-full pl-14 pr-4 py-5 rounded-2xl border-2 ${
                        isSearchFocused
                          ? 'border-green-500 shadow-lg shadow-green-100'
                          : 'border-gray-200'
                      } focus:outline-none focus:border-green-500 transition-all duration-300`}
                    />
                    <button className="absolute right-3 bg-green-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      <span>Find</span>
                    </button>
                  </div>
                  {isSearchFocused && (
                    <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-[100]"> {/* Increased z-index */}
                      <div className="px-4 py-2 text-sm text-gray-500">
                        Popular locations
                      </div>
                      {['Mumbai Central', 'Bandra West', 'Andheri East', 'Powai'].map((suggestion) => (
                        <button
                          key={suggestion}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                          onClick={() => {
                            setLocation(suggestion);
                            setIsSearchFocused(false);
                          }}
                        >
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* this start button goes back */}
              <button className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transform transition hover:scale-105 shadow-lg z-[100]">
                🚀 Start Shopping Now
              </button>
              {/* <div className="mt-4 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src="https://i.imghippo.com/files/eaAO1208WwA.png"
                    alt="Delivery Vehicle"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>

      </div>

      {/* Features Grid */}
      <div className="py-20 bg-white">
        <div className="px-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Zepto?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Clock className="w-8 h-8 text-green-500" />}
                title="10-Minute Delivery"
                description="Lightning-fast delivery at your doorstep"
              />
              <FeatureCard
                icon={<Leaf className="w-8 h-8 text-green-500" />}
                title="Fresh Guaranteed"
                description="Hand-picked fresh produce, every time"
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-green-500" />}
                title="Best Prices"
                description="Competitive prices on all products"
              />
              <FeatureCard
                icon={<ShoppingBag className="w-8 h-8 text-green-500" />}
                title="Wide Selection"
                description="5000+ products to choose from"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gray-50">
        <div className="px-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fresh Produce Section */}
      <div className="py-20 bg-white">
        <div className="px-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Fresh, Fast, Fabulous</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Experience the convenience of instant grocery delivery with Zepto. We bring the freshest produce and your favorite brands right to your doorstep in minutes.
                </p>
                <ul className="space-y-4">
                  {[
                    'Wide selection of fresh produce',
                    'Quality guaranteed or money back',
                    'Contactless delivery available',
                    'Real-time order tracking',
                    'Professional delivery partners',
                    '24/7 customer support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh vegetables"
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div className="py-16 bg-green-50">
        <div className="px-8">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Download the Zepto App</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the full Zepto experience on your phone. Download our app for exclusive offers and faster checkout.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                  <Phone className="w-5 h-5" />
                  Get it on Android
                </button>
                <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                  <Phone className="w-5 h-5" />
                  Download on iOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8">
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Zepto</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-green-400">About Us</a></li>
                  <li><a href="#" className="hover:text-green-400">Careers</a></li>
                  <li><a href="#" className="hover:text-green-400">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Help</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-green-400">FAQs</a></li>
                  <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
                  <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-green-400">Fruits & Vegetables</a></li>
                  <li><a href="#" className="hover:text-green-400">Dairy & Breakfast</a></li>
                  <li><a href="#" className="hover:text-green-400">Snacks & Beverages</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-green-400">Facebook</a>
                  <a href="#" className="hover:text-green-400">Twitter</a>
                  <a href="#" className="hover:text-green-400">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2024 Zepto. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CategoryCard({ image, title }: CategoryCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h3 className="text-white font-semibold p-4 w-full text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    title: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Dairy & Breakfast",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Snacks & Beverages",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Household Essentials",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=500&q=80"
  }
];

export default App;