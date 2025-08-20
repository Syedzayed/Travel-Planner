// app/page.tsx

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="/Untitled video - Made with Clipchamp (2).mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl text-white">
          <p className="text-sm md:text-base text-gray-300 tracking-wide uppercase mb-4">
            Welcome to My Project
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Build Stunning Websites <br />
            <span className="text-indigo-400">
              with Next.js 15 & Tailwind CSS
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            A hero landing page with a video background. Fully responsive,
            modern, and customizable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-started"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:border-indigo-400 hover:text-indigo-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Second Full Page Section */}
      <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About This Project
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            This is the second 100vh section. You can use it for features,
            about, or anything else. Scroll smoothly between sections.
          </p>
          <a
            href="#next"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition"
          >
            Explore More
          </a>
        </div>
      </section>
    </main>
  );
}
