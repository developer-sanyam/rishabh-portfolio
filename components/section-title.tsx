interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionTitle({ eyebrow, title, description, align = "left", className = "" }: SectionTitleProps) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className="text-neon-lime text-sm font-medium tracking-wider uppercase mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-off-white leading-tight mb-6">
        {title}
      </h2>

      {description && (
        <p className={`text-off-white/70 text-lg leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}

      {/* Decorative Line */}
      <div className={`mt-8 h-px bg-gradient-to-r from-neon-lime to-transparent ${align === "center" ? "mx-auto w-24" : "w-16"}`} />
    </div>
  )
}
