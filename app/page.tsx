"use client"

import { useState } from "react"
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  Smartphone,
  Monitor,
  Download,
  Users,
  Globe,
  Bitcoin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: BarChart3,
      title: "Portfolio Tracking",
      description:
        "Track your crypto investments across multiple exchanges with real-time updates and comprehensive analytics.",
      image: "/portfolio-desktop.png",
      mobile: "/portfolio-mobile.png",
    },
    {
      icon: Monitor,
      title: "Dashboard",
      description: "Get a complete overview of your portfolio with detailed charts, performance metrics, and profit/loss tracking.",
      image: "/dashboard-desktop.png",
      mobile: "/dashboard-mobile.png",
    },
    {
      icon: Zap,
      title: "Transaction History",
      description: "Automatically sync transactions from Binance, Bybit, and OKX. Import CSV for complete history.",
      image: "/transaction-desktop.png",
      mobile: "/transaction-mobile.png",
    },
  ]

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50M+", label: "Assets Tracked" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ]

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
              {/* <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a> */}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="https://web.cryptofolio.io.vn" target="_blank" rel="noopener noreferrer">
                  Get Started
                </Link>
              </Button>
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
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-3 bg-white"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div> */}
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative bg-white rounded-2xl border border-gray-200 p-4 shadow-xl">
              <Image
                src="/dashboard-desktop.png"
                alt="CryptoFolio Dashboard"
                width={1000}
                height={600}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
      </section>

      {/* Features Section */}
      <section id='features' className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-blue-50 border-blue-200"
                      : "bg-white border-gray-200 hover:border-gray-300 shadow-sm"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${activeFeature === index ? "bg-blue-600" : "bg-gray-100"}`}>
                        <feature.icon
                          className={`h-6 w-6 ${activeFeature === index ? "text-white" : "text-gray-600"}`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="col-span-2 relative">
              <Tabs defaultValue="desktop" className="w-full">
                <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2 mb-6 bg-white border border-gray-200">
                  <TabsTrigger
                    value="mobile"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <Smartphone className="h-4 w-4 mr-2" />
                    Mobile
                  </TabsTrigger>
                  <TabsTrigger
                    value="desktop"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <Monitor className="h-4 w-4 mr-2" />
                    Desktop
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="mobile" className="space-y-4">
                  <div className="relative bg-white rounded-2xl border border-gray-200 p-4 shadow-lg">
                    <div className="mx-auto w-64 h-96 bg-gray-100 rounded-3xl p-2 border border-gray-200">
                      <Image
                        src={features[activeFeature].mobile}
                        alt={`${features[activeFeature].title} - Mobile View`}
                        width={240}
                        height={380}
                        className="rounded-2xl w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-gray-900 font-semibold">{features[activeFeature].title} - Mobile</h3>
                    <p className="text-gray-600 text-sm">Optimized for mobile devices with touch-friendly interface</p>
                  </div>
                </TabsContent>

                <TabsContent value="desktop" className="space-y-4">
                  <div className="relative bg-white rounded-2xl border border-gray-200 p-4 shadow-lg">
                    <Image
                      src={features[activeFeature].image}
                      alt={`${features[activeFeature].title} - Desktop View`}
                      width={600}
                      height={400}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-gray-900 font-semibold">{features[activeFeature].title} - Desktop</h3>
                    <p className="text-gray-600 text-sm">
                      Full desktop experience with advanced controls and detailed views
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
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

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, upgrade when you need more advanced features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                description: "Perfect for getting started",
                features: [
                  "Up to 3 portfolios",
                  "Basic analytics",
                  "Manual transaction entry",
                  "Web app access",
                  "Community support",
                ],
                popular: false,
              },
              {
                name: "Pro",
                price: "$9.99",
                period: "per month",
                description: "For serious traders",
                features: [
                  "Unlimited portfolios",
                  "Advanced analytics",
                  "Exchange API sync",
                  "Mobile app access",
                  "Performance tracking",
                  "CSV import/export",
                  "Priority support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$29.99",
                period: "per month",
                description: "For professional teams",
                features: [
                  "Everything in Pro",
                  "Team collaboration",
                  "Advanced reporting",
                  "Custom integrations",
                  "White-label options",
                  "Dedicated support",
                  "SLA guarantee",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "bg-blue-50 border-blue-200 shadow-lg" : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-gray-900 text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300"
                    }`}
                  >
                    {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

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
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="https://web.cryptofolio.io.vn" target="_blank" rel="noopener noreferrer">
                Get Started
              </Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
          {/* <p className="text-blue-100 text-sm mt-4">Free 14-day trial • No credit card required • Cancel anytime</p> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold text-gray-900">CryptoFolio</span>
              </div>
              <p className="text-gray-600 mb-4">
                The most advanced crypto portfolio tracker with real-time synchronization and comprehensive analytics.
              </p>
              <div className="flex space-x-4">{/* Social media icons would go here */}</div>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 CryptoFolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
