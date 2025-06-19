import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play } from "lucide-react"
import InstagramFeed from "@/components/instagram-feed"

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Bleed */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image6-KopL5QH1wbUqxlIPzfYm21z4kY4NaZ.jpeg"
            alt="The A/Method Movement"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="max-w-2xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Discover Your Body&apos;s Potential
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              The A/Method by Francesca Antonacci is a holistic approach to wellness that combines movement,
              mindfulness, and nutrition to help you achieve balance and strength.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image35-uoTdB0gQDZxg43RbUurynVhsDbnvBZ.jpeg"
                alt="Francesca Antonacci"
                width={600}
                height={800}
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-slate-700 p-8 rounded-2xl hidden lg:block">
                <p className="text-white font-cormorant text-xl italic">
                  "Movement is medicine for the body and mind."
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">
                The A/Method Philosophy
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Founded by Francesca Antonacci, The A/Method is a comprehensive approach to wellness that integrates
                movement, mindfulness, and nutrition. Our method is designed to help you connect with your body, build
                strength, and find balance in your daily life.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                With over a decade of experience in movement and wellness, Francesca has developed a unique methodology
                that addresses the whole person, not just physical fitness.
              </p>
              <div className="mt-8">
                <Link href="/about">
                  <Button className="group bg-slate-700 hover:bg-slate-800">
                    Learn More About Francesca
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <InstagramFeed />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Discover the various ways to experience The A/Method and transform your relationship with movement.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image21-qYcP4xRs40KbMa8EwL26nu2nYU9cPX.jpeg"
                  alt="Private Sessions"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 font-cormorant">Private Sessions</h3>
                <p className="mt-2 text-slate-600">
                  One-on-one training tailored to your specific needs and goals, with personalized attention and
                  guidance.
                </p>
                <Link
                  href="/services/private-sessions"
                  className="mt-4 inline-block text-slate-700 hover:text-slate-900 font-medium"
                >
                  Learn More <ArrowRight className="inline ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image8-E6szTRjWUtAjfXWT00M32NMG9pAyDA.jpeg"
                  alt="Private Group Sessions"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 font-cormorant">Private Group Sessions</h3>
                <p className="mt-2 text-slate-600">
                  Customized sessions for small groups, perfect for friends, family, or corporate events.
                </p>
                <Link
                  href="/services/group-sessions"
                  className="mt-4 inline-block text-slate-700 hover:text-slate-900 font-medium"
                >
                  Learn More <ArrowRight className="inline ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image16-olOBw4oz3lD2taEXziITEEzzdJ59PG.jpeg"
                  alt="On-Demand Classes"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 font-cormorant">On-Demand Class Library</h3>
                <p className="mt-2 text-slate-600">
                  Access our extensive library of classes and tutorials to practice The A/Method at your own pace.
                </p>
                <Link
                  href="/services/on-demand"
                  className="mt-4 inline-block text-slate-700 hover:text-slate-900 font-medium"
                >
                  Learn More <ArrowRight className="inline ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image3-PEZBsY78QhewpNLQJDuO9feFn1J5a1.jpeg"
            alt="Movement"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-cormorant">
              Ready to Begin Your Journey?
            </h2>
            <p className="mt-4 text-lg text-white">
              Join The A/Method community and discover a new way of moving, thinking, and living.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 w-full sm:w-auto">
                Sign Up Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 bg-slate-900/40 w-full sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4" /> Watch Introduction
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
