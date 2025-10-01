import React, { useState } from 'react'; // Import useState
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button"; // Assuming you have a Button component
import { 
  Brain, 
  Database, 
  Shield, 
  Zap, 
  BarChart3, 
  Bot,
  Cloud,
  Cpu,
  Network,
  ChevronDown, // Icon for 'Show More'
  ChevronUp // Icon for 'Show Less'
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ... (Your services array remains the same)
const services = [
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "We design, build, and deploy intelligent AI agents that automate complex tasks. Our solutions enhance decision-making and scale operations by transforming data into actionable insights, helping you achieve measurable outcomes with an autonomous workforce.",
    features: ["AI Agent Development", "Process Automation", "Decision Support Systems", "Autonomous Workflows"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: Cpu,
    title: "Software Development",
    description: "We deliver custom software that solves your most critical challenges. Our teams engineer scalable, secure, and user-centric applications, from ideation to launch. We focus on creating robust platforms that seamlessly integrate into your business and drive growth.",
    features: ["Custom Applications", "Platform Engineering", "System Integration", "User-Centric Design"],
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: Brain,
    title: "Advisory & Strategy",
    description: "We bring clarity to chaos. Our strategic roadmaps are meticulously crafted to align your teams around a shared vision and measurable value. We help you cut through the noise, prioritize initiatives, and define a clear, actionable path forward.",
    features: ["Strategic Planning", "Digital Transformation", "Technology Roadmaps", "Organizational Alignment"],
    image: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: Zap,
    title: "Workflow Optimization",
    description: "We streamline your business processes to boost efficiency and productivity. Our experts analyze current workflows to identify bottlenecks and implement smarter solutions. We eliminate manual effort and increase velocity, enabling your teams to focus on high-impact work.",
    features: ["Process Analysis", "Bottleneck Identification", "Automation Solutions", "Performance Optimization"],
    image: "https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: Cloud,
    title: "Platform Development & Optimization",
    description: "We build and refine the digital foundations of your business. Our focus is on creating high-performance, secure, and scalable platforms. We ensure your systems are robust, modern, and ready to support your growth, providing a flawless experience for your users.",
    features: ["Platform Architecture", "Performance Optimization", "Security Implementation", "Scalability Planning"],
    image: "https://images.unsplash.com/photo-1719255416441-ed77915f28de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Define constants for display logic
const INITIAL_DISPLAY_COUNT = 3; 

export function Services() {
  // State to track whether all services should be shown
  const [showAll, setShowAll] = useState(false);

  // Determine which services to display
  // If showAll is true, display all services. Otherwise, display the first INITIAL_DISPLAY_COUNT (3)
  const servicesToDisplay = showAll 
    ? services 
    : services.slice(0, INITIAL_DISPLAY_COUNT);

  // The total number of services
  const totalServices = services.length;
  // Check if we need a "Show More" button (i.e., if there are more than 3 services)
  const shouldShowToggleButton = totalServices > INITIAL_DISPLAY_COUNT;

  const ToggleIcon = showAll ? ChevronUp : ChevronDown;

  return (
    <section id="services" className="py-16 md:py-32 bg-[var(--color-section-services)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Tailored Solutions That Drive Results
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our suite of services is designed to guide your organization through every phase of growth and transformation. 
            We don't just offer services; we deliver integrated solutions that build resilience, foster innovation, and drive sustainable success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the servicesToDisplay array */}
          {servicesToDisplay.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              // Add a simple transition class for a smooth fade-in/out on the extra cards
              style={{ opacity: 1, transition: 'opacity 0.5s ease-in-out' }}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-2 rounded-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {service.title}
                </CardTitle>
                <CardDescription>
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {shouldShowToggleButton && (
          <div className="text-center mt-16"> 
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `Show All ${totalServices} Services`}
              <ToggleIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}