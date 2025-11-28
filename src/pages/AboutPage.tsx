import { Target, Heart, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Former pro player with 10+ years in competitive gaming.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Education',
      bio: 'Educator passionate about structured esports learning.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
    },
    {
      name: 'Mike Williams',
      role: 'Community Director',
      bio: 'Building connections and fostering growth in esports.',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300',
    },
    {
      name: 'Emma Garcia',
      role: 'Head Coach',
      bio: 'Developing the next generation of esports champions.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-gaming-purple to-gaming-pink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Esports Schools</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're on a mission to empower the next generation of esports professionals
            through world-class education and community support.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Esports Schools was founded in 2020 by a group of passionate gamers, educators, and
              industry professionals who saw a critical need for structured, high-quality esports
              education. We recognized that while competitive gaming was exploding in popularity,
              young players lacked access to the resources, coaching, and community support needed
              to reach their full potential.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What started as a small coaching platform has grown into a comprehensive learning
              ecosystem serving thousands of students worldwide. We've partnered with professional
              teams, tournament organizers, and educational institutions to create pathways for
              aspiring esports professionals.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Esports Schools stands as a leading platform for esports education, offering
              courses, coaching, community forums, and career resources. Our mission remains the
              same: to help every student unlock their potential and succeed in the exciting world
              of competitive gaming.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-gaming-purple/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-gaming-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in everything we do, from course content
                to community support.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-gaming-pink/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gaming-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-600">
                Our love for gaming drives us to create the best possible learning experience
                for our community.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-gaming-cyan/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gaming-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in the power of connection and collaboration to help everyone grow
                and succeed together.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-gaming-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gaming-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We're committed to honesty, transparency, and doing what's right for our
                students and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gaming-purple/20 group-hover:border-gaming-purple transition-colors"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gaming-purple font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-gaming-purple to-gaming-pink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">12,000+</div>
              <div className="text-white/80">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-white/80">Expert Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80">Comprehensive Courses</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-white/80">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Become part of a thriving community of learners, coaches, and esports enthusiasts.
            Start your journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="btn-primary">
              Browse Courses
            </Link>
            <Link to="/community" className="btn-secondary">
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
