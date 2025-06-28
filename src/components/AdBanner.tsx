'use client';

import Image from 'next/image';

export function AdBanner() {
  return (
    <div className="my-8 flex w-full max-w-2xl flex-col items-center justify-center rounded-lg border bg-card p-4 text-center text-sm text-muted-foreground">
      <p className="mb-2 text-xs">Advertisement</p>
      <a href="#" onClick={(e) => e.preventDefault()} aria-label="Advertisement">
        <Image
          src="https://placehold.co/728x90.png"
          alt="Ad banner placeholder"
          width={728}
          height={90}
          data-ai-hint="advertisement banner"
          className="rounded"
        />
      </a>
    </div>
  );
}
