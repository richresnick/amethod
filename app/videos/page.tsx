"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Search, Play, Clock, Filter } from "lucide-react"

// Mock video data
const mockVideos = [
  {
    id: "1",
    title: "Full-Body Flow",
    category: "movement",
    level: "beginner",
    duration: "45 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image6-KopL5QH1wbUqxlIPzfYm21z4kY4NaZ.jpeg",
    description:
      "A comprehensive session that combines dance-inspired movement, strength training, and flexibility work.",
  },
  {
    id: "2",
    title: "Precision & Alignment",
    category: "technique",
    level: "intermediate",
    duration: "30 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image22-5Pvbegp5ppGoyen9ahAy4ajpUUsavj.jpeg",
    description: "Dive deep into proper form and alignment with this technique-focused session.",
  },
  {
    id: "3",
    title: "Gentle Restoration",
    category: "recovery",
    level: "all",
    duration: "25 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image25-U2uR9idVbCBHu7lf0P0B3isqTXoPt0.jpeg",
    description: "A restorative session focused on gentle stretching, release techniques, and mindful breathing.",
  },
  {
    id: "4",
    title: "Core Strength & Stability",
    category: "movement",
    level: "intermediate",
    duration: "35 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image21-qYcP4xRs40KbMa8EwL26nu2nYU9cPX.jpeg",
    description: "Build core strength and stability with this focused workout that targets your entire midsection.",
  },
  {
    id: "5",
    title: "Mindful Movement Basics",
    category: "movement",
    level: "beginner",
    duration: "40 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image8-E6szTRjWUtAjfXWT00M32NMG9pAyDA.jpeg",
    description: "An introduction to the principles of mindful movement and body awareness.",
  },
  {
    id: "6",
    title: "Nutrition Fundamentals",
    category: "nutrition",
    level: "all",
    duration: "20 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image16-olOBw4oz3lD2taEXziITEEzzdJ59PG.jpeg",
    description: "Learn the basics of nutrition and how it supports your movement practice.",
  },
]

export default function VideosPage() {
  const { user, isLoading } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeLevel, setActiveLevel] = useState("all")
  const [filteredVideos, setFilteredVideos] = useState(mockVideos)

  useEffect(() => {
    // Filter videos based on search query, category, and level
    const filtered = mockVideos.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === "all" || video.category === activeCategory
      const matchesLevel = activeLevel === "all" || video.level === activeLevel || video.level === "all"

      return matchesSearch && matchesCategory && matchesLevel
    })

    setFilteredVideos(filtered)
  }, [searchQuery, activeCategory, activeLevel])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-slate-700" />
      </div>
    )
  }

  if (!user) {
    return null // Will be handled by middleware redirect
  }

  if (!user.isSubscribed) {
    return (
      <div className="bg-slate-50 min-h-screen pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-cormorant mb-4">Premium Content</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-medium text-slate-900 mb-4">Subscribe to Access Videos</h2>
              <p className="text-slate-600 mb-6">
                You need an active subscription to access The A/Method's premium video content. Subscribe now to unlock
                our entire library of movement, technique, and nutrition videos.
              </p>
              <Link href="/subscribe">
                <Button className="bg-slate-700 hover:bg-slate-800">View Subscription Plans</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-cormorant">Video Library</h1>
            <p className="text-slate-600">
              Explore our collection of premium movement, technique, and nutrition videos
            </p>
          </div>

          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search videos..."
              className="pl-10 w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Categories</TabsTrigger>
              <TabsTrigger value="movement">Movement</TabsTrigger>
              <TabsTrigger value="technique">Technique</TabsTrigger>
              <TabsTrigger value="recovery">Recovery</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-4 w-4 text-slate-700" />
            <span className="text-sm font-medium text-slate-700">Filter by level:</span>
            <select
              value={activeLevel}
              onChange={(e) => setActiveLevel(e.target.value)}
              className="text-sm border rounded-md px-2 py-1"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600">No videos match your search criteria. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <Link href={`/videos/${video.id}`} key={video.id}>
                <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 rounded-full p-3">
                        <Play className="h-8 w-8 text-slate-900" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-slate-900 text-xs font-medium px-2 py-1 rounded-md">
                        {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-slate-900 mb-1">{video.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{video.description}</p>
                    <div className="mt-2 flex items-center">
                      <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {video.level === "all"
                          ? "All Levels"
                          : video.level.charAt(0).toUpperCase() + video.level.slice(1)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
