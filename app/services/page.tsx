import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Calendar, Users, PlayCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image16-olOBw4oz3lD2taEXziITEEzzdJ59PG.jpeg"
            alt="The A/Method Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6 py-32 md:py-40 text-center lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-cormorant">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-white">
              Experience The A/Method through our premium wellness offerings, each designed to provide a transformative
              approach to movement and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">
              Premium Wellness Experiences
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The A/Method offers multiple ways to experience our unique approach to wellness, from personalized
              one-on-one sessions to flexible digital content. Each service is designed with the same commitment to
              quality and holistic well-being.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="h-1 w-20 bg-slate-700 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Private Sessions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div className="flex flex-col">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image21-qYcP4xRs40KbMa8EwL26nu2nYU9cPX.jpeg"
                alt="Private Sessions"
                width={600}
                height={800}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="mt-6 flex justify-center">
                <div className="bg-slate-700 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-baseline justify-center">
                    <span className="text-white font-cormorant text-3xl font-bold">$250</span>
                    <span className="text-white font-cormorant text-lg ml-1">/hour</span>
                  </div>
                  <p className="text-white text-sm mt-1 text-center">Premium one-on-one experience</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-slate-700 mr-2" />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-cormorant">Private Sessions</h2>
              </div>
              <p className="mt-4 text-lg text-slate-600">
                Experience the full power of The A/Method with personalized one-on-one sessions tailored specifically to
                your needs, goals, and physical condition. Each session is a comprehensive wellness experience that
                integrates movement, mindfulness, and nutritional guidance.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Fully personalized approach</span> - Custom-designed plans based on
                    your individual fitness level, goals, and physical condition
                  </p>
                </div>
                <div className="flex">
                  <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Technical focus</span> - Detailed attention to form, body awareness,
                    and proper technique
                  </p>
                </div>
                <div className="flex">
                  <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Holistic integration</span> - Combines elements of dance, yoga,
                    Gyrotonic, and strength training
                  </p>
                </div>
                <div className="flex">
                  <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Nutritional guidance</span> - Personalized recommendations to
                    complement your movement practice
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact?service=private">
                  <Button className="group bg-slate-700 hover:bg-slate-800">
                    Book a Private Session
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Group Sessions */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-slate-700 mr-2" />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-cormorant">
                  Private Group Sessions
                </h2>
              </div>
              <p className="mt-4 text-lg text-slate-600">
                Create a memorable wellness experience for your group, whether it's a corporate team-building event,
                special celebration, or retreat. Our private group sessions are customized to your group's needs and
                preferences, creating a shared experience that energizes and inspires.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Customized group experience</span> - Tailored to your group's size,
                    fitness levels, and preferences
                  </p>
                </div>
                <div className="flex">
                  <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Versatile formats</span> - Options include cardio, yoga, stretching,
                    mat work, and strength training
                  </p>
                </div>
                <div className="flex">
                  <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Team building focus</span> - Promotes connection, communication, and
                    shared achievement
                  </p>
                </div>
                <div className="flex">
                  <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Special event options</span> - Perfect for corporate retreats,
                    bachelorette parties, and celebrations
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact?service=group">
                  <Button className="group bg-slate-700 hover:bg-slate-800">
                    Inquire About Group Sessions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col order-1 lg:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image8-E6szTRjWUtAjfXWT00M32NMG9pAyDA.jpeg"
                alt="Private Group Sessions"
                width={600}
                height={800}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="mt-6 flex justify-center">
                <div className="bg-slate-700 p-6 rounded-2xl shadow-lg">
                  <p className="text-white font-cormorant text-xl font-medium text-center">Custom pricing</p>
                  <p className="text-white text-sm mt-1 text-center">Based on group size and specific needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Class Library */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <PlayCircle className="h-6 w-6 text-slate-700 mr-2" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-cormorant">
                On-Demand Class Library
              </h2>
            </div>
            <p className="mt-4 text-lg text-slate-600">
              Access The A/Method anytime, anywhere with our premium digital content library. Our subscription service
              offers a diverse collection of high-quality, pre-recorded sessions that bring Francesca's unique approach
              to wellness into your home or on your travels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image6-KopL5QH1wbUqxlIPzfYm21z4kY4NaZ.jpeg"
                  alt="Movement Series"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-slate-900 text-xs font-medium px-2 py-1 rounded">
                    Movement Series
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-cormorant">Full-Body Flow</CardTitle>
                <CardDescription>45 minutes • All levels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  A comprehensive session that combines dance-inspired movement, strength training, and flexibility work
                  to energize your entire body.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image22-5Pvbegp5ppGoyen9ahAy4ajpUUsavj.jpeg"
                  alt="Technique Focus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-slate-900 text-xs font-medium px-2 py-1 rounded">
                    Technique Focus
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-cormorant">Precision & Alignment</CardTitle>
                <CardDescription>30 minutes • Intermediate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Dive deep into proper form and alignment with this technique-focused session that will enhance your
                  body awareness and movement quality.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image25-U2uR9idVbCBHu7lf0P0B3isqTXoPt0.jpeg"
                  alt="Recovery Series"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-slate-900 text-xs font-medium px-2 py-1 rounded">
                    Recovery Series
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-cormorant">Gentle Restoration</CardTitle>
                <CardDescription>25 minutes • All levels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  A restorative session focused on gentle stretching, release techniques, and mindful breathing to
                  promote recovery and relaxation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-cormorant">Subscription Details</h3>
                <p className="mt-4 text-slate-600">
                  Our digital subscription gives you unlimited access to our growing library of premium content, with
                  new videos added weekly. Experience The A/Method on your schedule, with the flexibility to practice
                  whenever and wherever works for you.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex">
                    <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                    <p className="text-slate-600">
                      <span className="font-semibold">Extensive content library</span> - Access to 50+ high-quality 4K
                      videos with new content added weekly
                    </p>
                  </div>
                  <div className="flex">
                    <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                    <p className="text-slate-600">
                      <span className="font-semibold">Diverse session types</span> - Movement, technique, nutrition, and
                      mindfulness content
                    </p>
                  </div>
                  <div className="flex">
                    <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                    <p className="text-slate-600">
                      <span className="font-semibold">Progressive difficulty</span> - Content organized by level to
                      support your growth
                    </p>
                  </div>
                  <div className="flex">
                    <Check className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0" />
                    <p className="text-slate-600">
                      <span className="font-semibold">Flexible access</span> - Stream on any device, anytime, anywhere
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 font-cormorant text-center">
                  Premium Digital Subscription
                </h3>
                <div className="mt-6 flex items-baseline justify-center">
                  <span className="text-5xl font-bold tracking-tight text-slate-900 font-cormorant">$250</span>
                  <span className="text-xl text-slate-600 font-cormorant">/month</span>
                </div>
                <p className="mt-2 text-center text-slate-600">Unlimited access to all content</p>
                <ul className="mt-8 space-y-3 text-sm">
                  <li className="flex">
                    <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                    <span>50+ premium video sessions</span>
                  </li>
                  <li className="flex">
                    <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                    <span>New content weekly</span>
                  </li>
                  <li className="flex">
                    <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                    <span>Stream on any device</span>
                  </li>
                  <li className="flex">
                    <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                    <span>Cancel anytime</span>
                  </li>
                </ul>
                <div className="mt-8 w-full">
                  <Button className="w-full bg-slate-700 hover:bg-slate-800" disabled>
                    Coming Soon
                  </Button>
                  <Link href="/library-preview" className="w-full">
                    <Button variant="outline" className="w-full mt-3">
                      Preview Library
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Find answers to common questions about our services and approach.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl divide-y divide-slate-200">
            {[
              {
                question: "How do I know which service is right for me?",
                answer:
                  "The best service for you depends on your goals, schedule, and preferences. Private sessions offer the most personalized experience and are ideal if you have specific goals or conditions. Group sessions are perfect for shared experiences with friends or colleagues. The digital subscription provides flexibility to practice on your own schedule. Feel free to contact us for a personalized recommendation.",
              },
              {
                question: "What should I wear to a session?",
                answer:
                  "Comfortable, form-fitting athletic wear that allows for a full range of motion is ideal. For most sessions, leggings or fitted athletic pants and a supportive top work well. Socks are optional depending on the type of session.",
              },
              {
                question: "Do I need prior experience with movement or dance?",
                answer:
                  "No prior experience is necessary. The A/Method is designed to be accessible to all levels, from beginners to advanced practitioners. Each service can be tailored to your current fitness level and experience.",
              },
              {
                question: "Can I cancel or reschedule a private session?",
                answer:
                  "Yes, private sessions can be rescheduled or canceled with at least 24 hours notice. Cancellations with less than 24 hours notice may be subject to a fee. Please refer to our cancellation policy for more details.",
              },
              {
                question: "How often is new content added to the digital library?",
                answer:
                  "New content is added to our digital library weekly, with 2-4 new videos each week. These include a mix of movement sessions, technique tutorials, and nutritional guidance.",
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-medium text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image9-6vn1vfnVEdVObVMAH8VZT6GEH43F6c.jpeg"
            alt="The A/Method Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-cormorant">
              Ready to Transform Your Wellness Journey?
            </h2>
            <p className="mt-4 text-lg text-white">
              Choose the service that best fits your lifestyle and take the first step toward a more balanced, mindful
              approach to movement and nutrition.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10 bg-slate-900/40 w-full sm:w-auto"
                >
                  Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
