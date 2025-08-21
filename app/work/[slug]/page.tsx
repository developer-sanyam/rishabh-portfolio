import type { Metadata } from "next"
import ProjectClientPage from "./ProjectClientPage"
import projectsData from "@/data/projects.json"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - ${project.client} | Rishabh Prajapat`,
    description: project.summary,
    keywords: [...project.tags, ...project.services, project.client, "graphic design"],
    openGraph: {
      title: `${project.title} - ${project.client}`,
      description: project.summary,
      url: `https://rishabhprajapat.com/work/${project.slug}`,
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  return <ProjectClientPage params={resolvedParams} />
}
