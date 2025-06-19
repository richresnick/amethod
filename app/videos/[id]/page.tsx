"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, ArrowLeft, Clock, BookOpen, ThumbsUp, ThumbsDown } from "lucide-react"

// Mock video data (same as in videos/page.tsx)
const mockVideos = [
  {
    id: "1",
    title: "Full-Body Flow",
    category: "movement",
    level: "beginner",
    duration: "45 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image6-KopL5QH1wbUqxlIPzfYm21z4kY4NaZ.jpeg",
    description:
      "A comprehensive session that combines dance-inspired movement, strength training, and flexibility work to energize your entire body.",
    videoUrl: "https://example.com/videos/full-body-flow",
    instructor: "Francesca Antonacci",
    relatedVideos: ["2", "4", "5"],
  },
  {
    id: "2",
    title: "Precision & Alignment",
    category: "technique",
    level: "intermediate",
    duration: "30 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image22-5Pvbegp5ppGoyen9ahAy4ajpUUsavj.jpeg",
    description:
      "Dive deep into proper form and alignment with this technique-focused session that will enhance your body awareness and movement quality.",
    videoUrl: "https://example.com/videos/precision-alignment",
    instructor: "Francesca Antonacci",
    relatedVideos: ["1", "3", "6"],
  },
  {
    id: "3",
    title: "Gentle Restoration",
    category: "recovery",
    level: "all",
    duration: "25 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image25-U2uR9idVbCBHu7lf0P0B3isqTXoPt0.jpeg",
    description:
      "A restorative session focused on gentle stretching, release techniques, and mindful breathing to promote recovery and relaxation.",
    videoUrl: "https://example.com/videos/gentle-restoration",
    instructor: "Francesca Antonacci",
    relatedVideos: ["2", "5", "6"],
  },
  {
    id: "4",
    title: "Core Strength & Stability",
    category: "movement",
    level: "intermediate",
    duration: "35 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image21-qYcP4xRs40KbMa8EwL26nu2nYU9cPX.jpeg",
    description:
      "Build core strength and stability with this focused workout that targets your entire midsection for improved posture and performance.",
    videoUrl: "https://example.com/videos/core-strength",
    instructor: "Francesca Antonacci",
    relatedVideos: ["1", "2", "5"],
  },
  {
    id: "5",
    title: "Mindful Movement Basics",
    category: "movement",
    level: "beginner",
    duration: "40 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image8-E6szTRjWUtAjfXWT00M32NMG9pAyDA.jpeg",
    description:
      "An introduction to the principles of mindful movement and body awareness that form the foundation of The A/Method approach.",
    videoUrl: "https://example.com/videos/mindful-movement-basics",
    instructor: "Francesca Antonacci",
    relatedVideos: ["1", "3", "6"],
  },
  {
    id: "6",
    title: "Nutrition Fundamentals",
    category: "nutrition",
    level: "all",
    duration: "20 min",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image16-olOBw4oz3lD2taEXziITEEzzdJ59PG.jpeg",
    description:
      "Learn the basics of nutrition and how it supports your movement practice, with practical tips for incorporating whole foods into your daily routine.",
    videoUrl: "https://example.com/videos/nutrition-fundamentals",
    instructor: "Francesca Antonacci",
    relatedVideos: ["2", "3", "5"],
  },
]

export default function VideoDetailPage() {
  const { user, isLoading } = useAuth()
  const params = useParams()
  const router = useRouter()
  const videoId = params.id as string
  const [isVideoLoading, setIsVideoLoading] = useState(true)

  // Find the current video
  const video = mockVideos.find((v) => v.id === videoId)

  // Get related videos
  const relatedVideos = video ? mockVideos.filter((v) => video.relatedVideos.includes(v.id)) : []

  // Simulate video loading
  setTimeout(() => {
    setIsVideoLoading(false)
  }, 2000)

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

  if (!video) {
    return (
      <div className="bg-slate-50 min-h-screen pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-cormorant mb-4">Video Not Found</h1>
            <p className="text-slate-600 mb-6">The video you're looking for doesn't exist or has been removed.</p>
            <Link href="/videos">
              <Button className="bg-slate-700 hover:bg-slate-800">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Video Library
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-6">
          <Button variant="outline" onClick={() => router.push("/videos")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
              {isVideoLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-12 w-12 animate-spin text-white" />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="mb-4">Video player would be embedded here</p>
                    <p className="text-sm">In a production environment, this would be a real video player</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">{video.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {video.duration}
                </div>
                <div>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md text-xs font-medium">
                    {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
                  </span>
                </div>
                <div>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md text-xs font-medium">
                    {video.level === "all" ? "All Levels" : video.level.charAt(0).toUpperCase() + video.level.slice(1)}
                  </span>
                </div>
                <div>Instructor: {video.instructor}</div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" /> Helpful
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <ThumbsDown className="h-4 w-4" /> Not Helpful
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-lg font-medium text-slate-900 mb-2">Description</h2>
                <p className="text-slate-600">{video.description}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-medium text-slate-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" /> Notes
                </h2>
                <div className="prose max-w-none">
                  <p>
                    This session focuses on integrating mindful movement principles with strength and flexibility work.
                    Key areas we'll explore include:
                  </p>
                  <ul>
                    <li>Proper alignment through the spine and pelvis</li>
                    <li>Core engagement during dynamic movement</li>
                    <li>Breath coordination with movement patterns</li>
                    <li>Finding balance between effort and ease</li>
                  </ul>
                  <p>
                    For best results, have a yoga mat and comfortable clothing. Optional props include a yoga block and
                    a small towel or pillow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium text-slate-900 mb-4">Related Videos</h2>
            <div className="space-y-4">
              {relatedVideos.map((relatedVideo) => (
                <Link href={`/videos/${relatedVideo.id}`} key={relatedVideo.id}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative aspect-video">
                      <img
                        src={relatedVideo.thumbnail || "/placeholder.svg"}
                        alt={relatedVideo.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedVideo.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-slate-900 mb-1">{relatedVideo.title}</h3>
                      <p className="text-xs text-slate-600 line-clamp-2">{relatedVideo.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
