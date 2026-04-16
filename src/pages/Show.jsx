import posts from '../data/mockPosts.json';
import PostCard from '../components/PostCard';

export default function Show() {
  const showPosts = posts.filter(post => post.title && post.title.startsWith('Show HN'));

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Show HN</h1>
          <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-bold uppercase tracking-widest">
            Builders
          </span>
        </div>
        <p className="text-on-surface-variant font-medium text-lg">
          Discover what the community is building.
        </p>
      </header>

      {showPosts.length === 0 ? (
        <div className="p-12 text-center text-on-surface-variant">No projects to show currently.</div>
      ) : (
        showPosts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))
      )}
      
      {showPosts.length > 0 && (
        <div className="py-10 text-center">
          <button className="px-8 py-3 bg-surface-container-highest font-bold rounded-full text-on-surface hover:bg-outline-variant/30 transition-all active:scale-95">
            Discover More
          </button>
        </div>
      )}
    </div>
  );
}
