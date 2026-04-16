import { Link } from 'react-router-dom';
import posts from '../data/mockPosts.json';
import PostCard from '../components/PostCard';

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tighter text-on-background mb-2">Today's Selection</h1>
          <p className="text-on-surface-variant font-medium">The most impactful stories from the community, curated for readability.</p>
        </header>

        <div className="space-y-4">
          {posts.slice(0, 5).map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="py-12 flex justify-center">
          <button className="px-8 py-4 bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold rounded-full transition-all active:scale-95 shadow-sm flex items-center gap-2">
            Load More Stories
            <span className="material-symbols-outlined" data-icon="arrow_downward">arrow_downward</span>
          </button>
        </div>
      </div>
      
      <aside className="hidden xl:block w-80 pl-12 border-l border-outline-variant/15 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <section className="mb-10">
          <h3 className="text-[0.625rem] font-black text-on-surface-variant/60 uppercase tracking-[0.2em] mb-4">Trending Tags</h3>
          <div className="flex flex-wrap gap-2">
            {['#rust', '#ai', '#spacex', '#web3', '#cybersecurity'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-outline-variant/20 rounded-full text-xs font-bold text-on-surface hover:border-primary cursor-pointer">{tag}</span>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-2xl bg-primary-fixed text-on-primary-fixed mb-8">
          <h4 className="font-black text-lg tracking-tighter mb-2 leading-none">Curator Pro</h4>
          <p className="text-sm font-medium mb-4 opacity-90">Personalized feed digests and advanced search filters for power readers.</p>
          <button className="w-full py-2 bg-on-primary-fixed text-primary-fixed rounded-lg font-bold text-sm tracking-tight hover:opacity-90">Upgrade Now</button>
        </section>

        <section className="p-6 rounded-2xl bg-white border border-outline-variant/15 shadow-sm">
          <h3 className="text-[0.625rem] font-black text-on-surface-variant/60 uppercase tracking-[0.2em] mb-4">Job Board</h3>
          <div className="space-y-4">
            <div className="group cursor-pointer">
              <p className="text-sm font-bold group-hover:text-primary transition-colors">Senior Product Designer</p>
              <p className="text-xs text-on-surface-variant">Stripe • Remote</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-sm font-bold group-hover:text-primary transition-colors">Distributed Systems Engineer</p>
              <p className="text-xs text-on-surface-variant">Cloudflare • Austin</p>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
}
