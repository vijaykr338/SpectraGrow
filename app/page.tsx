import Link from "next/link"
import { Button } from "@/components/ui/button"
import type React from "react" // Added import for React

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-radial from-green-dark via-green-light to-lime flex flex-col items-center justify-center text-white p-4">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff10"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <main className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">SpectraGrow</h1>
        <p className="text-2xl md:text-3xl font-light mb-8">Nurturing Earth&apos;s Potential, One Spectrum at a Time</p>
        <p className="text-xl mb-12 max-w-2xl">
          Harness the power of AI and hyperspectrometry to unlock your soil&apos;s hidden potential. SpectraGrow brings
          cutting-edge technology to your fields, ensuring sustainable growth and bountiful harvests.
        </p>
        <Link href="/upload">
          <Button size="lg" className="bg-orange hover:bg-orange/90 text-white">
            Start Your Soil Journey
          </Button>
        </Link>
      </main>
      <footer className="absolute bottom-4 text-sm opacity-70">
        © 2025 SpectraGrow. Cultivating a greener future with AI.
      </footer>
      {/* Decorative Elements */}
      <div className="absolute left-10 top-10 animate-pulse">
        <LeafIcon className="w-16 h-16 text-lime opacity-50" />
      </div>
      <div className="absolute right-10 bottom-10 animate-pulse delay-300">
        <SproutIcon className="w-20 h-20 text-green-light opacity-50" />
      </div>
    </div>
  )
}

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function SproutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  )
}

