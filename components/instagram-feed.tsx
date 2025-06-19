"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock Instagram posts data
const mockInstagramPosts = [
  {
    id: "1",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image21-qYcP4xRs40KbMa8EwL26nu2nYU9cPX.jpeg",
    caption: "Finding balance through movement. #TheAMethod #Wellness #Movement",
    likes: 124,
    comments: 18,
    date: "2 days ago",
  },
  {
    id: "2",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image35-uoTdB0gQDZxg43RbUurynVhsDbnvBZ.jpeg",
    caption: "Every session is a journey of discovery. #MindBodyConnection #Wellness",
    likes: 98,
    comments: 12,
    date: "4 days ago",
  },
  {
    id: "3",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image8-E6szTRjWUtAjfXWT00M32NMG9pAyDA.jpeg",
    caption: "Group sessions bring collective energy and shared growth. #CommunityWellness",
    likes: 156,
    comments: 24,
    date: "1 week ago",
  },
  {
    id: "4",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image16-olOBw4oz3lD2taEXziITEEzzdJ59PG.jpeg",
    caption: "Mindful movement is the foundation of lasting wellness. #TheAMethod #Mindfulness",
    likes: 201,
    comments: 32,
    date: "1 week ago",
  },
]

export default function InstagramFeed() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Instagram className="h-6 w-6 text-slate-700 mr-2" />
          <h2 className="text-2xl font-bold text-slate-900 font-cormorant">Follow Francesca on Instagram</h2>
        </div>
        <Link
          href="https://www.instagram.com/francesca_antonacci1/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-700 hover:text-slate-900 text-sm font-medium"
        >
          @francesca_antonacci1
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-slate-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockInstagramPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
              <div className="relative aspect-square">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={`Instagram post: ${post.caption}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 text-slate-700 mr-1" />
                      <span className="text-xs text-slate-700">{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 text-slate-700 mr-1" />
                      <span className="text-xs text-slate-700">{post.comments}</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <p className="text-sm text-slate-700 line-clamp-2">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="https://www.instagram.com/francesca_antonacci1/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
            <Instagram className="mr-2 h-4 w-4" />
            View More on Instagram
          </Button>
        </Link>
      </div>
    </div>
  )
}
