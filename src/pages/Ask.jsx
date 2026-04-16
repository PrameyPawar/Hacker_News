import posts from '../data/mockPosts.json';
import PostCard from '../components/PostCard';

export default function Ask() {
  const askPosts = posts.filter(post => post.title && post.title.startsWith('Ask HN'));

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Ask HN</h1>
          <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-bold uppercase tracking-widest">
            Discussions
          </span>
        </div>
        <p className="text-on-surface-variant font-medium text-lg">
          Questions, advice, and deep discussions from the community.
        </p>
      </header>

      {askPosts.length === 0 ? (
        <div className="p-12 text-center text-on-surface-variant">No active discussions currently.</div>
      ) : (
        askPosts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))
      )}
      
      {askPosts.length > 0 && (
        <div className="py-10 text-center">
          <button className="px-8 py-3 bg-surface-container-highest font-bold rounded-full text-on-surface hover:bg-outline-variant/30 transition-all active:scale-95">
            Load More Questions
          </button>
        </div>
      )}
    </div>
  );
}
