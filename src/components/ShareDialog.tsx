'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Quote } from '@/lib/quotes';
import { VisualStyle } from '@/context/SettingsContext';
import { QuoteDisplay } from './QuoteDisplay';
import { useTranslation } from '@/hooks/use-translation';
import { Download } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { AppLogo } from './icons';


interface ShareDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  quote: Quote;
  visualStyle: VisualStyle | string;
  isLoading: boolean;
}

export function ShareDialog({ isOpen, setIsOpen, quote, visualStyle, isLoading }: ShareDialogProps) {
  const { t } = useTranslation();

  // Note: In a real app, you'd use a library like html-to-image
  // to convert the #share-content div to an image and trigger a download.
  const handleDownload = () => {
    alert("Image download functionality would be implemented here.");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>{t('share_image')}</DialogTitle>
          <DialogDescription>{t('share_image_desc')}</DialogDescription>
        </DialogHeader>

        <div className="p-6">
            <div id="share-content" className="relative">
                {isLoading ? (
                    <div className="w-full aspect-video flex flex-col items-center justify-center bg-muted rounded-lg p-8">
                        <Skeleton className="h-8 w-3/4 mb-4" />
                        <Skeleton className="h-8 w-1/2 mb-8" />
                        <Skeleton className="h-6 w-1/4" />
                    </div>
                ) : (
                    <QuoteDisplay 
                        quote={quote} 
                        visualStyle={visualStyle as VisualStyle} 
                        className="aspect-video"
                    />
                )}
                 <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white p-1 rounded-full bg-black/30">
                    <AppLogo className="w-5 h-5"/>
                    <span className="text-xs font-semibold pr-2">QuoteZenith</span>
                </div>
            </div>
        </div>

        <DialogFooter className="p-6 pt-0">
          <Button onClick={handleDownload} disabled={isLoading} className="w-full">
            <Download className="mr-2 h-4 w-4" />
            {isLoading ? t('generating') : t('download_image')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
