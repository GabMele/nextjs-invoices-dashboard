'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-600 text-white">
      <div className="w-full px-6 py-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NQ</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">NextQuoInvoices</h3>
              <p className="text-gray-400 text-sm">Modern invoice management dashboard</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm mt-4 mb-4">
              Built with Next.js showcasing modern web development
            </p>
            <Link 
              href="/dashboard/about" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-medium"
            >
              <span>Learn About This Project</span>
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="mt-2 pt-2 border-t border-gray-700 text-center">
          <p className="text-gray-200 text-xs">
            &copy; 2026 NextQuo.com • Web Development, Apps & AI Integration • by Gabriele Melendugno
          </p>
        </div>
      </div>
    </footer>
  );
}
