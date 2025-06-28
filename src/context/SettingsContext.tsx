'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'es';
export type VisualStyle = 'classic' | 'modern' | 'minimalist';

interface Settings {
  theme: Theme;
  language: Language;
  visualStyle: VisualStyle;
}

interface SettingsContextType {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
  onboardingCompleted: boolean;
  setOnboardingCompleted: (completed: boolean) => void;
  isLoaded: boolean;
}

const defaultSettings: Settings = {
  theme: 'light',
  language: 'en',
  visualStyle: 'classic',
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [onboardingCompleted, setOnboardingCompletedState] = useState(false);

  useEffect(() => {
    try {
      const storedSettings = localStorage.getItem('quotezenith-settings');
      const storedOnboardingStatus = localStorage.getItem('quotezenith-onboarding');

      if (storedSettings) {
        setSettings(JSON.parse(storedSettings));
      }
      if (storedOnboardingStatus) {
        setOnboardingCompletedState(JSON.parse(storedOnboardingStatus));
      }
    } catch (error) {
      console.error("Failed to load settings from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('quotezenith-settings', JSON.stringify(settings));
        
        // Handle theme change
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(settings.theme);

      } catch (error) {
        console.error("Failed to save settings to localStorage", error);
      }
    }
  }, [settings, isLoaded]);

  const setOnboardingCompleted = (completed: boolean) => {
    try {
        localStorage.setItem('quotezenith-onboarding', JSON.stringify(completed));
        setOnboardingCompletedState(completed);
    } catch (error) {
        console.error("Failed to save onboarding status to localStorage", error);
    }
  };

  const value = {
    settings,
    setSettings,
    onboardingCompleted,
    setOnboardingCompleted,
    isLoaded,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
