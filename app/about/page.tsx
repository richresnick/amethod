import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, Dumbbell } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image35-uoTdB0gQDZxg43RbUurynVhsDbnvBZ.jpeg"
            alt="Francesca Antonacci"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6 py-32 md:py-40 text-center lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-cormorant">
              About The A/Method
            </h1>
            <p className="mt-6 text-xl text-white">
              A premium wellness brand founded on principles of mindful movement, nourishment, and holistic well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              To transform lives through a holistic approach to wellness that integrates mindful movement, nutrition,
              and community connection. The A/Method is designed to help you discover your body's potential and achieve
              balance in all aspects of your life.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="h-1 w-20 bg-slate-700 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image3-PEZBsY78QhewpNLQJDuO9feFn1J5a1.jpeg"
                alt="Francesca Antonacci"
                width={600}
                height={800}
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-700 p-6 rounded-2xl hidden lg:block max-w-xs">
                <p className="text-white font-cormorant text-lg italic text-center">
                  "My approach combines artistic expression with deep knowledge of body mechanics and nutrition."
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">
                Meet Francesca Antonacci
              </h2>
              <div className="mt-6 space-y-4 text-lg text-slate-600">
                <p>
                  Francesca Antonacci is a movement artist, teacher, and wellness professional originally from Bari,
                  Italy. She began her journey with a Classical Ballet degree from the Royal Academy of Dance in London,
                  later expanding her expertise in contemporary and modern dance during nine years of professional
                  performance in Rome.
                </p>
                <p>
                  While in Rome, Francesca also earned degrees in Art, Literature, and Philosophy from the University of
                  Roma Tor Vergata, and in Journalism from the University of Roma Tre. After a series of dance-related
                  injuries, she found a transformative connection to Yoga and the Gyrotonic® Method, beginning her
                  training at The White Cloud Studio in Rome.
                </p>
                <p>
                  In 2012, she moved to San Francisco, where she became a certified yoga instructor through Yoga Tree
                  SF. Her teaching spans both coasts of the U.S., with classes and workshops throughout the Bay Area and
                  now in New York City.
                </p>
                <p>
                  Francesca is a Certified Gyrotonic® Instructor with advanced training in specialized equipment,
                  including the Gyrotoner®, Archway, Jumping-Stretching Board, and Gyrotonic® for Dancers. She completed
                  her Level 1 training in San Francisco and Level 2 in NYC. Her practice is grounded in helping
                  individuals reconnect with their bodies and honor the physical and emotional intelligence within.
                </p>
                <p>
                  She is also the co-founder of KAFRA Collective, a New York-based contemporary dance company, and a
                  Certified Health Coach trained at the Institute for Integrative Nutrition.
                </p>
                <p>
                  Whether teaching yoga, Gyrotonic®, or coaching, Francesca brings her lifelong love of movement,
                  creativity, and mindful embodiment to every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Certifications */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">
              Professional Background
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Francesca's extensive training and experience form the foundation of The A/Method's unique approach.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 rounded-full bg-slate-100 p-4">
                <Dumbbell className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-cormorant">Professional Dancer</h3>
              <p className="mt-4 text-center text-slate-600">
                Co-founder of a contemporary dance company in NYC with years of professional performance experience,
                bringing deep understanding of movement and body awareness.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 rounded-full bg-slate-100 p-4">
                <Award className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-cormorant">Certified Expert</h3>
              <p className="mt-4 text-center text-slate-600">
                Holds certifications in yoga, Gyrotonic, and Integrative Nutrition Health Coaching, providing a
                comprehensive foundation for holistic wellness guidance.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 rounded-full bg-slate-100 p-4">
                <BookOpen className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-cormorant">Academic Background</h3>
              <p className="mt-4 text-center text-slate-600">
                Unique foundation in literature, philosophy, and journalism informing a multidimensional approach to
                wellness that addresses mind, body, and spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The A/Method Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">
              The A/Method Philosophy
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our holistic approach integrates movement, nutrition, and mindfulness to create a comprehensive wellness
              experience.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-y-6 border-l-2 border-slate-200 pl-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-cormorant">Mindful Movement</h3>
                <p className="mt-2 text-slate-600">
                  Our approach to physical activity focuses on intentional movement that builds strength, flexibility,
                  and body awareness. Drawing from dance, yoga, and Gyrotonic principles, we create personalized
                  movement practices that honor your body's unique needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-cormorant">Holistic Nutrition</h3>
                <p className="mt-2 text-slate-600">
                  We believe that nourishment goes beyond counting calories. Our nutritional guidance focuses on whole
                  foods that support your body's natural functions, increase energy, and promote overall wellbeing,
                  tailored to your individual needs and lifestyle.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 border-l-2 border-slate-200 pl-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-cormorant">Mind-Body Connection</h3>
                <p className="mt-2 text-slate-600">
                  The A/Method recognizes the powerful connection between mental and physical health. Our practices
                  incorporate mindfulness techniques that reduce stress, improve focus, and foster a deeper connection
                  with yourself.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-cormorant">Personalized Approach</h3>
                <p className="mt-2 text-slate-600">
                  We understand that each person's wellness journey is unique. Whether through private sessions, group
                  experiences, or our digital content, The A/Method provides personalized guidance that meets you where
                  you are and helps you progress at your own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image21-qYcP4xRs40KbMa8EwL26nu2nYU9cPX.jpeg"
            alt="Movement"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-cormorant">
              Experience The A/Method
            </h2>
            <p className="mt-4 text-lg text-white">
              Discover how our personalized approach to wellness can transform your relationship with movement and
              nutrition.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10 bg-slate-900/40 w-full sm:w-auto"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
