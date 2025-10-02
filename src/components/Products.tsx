import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  Star,
  Users,
  BarChart3,
  Zap,
  Brain,
  Shield,
  Clock,
} from "lucide-react"; // Keep these icons for non-product uses (Star, Clock, Brain, etc.)

// 1. Import your custom PNG image path
// Assuming the PNG is located at "@/assets/images/autofix_icon.png"
// We are importing the image URL as a string.
import AutofixIconPath from "@/assets/images/autofix_icon.png";

export function Products() {
  const featuredProduct = {
    id: "rhaid-autofix",
    name: "Rhaid Autofix",
    description:
      "Our flagship code maintenance and optimization tool that automatically cleans and fixes codebases with enterprise-grade security.",
    longDescription:
      "Rhaid Autofix by Camwood Inc. automatically cleans and fixes codebases. It's a secure, CI-native tool that corrects imports and keeps your repositories clean without your code ever leaving your environment. Built for teams that value security and code quality.",
    image:
      "https://images.unsplash.com/photo-1649451844859-fdd73bf10f04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Automatic code fixing",
      "Import corrections",
      "CI/CD integration",
      "Secure processing",
      "Repository cleaning",
      "Zero code exposure",
    ],
    stats: {
      users: "Enterprise Teams",
      accuracy: "Automated",
      processing: "CI-Native",
    },
    status: "available",
    // 2. Assign the PNG path string to the icon property
    icon: AutofixIconPath,
  };

  const upcomingProducts = [
    {
      id: "rhaid-liftoff",
      name: "Rhaid Liftoff",
      description:
        "Advanced deployment and scaling platform for rapid application development and production deployment with zero-downtime strategies.",
      image:
        "https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NTg4MTM5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      releaseDate: "Q2 2025",
      status: "coming_soon",
      icon: Zap,
    },
    {
      id: "oba-x",
      name: "OBA X",
      description:
        "Advanced AI-driven workflow orchestrator that intelligently automates complex business processes. OBA X learns from your operations to optimize decision-making, reduce manual overhead, and seamlessly integrate with existing systems for maximum efficiency.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      releaseDate: "Q3 2025",
      status: "coming_soon",
      icon: Shield,
    },
    {
      id: "trade-advisor",
      name: "Trade Advisor",
      description:
        "AI-powered trading analysis tool that allows users to upload screenshots of trade candles and receive intelligent trading advice based on technical indicators and market patterns. Leverages advanced pattern recognition to provide actionable insights for informed trading decisions.",
      image:
        "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU4ODEzOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      releaseDate: "Q4 2025",
      status: "coming_soon",
      icon: BarChart3,
    },
  ];

  return (
    <section
      id="products"
      className="py-16 md:py-32 px-4 bg-[var(--color-section-products)]"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our suite of AI-powered products designed to transform your
            business operations and drive innovation across industries.
          </p>
        </div>

        {/* Featured Product Icon and Title */}
        <div className="flex items-center gap-3 mb-4">
          {featuredProduct.icon && (
            <img
              src={featuredProduct.icon}
              alt={`${featuredProduct.name} icon`}
              className="h-6 w-6 object-contain"
            />
          )}
          <h3 className="mb-0 font-bold text-2xl">{featuredProduct.name}</h3>
        </div>

        {/* Featured Product */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge
                  variant="default"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Star className="h-3 w-3 mr-1" />
                  Featured Product
                </Badge>
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  Available Now
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {featuredProduct.longDescription}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">
                    {featuredProduct.stats.users}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Active Users
                  </div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <BarChart3 className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">
                    {featuredProduct.stats.accuracy}
                  </div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <Zap className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">
                    {featuredProduct.stats.processing}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Processing
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {featuredProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-3 hover:scale-105 transition-all duration-200 hover:border-primary hover:text-primary"
                    onClick={() =>
                      window.open(
                        "https://github.com/marketplace/actions/rhaid-autofix",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-3 hover:scale-105 transition-all duration-200 hover:border-primary hover:text-primary"
                    onClick={() =>
                      window.open(
                        "https://marketplace.visualstudio.com/items?itemName=CamwoodInc.rhaid-vscode",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-3 hover:scale-105 transition-all duration-200 hover:border-primary hover:text-primary"
                    onClick={() =>
                      window.open(
                        "https://pypi.org/project/rhaid-autofix/",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zM7.5 9v6h1.5V9H7.5zm3-3v12h1.5V6H10.5zm3 1.5v9h1.5v-9H13.5zm3 1.5v6h1.5V9H16.5z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  <span className="font-semibold">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Products */}
        <div>
          <div className="text-center mb-12">
            <h3 className="mb-4">Coming Soon</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with our upcoming AI solutions designed to
              meet the evolving needs of modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Coming Soon Overlay */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200"
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    Coming Soon
                  </Badge>
                </div>

                <CardHeader className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  {/* Upcoming Product Icon and Title */}
                  <div className="flex items-center gap-2 mb-3">
                    {/* These icons remain as lucide-react components, which are SVGs */}
                    {product.icon && (
                      <product.icon className="h-5 w-5 text-primary" />
                    )}
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </div>

                  <CardDescription className="mb-4 line-clamp-3">
                    {product.description}
                  </CardDescription>

                  <div className="flex justify-center">
                  <Button
              size="lg"
              className="group hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Notify Me
            </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
          <h3 className="mb-4">Ready to Optimize Your Codebase?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join development teams already using Rhaid Autofix to maintain
            clean, error-free codebases. Experience automated code fixing with
            enterprise-grade security.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="group hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Try Rhaid Autofix
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
