import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/mockPosts.json';
import PostCard from '../components/PostCard';

export default function Profile() {
  const { id } = useParams();
  const username = id || 'alex_medici';
  
  const userPosts = posts.filter(post => post.by === username);
  // Optional: add a mockup user state since we don't have user endpoints
  const userStats = {
    joined: '4 years ago',
    karma: 12450,
    title: 'Senior Engine Developer',
    about: 'Architect behind the core Curator rendering engine. Focused on delivering extreme performance and editorial-grade typography on the web. I spend most of my time optimizing layout paint cycles and contributing to open-source graphics libraries.',
  };

  const [activeTab, setActiveTab] = useState('Submissions');

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {/* Profile Header */}
      <section className="mb-12 animate-fade-in">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-xl overflow-hidden shadow-2xl ring-4 ring-surface-container-lowest">
              <img 
                alt={`${username} profile`} 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwsRpZIg4KfY5M2ryHvH3I_OLUHeBg3osmybeolfxY-2Sb1F6yUir5sTmnaGdTwhD_fBrmlgc7AJjt93dXp8V2fHsjLs7d4TxaSy4QkUhyEs-9n-B5YHiVwtevqtZVFAA4fcYxN3voqdaruv1z_GGPnpAxikwxT_Gpa-QG18w7uJJ_NuZ_vt7eGVPmkb2nm4U6qFgC9EBsRMcGwXEQ8su7eTh1zwG50yMk42hhdZDAV2HqRpWR8ee990Y5XX3-n11o48ad1VgjFS4" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
              Senior
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-2">
              <h2 className="text-3xl font-black text-on-surface tracking-tighter">{username}</h2>
              <span className="text-on-surface-variant font-medium text-sm px-3 py-1 bg-surface-container-high rounded-full">{userStats.title}</span>
            </div>
            <div className="flex gap-6 text-sm text-on-surface-variant mb-6">
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">calendar_today</span> Joined: {userStats.joined}</span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> Karma: {userStats.karma}</span>
            </div>
            <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">About</h3>
              <p className="text-sm text-on-surface leading-relaxed max-w-2xl">
                {userStats.about}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <nav className="flex gap-1 mb-8 border-b border-surface-container-high overflow-x-auto">
        {['Submissions', 'Comments', 'Favorites'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === tab ? 'font-bold text-primary border-b-2 border-primary shadow-[0_4px_12px_-4px_rgba(163,62,0,0.3)]' : 'font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'}`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Feed Content */}
      <div className="grid grid-cols-1 gap-4">
        {userPosts.length === 0 ? (
          <div className="p-12 text-center text-on-surface-variant bg-surface-container-lowest rounded-xl">
            No {activeTab.toLowerCase()} to display.
          </div>
        ) : (
          userPosts.map((post, i) => (
             <PostCard key={post.id} post={post} index={i} />
          ))
        )}
      </div>
      
      {userPosts.length > 0 && (
        <div className="mt-12 text-center">
          <button className="px-8 py-3 text-sm font-bold text-on-surface border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-colors">
            Load more {activeTab.toLowerCase()}
          </button>
        </div>
      )}
    </div>
  );
}
