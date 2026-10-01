import { Hero } from "@/components/ui/animated-hero";
import { TextMarqueeDemo } from "@/components/ui/text-marque";
import { BlogPostCardDemo } from "@/components/ui/card-18";
import { Testimonials } from "@/components/ui/testimonials";
import { AnimatedTeamSection, defaultTeamMembers } from "@/components/ui/team-section";
import Testimonial2 from "@/components/ui/testimonial-section-2";
import { Blog7 } from "@/components/blocks/blog7";
import { TextRotate } from "@/components/ui/text-rotate";
import { Footer7 } from "@/components/ui/footer-7";
import { LayoutGroup, motion } from "motion/react";

function HeroDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Navigation Bar */}
      <nav className="h-16 px-6 lg:px-12 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rotate-45"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">NoAds24</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#apps" className="hover:text-slate-900 transition-colors">Our Apps</a>
            <a href="#sarasdynamics" className="hover:text-slate-900 transition-colors">Why Free?</a>
            <a href="#testimonials" className="hover:text-slate-900 transition-colors">Reviews</a>
            <a href="#team" className="hover:text-slate-900 transition-colors">Team</a>
            <a href="#blog" className="hover:text-slate-900 transition-colors">Blog</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#sarasdynamics" className="text-xs sm:text-sm font-medium px-3.5 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
            SarasDynamics AI
          </a>
          <a href="#apps" className="text-xs sm:text-sm font-semibold bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-all shadow-sm shadow-slate-200">
            Explore Apps
          </a>
        </div>
      </nav>

      {/* Main Hero & Features Content */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
        <TextMarqueeDemo />
        <section id="sarasdynamics">
          <BlogPostCardDemo />
        </section>
        <section id="apps">
          <Testimonial2 />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="team">
          <AnimatedTeamSection
            title="Meet the NoAds24 Team"
            description="The passionate engineers, designers, and privacy advocates at NoAds24 and SarasDynamics dedicated to building fast, private, and completely ad-free digital experiences for everyone."
            members={defaultTeamMembers}
          />
        </section>
        
        {/* Text Rotate Section */}
        <section className="w-full text-2xl sm:text-3xl md:text-5xl flex flex-col items-center justify-center bg-white text-slate-900 font-light overflow-hidden pt-[30px] pb-[30px] px-6 sm:px-12 md:px-20 border-t border-slate-100">
          <LayoutGroup>
            <motion.div className="flex whitespace-pre flex-wrap justify-center items-center" layout>
              <motion.span
                className="pt-0.5 sm:pt-1 md:pt-2 font-medium text-slate-900"
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                Make it{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "work!",
                  "fancy ✽",
                  "right",
                  "fast",
                  "fun",
                  "rock",
                  "🕶️🕶️🕶️",
                ]}
                mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg shadow-sm"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.div>
          </LayoutGroup>
        </section>

        <section id="blog">
          <Blog7 />
        </section>
      </main>

      {/* Footer Component */}
      <Footer7 />
    </div>
  );
}

export { HeroDemo };

