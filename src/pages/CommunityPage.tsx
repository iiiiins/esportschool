import { MessageSquare, Eye, TrendingUp } from 'lucide-react';

const CommunityPage = () => {
  const forumCategories = [
    { name: 'General Discussion', posts: 1234, color: 'bg-blue-500' },
    { name: 'Game Strategy', posts: 856, color: 'bg-gaming-purple' },
    { name: 'Team Formation', posts: 432, color: 'bg-gaming-pink' },
    { name: 'Career Advice', posts: 678, color: 'bg-gaming-cyan' },
    { name: 'Tournament Discussion', posts: 543, color: 'bg-gaming-orange' },
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Looking for League of Legends team members',
      author: 'ProGamer123',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50',
      replies: 24,
      views: 342,
      category: 'Team Formation',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Best practices for improving reaction time?',
      author: 'SpeedDemon',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50',
      replies: 18,
      views: 256,
      category: 'Game Strategy',
      time: '4 hours ago',
    },
    {
      id: 3,
      title: 'Tournament tips for first-time competitors',
      author: 'VeteranPlayer',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50',
      replies: 31,
      views: 489,
      category: 'Tournament Discussion',
      time: '6 hours ago',
    },
    {
      id: 4,
      title: 'How to transition from casual to competitive gaming',
      author: 'AimHigh',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
      replies: 45,
      views: 678,
      category: 'Career Advice',
      time: '1 day ago',
    },
  ];

  const topMembers = [
    { name: 'Alex "ProGamer" Chen', reputation: 2345, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50' },
    { name: 'Sarah "AimQueen" Johnson', reputation: 2120, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50' },
    { name: 'Mike "Strategy" Williams', reputation: 1987, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50' },
    { name: 'Emma "Speedrun" Garcia', reputation: 1756, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50' },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-gaming-purple to-gaming-pink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Hub</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Connect with fellow gamers, share strategies, find teammates, and grow together.
            Join discussions and build your esports network.
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-purple">12,456</div>
              <div className="text-gray-600">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-pink">3,742</div>
              <div className="text-gray-600">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-cyan">856</div>
              <div className="text-gray-600">Active Today</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-orange">234</div>
              <div className="text-gray-600">Teams Formed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forum Categories and Posts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Categories */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">Forum Categories</h2>
                <div className="space-y-3">
                  {forumCategories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span className="font-semibold text-gray-900">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.posts} posts</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">Recent Discussions</h2>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="p-4 border border-gray-200 rounded-lg hover:border-gaming-purple cursor-pointer transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={post.avatar}
                          alt={post.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-grow">
                          <h3 className="font-bold text-gray-900 hover:text-gaming-purple transition-colors mb-1">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="font-medium">{post.author}</span>
                            <span className="text-gaming-purple">{post.category}</span>
                            <span>{post.time}</span>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.replies} replies</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{post.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn-secondary w-full mt-4">View All Discussions</button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Create Post */}
              <div className="card bg-gradient-to-r from-gaming-purple to-gaming-pink text-white">
                <h3 className="text-xl font-bold mb-3">Join the Discussion</h3>
                <p className="mb-4 text-white/90">
                  Share your thoughts, ask questions, or start a new topic.
                </p>
                <button className="bg-white text-gaming-purple px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all w-full">
                  Create Post
                </button>
              </div>

              {/* Top Members */}
              <div className="card">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-gaming-purple" />
                  <h3 className="text-xl font-bold">Top Members</h3>
                </div>
                <div className="space-y-3">
                  {topMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="absolute -top-1 -left-1 bg-gaming-purple text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="font-semibold text-sm text-gray-900">{member.name}</div>
                        <div className="text-xs text-gray-500">{member.reputation} reputation</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Guidelines */}
              <div className="card bg-blue-50 border-2 border-blue-200">
                <h3 className="text-lg font-bold mb-2 text-blue-900">Community Guidelines</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Be respectful to all members</li>
                  <li>• No spam or self-promotion</li>
                  <li>• Stay on topic</li>
                  <li>• Help and support others</li>
                  <li>• Report inappropriate content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
