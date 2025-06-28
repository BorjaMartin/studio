'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Settings, Share2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { useSettings } from '@/context/SettingsContext';
import { getQuotes, Quote } from '@/lib/quotes';
import { useTranslation } from '@/hooks/use-translation';
import { Onboarding } from '@/components/Onboarding';
import { SettingsContent } from '@/components/SettingsSheet';
import { QuoteDisplay } from '@/components/QuoteDisplay';
import { ShareDialog } from '@/components/ShareDialog';
import { AppLogo } from '@/components/icons';
import { useToast } from "@/hooks/use-toast";

// Mock AI function
async function generateStyleForQuote(quote: string): Promise<string> {
  const styles = ['elegant', 'modern', 'minimalist'];
  // In a real app, this would call a Genkit flow.
  // For now, we simulate a network delay and random choice.
  await new Promise(res => setTimeout(res, 500));
  return styles[Math.floor(Math.random() * styles.length)];
}


export default function Home() {
  const { settings, isLoaded, onboardingCompleted } = useSettings();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [dailyQuote, setDailyQuote] = useState<Quote | null>(null);
  const [isShareDialogOpen, setShareDialogOpen] = useState(false);
  const [generatedStyle, setGeneratedStyle] = useState('elegant');
  const [isGenerating, setIsGenerating] = useState(false);

  const allQuotes = useMemo(() => getQuotes(), []);

  useEffect(() => {
    if (isLoaded) {
      const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      const quotesInLang = allQuotes.filter(q => q.lang === settings.language);
      const quote = quotesInLang[dayOfYear % quotesInLang.length];
      setDailyQuote(quote || allQuotes.find(q => q.lang === 'en')!);
    }
  }, [isLoaded, settings.language, allQuotes]);

  const handleShareText = async () => {
    if (!dailyQuote) return;
    const shareText = `"${dailyQuote.text}" - ${dailyQuote.author}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('quote_of_the_day'),
          text: shareText,
        });
      } catch (error) {
        console.error('Error sharing:', error);
        toast({ title: t('error'), description: t('share_failed'), variant: "destructive" });
      }
    } else {
        navigator.clipboard.writeText(shareText);
        toast({ title: t('copied_to_clipboard') });
    }
  };

  const handleGenerateImage = async () => {
    if (!dailyQuote) return;
    setIsGenerating(true);
    setShareDialogOpen(true);
    try {
        const style = await generateStyleForQuote(dailyQuote.text);
        setGeneratedStyle(style);
    } catch(error) {
        console.error("Failed to generate style", error);
        toast({ title: t('error'), description: t('style_generation_failed'), variant: "destructive" });
        setGeneratedStyle('elegant'); // fallback
    } finally {
        setIsGenerating(false);
    }
  };

  if (!isLoaded || !dailyQuote) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <AppLogo className="h-16 w-16 animate-pulse" />
      </div>
    );
  }
  
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-8 transition-colors duration-500 font-headline">
      {!onboardingCompleted && <Onboarding />}

      <header className="absolute top-0 flex w-full justify-between p-4">
        <div className="flex items-center gap-2">
            <AppLogo className="h-8 w-8" />
            <span className="text-xl font-bold">QuoteZenith</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SettingsContent />
        </Sheet>
      </header>

      <div className="flex flex-1 items-center justify-center">
        <QuoteDisplay quote={dailyQuote} visualStyle={settings.visualStyle} />
      </div>
      
      <footer className="flex items-center gap-4">
        <Button variant="outline" size="lg" onClick={handleShareText}>
          <Share2 className="mr-2 h-5 w-5" />
          {t('share_text')}
        </Button>
        <Button size="lg" onClick={handleGenerateImage}>
          <ImageIcon className="mr-2 h-5 w-5" />
          {t('generate_image')}
        </Button>
      </footer>

      <ShareDialog 
        isOpen={isShareDialogOpen} 
        setIsOpen={setShareDialogOpen}
        quote={dailyQuote}
        visualStyle={generatedStyle}
        isLoading={isGenerating}
      />
    </main>
  );
}
