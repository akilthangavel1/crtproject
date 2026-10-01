"use client";
import React from "react";
import { motion } from "motion/react";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  username?: string;
  appName?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, username, appName }, i) => (
                <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-slate-900/5 max-w-xs w-full" key={i}>
                  {appName && (
                    <div className="inline-block px-2.5 py-0.5 mb-3 text-[11px] font-semibold text-slate-900 bg-slate-100 border border-slate-200 rounded-full">
                      {appName}
                    </div>
                  )}
                  <div className="text-slate-700 text-sm leading-relaxed">&ldquo;{text}&rdquo;</div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-slate-200 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col min-w-0">
                      <div className="font-semibold text-slate-900 tracking-tight text-sm leading-5 truncate">
                        {name}
                      </div>
                      {username && (
                        <div className="text-xs text-slate-400 font-mono truncate">
                          {username}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
