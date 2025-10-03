"use client";

import { useState, FormEvent } from "react"; 

// Assuming these imports point to your components
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
// import { Badge } from "./ui/badge"; // Badge not used, so it's removed
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
// Import Loader2 for the sending state
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, Loader2 } from "lucide-react";


// --- Interface for type safety ---
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  purpose: string;
  subject: string;
  message: string;
}

const contactInfo = [
  // ... (Contact Info Data - truncated for brevity)
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@camwoodinc.com",
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
    const [selectedPurpose, setSelectedPurpose] = useState<string>(""); 
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Handles form submission by collecting data and sending it to the API endpoint.
     */
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (isLoading) return;

        setIsLoading(true);

        // 💥 FIX: Access process.env INSIDE the handler function to prevent ReferenceError
        const API_BASE_URL = "https://cam-back-new.vercel.app";

        if (!API_BASE_URL) {
            console.error("Configuration Error: NEXT_PUBLIC_API_BASE_URL is not set.");
            alert("Configuration Error: The backend address is missing. Please contact support.");
            setIsLoading(false);
            return;
        }

        // 1. Collect Form Data
        const form = e.currentTarget as HTMLFormElement;
        
        const formData: ContactFormData = {
            // Note: These rely on the Input/Textarea elements having the 'name' attribute
            firstName: (form.elements.namedItem('firstName') as HTMLInputElement)?.value || '',
            lastName: (form.elements.namedItem('lastName') as HTMLInputElement)?.value || '',
            email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
            company: (form.elements.namedItem('company') as HTMLInputElement)?.value || '',
            // Get the value from the Select component state
            purpose: selectedPurpose, 
            subject: (form.elements.namedItem('subject') as HTMLInputElement)?.value || '',
            message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
        };

        // 2. Client-side Validation (Matching server requirements)
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.purpose || !formData.message) {
            alert("Please fill in all required fields (Name, Email, Purpose, Message).");
            setIsLoading(false);
            return;
        }

        // 3. Send Request to Server API using the ABSOLUTE URL
        try {
            const response = await fetch(`${API_BASE_URL}/api/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully! We will respond within one business day.');
                form.reset(); 
                setSelectedPurpose(""); 
            } else {
                // Read the specific error message from the API Route
                const errorData = await response.json();
                alert(`Failed to send message: ${errorData.error || response.statusText || 'Server error.'}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('A network error occurred. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };


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
                {/* 1. Added onSubmit handler */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName">First Name</label>
                      {/* 2. Added 'name' and 'required' attributes */}
                      <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName">Last Name</label>
                      {/* 2. Added 'name' and 'required' attributes */}
                      <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
  
                  <div className="space-y-2">
                    <label htmlFor="email">Email Address</label>
                    {/* 2. Added 'name' and 'required' attributes */}
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
  
                  <div className="space-y-2">
                    <label htmlFor="company">Company (Optional)</label>
                    {/* 2. Added 'name' attribute */}
                    <Input id="company" name="company" placeholder="Enter your company name" />
                  </div>
  
                  <div className="space-y-2">
                    <label htmlFor="purpose">Purpose of Contact</label>
                    {/* 3. Added state handlers and 'required' attribute */}
                    <Select value={selectedPurpose} onValueChange={setSelectedPurpose} name="purpose" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the purpose of your inquiry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-consultation">AI Consultation</SelectItem>
                        <SelectItem value="machine-learning">Machine Learning Services</SelectItem>
                        <SelectItem value="data-analytics">Data Analytics & BI</SelectItem>
                        <SelectItem value="automation">Process Automation</SelectItem>
                        <SelectItem value="cloud-services">Cloud Infrastructure</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity Solutions</SelectItem>
                        <SelectItem value="edge-computing">Edge Computing</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="demo">Request a Demo</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
  
                  <div className="space-y-2">
                    <label htmlFor="subject">Subject</label>
                    {/* 2. Added 'name' attribute */}
                    <Input id="subject" name="subject" placeholder="What's this about?" />
                  </div>
  
                  <div className="space-y-2">
                    <label htmlFor="message">Message</label>
                    {/* 2. Added 'name' and 'required' attributes */}
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or requirements..."
                      rows={5}
                      required
                    />
                  </div>
  
                  {/* 4. Added type="submit" and disabled/loading state */}
                  <Button size="lg" className="w-full group" type="submit" disabled={isLoading}>
                      {isLoading ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                          <Send className="mr-2 h-4 w-4" />
                      )}
                      {isLoading ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
  
            {/* Contact Information (Unchanged) */}
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