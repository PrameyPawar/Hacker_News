import React from 'react';

export default function Jobs() {
  const jobsData = [
    { id: 1, company: 'Vercel', title: 'Product Designer, Design Systems', location: 'Remote (Americas)', type: 'Full-time', color: 'bg-tertiary-fixed text-on-tertiary-fixed-variant' },
    { id: 2, company: 'OpenAI', title: 'Research Engineer, Alignment Teams', location: 'San Francisco, CA', type: 'Full-time', color: 'bg-primary-fixed-dim text-on-primary-fixed-variant' },
    { id: 3, company: 'Anthropic', title: 'Senior Security Engineer, Infrastructure', location: 'London, UK', type: 'Full-time', color: 'bg-surface-container-highest text-on-surface' },
    { id: 4, company: 'Linear', title: 'Software Engineer, Core Infrastructure', location: 'Stockholm, SE / Remote', type: 'Full-time', color: 'bg-secondary-fixed text-on-secondary-fixed-variant' },
    { id: 5, company: 'Figma', title: 'Growth Lead, Professional Services', location: 'New York, NY', type: 'Full-time', color: 'bg-tertiary-fixed-dim text-on-tertiary-fixed-variant' },
    { id: 6, company: 'Railway', title: 'Developer Advocate, Platform Experience', location: 'Remote', type: 'Contract', color: 'bg-primary-fixed text-on-primary-fixed-variant' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Jobs</h1>
        <p className="text-on-surface-variant font-medium">Opportunities at the frontier of technology. Curated daily.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant font-black text-xl">S</div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">Stripe</h3>
                <p className="text-sm font-medium text-tertiary flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span> San Francisco / Remote
                </p>
              </div>
            </div>
            <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Featured</span>
          </div>
          <h2 className="text-xl font-bold mb-4 leading-snug">Full Stack Engineer, Payment Methods Orchestration</h2>
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-outline-variant/10">
            <span className="text-xs font-semibold px-3 py-1 bg-surface-container rounded-lg text-on-surface-variant">Payments</span>
            <span className="text-xs font-semibold px-3 py-1 bg-surface-container rounded-lg text-on-surface-variant">TypeScript</span>
            <span className="text-xs font-semibold px-3 py-1 bg-surface-container rounded-lg text-on-surface-variant">Ruby</span>
            <span className="ml-auto text-xs font-medium text-on-surface-variant opacity-60 italic">3h ago</span>
          </div>
        </div>

        {jobsData.map((job, index) => (
          <div 
            key={job.id} 
            className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer opacity-0 animate-slide-up"
            style={{ animationDelay: `${Math.min((index + 1) * 75, 500)}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${job.color}`}>
                {job.company.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{job.company}</h4>
                <p className="text-[11px] font-medium text-on-surface-variant/70">{job.location}</p>
              </div>
            </div>
            <h3 className="text-lg font-bold leading-tight mb-4">{job.title}</h3>
            <div className="text-[11px] uppercase tracking-widest font-semibold text-primary">{job.type}</div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="flex items-center gap-2 px-8 py-3 bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold rounded-full transition-all">
          Load More Postings
          <span className="material-symbols-outlined">expand_more</span>
        </button>
      </div>
    </div>
  );
}
