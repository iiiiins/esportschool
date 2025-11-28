import { Gamepad2, Trophy, Users, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatIsEsportsPage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-gaming-purple to-gaming-pink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">What is Esports?</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the exciting world of competitive gaming and how it's transforming
            entertainment, education, and career opportunities worldwide.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong className="text-gaming-purple">Esports</strong>, short for electronic sports, refers to competitive video gaming
              at a professional or semi-professional level. Players compete individually or in teams
              across various game genres, from first-person shooters to strategy games, battling for
              prizes, recognition, and glory.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What started as casual gaming competitions has evolved into a multi-billion dollar
              industry with millions of fans worldwide, professional leagues, sponsorships, and
              even college scholarships. Esports is now recognized as a legitimate career path
              and a form of mainstream entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* Key Aspects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Key Aspects of Esports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-gaming-purple/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-gaming-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Gaming</h3>
              <p className="text-gray-600">
                Players compete at the highest levels, mastering game mechanics, strategies,
                and teamwork to outplay opponents.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-gaming-pink/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-gaming-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tournaments & Leagues</h3>
              <p className="text-gray-600">
                Organized competitions ranging from local events to international championships
                with multi-million dollar prize pools.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-gaming-cyan/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gaming-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Teams</h3>
              <p className="text-gray-600">
                Organizations that recruit, train, and manage professional players, complete
                with coaches, analysts, and support staff.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-gaming-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-gaming-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Streaming & Content</h3>
              <p className="text-gray-600">
                Live broadcasts and content creation on platforms like Twitch and YouTube,
                building massive fan followings.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Education & Training</h3>
              <p className="text-gray-600">
                Structured learning programs, coaching services, and academic institutions
                offering esports scholarships and degrees.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-green-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Opportunities</h3>
              <p className="text-gray-600">
                Diverse career paths including pro player, coach, analyst, caster, event
                organizer, and content creator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Popular Esports Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'League of Legends', genre: 'MOBA' },
              { name: 'Counter-Strike 2', genre: 'FPS' },
              { name: 'Dota 2', genre: 'MOBA' },
              { name: 'Valorant', genre: 'FPS' },
              { name: 'Fortnite', genre: 'Battle Royale' },
              { name: 'Overwatch 2', genre: 'Team Shooter' },
              { name: 'Rocket League', genre: 'Sports' },
              { name: 'Apex Legends', genre: 'Battle Royale' },
            ].map((game, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-lg mb-1">{game.name}</h3>
                <p className="text-gaming-purple text-sm font-semibold">{game.genre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-gradient-to-r from-gaming-purple to-gaming-pink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Esports by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$1.8B+</div>
              <div className="text-white/80">Global Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">532M</div>
              <div className="text-white/80">Global Audience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <div className="text-white/80">Professional Players</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-white/80">College Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Esports Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you want to compete professionally, coach others, or build a career in
            the industry, Esports Schools can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="btn-primary">
              Explore Courses
            </Link>
            <Link to="/marketplace" className="btn-secondary">
              Find a Coach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsEsportsPage;
