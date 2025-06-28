'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { Quote } from '@/lib/quotes';
import type { VisualStyle } from '@/context/SettingsContext';

const quoteCardVariants = cva(
  'transition-all duration-500 w-full max-w-2xl mx-auto p-8 md:p-12 rounded-lg shadow-2xl flex flex-col justify-center items-center',
  {
    variants: {
      visualStyle: {
        classic: 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-serif',
        modern: 'bg-gray-900 dark:bg-gray-950 text-white font-sans backdrop-blur-sm bg-opacity-80 dark:bg-opacity-70',
        minimalist: 'bg-transparent text-foreground',
      },
    },
    defaultVariants: {
      visualStyle: 'classic',
    },
  }
);

const quoteTextVariants = cva(
    'transition-all duration-500 text-center',
    {
      variants: {
        visualStyle: {
          classic: 'text-3xl md:text-4xl font-medium',
          modern: 'text-3xl md:text-4xl font-bold tracking-tight',
          minimalist: 'text-3xl md:text-4xl font-light',
        },
      },
      defaultVariants: {
        visualStyle: 'classic',
      },
    }
  );

  const authorTextVariants = cva(
    'transition-all duration-500 text-center mt-6',
    {
      variants: {
        visualStyle: {
          classic: 'text-lg italic text-gray-600 dark:text-gray-400',
          modern: 'text-lg uppercase tracking-widest text-primary',
          minimalist: 'text-base text-muted-foreground',
        },
      },
      defaultVariants: {
        visualStyle: 'classic',
      },
    }
  );


interface QuoteDisplayProps extends VariantProps<typeof quoteCardVariants> {
  quote: Quote;
  className?: string;
}

export function QuoteDisplay({ quote, visualStyle, className }: QuoteDisplayProps) {
  const safeVisualStyle = visualStyle || 'classic';

  return (
    <div className={cn(quoteCardVariants({ visualStyle: safeVisualStyle }), className)}>
      <blockquote className="text-center">
        <p className={cn(quoteTextVariants({ visualStyle: safeVisualStyle }))}>
          &ldquo;{quote.text}&rdquo;
        </p>
        <footer className={cn(authorTextVariants({ visualStyle: safeVisualStyle }))}>
          &mdash; {quote.author}
        </footer>
      </blockquote>
    </div>
  );
}
