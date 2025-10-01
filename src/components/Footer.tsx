import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Separator } from "./ui/separator";
import CamwoodLogo from "@/assets/images/camwoodlogo.svg?react"; 

const footerLinks = {
  "Solutions": [
    "Intelligent Automation",
    "Software Development", 
    "Advisory & Strategy",
    "Workflow Optimization",
    "Platform Development",
    "Consulting Services"
  ],
  "Company": [
    "About Us",
    "Careers",
    "Case Studies",
    "Support Center",
    "Contact Us"
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" }
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <a href=""><div className="flex items-center space-x-2">
              <CamwoodLogo className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold">Camwood Inc.</span>
            </div></a>
            <p className="text-muted-foreground max-w-md">
              Building trust. Driving growth. Shaping the future. We collaborate with ambitious teams 
              to turn complex challenges into lasting competitive advantages.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@camwood.com"><span>info@camwood.com</span></a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+13436300727"><span>+1 (343) 630-0727</span></a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Global Operations • 12+ Regions</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-secondary hover:bg-secondary/80 p-2 rounded-lg transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="font-semibold">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2025 Camwood Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}