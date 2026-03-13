/* Design: Dark Cosmos — glowing stat counters with improved animation */
import { Globe, Users, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, count };
}

function StatItem({ icon: Icon, target, suffix, prefix, label }: {
  icon: React.ElementType;
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const { ref, count } = useCounter(target);
  return (
    <div ref={ref} className="flex flex-col items-center text-center group">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-cyan-500/15 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
        <Icon className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <span className="text-3xl lg:text-4xl font-bold text-white font-[Outfit] tabular-nums">
        {prefix}{count}{suffix}
      </span>
      <span className="text-sm text-gray-400 mt-1.5 font-[Inter_Tight]">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-cyan-500/10">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.03] via-transparent to-blue-500/[0.03]" />
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatItem icon={Globe} target={23} suffix="+" label="Countries Covered" />
          <StatItem icon={Users} target={500} suffix="+" label="Enterprise Clients" />
          <StatItem icon={Shield} target={99} suffix=".9%" label="Uptime SLA" />
          <StatItem icon={Zap} target={48} suffix="h" prefix="<" label="Deployment Time" />
        </div>
      </div>
    </section>
  );
}
