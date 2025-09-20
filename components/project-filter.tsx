import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  searchQuery: string
  onCategoryChange: (category: string) => void
  onSearchChange: (query: string) => void
}

export function ProjectFilter({
  categories,
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: ProjectFilterProps) {
  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-off-white/50" />
        <Input
          type="text"
          placeholder="Search projects or clients..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10 bg-muted-gray/50 border-off-white/20 text-off-white placeholder:text-off-white/50 focus:border-neon-lime focus:ring-neon-lime/20"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSearchChange("")}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 p-0 text-off-white/50 hover:text-off-white"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium focus-ring ${activeCategory === category
              ? "bg-neon-lime text-charcoal"
              : "bg-off-white/10 text-off-white hover:bg-off-white/20 hover:text-neon-lime"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
