'use client';

import React from 'react';
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useSettings, Theme, VisualStyle } from '@/context/SettingsContext';
import { useTranslation } from '@/hooks/use-translation';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { AppLogo } from './icons';

export function SettingsContent() {
  const { settings, setSettings, isLoaded } = useSettings();
  const { t } = useTranslation();

  if (!isLoaded) return null;

  const handleSettingChange = <K extends keyof typeof settings>(key: K, value: typeof settings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <SheetContent className="flex flex-col">
      <SheetHeader>
        <SheetTitle className="text-xl">{t('settings')}</SheetTitle>
        <SheetDescription>{t('settings_subtitle')}</SheetDescription>
      </SheetHeader>
      <div className="flex-grow space-y-6 py-4">
        {/* Language Selection */}
        <div className="space-y-3">
          <Label className="font-semibold">{t('language')}</Label>
          <RadioGroup
            value={settings.language}
            onValueChange={(value: 'en' | 'es') => handleSettingChange('language', value)}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="en" id="set-lang-en" />
              <Label htmlFor="set-lang-en">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="es" id="set-lang-es" />
              <Label htmlFor="set-lang-es">Español</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Theme Selection */}
        <div className="space-y-3">
          <Label className="font-semibold">{t('theme')}</Label>
          <RadioGroup
            value={settings.theme}
            onValueChange={(value: Theme) => handleSettingChange('theme', value)}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="set-theme-light" />
              <Label htmlFor="set-theme-light">{t('light')}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="set-theme-dark" />
              <Label htmlFor="set-theme-dark">{t('dark')}</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Visual Style Selection */}
        <div className="space-y-3">
          <Label className="font-semibold">{t('visual_style')}</Label>
          <RadioGroup
            value={settings.visualStyle}
            onValueChange={(value: VisualStyle) => handleSettingChange('visualStyle', value)}
            className="grid grid-cols-3 gap-2"
          >
            <div >
                <RadioGroupItem value="classic" id="set-style-classic" className="peer sr-only" />
                <Label htmlFor="set-style-classic" className="flex text-xs h-16 flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                    {t('style_classic')}
                </Label>
            </div>
            <div>
                <RadioGroupItem value="modern" id="set-style-modern" className="peer sr-only" />
                <Label htmlFor="set-style-modern" className="flex text-xs h-16 flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                    {t('style_modern')}
                </Label>
            </div>
            <div>
                <RadioGroupItem value="minimalist" id="set-style-minimalist" className="peer sr-only" />
                <Label htmlFor="set-style-minimalist" className="flex text-xs h-16 flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                    {t('style_minimalist')}
                </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        {/* About section */}
        <div className="space-y-4">
            <h3 className="font-semibold">{t('about')}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <AppLogo className="h-10 w-10"/>
                <div>
                    <p className="font-bold text-foreground">QuoteZenith</p>
                    <p>Version 1.0.0</p>
                </div>
            </div>
            <p className="text-sm text-muted-foreground">{t('about_text')}</p>
            <Button variant="outline" asChild>
                <a href="mailto:support@quotezenith.com">{t('contact_support')}</a>
            </Button>
        </div>

      </div>
    </SheetContent>
  );
}
