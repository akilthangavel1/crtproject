import { Hero } from "@/components/ui/animated-hero";

function HeroDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Navigation Bar */}
      <nav className="h-16 px-6 lg:px-12 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rotate-45"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">NoAds24</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Platform</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Solutions</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Resources</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium px-4 py-2 hover:bg-slate-50 text-slate-700 rounded-md transition-colors cursor-pointer">Log in</button>
          <button className="text-sm font-medium bg-slate-900 text-white px-5 py-2 rounded-md hover:bg-slate-800 transition-all shadow-sm shadow-slate-200 cursor-pointer">Get Started</button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>

      {/* Trusted By / Social Proof Footer */}
      <footer className="py-8 bg-slate-50/50 border-t border-slate-100 flex flex-col items-center justify-center gap-4 shrink-0">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Trusted by innovative companies worldwide</span>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 grayscale opacity-40 px-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-slate-600 rounded-sm"></div>
            <span className="text-sm font-bold tracking-wider">LUMINARY</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-slate-600 rounded-full"></div>
            <span className="text-sm font-bold tracking-wider">ORBITAL</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-slate-600 rotate-45"></div>
            <span className="text-sm font-bold tracking-wider">PRISM</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-2 bg-slate-600 rounded-full"></div>
            <span className="text-sm font-bold tracking-wider">VERTEX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-b-2 border-r-2 border-slate-600"></div>
            <span className="text-sm font-bold tracking-wider">NEXUS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { HeroDemo };

