import { useState } from 'react';
import { Star, Clock, Languages, Filter } from 'lucide-react';
import { coaches } from '../data/mockData';

const StaffMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('All');

  const categories = ['All', 'MOBA', 'FPS', 'Strategy', 'Battle Royale', 'Team Shooter', 'Mobile MOBA'];
  const priceRanges = ['All', '$0-$40', '$41-$50', '$51+'];

  const filteredCoaches = coaches.filter((coach) => {
    const categoryMatch = selectedCategory === 'All' || coach.category === selectedCategory;

    let priceMatch = true;
    if (priceRange === '$0-$40') priceMatch = coach.hourlyRate <= 40;
    else if (priceRange === '$41-$50') priceMatch = coach.hourlyRate > 40 && coach.hourlyRate <= 50;
    else if (priceRange === '$51+') priceMatch = coach.hourlyRate > 50;

    return categoryMatch && priceMatch;
  });

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-gaming-purple to-gaming-pink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Staff Marketplace</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Find expert coaches and staff members to help you reach your esports goals.
            Filter by game, price, and rating to find your perfect match.
          </p>
        </div>
      </section>

      {/* Filters and Coaches */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-gaming-purple" />
              <h2 className="text-xl font-bold">Filters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-gaming-purple text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price Range (per hour)
                </label>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setPriceRange(range)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        priceRange === range
                          ? 'bg-gaming-purple text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gaming-purple">{filteredCoaches.length}</span> coaches
            </p>
          </div>

          {/* Coach Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCoaches.map((coach) => (
              <div key={coach.id} className="card hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Coach Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={coach.avatar}
                      alt={coach.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-gaming-purple/20"
                    />
                  </div>

                  {/* Coach Info */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{coach.name}</h3>
                        <p className="text-gaming-purple font-semibold">{coach.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          ${coach.hourlyRate}
                          <span className="text-sm text-gray-500 font-normal">/hr</span>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 font-bold text-gray-900">{coach.rating}</span>
                      </div>
                      <span className="text-gray-500">({coach.reviews} reviews)</span>
                    </div>

                    {/* Specializations */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2">
                        {coach.specialization.map((spec, index) => (
                          <span
                            key={index}
                            className="bg-gaming-purple/10 text-gaming-purple px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 mb-4 text-sm">{coach.bio}</p>

                    {/* Additional Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Languages className="h-4 w-4 text-gaming-purple" />
                        <span>{coach.languages.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-gaming-purple" />
                        <span>{coach.availability}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="btn-primary w-full">
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCoaches.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No coaches found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default StaffMarketplace;
