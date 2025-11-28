import { Calendar, User } from 'lucide-react';
import { news } from '../data/mockData';

const NewsPage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-gaming-purple to-gaming-pink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Esports News</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Stay up to date with the latest news, tournaments, and developments in the esports industry.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured News */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured</h2>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <img
                  src={news[0].thumbnail}
                  alt={news[0].title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="p-8">
                  <div className="text-sm text-gaming-purple font-semibold mb-3">
                    {news[0].category}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 hover:text-gaming-purple cursor-pointer transition-colors">
                    {news[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {news[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{news[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(news[0].date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className="btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <div key={item.id} className="card group cursor-pointer">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="text-sm text-gaming-purple font-semibold mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gaming-purple transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">Load More News</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
