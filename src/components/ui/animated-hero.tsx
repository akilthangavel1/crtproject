import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Grid, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Free today.", "Free forever.", "We mean it."],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Decorative background elements for Geometric Balance */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-50/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex gap-8 py-16 md:py-24 lg:py-32 items-center justify-center flex-col">
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="gap-2 px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-600 transition-colors cursor-pointer shadow-xs"
            >
              Free apps. No ads. No catch. <MoveRight className="w-3.5 h-3.5 text-slate-400" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold text-slate-900 leading-[1.08]">
              <span className="text-slate-900">Apps that are actually</span>{" "}
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 min-h-[1.25em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-slate-900"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-500 max-w-2xl text-center font-normal mt-2">
              NoAds24 builds mobile apps that are completely free to use — forever. No banner ads, no video interruptions, no &quot;watch this to unlock.&quot; Just apps that do what they say. — clean, fast, secure and yours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button
              size="lg"
              className="gap-3 h-12 md:h-14 px-6 md:px-8 border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl transition-all shadow-sm cursor-pointer"
              variant="outline"
            >
              Browse Our Apps <Grid className="w-4 h-4 text-slate-700" />
            </Button>
            <Button
              size="lg"
              className="gap-3 h-12 md:h-14 px-6 md:px-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all shadow-lg shadow-slate-200 cursor-pointer"
            >
              Learn More <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };

