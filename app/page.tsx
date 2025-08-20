"use client"

import { useState } from "react"
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  Monitor,
  Users,
  Globe,
  Bitcoin,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  MonitorIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [currentView, setCurrentView] = useState<"mobile" | "desktop">("desktop")

  const features = [
    {
      icon: BarChart3,
      title: "Portfolio Tracking",
      description:
        "Track your crypto investments across multiple exchanges with real-time updates and comprehensive analytics.",
      desktopImage: "/portfolio-desktop.png",
      mobileImage: "/portfolio-mobile.png",
    },
    {
      icon: Monitor,
      title: "Dashboard",
      description:
        "Get a complete overview of your portfolio with detailed charts, performance metrics, and profit/loss tracking.",
      desktopImage: "/dashboard-desktop.png",
      mobileImage: "/dashboard-mobile.png",
    },
    {
      icon: Zap,
      title: "Transaction History",
      description: "Automatically sync transactions from Binance, Bybit, and OKX. Import CSV for complete history.",
      desktopImage: "/transaction-desktop.png",
      mobileImage: "/transaction-mobile.png",
    },
  ]

  // const stats = [
  //   { number: "10K+", label: "Active Users" },
  //   { number: "50M+", label: "Assets Tracked" },
  //   { number: "99.9%", label: "Uptime" },
  //   { number: "24/7", label: "Support" },
  // ]

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  const currentFeatureData = features[currentFeature]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-700">
                <Bitcoin className="size-4" />
              </div>
              <span className="text-xl font-bold text-gray-900">CryptoFolio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <Link href="https://web.cryptofolio.io.vn" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-200">🚀 Real-time Portfolio Tracking</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Track Your Crypto
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Portfolio
              </span>
              <br />
              Like a Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The most advanced crypto portfolio tracker with real-time sync across exchanges and comprehensive
              analytics. Available on web and mobile.
            </p>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="relative max-w-7xl mx-auto">
            <div className="relative bg-white rounded-2xl border border-gray-200 p-4 shadow-xl">
              <Image
                src="/dashboard-desktop.png"
                alt="CryptoFolio Dashboard"
                width={1280}
                height={900}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Available on All
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"> Devices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless experience across web, mobile, and tablet with real-time synchronization
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setCurrentView("desktop")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  currentView === "desktop" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <MonitorIcon className="h-4 w-4" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setCurrentView("mobile")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  currentView === "mobile" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Smartphone className="h-4 w-4" />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          <div className="space-y-12">
            <div className="w-full">
              <div className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                {/* Slider Navigation */}
                <div className="flex justify-between items-center mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevFeature}
                    className="border-gray-300 hover:bg-gray-50 bg-transparent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <currentFeatureData.icon className="h-5 w-5 text-blue-600" />
                      <span className="text-lg font-semibold text-gray-900">{currentFeatureData.title}</span>
                    </div>

                    {/* Feature indicators */}
                    <div className="flex space-x-2">
                      {features.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentFeature(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentFeature ? "bg-blue-600" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextFeature}
                    className="border-gray-300 hover:bg-gray-50 bg-transparent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Feature Image */}
                <div className="transition-all duration-500 ease-in-out flex justify-center">
                  {currentView === "desktop" ? (
                    <Image
                      src={currentFeatureData.desktopImage || "/placeholder.svg"}
                      alt={`${currentFeatureData.title} - Desktop`}
                      width={1400}
                      height={900}
                      className="rounded-lg w-full h-auto"
                    />
                  ) : (
                    <div className="flex justify-center">
                      <div className="relative">
                        {/* Mobile mockup frame */}
                        <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-xl">
                          <div className="bg-white rounded-[2rem] overflow-hidden">
                            <Image
                              src={currentFeatureData.mobileImage || "/placeholder.svg"}
                              alt={`${currentFeatureData.title} - Mobile`}
                              width={400}
                              height={600}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Feature Description */}
                <div className="text-center mt-6">
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    {currentFeatureData.description}
                    {currentView === "mobile"
                      ? " Optimized for mobile with touch-friendly interface and quick access to key metrics."
                      : " Full desktop experience with comprehensive charts and detailed analytics."}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Names Section */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    index === currentFeature
                      ? "bg-blue-50 border-blue-200 shadow-md"
                      : "bg-white border-gray-200 hover:border-gray-300 shadow-sm"
                  }`}
                  onClick={() => setCurrentFeature(index)}
                >
                  <CardHeader className="text-center pb-3">
                    <div className="flex justify-center mb-3">
                      <div className={`p-3 rounded-lg ${index === currentFeature ? "bg-blue-600" : "bg-gray-100"}`}>
                        <feature.icon
                          className={`h-6 w-6 ${index === currentFeature ? "text-white" : "text-gray-600"}`}
                        />
                      </div>
                    </div>
                    <CardTitle className="text-gray-900 text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-center">
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                {" "}
                CryptoFolio?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Real-Time Sync",
                description: "Automatic synchronization with Binance, Bybit, and OKX. Import CSV for complete history.",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Comprehensive portfolio analytics with profit/loss tracking and performance metrics.",
              },
              {
                icon: TrendingUp,
                title: "Performance Tracking",
                description: "Monitor your portfolio performance with detailed charts and historical data analysis.",
              },
              {
                icon: Users,
                title: "Multi-Portfolio Support",
                description: "Manage multiple portfolios and track different investment strategies separately.",
              },
              {
                icon: Globe,
                title: "Global Markets",
                description: "Support for 1000+ cryptocurrencies and tokens across all major exchanges.",
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Your data is encrypted with AES-256 encryption. We never store your private keys.",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-blue-600">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Crypto Portfolio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of traders who trust CryptoFolio to manage their investments. Start your free trial today -
            no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://web.cryptofolio.io.vn" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; 2025 CryptoFolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
