import React, { useState, useEffect, useRef } from 'react';
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBgGif from "@/assets/images/hero_bg.gif"; 


const useCountUp = (end, duration = 2000, isCounting) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isCounting || end === 0) {
      setCount(0);
      return;
    }

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const progressRatio = Math.min(progress / duration, 1);
      
      const currentValue = Math.floor(progressRatio * end);
      setCount(currentValue);

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration, isCounting]);

  return count;
};


function StatCounter({ target, label, suffix = "", decimalPoints = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  let displayValue;
  
  if (suffix === '%') {
    const intPart = Math.floor(target);
    const decimalPart = Math.round((target - intPart) * 10);
    const countValue = useCountUp(intPart * 10 + decimalPart, 2000, isVisible);
    
    displayValue = (countValue / 10).toFixed(1);
    
  } else if (suffix === '+') {
    displayValue = useCountUp(target, 2000, isVisible);
    
  } else {
    displayValue = useCountUp(target, 2000, isVisible);
  }

  const finalDisplay = (suffix === '+' && isVisible) 
    ? (displayValue === target ? `${displayValue}+` : displayValue)
    : `${displayValue}${suffix}`;

  return (
    <div 
      ref={ref}
      className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
    >
      <div className="font-bold text-primary mb-1 text-4xl">
        {isVisible ? finalDisplay : (suffix === '+' ? `0+` : `0${suffix}`)}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}


export function Hero() {
  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-[var(--color-section-hero)] py-12 md:py-24">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${heroBgGif}')`
          }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-background/75 via-background/80 to-background/60"></div> */}
        <div className=""></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Heading */}
          <div className="space-y-6 mb-10">
            <h1 className="text-hero leading-tight">
              <strong><span className="text-primary">Building trust.</span> Driving growth.
              <br />
              Shaping the future.</strong>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We collaborate with ambitious teams to turn complex challenges into lasting competitive advantages—delivering clarity, speed, and exceptional results.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Button size="lg" className="group shadow-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats - NOW USING StatCounter */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <StatCounter 
              target={98.4} 
              label="On-time delivery" 
              suffix="%" 
            />
            <StatCounter 
              target={72} 
              label="Client NPS"
            />
            <StatCounter 
              target={12} 
              label="Global regions" 
              suffix="+"
            />
          </div>
        </div>
      </div>
    </section>
  );
}