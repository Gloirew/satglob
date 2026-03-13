/* Design: Dark Cosmos — immersive space hero with Earth from orbit + orbital animation */
import { ArrowRight, Radio } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663343090953/9xL6vwxuoA9jRDBPW3ncAk/satglob-hero-H7XdsARLyzyfzNHJqnaMrP.webp";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Earth from orbit with satellite connections over Africa"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/70 via-[#030712]/40 to-[#030712]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-transparent to-transparent" />
      </div>

      {/* Orbital ring animation */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="relative w-[300px] h-[300px]">
          {/* Orbit ring 1 */}
          <div
            className="absolute inset-0 border border-cyan-500/10 rounded-full"
            style={{ transform: "rotateX(60deg) rotateZ(20deg)" }}
          />
          {/* Orbit ring 2 */}
          <div
            className="absolute inset-4 border border-cyan-400/15 rounded-full"
            style={{ transform: "rotateX(60deg) rotateZ(-15deg)" }}
          />
          {/* Orbiting dot 1 */}
          <div
            className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
            style={{
              top: "50%",
              left: "50%",
              animation: "orbit 8s linear infinite",
            }}
          />
          {/* Orbiting dot 2 */}
          <div
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
            style={{
              top: "50%",
              left: "50%",
              animation: "orbit 12s linear infinite reverse",
            }}
          />
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400/30 rounded-full blur-md" style={{ animation: "pulse-glow 3s ease-in-out infinite" }} />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.3 + (i % 3) * 0.15,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-8 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-cyan-300 tracking-wider uppercase font-[Inter_Tight]">
              Powered by Starlink Priority
            </span>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6 transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Enterprise Satellite{" "}
            <br className="hidden sm:block" />
            Connectivity for{" "}
            <span className="text-gradient">Africa</span>{" "}
            <br className="hidden sm:block" />
            and Beyond
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-gray-300 mb-4 font-light tracking-wide transition-all duration-1000 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Secure. Mobile. Scalable.
          </p>
          <p
            className={`text-base text-gray-400 mb-10 max-w-xl leading-relaxed transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Professional satellite internet solutions for enterprises, NGOs, governments, 
            and telecom operators across 23+ African countries.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#solutions"
              className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cyan-500 text-[#030712] font-semibold rounded-lg text-base font-[Inter_Tight] hover:bg-cyan-400 transition-colors group"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-600 text-gray-200 font-semibold rounded-lg text-base font-[Inter_Tight] hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all"
            >
              Contact Sales
            </a>
          </div>

          {/* Trusted by */}
          <div
            className={`mt-16 pt-8 border-t border-white/5 transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-4 font-[Inter_Tight]">
              Trusted Partners
            </p>
            <div className="flex items-center gap-8 flex-wrap">
              {["GoConnect", "Marlink", "Stellar", "Starlink Priority"].map((p) => (
                <span key={p} className="text-sm text-gray-500 font-[Inter_Tight] font-medium hover:text-cyan-400/60 transition-colors">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500 font-[Inter_Tight]">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
