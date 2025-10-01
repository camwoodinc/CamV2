import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@camwood.com",
    description: "We respond within one business day",
  },
  {
    icon: MapPin,
    title: "Global Presence",
    details: "12+ Regions Worldwide",
    description: "Local expertise, global reach",
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "Within 1 Business Day",
    description: "Fast, reliable communication",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-32 bg-[var(--color-section-contact)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Ready to Create Lasting Impact?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Let's create solutions that outlast challenges. Share your goals
            with us and expect a response within one business day. Tell us a bit
            about your goals—we'll help you turn complex challenges into
            competitive advantages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName">First Name</label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName">Last Name</label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company">Company (Optional)</label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="purpose">Purpose of Contact</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the purpose of your inquiry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-consultation">
                        AI Consultation
                      </SelectItem>
                      <SelectItem value="machine-learning">
                        Machine Learning Services
                      </SelectItem>
                      <SelectItem value="data-analytics">
                        Data Analytics & BI
                      </SelectItem>
                      <SelectItem value="automation">
                        Process Automation
                      </SelectItem>
                      <SelectItem value="cloud-services">
                        Cloud Infrastructure
                      </SelectItem>
                      <SelectItem value="cybersecurity">
                        Cybersecurity Solutions
                      </SelectItem>
                      <SelectItem value="edge-computing">
                        Edge Computing
                      </SelectItem>
                      <SelectItem value="partnership">
                        Partnership Opportunities
                      </SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="pricing">
                        Pricing Information
                      </SelectItem>
                      <SelectItem value="demo">Request a Demo</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject">Subject</label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or requirements..."
                    rows={5}
                  />
                </div>

                <Button size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Choose the best way to reach us. We're here to help and answer
                any questions you might have.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-muted-foreground mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="p-6 bg-primary text-primary-foreground">
              <CardContent className="p-0">
                <h4 className="font-semibold mb-2">
                  Need Immediate Assistance?
                </h4>
                <p className="text-primary-foreground/80 mb-4">
                  For urgent matters or immediate support, give us a call
                  directly.
                </p>
                <a href="tel:+13436300727">
                  <Button variant="secondary" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
