import { Link } from 'react-router-dom';

export default function PostCard({ post, index }) {
  // Use index to calculate animation delay
  const delay = Math.min(index * 75, 500); // max delay 500ms
  
  return (
    <article 
      className="group bg-surface-container-lowest rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-outline-variant/30 flex gap-6 opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center gap-1 min-w-[40px]">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-primary hover:bg-primary-fixed transition-colors active:animate-pop group/vote">
          <span className="material-symbols-outlined group-hover/vote:-translate-y-0.5 transition-transform">expand_less</span>
        </button>
        <span className="text-lg font-bold text-on-surface">{post.points || 0}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] uppercase tracking-widest font-bold text-tertiary">
            {post.type === 'job' ? 'hiring' : (post.type || 'story')}
          </span>
          {post.domain && (
            <>
              <span className="text-xs text-on-surface-variant opacity-60">•</span>
              <span className="text-xs text-on-surface-variant font-medium">{post.domain}</span>
            </>
          )}
        </div>
        <h2 className="text-xl font-bold tracking-tight text-on-surface leading-snug mb-3 group-hover:text-primary transition-colors">
          <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center text-[10px] text-stone-600 font-bold overflow-hidden">
               {post.by ? post.by[0].toUpperCase() : 'U'}
            </div>
            <Link to={`/user/${post.by}`} className="text-xs font-bold text-on-surface hover:text-primary transition-colors">
              {post.by}
            </Link>
          </div>
          <span className="text-xs text-on-surface-variant">{post.time || '1 hour ago'}</span>
          {post.type !== 'job' && (
            <Link to={`/item/${post.id}`} className="flex items-center gap-1 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">chat_bubble</span>
              {post.descendants || 0} comments
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
