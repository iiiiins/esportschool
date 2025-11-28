import { Calendar, User, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const BlogPage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-gaming-purple to-gaming-pink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Esports Blog</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Insights, tips, and stories from the esports community. Learn from experts and fellow gamers.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="card group cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full md:w-64 h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gaming-purple font-semibold">
                          {post.tags[0]}
                        </span>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-gaming-purple transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gaming-purple hover:text-white transition-colors cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Load More */}
              <div className="text-center">
                <button className="btn-secondary">Load More Posts</button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Subscribe */}
              <div className="card bg-gradient-to-r from-gaming-purple to-gaming-pink text-white">
                <h3 className="text-xl font-bold mb-3">Subscribe to Our Blog</h3>
                <p className="mb-4 text-white/90 text-sm">
                  Get the latest articles and insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg mb-3 text-gray-900"
                />
                <button className="bg-white text-gaming-purple px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all w-full">
                  Subscribe
                </button>
              </div>

              {/* Popular Tags */}
              <div className="card">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-gaming-purple" />
                  <h3 className="text-xl font-bold">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Tips', 'Strategy', 'Career', 'Health', 'Coaching', 'Tournaments', 'Mobile Gaming', 'Team Building'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gaming-purple hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                      <h4 className="font-semibold text-sm mb-1 group-hover:text-gaming-purple transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
