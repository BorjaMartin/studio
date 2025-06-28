'use client';

import { useEffect } from 'react';

// This makes the adsbygoogle property on the window object available for TypeScript
declare global {
  interface Window {
    adsbygoogle?: { [key: string]: unknown }[];
  }
}

export function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="my-8 flex w-full max-w-2xl justify-center text-center">
      {/* 
        This is a responsive AdSense unit. 
        - Replace ca-pub-XXXXXXXXXXXXXXXX with your AdSense client ID.
        - Replace YYYYYYYYYY with your ad unit's slot ID.
      */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="YYYYYYYYYY"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
