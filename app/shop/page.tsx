import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export default function ShopPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image22-5Pvbegp5ppGoyen9ahAy4ajpUUsavj.jpeg"
            alt="The A/Method Shop"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6 py-32 md:py-40 text-center lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-cormorant">
              Shop
            </h1>
            <p className="mt-6 text-xl text-white">Premium products to enhance your wellness journey</p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <Clock className="h-16 w-16 text-slate-700" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">Coming Soon</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We're currently curating a collection of premium wellness products to complement your A/Method experience.
              Our shop will feature carefully selected items that align with our philosophy of mindful movement,
              nourishment, and holistic well-being.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Check back soon or sign up for our newsletter to be the first to know when our shop launches.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/contact">
                <Button className="group bg-slate-700 hover:bg-slate-800">
                  Join Our Mailing List
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">
              What to Expect
            </h2>
            <p className="mt-4 text-lg text-slate-600">Our upcoming shop will feature these categories and more</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Movement Essentials",
                description: "High-quality mats, props, and accessories to enhance your practice",
              },
              {
                title: "Wellness Products",
                description: "Carefully selected items to support your overall well-being",
              },
              {
                title: "A/Method Apparel",
                description: "Comfortable, stylish clothing designed for movement and everyday wear",
              },
              {
                title: "Digital Content",
                description: "Specialized tutorials and programs for continued learning",
              },
              {
                title: "Nutritional Supplements",
                description: "Premium supplements to complement your wellness routine",
              },
              {
                title: "Gift Cards",
                description: "Share the gift of wellness with friends and loved ones",
              },
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 font-cormorant mb-2">{category.title}</h3>
                <p className="text-slate-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image25-U2uR9idVbCBHu7lf0P0B3isqTXoPt0.jpeg"
            alt="The A/Method Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-cormorant">
              In the Meantime...
            </h2>
            <p className="mt-4 text-lg text-white">
              Explore our services and begin your wellness journey with The A/Method
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
