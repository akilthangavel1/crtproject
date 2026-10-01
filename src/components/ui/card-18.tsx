import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// CVA for card variants
const cardVariants = cva(
  'group relative flex flex-col h-full overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-900 shadow-xs transition-all duration-300 ease-in-out hover:shadow-md',
  {
    variants: {
      variant: {
        default: 'p-6',
        featured: 'flex-col md:flex-row h-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// Interface for component props
export interface BlogPostCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  tag: string;
  date?: string;
  title: string;
  description: string;
  imageUrl?: string;
  href: string;
  readMoreText?: string;
}

const BlogPostCard = React.forwardRef<HTMLDivElement, BlogPostCardProps>(
  ({ className, variant, tag, date, title, description, imageUrl, href, readMoreText = 'Read Our Full Story', ...props }, ref) => {
    
    // Animation variants for framer-motion
    const cardHover = {
      hover: {
        y: -5,
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      },
    };
    
    const content = (
      <>
        {variant === 'featured' && imageUrl && (
          <div className="relative w-full overflow-hidden md:w-1/2 lg:w-3/5">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-900 border border-slate-200">{tag}</span>
              {date && <span>{date}</span>}
            </div>

            <h3 className="mb-3 text-xl font-bold leading-tight text-slate-900 lg:text-2xl">
              <span className="bg-gradient-to-r from-slate-900 to-slate-900 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                {title}
              </span>
            </h3>
            
            <p className="text-slate-600 leading-relaxed">{description}</p>
          </div>

          {variant === 'featured' && (
            <div className="mt-8">
                <Button variant="default" className="group/button bg-slate-900 text-white hover:bg-black">
                    {readMoreText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Button>
            </div>
          )}
        </div>
      </>
    );

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        variants={cardHover}
        whileHover="hover"
        {...props}
      >
        <a href={href} className="absolute inset-0 z-10" aria-label={`Read more about ${title}`}>
          <span className="sr-only">Read More</span>
        </a>
        <div className="relative z-0 flex h-full w-full flex-col md:flex-row">{content}</div>
      </motion.div>
    );
  }
);

BlogPostCard.displayName = 'BlogPostCard';

export { BlogPostCard };

export function BlogPostCardDemo() {
  const posts = [
    {
      tag: 'AI & IT SERVICES',
      title: 'Enterprise Technology Backbone',
      description: "SarasDynamics delivers custom AI models, cloud architecture, and end-to-end software engineering for global enterprises, generating sustainable revenue to back NoAds24.",
      href: '#',
    },
    {
      tag: 'ZERO AD REVENUE',
      title: 'Sustainable Business Model',
      description: 'Because SarasDynamics thrives through enterprise B2B contracts, NoAds24 never needs ads, pop-ups, subscriptions, or paywalls to keep the lights on.',
      href: '#',
    },
    {
      tag: 'DATA PRIVACY',
      title: 'Enterprise-Grade Security',
      description: "Inheriting SarasDynamics' strict enterprise compliance standards, every NoAds24 app guarantees complete data privacy with zero trackers or data selling.",
      href: '#',
    },
  ];

  const featuredPost = {
    tag: 'PARENT COMPANY · SARASDYNAMICS',
    title: "Powered by SarasDynamics — Pioneer in Enterprise AI & IT Services",
    description: "NoAds24 is proudly built and sustained by SarasDynamics, an enterprise AI and IT services leader. By providing world-class technology solutions to global businesses, SarasDynamics funds NoAds24 completely — ensuring our consumer apps remain 100% free, private, and ad-free forever.",
    readMoreText: 'Explore SarasDynamics Services',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full bg-white text-slate-900 border-t border-slate-100 py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8 md:mb-12">
          <BlogPostCard
            variant="featured"
            {...featuredPost}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <BlogPostCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
