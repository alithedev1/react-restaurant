import React, { useState, useMemo } from 'react';
import { ShoppingCart, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  section: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    title: 'Starters',
    items: [
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with black truffle and mozzarella',
        price: '$14.00'
      },
      {
        name: 'Tuna Tartare',
        description: 'Fresh tuna with avocado, citrus, and wasabi aioli',
        price: '$18.00'
      },
      {
        name: 'Wild Mushroom Soup',
        description: 'Creamy soup with forest mushrooms and herbs',
        price: '$12.00'
      }
    ]
  },
  {
    title: 'Main Courses',
    items: [
      {
        name: 'Herb-Crusted Halibut',
        description: 'Fresh halibut with herb crust, seasonal vegetables',
        price: '$34.00'
      },
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Premium beef with truffle sauce and potato puree',
        price: '$48.00'
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Creamy risotto with seasonal mushrooms and parmesan',
        price: '$26.00'
      }
    ]
  },
  {
    title: 'Desserts',
    items: [
      {
        name: 'Chocolate Soufflé',
        description: 'Warm chocolate soufflé with vanilla ice cream',
        price: '$12.00'
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla bean crème brûlée',
        price: '$10.00'
      },
      {
        name: 'Seasonal Fruit Tart',
        description: 'Buttery pastry with seasonal fruits and cream',
        price: '$11.00'
      }
    ]
  }
];

// Flatten menu data and add section information
const allMenuItems: MenuItem[] = menuData.flatMap(section =>
  section.items.map(item => ({
    ...item,
    section: section.title,
  }))
);

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $15', value: 'under15' },
  { label: '$15 - $25', value: '15-25' },
  { label: 'Over $25', value: 'over25' },
];

const Menu = () => {
  const { state, dispatch } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    dispatch({ type: 'ADD_ITEM', payload: { name: item.name, price: item.price } });
  };

  const filteredAndSortedItems = useMemo(() => {
    let filtered = allMenuItems;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    // Section filter
    if (selectedSection !== 'all') {
      filtered = filtered.filter(item => item.section === selectedSection);
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      const price = (item: MenuItem) => parseFloat(item.price.replace('$', ''));
      filtered = filtered.filter(item => {
        const itemPrice = price(item);
        switch (selectedPriceRange) {
          case 'under15':
            return itemPrice < 15;
          case '15-25':
            return itemPrice >= 15 && itemPrice <= 25;
          case 'over25':
            return itemPrice > 25;
          default:
            return true;
        }
      });
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        return [...filtered].sort(
          (a, b) =>
            parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
        );
      case 'price-desc':
        return [...filtered].sort(
          (a, b) =>
            parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
        );
      case 'name-asc':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  }, [searchQuery, selectedSection, selectedPriceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-primary">Our Menu</h1>
        <Link
          to="/checkout"
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
        >
          <ShoppingCart size={20} />
          <span>Cart ({state.items.reduce((acc, item) => acc + item.quantity, 0)})</span>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="sm:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            <SlidersHorizontal size={20} />
            Filters
          </button>

          <div className={`space-y-4 sm:space-y-0 sm:flex sm:gap-4 ${isFilterOpen ? 'block' : 'hidden sm:flex'}`}>
            {/* Section Filter */}
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-200 rounded focus:ring-primary focus:border-primary"
            >
              <option value="all">All Sections</option>
              {menuData.map((section) => (
                <option key={section.title} value={section.title}>
                  {section.title}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-200 rounded focus:ring-primary focus:border-primary"
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-200 rounded focus:ring-primary focus:border-primary"
            >
              <option value="default">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedItems.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            No items found matching your criteria
          </div>
        ) : (
          filteredAndSortedItems.map((item) => (
            <div
              key={item.name}
              className="bg-white p-6 border border-primary/10 shadow-sm hover:border-primary/20 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-primary">{item.name}</h3>
                <span className="text-lg font-medium text-primary">{item.price}</span>
              </div>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-sm text-gray-500 mb-4">{item.section}</p>
              <button
                onClick={() => addToCart(item)}
                className="w-full bg-primary/10 text-primary py-2 hover:bg-primary/20 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;