import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2, Users, Brain, Heart, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { esportsPillars, articles } from '../data/mockData';

const HomePage = () => {
  const pillarIcons: Record<string, React.ReactNode> = {
    Gamepad2: <Gamepad2 className="h-12 w-12" />,
    Users: <Users className="h-12 w-12" />,
    Brain: <Brain className="h-12 w-12" />,
    Heart: <Heart className="h-12 w-12" />,
    Lightbulb: <Lightbulb className="h-12 w-12" />,
    Target: <Target className="h-12 w-12" />,
    TrendingUp: <TrendingUp className="h-12 w-12" />,
  };

  return (
    <div className="w-full">
      {/* Hero CTA Section */}
      <section className="bg-gradient-to-r from-gaming-purple to-gaming-pink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Level Up Your Esports Career
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Join the leading platform for esports education. Learn from pro players,
              connect with coaches, and master the skills to succeed in competitive gaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses" className="bg-white text-gaming-purple px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center">
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/marketplace" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gaming-purple transition-all duration-300 inline-flex items-center justify-center">
                Find a Coach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-gaming-purple/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-gaming-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Structured Learning</h3>
              <p className="text-gray-600">
                Follow proven pathways designed by professional players and educators
                to accelerate your progress.
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-gaming-pink/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-gaming-pink" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Personalized Coaching</h3>
              <p className="text-gray-600">
                Connect with expert coaches who provide tailored guidance based on
                your goals and skill level.
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-gaming-cyan/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-gaming-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Join a vibrant community of learners, share experiences, and grow
                together in your esports journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Pillars of Esports */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">The 7 Pillars of Esports Excellence</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Our comprehensive approach covers every aspect of competitive gaming,
            ensuring you develop into a well-rounded player.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {esportsPillars.map((pillar) => (
              <div key={pillar.id} className="card hover:scale-105 transition-transform duration-300">
                <div className="text-gaming-purple mb-4">
                  {pillarIcons[pillar.icon]}
                </div>
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-gray-600 text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Latest Articles</h2>
            <Link to="/blog" className="text-gaming-purple hover:text-gaming-pink font-semibold inline-flex items-center">
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="card group cursor-pointer">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="text-sm text-gaming-purple font-semibold mb-2">
                  {article.category} • {article.readTime}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gaming-purple transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gaming-cyan to-gaming-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students already learning and growing with Esports Schools.
            Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-white text-gaming-purple px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/marketplace" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gaming-purple transition-all duration-300 inline-flex items-center justify-center">
              Book a Coach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
