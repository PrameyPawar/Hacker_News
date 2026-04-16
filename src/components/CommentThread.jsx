import { useState } from 'react';
import { Link } from 'react-router-dom';

function getAvatarInitial(username) {
  return username ? username.charAt(0).toUpperCase() : 'U';
}

function Comment({ comment, isOp = false }) {
  const [collapsed, setCollapsed] = useState(false);
  const hasReplies = comment.replies && comment.replies.length > 0;

  if (collapsed) {
    return (
      <div className="relative">
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center text-xs font-bold text-on-surface-variant">
            {getAvatarInitial(comment.author)}
          </div>
          <div className="flex-1 flex gap-2 items-center">
            <span className="text-xs font-bold text-on-surface-variant">{comment.author}</span>
            <span className="text-xs text-on-surface-variant/40">• collapsed</span>
            <button 
              className="text-xs font-bold text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors ml-auto"
              onClick={() => setCollapsed(false)}
            >
              [+]
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex gap-4 group">
        <div className="w-8 h-8 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center text-xs font-bold text-on-surface-variant">
          {getAvatarInitial(comment.author)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Link to={`/user/${comment.author}`} className="text-xs font-bold text-on-background hover:underline">{comment.author}</Link>
            {isOp && <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold">OP</span>}
            <span className="text-xs text-on-surface-variant/60">{comment.time || '2 hours ago'}</span>
            <button 
              onClick={() => setCollapsed(true)}
              className="text-xs text-on-surface-variant/40 hover:text-primary transition-colors ml-auto"
            >
              [-]
            </button>
          </div>
          <div className="text-sm leading-relaxed text-on-surface mb-3 whitespace-pre-line">
            {comment.text}
          </div>
          <div className="flex items-center gap-4">
            <button className="text-xs font-bold text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors">Reply</button>
            <button className="material-symbols-outlined text-sm text-on-surface-variant/40 hover:text-primary active:animate-pop transition-all">thumb_up</button>
          </div>
        </div>
      </div>

      {hasReplies && (
        <div className="ml-12 mt-6 relative">
          <div className="absolute left-[-1.25rem] top-6 bottom-0 w-[2px] bg-primary/10"></div>
          <div className="space-y-6">
            {comment.replies.map(reply => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CommentThread({ comments, opUsername }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="text-center p-8 bg-surface-container-low rounded-xl text-on-surface-variant text-sm font-medium">
        No comments yet. Be the first to discuss!
      </div>
    );
  }

  return (
    <section className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} isOp={comment.author === opUsername} />
      ))}
    </section>
  );
}
