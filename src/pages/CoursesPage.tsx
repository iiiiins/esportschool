import { useState } from 'react';
import { Star, Users, Clock, Filter } from 'lucide-react';
import { courses } from '../data/mockData';

const CoursesPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const categories = ['All', 'General', 'MOBA', 'FPS', 'Management', 'Psychology', 'Content'];

  const filteredCourses = courses.filter((course) => {
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    return levelMatch && categoryMatch;
  });

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-gaming-purple to-gaming-pink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Esports Courses</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive courses designed to take your skills to the next level.
            Learn from industry experts and gain practical knowledge.
          </p>
        </div>
      </section>

      {/* Filters and Courses */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-gaming-purple" />
              <h2 className="text-xl font-bold">Filters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Level Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Skill Level
                </label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedLevel === level
                          ? 'bg-gaming-purple text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

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
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gaming-purple">{filteredCourses.length}</span> courses
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card group cursor-pointer hover:scale-105 transition-transform duration-300">
                {/* Course Thumbnail */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-bold text-gaming-purple">
                    ${course.price}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </div>
                </div>

                {/* Course Info */}
                <div>
                  <div className="text-sm text-gaming-purple font-semibold mb-2">
                    {course.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gaming-purple transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {course.description}
                  </p>

                  {/* Instructor */}
                  <div className="text-sm text-gray-700 mb-3">
                    By <span className="font-semibold">{course.instructor}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <button className="btn-primary w-full">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No courses found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
