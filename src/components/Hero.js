// src/components/Hero.js
export default function Hero() {
  return (
    <section className="hero-bg py-40 lg:py-64">
      <video autoPlay id="bg-video" loop muted playsInline>
        <source
          src="https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 hero-content">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
            Crafting Architectural Wonders
          </h2>
          <p className="text-lg text-gray-200 mb-8 animate-fade-in-up max-w-3xl mx-auto">
            Your Ideas & Dreams Are Transformed By Us Into Long-Lasting,
            Engineered Buildings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              className="btn-primary font-semibold py-3 px-8 rounded-lg"
              href="#contact"
            >
              Contact Us
            </a>
            <a
              className="btn-secondary font-semibold py-3 px-8 rounded-lg"
              href="#services"
            >
              Our Services
            </a>
          </div>
          <p className="mt-8 text-gray-300">
            All Our Projects Are Curated By Experts.
          </p>
        </div>
      </div>
    </section>
  );
}
