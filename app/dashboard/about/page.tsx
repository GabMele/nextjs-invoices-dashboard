import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | NextQuoInvoices',
  description: 'Learn about the NextQuoInvoices dashboard tech stack and features',
};

export default function AboutPage() {
  return (
    <main className="fade-in">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="mb-8 text-2xl md:text-3xl font-heading">
          About NextQuoInvoices
        </h1>

        <div className="space-y-8">
          {/* Project Overview */}
          <section className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Project Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              NextQuoInvoices is a demo web application built with Next.js to explore modern full-stack development patterns.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              The project is based on the official Next.js learning course and has been extended with additional features and refinements to better reflect a real-world application structure.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              It focuses on invoice management, customer data handling, and server-driven UI using the App Router architecture.
            </p>
          </section>

          {/* Technology Stack */}
          <section className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Technology Stack</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Frontend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Next.js (App Router)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    React 18 (Server Components)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Heroicons
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Backend & Data</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    NextAuth.js (authentication)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Server Actions (data mutations)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    SQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Vercel (deployment)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Invoice Management</h3>
                <p className="text-sm text-gray-600">
                  Create, update, and delete invoices with intuitive interface
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Authentication</h3>
                <p className="text-sm text-gray-600">
                  Protected routes with secure session handling
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Server-Side Operations</h3>
                <p className="text-sm text-gray-600">
                  Data fetching and mutations with Server Actions
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-sm text-gray-600">
                  Mobile-first approach for all devices
                </p>
              </div>
            </div>
          </section>

          {/* Technical Focus */}
          <section className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Technical Focus</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              This project was used to explore:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Server Components and data flow in Next.js</li>
              <li>• Authentication patterns and session handling</li>
              <li>• Database integration and query structure</li>
              <li>• Separation between server and client logic</li>
              <li>• Type-safe development with TypeScript</li>
            </ul>
          </section>

          {/* About the Developer */}
          <section className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">About the Developer</h2>
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Gabriele Melendugno</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Junior Web Developer focused on React, Next.js, and AI-assisted development.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  I build web applications using React and Next.js, using AI tools to accelerate development while actively working to understand the underlying architecture and logic.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  This project represents my first complete implementation with Next.js. Starting from a structured tutorial, I extended and adapted the application, focusing on understanding core concepts such as routing, authentication, and server-client interaction.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Currently developing skills in:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Next.js (App Router, Server Actions)</li>
                    <li>• TypeScript</li>
                    <li>• Authentication & backend integration</li>
                    <li>• AI-assisted development workflows</li>
                  </ul>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  I'm particularly interested in integrating AI into web applications to enhance functionality and user experience.
                </p>
              </div>
          </section>
        </div>
      </div>
    </main>
  );
}
