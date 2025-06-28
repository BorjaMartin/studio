# **App Name**: QuoteZenith

## Core Features:

- Daily Quote Display: Display a daily quote from a local database of 500 quotes, ensuring it's available in multiple languages (ES/EN).
- Share Quote: Allow users to share the quote via text or as an image on social media platforms.
- Theme Selection: Implement a light/dark theme toggle configurable by the user in the settings.
- Initial Onboarding: Include an onboarding process to allow users to select their preferred language and visual style from 3 presets (font + background combination).
- Ad Integration: Monetize the app by integrating banner and interstitial ads using expo-ads-admob. (Test IDs for MVP)
- Persistent Configuration: Use MMKV to persist user configurations such as theme, language, and selected style, for quick and reliable data storage.
- Dynamic Style Generator: Display quote image or a quote, which incorporates the use of a LLM as a tool to choose from various templated visual presentations.

## Style Guidelines:

- Primary color: Calm and reflective light blue (#ADD8E6), reminiscent of peaceful skies and introspection.
- Background color: Soft, desaturated off-white (#F5F5F5) to provide a clean and unobtrusive backdrop, ensuring readability.
- Accent color: Muted teal (#70A4A4), analogous to light blue, adding subtle depth and visual interest to interactive elements without overwhelming the user.
- Body and headline font: 'Literata', a transitional serif font lending a literary and elegant touch to the app.
- Simple, outline-style icons for share, settings, and other actions, ensuring they are clear and unobtrusive.
- Clean, centered layout for quotes with generous spacing, optimizing readability and providing a sense of calm.
- Subtle transitions for theme changes and quote loading, providing smooth and non-disruptive feedback to user interactions.