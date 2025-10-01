import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowRight, 
  BarChart3,
  Clock,
  DollarSign,
  ShoppingCart,
  Zap,
  Brain,
  Shield
} from "lucide-react";

const proofPoints = [
  {
    id: "finserv-uplift",
    title: "Operational Uplift for FinServ",
    description: "Streamlined financial services operations through intelligent automation and workflow optimization.",
    metrics: [
      { label: "Cycle time reduced", value: "37%", icon: TrendingDown, trend: "positive" },
      { label: "Errors down", value: "52%", icon: TrendingDown, trend: "positive" }
    ],
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    industry: "Financial Services"
  },
  {
    id: "data-platform",
    title: "Data Platform Modernization",
    description: "Complete data infrastructure overhaul enabling faster insights and cost optimization.",
    metrics: [
      { label: "Time-to-insight improved", value: "3.4×", icon: Clock, trend: "positive" },
      { label: "Costs optimized", value: "28%", icon: DollarSign, trend: "positive" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1ODgxNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    industry: "Technology"
  },
  {
    id: "ecommerce-replatform",
    title: "E-commerce Replatform",
    description: "Modern e-commerce platform implementation driving significant conversion improvements.",
    metrics: [
      { label: "Conversion up", value: "19%", icon: TrendingUp, trend: "positive" },
      { label: "Cart abandonment down", value: "12%", icon: TrendingDown, trend: "positive" }
    ],
    image: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    industry: "E-commerce"
  }
];

export function ProofOfImpact() {
  return (
    <section className="py-16 md:py-32 px-4 bg-[var(--color-section-proof)]">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how our strategies have transformed industries. These proof points highlight measurable outcomes and tangible success across diverse business challenges.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {proofPoints.map((proof, index) => (
            <Card key={proof.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={proof.image}
                    alt={proof.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {proof.industry}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="mb-3">{proof.title}</CardTitle>
                <CardDescription className="mb-6">{proof.description}</CardDescription>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {proof.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-4 bg-secondary/20 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <metric.icon className="h-5 w-5 text-primary mr-2" />
                        <span className="text-2xl font-bold text-primary">{metric.value}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Capabilities */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="mb-4">Innovation at Scale</h3>
            <p className="text-muted-foreground">
              Our comprehensive approach to AI innovation drives measurable transformation across every aspect of your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div className="text-lg font-semibold mb-1">AI-First Approach</div>
              <div className="text-sm text-muted-foreground">Every solution leverages advanced AI to maximize efficiency and insights</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-lg font-semibold mb-1">Enterprise Security</div>
              <div className="text-sm text-muted-foreground">Bank-grade security protocols ensure your data never leaves your environment</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="text-lg font-semibold mb-1">Rapid Deployment</div>
              <div className="text-sm text-muted-foreground">CI-native tools and automated processes accelerate time-to-value</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-lg font-semibold mb-1">Measurable ROI</div>
              <div className="text-sm text-muted-foreground">Data-driven outcomes with transparent metrics and performance tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}