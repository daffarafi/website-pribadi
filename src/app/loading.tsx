export default function Loading() {
  return (
    <div className="min-h-screen bg-[#061223] flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#2EE0D0]/20 border-t-[#2EE0D0] rounded-full animate-spin mx-auto mb-4"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-[#2477EC] rounded-full animate-spin mx-auto"
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="font-Source_Sans_Pro">
          <h2 className="text-2xl font-semibold text-white mb-2">Loading...</h2>
          <p className="text-gray-400">Please wait while we load the content</p>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center mt-4 space-x-1">
          <div
            className="w-2 h-2 bg-[#2EE0D0] rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          ></div>
          <div
            className="w-2 h-2 bg-[#2EE0D0] rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          ></div>
          <div
            className="w-2 h-2 bg-[#2EE0D0] rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#2EE0D0]/10 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-[#2477EC]/10 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-[#2EE0D0]/10 rounded-full animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
