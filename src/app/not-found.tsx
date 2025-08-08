'use client';

import Link from 'next/link';

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-[#061223] flex items-center justify-center font-Source_Sans_Pro overflow-hidden">
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* Large 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] bg-clip-text leading-none">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-[#2EE0D0]/20 blur-sm leading-none">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-2">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group"
          >
            <span className="block px-6 py-3 bg-[#061223] text-[#2EE0D0] group-hover:px-7 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300">
              Go Home
            </span>
          </Link>

          <button
            onClick={handleGoBack}
            className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-md hover:border-gray-400 hover:text-white transition-all duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="relative">
          <div className="flex justify-center items-center space-x-2 text-gray-600">
            <div className="w-2 h-2 bg-[#2EE0D0] rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div
              className="w-2 h-2 bg-[#2477EC] rounded-full animate-pulse"
              style={{ animationDelay: '0.5s' }}
            ></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div
              className="w-2 h-2 bg-[#2EE0D0] rounded-full animate-pulse"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>
        </div>

        {/* Background Animated Shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            width="334"
            height="528"
            viewBox="0 0 447 528"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/4 left-1/4 scale-50 opacity-10 animate-spin"
            style={{ animationDuration: '20s' }}
          >
            <path
              d="M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z"
              className="stroke-[#2EE0D0]"
              strokeWidth="1.5"
            />
          </svg>

          <svg
            width="334"
            height="528"
            viewBox="0 0 447 528"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-1/4 right-1/4 scale-75 opacity-5 animate-spin"
            style={{ animationDuration: '25s', animationDirection: 'reverse' }}
          >
            <path
              d="M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z"
              className="stroke-[#2477EC]"
              strokeWidth="1.5"
            />
          </svg>

          {/* Floating Circles */}
          <div
            className="absolute top-1/3 left-1/6 w-4 h-4 bg-[#2EE0D0]/20 rounded-full animate-bounce"
            style={{ animationDelay: '0s', animationDuration: '3s' }}
          ></div>
          <div
            className="absolute top-2/3 right-1/6 w-6 h-6 bg-[#2477EC]/20 rounded-full animate-bounce"
            style={{ animationDelay: '1s', animationDuration: '4s' }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#2EE0D0]/30 rounded-full animate-bounce"
            style={{ animationDelay: '2s', animationDuration: '3.5s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
