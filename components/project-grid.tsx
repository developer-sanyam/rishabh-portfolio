"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import projectsData from "@/data/projects.json"

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const allCategories = new Set<string>()
    projectsData.forEach((project) => {
      allCategories.add(project.category)
      project.tags.forEach((tag) => allCategories.add(tag))
    })
    return ["All", ...Array.from(allCategories).sort()]
  }, [])

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    let filtered = projectsData

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((project) =>
        project.category === activeCategory || project.tags.includes(activeCategory)
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.client.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(query)),
      )
    }

    return filtered
  }, [activeCategory, searchQuery])

  return (
    <div className="space-y-12">
      {/* Filters */}
      <ProjectFilter
        categories={categories}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchQuery}
      />

      {/* Results Count */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-off-white/70">
          {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <motion.div
            key={`${activeCategory}-${searchQuery}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-off-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <motion.div
                  className="w-8 h-8 border-2 border-off-white/30 border-t-neon-lime rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-off-white mb-2">No projects found</h3>
              <p className="text-off-white/70 mb-6">
                Try adjusting your search terms or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
                className="border border-off-white/30 text-off-white hover:bg-off-white hover:!text-black bg-transparent px-4 py-2 rounded-2xl transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
