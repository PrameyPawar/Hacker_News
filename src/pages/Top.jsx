import posts from '../data/mockPosts.json';
import PostCard from '../components/PostCard';

export default function Top() {
  const topPosts = [...posts].sort((a, b) => (b.points || 0) - (a.points || 0));

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <header className="mb-10 max-w-4xl mx-auto flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-on-surface mb-2">Top Stories</h1>
          <p className="text-on-surface-variant font-medium">Curated high-signal engineering and startup insights.</p>
        </div>
        <div className="flex gap-2 bg-surface-container rounded-full p-1 border border-outline-variant/10">
          <button className="px-4 py-1.5 text-xs font-bold rounded-full bg-surface-container-lowest shadow-sm">Relevant</button>
          <button className="px-4 py-1.5 text-xs font-medium text-on-surface-variant">Hot</button>
          <button className="px-4 py-1.5 text-xs font-medium text-on-surface-variant">Best</button>
        </div>
      </header>

      {topPosts.slice(0, 10).map((post, i) => (
        <PostCard key={post.id} post={post} index={i} />
      ))}
      
      <div className="py-10 text-center">
        <button className="px-8 py-3 bg-surface-container-highest font-bold rounded-full text-on-surface hover:bg-outline-variant/30 transition-all active:scale-95">
          Load More Stories
        </button>
      </div>
    </div>
  );
}
