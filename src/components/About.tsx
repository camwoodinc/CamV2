import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Award, 
  Users, 
  Target, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "200+", icon: Award },
  { label: "Satisfied Clients", value: "150+", icon: Users },
  { label: "Industry Verticals", value: "8", icon: Target },
  { label: "Global Regions", value: "12+", icon: Lightbulb },
];

const values = [
  {
    title: "Outcome-First",
    description: "We anchor decisions to business metrics—every sprint, every deliverable."
  },
  {
    title: "Transparent by Design",
    description: "Integrated dashboards & reviews keep stakeholders aligned and informed."
  },
  {
    title: "Right-Sized Teams",
    description: "Specialists on demand to accelerate critical work without bloat."
  },
  {
    title: "Impact-Focused",
    description: "No wasted effort—we focus on what really matters and deliver measurable results."
  }
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-[var(--color-section-about)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Making Bold Ideas Practical
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Camwood, we exist to make big ideas real. Our expertise and execution ensure progress you can see, 
                value you can measure, and momentum that never slows.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From strategy to scale, our teams align around your metrics—so progress is visible, value is provable, 
                and momentum never stalls. We combine deep domain expertise with rigorous execution to deliver outcomes that last.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">The Camwood Edge</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why choose Camwood? Because we don't just deliver projects—we deliver results that endure. Here's what sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h4 className="font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}