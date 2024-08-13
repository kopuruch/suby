
export const MEDIA_SIZES = {
  xxl: 1400,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
};

export const ROUTES = {
  main: '/',
  blog: '/blog',
};

export const SECTIONS_ID = {
  hero: 'hero',
  about: 'about_us',
  services: 'services',
  price: 'price',
  howItWorks: 'how_it_works',
  feedback: 'feedback',
  advantages: 'advantages',
  form: 'form',
}

type LanguageTypes = 'en' | 'es' | 'de' | 'fr';

export const LANGUAGES: {
  locale: LanguageTypes;
  name: string;
}[] = [
  {
    locale: 'en',
    name: 'English',
  }
]

export const ROTATE_TEXT = 'YOU`RE MASKED';
