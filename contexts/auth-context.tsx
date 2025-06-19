"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  email: string
  name: string
  isSubscribed: boolean
  subscriptionType?: "monthly" | "annual"
  avatarUrl?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for demo
const mockUsers = [
  {
    id: "1",
    email: "demo@theamethod.com",
    password: "demo123",
    name: "Demo User",
    isSubscribed: true,
    subscriptionType: "monthly" as const,
  },
  {
    id: "2",
    email: "francesca@theamethod.com",
    password: "password123",
    name: "Francesca Antonacci",
    isSubscribed: true,
    subscriptionType: "annual" as const,
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = () => {
      try {
        const savedUser = localStorage.getItem("amethod-user")
        if (savedUser) {
          const userData = JSON.parse(savedUser)
          setUser(userData)
        }
      } catch (error) {
        console.error("Error loading user session:", error)
        localStorage.removeItem("amethod-user")
      } finally {
        setIsLoading(false)
      }
    }

    checkSession()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      const mockUser = mockUsers.find((u) => u.email === email && u.password === password)

      if (!mockUser) {
        throw new Error("Invalid email or password")
      }

      const { password: _, ...userWithoutPassword } = mockUser
      setUser(userWithoutPassword)
      localStorage.setItem("amethod-user", JSON.stringify(userWithoutPassword))
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithGoogle = async () => {
    setIsLoading(true)

    // Simulate Google OAuth
    await new Promise((resolve) => setTimeout(resolve, 1500))

    try {
      const googleUser = {
        id: "google-1",
        email: "user@gmail.com",
        name: "Google User",
        isSubscribed: false,
        avatarUrl: "https://via.placeholder.com/40",
      }

      setUser(googleUser)
      localStorage.setItem("amethod-user", JSON.stringify(googleUser))
      router.push("/dashboard")
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      // Check if user already exists
      const existingUser = mockUsers.find((u) => u.email === email)
      if (existingUser) {
        throw new Error("User already exists with this email")
      }

      const newUser = {
        id: Date.now().toString(),
        email,
        name,
        isSubscribed: false,
      }

      setUser(newUser)
      localStorage.setItem("amethod-user", JSON.stringify(newUser))
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem("amethod-user")
    router.push("/")
  }

  const value = {
    user,
    isLoading,
    login,
    loginWithGoogle,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
