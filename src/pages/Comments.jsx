import { useParams, Link } from 'react-router-dom';
import posts from '../data/mockPosts.json';
import commentsData from '../data/mockComments.json';
import CommentThread from '../components/CommentThread';

export default function Comments() {
  const { id } = useParams();
  
  // Find post or pick the first one as default if not found
  let post = posts.find(p => p.id === parseInt(id));
  if (!post) post = posts[0];

  const threadComments = commentsData[post.id] || commentsData["1"] || [];

  return (
    <main className="max-w-4xl mx-auto space-y-12">
      {/* Header Section: Thread Identity */}
      <header className="animate-slide-up" style={{ animationDelay: '50ms' }}>
        <div className="flex items-start gap-6 group">
          <div className="flex flex-col items-center gap-1 mt-1">
            <button className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all active:animate-pop duration-200">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_drop_up</span>
            </button>
            <span className="text-sm font-bold text-on-surface-variant">{post.points || 0}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                {post.type || 'Story'}
              </span>
              {post.domain && <a className="text-tertiary hover:underline text-sm font-medium" href={post.url} target="_blank" rel="noopener noreferrer">{post.domain}</a>}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-background mb-4 leading-[1.15]">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{post.title}</a>
            </h1>
            <div className="flex items-center gap-4 text-sm text-on-surface-variant overflow-x-auto whitespace-nowrap pb-1">
              <Link to={`/user/${post.by}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xs">person</span> {post.by}
              </Link>
              <span>•</span>
              <span>{post.time || '4 hours ago'}</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-bold text-primary">
                <span className="material-symbols-outlined text-xs">chat_bubble</span> {post.descendants || threadComments.length} comments
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* New Comment Input */}
      <div className="bg-surface-container-low p-6 rounded-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
        <textarea 
          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[120px] placeholder:text-on-surface-variant/50 transition-all font-sans resize-y" 
          placeholder="What are your thoughts?"
        ></textarea>
        <div className="flex justify-end mt-3">
          <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:shadow-primary/20 active:animate-pop transition-all">
            Post Comment
          </button>
        </div>
      </div>

      {/* Comments Feed */}
      <CommentThread comments={threadComments} opUsername={post.by} />

      <div className="mt-16 flex justify-center pb-12">
        <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-surface-container-low text-on-surface font-semibold text-sm hover:bg-surface-container-high transition-colors active:scale-95">
          <span className="material-symbols-outlined text-xl">expand_more</span>
          Show more comments
        </button>
      </div>
    </main>
  );
}
