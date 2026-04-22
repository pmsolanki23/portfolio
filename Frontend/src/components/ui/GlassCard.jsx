export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        relative 
        bg-white/[0.04] 
        backdrop-blur-2xl 
        border border-white/[0.08] 
        rounded-2xl p-6 
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        hover:-translate-y-2 
        hover:shadow-[0_10px_40px_rgba(125,211,252,0.15)]
        transition-all duration-300
        ${className}
      `}
    >
      {/* Soft glowing blue-to-mint gradient, fades in on hover */}
      <div
        className="
          absolute inset-0 rounded-2xl 
          bg-gradient-to-r 
          from-[#7dd3fc]/10 
          via-transparent 
          to-[#86efac]/10 
          opacity-0 
          hover:opacity-100 
          transition duration-300
        "
      />

      {/* Content above the glow */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
