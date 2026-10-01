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
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  posts = [
    {
      id: "post-1",
      title: "Getting Started with shadcn/ui Components",
      summary:
        "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
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
