import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const Blog7 = ({
  tagline = "NoAds24 Insights & News",
  heading = "Stories & Engineering Notes",
  description = "Discover how we build ad-free, privacy-first consumer applications powered by enterprise AI & IT services from our parent company SarasDynamics.",
  buttonText = "Explore all articles",
  buttonUrl = "#",
  posts = [
    {
      id: "post-1",
      title: "Why We Built NoAds24: The Mission for an Ad-Free Web",
      summary:
        "Explore how NoAds24 delivers completely free, clean, and private consumer web applications without relying on intrusive advertising, pop-ups, or data harvesting.",
      label: "Mission",
      author: "NoAds24 Team",
      published: "15 Jul 2025",
      url: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "post-2",
      title: "How SarasDynamics Enterprise AI Powers Free Consumer Apps",
      summary:
        "Learn about the technological engine behind NoAds24. SarasDynamics delivers world-class enterprise AI & IT services, funding NoAds24 so our consumer apps stay 100% free.",
      label: "Technology",
      author: "SarasDynamics AI Team",
      published: "28 Jun 2025",
      url: "#",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "post-3",
      title: "The Zero-Tracker Privacy Guarantee in Modern Applications",
      summary:
        "A deep dive into zero-telemetry architecture and why data security, privacy, and user trust are non-negotiable standards across all NoAds24 products.",
      label: "Privacy",
      author: "Security & Privacy Engineering",
      published: "10 Jun 2025",
      url: "#",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    },
  ],
}: Blog7Props) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-16 px-6 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-bold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl text-slate-900 tracking-tight">
            {heading}
          </h2>
          <p className="mb-8 text-slate-600 md:text-base lg:max-w-2xl lg:text-lg leading-relaxed">
            {description}
          </p>
          <Button variant="link" className="w-full sm:w-auto text-slate-900 hover:text-slate-700 font-semibold text-base" asChild>
            <a href={buttonUrl} target="_blank" rel="noreferrer">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 w-full">
          {posts.map((post) => (
            <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden border-slate-200/80 shadow-xs hover:shadow-md transition-shadow bg-white">
              <div className="aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity duration-200 hover:opacity-85 block h-full w-full"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
              <CardHeader className="p-6 pb-2">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs font-medium text-slate-600 border-slate-200">
                    {post.label}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold hover:underline md:text-xl text-slate-900 leading-snug">
                  <a href={post.url} target="_blank" rel="noreferrer">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent className="px-6 py-2">
                <p className="text-slate-600 text-sm leading-relaxed">{post.summary}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">{post.author}</span>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-slate-900 font-medium hover:underline text-sm ml-auto"
                >
                  Read more
                  <ArrowRight className="ml-1 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
