"use client"

import { useState } from "react"
import { Search, Home, Compass, PlaySquare, Library, Bell, User, Menu, Mic } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const navigationItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Compass, label: "Explore", active: false },
  { icon: PlaySquare, label: "Subscriptions", active: false },
  { icon: Library, label: "Library", active: false },
]

const videoData = [
  {
    id: 1,
    thumbnail: "/placeholder.svg?height=180&width=320",
    title: "Building Modern Web Applications with Next.js 15",
    channel: "TechMaster Pro",
    channelAvatar: "/placeholder.svg?height=36&width=36",
    views: "2.4M",
    uploadTime: "3 days ago",
    duration: "15:42",
  },
  {
    id: 2,
    thumbnail: "/placeholder.svg?height=180&width=320",
    title: "The Future of AI in Web Development",
    channel: "CodeVision",
    channelAvatar: "/placeholder.svg?height=36&width=36",
    views: "1.8M",
    uploadTime: "1 week ago",
    duration: "22:15",
  },
  {
    id: 3,
    thumbnail: "/placeholder.svg?height=180&width=320",
    title: "Mastering CSS Grid and Flexbox in 2024",
    channel: "DesignFlow",
    channelAvatar: "/placeholder.svg?height=36&width=36",
    views: "956K",
    uploadTime: "5 days ago",
    duration: "18:33",
  },
  {
    id: 4,
    thumbnail: "/placeholder.svg?height=180&width=320",
    title: "React Server Components Deep Dive",
    channel: "ReactMasters",
    channelAvatar: "/placeholder.svg?height=36&width=36",
    views: "3.2M",
    uploadTime: "2 weeks ago",
    duration: "28:47",
  },
  {
    id: 5,
    thumbnail: "/placeholder.svg?height=180&width=320",
    title: "TypeScript Best Practices for Large Applications",
    channel: "TypeScript Hub",
    channelAvatar: "/placeholder.svg?height=36&width=36",
    views: "1.5M",
    uploadTime: "4 days ago",
    duration: "31:22",
  },
  {
    id: 6,
    thumbnail: "/placeholder.svg?height=180&width=320",
    title: "Database Design Patterns You Should Know",
    channel: "DataArchitect",
    channelAvatar: "/placeholder.svg?height=36&width=36",
    views: "2.1M",
    uploadTime: "1 week ago",
    duration: "25:18",
  },
  {
    id: 7,
    thumbnail: "/placeholder.svg?height=180&width=320",
    title: "Advanced Animation Techniques with Framer Motion",
    channel: "AnimationStudio",
    channelAvatar: "/placeholder.svg?height=36&width=36",
    views: "892K",
    uploadTime: "6 days ago",
    duration: "19:55",
  },
  {
    id: 8,
    thumbnail: "/placeholder.svg?height=180&width=320",
    title: "Building Scalable APIs with Node.js and Express",
    channel: "BackendMaster",
    channelAvatar: "/placeholder.svg?height=36&width=36",
    views: "1.7M",
    uploadTime: "3 days ago",
    duration: "33:12",
  },
]

export default function VideoStreamingPlatform() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900/90 to-blue-950 text-white overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-white hover:bg-white/10 transition-all duration-300"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <PlaySquare className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                StreamVision
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="flex items-center backdrop-blur-md bg-white/5 border border-white/20 rounded-full overflow-hidden hover:border-white/30 transition-all duration-300">
                <Input
                  placeholder="Search videos..."
                  className="flex-1 bg-transparent border-0 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 px-6 py-3"
                />
                <Button
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 border-0 rounded-none h-12 w-12 transition-all duration-300"
                >
                  <Search className="h-5 w-5 text-white" />
                </Button>
              </div>
              <Button
                size="icon"
                className="absolute right-14 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/10 border-0 transition-all duration-300"
              >
                <Mic className="h-4 w-4 text-gray-400" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-all duration-300">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="w-8 h-8 ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-20 h-[calc(100vh-5rem)] backdrop-blur-xl bg-black/20 border-r border-white/10 transition-all duration-300 z-40 ${
            sidebarCollapsed ? "w-20" : "w-64"
          }`}
        >
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={`w-full justify-start gap-4 text-left transition-all duration-300 hover:bg-white/10 ${
                  item.active ? "bg-white/10 text-white" : "text-gray-300"
                } ${sidebarCollapsed ? "px-3" : "px-4"}`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
              </Button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-64"}`}>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videoData.map((video) => (
                <div key={video.id} className="group cursor-pointer transition-all duration-300 hover:scale-105">
                  {/* Video Card */}
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-2 right-2">
                        <Badge className="bg-black/80 text-white text-xs px-2 py-1 rounded">{video.duration}</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <div className="flex gap-3">
                        <Avatar className="w-9 h-9 flex-shrink-0">
                          <AvatarImage src={video.channelAvatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                            {video.channel[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1 group-hover:text-purple-300 transition-colors duration-300">
                            {video.title}
                          </h3>
                          <p className="text-gray-400 text-xs mb-1 hover:text-gray-300 transition-colors duration-300">
                            {video.channel}
                          </p>
                          <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <span>{video.views} views</span>
                            <span>•</span>
                            <span>{video.uploadTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
