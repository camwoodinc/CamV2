import { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3, 
  Users,
  DollarSign,
  Clock,
  ArrowRight,
  Lightbulb
} from 'lucide-react';

export function AIDeploymentArticle() {
  const [deploymentSize, setDeploymentSize] = useState([65]);
  const [riskTolerance, setRiskTolerance] = useState([40]);
  
  // Calculate metrics based on slider values
  const calculateMetrics = () => {
    const size = deploymentSize[0];
    const risk = riskTolerance[0];
    
    return {
      implementation_time: Math.round(4 + (size * 0.08)),
      budget_requirement: Math.round(50 + (size * 2.5)),
      success_probability: Math.round(95 - (risk * 0.3) - (size * 0.2)),
      roi_timeline: Math.round(6 + (size * 0.1)),
      resource_allocation: Math.round(20 + (size * 0.5))
    };
  };

  const metrics = calculateMetrics();

  const riskFactors = [
    {
      factor: "Data Quality & Availability",
      impact: "High",
      mitigation: "Comprehensive data audit and cleaning protocols",
      icon: Shield
    },
    {
      factor: "Change Management",
      impact: "Medium", 
      mitigation: "Phased rollout with stakeholder training",
      icon: Users
    },
    {
      factor: "Technical Integration",
      impact: "Medium",
      mitigation: "API-first approach with robust testing frameworks",
      icon: Zap
    },
    {
      factor: "Regulatory Compliance",
      impact: "High",
      mitigation: "Built-in compliance monitoring and audit trails", 
      icon: AlertTriangle
    }
  ];

  const deploymentPhases = [
    {
      phase: "Discovery & Assessment",
      duration: "2-4 weeks",
      deliverables: "Current state analysis, opportunity identification, technical requirements",
      completion: 100
    },
    {
      phase: "Solution Design",
      duration: "3-6 weeks", 
      deliverables: "Architecture blueprint, integration strategy, risk mitigation plan",
      completion: 85
    },
    {
      phase: "Development & Testing",
      duration: "8-16 weeks",
      deliverables: "Core system build, quality assurance, security validation",
      completion: 60
    },
    {
      phase: "Deployment & Optimization",
      duration: "4-8 weeks",
      deliverables: "Production rollout, performance tuning, user training",
      completion: 25
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[var(--color-section-article)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
    
        <div className="text-center pb-6">
          <h2 className="mb-8">
            Right-Sizing AI Implementation: A Strategic Framework for Sustainable Growth
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Navigate the complexities of AI deployment with our proven methodology that balances ambition 
            with pragmatism, ensuring measurable business impact while managing implementation risks.
          </p>
        </div>

        <div className="mb-16">
          <div className="aspect-[16/9] relative overflow-hidden rounded-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1664526936810-ec0856d31b92?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI Implementation Framework"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-90">Strategic AI Implementation Framework</p>
              <h3 className="text-xl font-semibold">Camwood's Proven Methodology</h3>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The difference between AI projects that deliver transformational value and those that struggle 
                to gain traction often comes down to one critical factor: right-sizing the implementation. 
                Our research across 200+ enterprise AI deployments reveals that organizations achieving 
                sustained competitive advantage follow a disciplined approach that matches solution complexity 
                to organizational readiness, balances innovation with operational stability, and prioritizes 
                measurable business outcomes over technical sophistication.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Sizing Calculator */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Dial In Right-Sized Implementation
              </CardTitle>
              <p className="text-muted-foreground">
                Adjust the parameters below to see how deployment size and risk tolerance impact your project metrics.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Deployment Size Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Implementation Scope</label>
                  <Badge variant={deploymentSize[0] < 30 ? "secondary" : deploymentSize[0] < 70 ? "outline" : "destructive"}>
                    {deploymentSize[0] < 30 ? "Conservative" : deploymentSize[0] < 70 ? "Balanced" : "Aggressive"}
                  </Badge>
                </div>
                <Slider
                  value={deploymentSize}
                  onValueChange={setDeploymentSize}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Pilot Project</span>
                  <span>Department Wide</span>
                  <span>Enterprise Scale</span>
                </div>
              </div>

              {/* Risk Tolerance Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Risk Tolerance</label>
                  <Badge variant={riskTolerance[0] < 30 ? "secondary" : riskTolerance[0] < 70 ? "outline" : "destructive"}>
                    {riskTolerance[0] < 30 ? "Conservative" : riskTolerance[0] < 70 ? "Moderate" : "High Risk"}
                  </Badge>
                </div>
                <Slider
                  value={riskTolerance}
                  onValueChange={setRiskTolerance}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Proven Solutions</span>
                  <span>Balanced Innovation</span>
                  <span>Cutting Edge</span>
                </div>
              </div>

              {/* Dynamic Metrics Display */}
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{metrics.implementation_time}</div>
                  <div className="text-sm text-muted-foreground">Months to Deploy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">${metrics.budget_requirement}K</div>
                  <div className="text-sm text-muted-foreground">Budget Required</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{metrics.success_probability}%</div>
                  <div className="text-sm text-muted-foreground">Success Probability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{metrics.roi_timeline}</div>
                  <div className="text-sm text-muted-foreground">Months to ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{metrics.resource_allocation}</div>
                  <div className="text-sm text-muted-foreground">Team Size</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk Assessment Framework */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="mb-4">
              Comprehensive Risk Assessment Framework
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to identifying, evaluating, and mitigating potential risks 
              ensures successful AI implementation across diverse organizational contexts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {riskFactors.map((risk, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <risk.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="leading-tight">{risk.factor}</h4>
                      <Badge variant={risk.impact === "High" ? "destructive" : "outline"}>
                        {risk.impact} Impact
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="text-muted-foreground font-medium">
                      Mitigation Strategy:
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {risk.mitigation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Key Insights */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="mb-4">Key Strategic Insights</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Evidence-based principles that distinguish successful AI implementations from failed initiatives, 
              derived from our comprehensive analysis of enterprise deployments.
            </p>
          </div>
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h4>Start Small, Scale Smart</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    Organizations that begin with focused pilot projects achieve 3x higher success rates 
                    than those attempting enterprise-wide implementations.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                  <h4>Measure What Matters</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    Clear ROI metrics established upfront correlate with 65% faster time-to-value 
                    and stronger stakeholder confidence throughout deployment.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                  <h4>People-First Approach</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    Change management and user adoption strategies account for 40% of project success, 
                    making them as critical as technical implementation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="space-y-6">
              <h3>Ready to Right-Size Your AI Implementation?</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Let's discuss how our proven framework can help you navigate the complexities of AI deployment 
                while maximizing business value and minimizing risk.
              </p>
              <Button size="lg" className="group">
                Start Your Strategic Assessment
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}