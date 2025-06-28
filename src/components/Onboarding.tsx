'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useSettings, Theme, VisualStyle } from '@/context/SettingsContext';
import { useTranslation } from '@/hooks/use-translation';
import { AppLogo } from './icons';

export function Onboarding() {
  const { setOnboardingCompleted, setSettings, settings } = useSettings();
  const { t } = useTranslation();
  const [localSettings, setLocalSettings] = useState(settings);

  const handleSave = () => {
    setSettings(localSettings);
    setOnboardingCompleted(true);
  };

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[480px]" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
                <AppLogo className="h-12 w-12" />
                <DialogTitle className="text-2xl font-bold">{t('welcome_title')}</DialogTitle>
            </div>
          <DialogDescription>{t('welcome_subtitle')}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          
          {/* Language Selection */}
          <div className="space-y-3">
            <Label className="font-semibold text-base">{t('choose_language')}</Label>
            <RadioGroup
              value={localSettings.language}
              onValueChange={(value: 'en' | 'es') => setLocalSettings(s => ({ ...s, language: value }))}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="en" id="lang-en" />
                <Label htmlFor="lang-en">English</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="es" id="lang-es" />
                <Label htmlFor="lang-es">Español</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Theme Selection */}
          <div className="space-y-3">
            <Label className="font-semibold text-base">{t('choose_theme')}</Label>
            <RadioGroup
              value={localSettings.theme}
              onValueChange={(value: Theme) => setLocalSettings(s => ({ ...s, theme: value }))}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="theme-light" />
                <Label htmlFor="theme-light">{t('light')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="theme-dark" />
                <Label htmlFor="theme-dark">{t('dark')}</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Visual Style Selection */}
          <div className="space-y-3">
             <Label className="font-semibold text-base">{t('choose_style')}</Label>
            <RadioGroup
              value={localSettings.visualStyle}
              onValueChange={(value: VisualStyle) => setLocalSettings(s => ({ ...s, visualStyle: value }))}
              className="grid grid-cols-3 gap-4"
            >
                <div>
                    <RadioGroupItem value="classic" id="style-classic" className="peer sr-only" />
                    <Label htmlFor="style-classic" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        {t('style_classic')}
                    </Label>
                </div>
                <div>
                    <RadioGroupItem value="modern" id="style-modern" className="peer sr-only" />
                    <Label htmlFor="style-modern" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        {t('style_modern')}
                    </Label>
                </div>
                <div>
                    <RadioGroupItem value="minimalist" id="style-minimalist" className="peer sr-only" />
                    <Label htmlFor="style-minimalist" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        {t('style_minimalist')}
                    </Label>
                </div>
            </RadioGroup>
          </div>

        </div>
        <DialogFooter>
          <Button onClick={handleSave} className="w-full" size="lg">{t('get_started')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
