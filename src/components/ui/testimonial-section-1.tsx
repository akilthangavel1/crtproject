"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  className: string;
  imageBorderColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus Rodriguez",
    role: "CEO of Quantum Labs",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "We've tried every UI framework out there. SolaceUI is the first that actually delivers. Our time-to-market improved by 40%",
    className:
      "lg:col-span-1 bg-white border border-slate-200 text-slate-900 shadow-xs",
    imageBorderColor: "border-[#003AF9]",
  },
  {
    name: "Oilivia Koe",
    role: "CEO of Nexus Digital",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote:
      "SolaceUI has become non-negotiable in our tech stack. It's elegant, powerful, and scaled beautifully with us from seed to Series B",
    className:
      "lg:col-span-1 lg:row-span-2 bg-black text-white border-transparent shadow-lg",
    imageBorderColor: "border-[#003AF9]",
  },
  {
    name: "David Kim",
    role: "CEO of Streamline Software",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "Perfect balance between flexibility and structure. Our design system went from scattered mess to cohesive asset. ROI was evident in Q1.",
    className:
      "lg:col-span-1 bg-white border border-slate-200 text-slate-900 shadow-xs",
    imageBorderColor: "border-[#003AF9]",
  },

];

export default function Testimonial1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full py-16 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-tight text-slate-900">
          About Us
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "p-8 rounded-lg flex flex-col justify-between",
                testimonial.className
              )}
            >
              <p
                className={cn(
                  "font-medium leading-relaxed mb-8",
                  testimonial.className.includes("lg:row-span-2") ||
                    testimonial.className.includes("col-span-2")
                    ? "text-xl md:text-2xl lg:text-3xl"
                    : "text-base"
                )}
              >
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "relative w-12 h-12 rounded-full overflow-hidden border-[1.5px] shrink-0",
                    testimonial.imageBorderColor
                  )}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base">{testimonial.name}</h4>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
