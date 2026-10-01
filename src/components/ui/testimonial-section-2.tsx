"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface AppItem {
  id: string;
  appName: string;
  store: string;
  appImage: string;
  description: string;
}

const appsList: AppItem[] = [
  {
    id: "1",
    appName: "FocusPulse",
    store: "Google Play & App Store",
    appImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80",
    description:
      "Designed for deep focus without ads, trackers, or annoying popups.",
  },
  {
    id: "2",
    appName: "ZenBudget",
    store: "Google Play Store",
    appImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=200&q=80",
    description:
      "Take control of your personal expenses with 100% offline security.",
  },
  {
    id: "3",
    appName: "HabitVault",
    store: "Apple App Store",
    appImage:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=200&q=80",
    description:
      "Track your progress with zero clutter and zero subscription fees.",
  },
  {
    id: "4",
    appName: "SwiftNotes",
    store: "Google Play & App Store",
    appImage:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=200&q=80",
    description:
      "Instant note-taking saved right in your browser, no cloud lock-in.",
  },
  {
    id: "5",
    appName: "MindfulFlow",
    store: "Apple App Store",
    appImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=200&q=80",
    description:
      "Calm your mind anytime with soothing visual timers and ambient loops.",
  },
  {
    id: "6",
    appName: "PixelCraft",
    store: "Google Play Store",
    appImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80",
    description:
      "Create clean diagrams and UI wireframes directly in your browser.",
  },
  {
    id: "7",
    appName: "PulseReader",
    store: "Google Play Store",
    appImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=200&q=80",
    description:
      "Read your favorite tech blogs without ad banners or tracking cookies.",
  },
  {
    id: "8",
    appName: "AudioWave",
    store: "Apple App Store",
    appImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80",
    description:
      "Generate custom soundscapes for studying, sleeping, and relaxation.",
  },
  {
    id: "9",
    appName: "TaskSphere",
    store: "Google Play & App Store",
    appImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=200&q=80",
    description:
      "Organize your side projects with effortless drag-and-drop simplicity.",
  },
];

export default function Testimonial2() {
  const [selected, setSelected] = useState<AppItem | null>(null);

  // Split apps into 3 rows for visual marquee effect
  const row1 = appsList.slice(0, 3);
  const row2 = appsList.slice(3, 6);
  const row3 = appsList.slice(6, 9);

  return (
    <div className="relative w-full py-10 md:py-12 overflow-hidden bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Apps Built by Us
        </h2>
      </div>

      {/* Main Container acting as the viewport for background and fades */}
      <div className="relative w-full">
        {/* Shaded Background */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[repeating-linear-gradient(315deg,#000_0,#000_1px,transparent_0,transparent_50%)] bg-[length:12px_12px] border-y border-slate-200 pointer-events-none"></div>

        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Content Rows */}
        <div className="relative z-10 flex flex-col gap-8 py-12 items-center justify-center overflow-hidden">
          {[row1, row2, row3].map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex items-center gap-6 min-w-max"
              animate={{
                x: rowIndex % 2 === 0 ? ["0%", "-25%"] : ["-25%", "0%"],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...row, ...row, ...row, ...row].map((app, i) => (
                <Capsule
                  key={`${app.id}-${i}`}
                  app={app}
                  onClick={() => setSelected(app)}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
                transition: { duration: 0.15 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-slate-900 text-white p-8 md:p-12 rounded-2xl border border-slate-700 shadow-2xl z-50"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/80 mb-6 shadow-md">
                  <img
                    src={selected.appImage}
                    alt={selected.appName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {selected.appName}
                </h3>
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full mb-4">
                  {selected.store}
                </span>
                <p className="text-base text-slate-300 leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Capsule({
  app,
  onClick,
}: {
  key?: string | number;
  app: AppItem;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group flex items-center gap-4 p-2 pr-8 rounded-full bg-white border border-slate-200 hover:border-slate-900 hover:border-dashed cursor-pointer transition-all shadow-xs hover:shadow-md"
    >
      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-300 group-hover:border-slate-900 transition-colors shrink-0">
        <img
          src={app.appImage}
          alt={app.appName}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-sm font-bold text-slate-900">
          {app.appName}
        </span>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 group-hover:bg-slate-900 group-hover:text-white px-2 py-0.5 rounded-md mt-0.5 transition-colors">
          {app.store}
        </span>
      </div>
    </motion.div>
  );
}
