export interface Quote {
  id: number;
  text: string;
  author: string;
  lang: 'en' | 'es';
}

const quotes: Quote[] = [
  { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs", lang: "en" },
  { id: 1, text: "La única forma de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs", lang: "es" },
  { id: 2, text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", lang: "en" },
  { id: 2, text: "La innovación distingue a un líder de un seguidor.", author: "Steve Jobs", lang: "es" },
  { id: 3, text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein", lang: "en" },
  { id: 3, text: "No te esfuerces por ser un éxito, sino por ser de valor.", author: "Albert Einstein", lang: "es" },
  { id: 4, text: "The mind is everything. What you think you become.", author: "Buddha", lang: "en" },
  { id: 4, text: "La mente lo es todo. En lo que piensas te conviertes.", author: "Buda", lang: "es" },
  { id: 5, text: "An unexamined life is not worth living.", author: "Socrates", lang: "en" },
  { id: 5, text: "Una vida sin examinar no vale la pena vivirla.", author: "Sócrates", lang: "es" },
  { id: 6, text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs", lang: "en"},
  { id: 6, text: "Tu tiempo es limitado, así que no lo malgastes viviendo la vida de otra persona.", author: "Steve Jobs", lang: "es"},
  { id: 7, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", lang: "en"},
  { id: 7, text: "El futuro pertenece a quienes creen en la belleza de sus sueños.", author: "Eleanor Roosevelt", lang: "es"},
  { id: 8, text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", lang: "en"},
  { id: 8, text: "No importa lo despacio que vayas, siempre y cuando no te detengas.", author: "Confucio", lang: "es"},
  { id: 9, text: "Everything you can imagine is real.", author: "Pablo Picasso", lang: "en"},
  { id: 9, text: "Todo lo que puedes imaginar es real.", author: "Pablo Picasso", lang: "es"},
  { id: 10, text: "The only source of knowledge is experience.", author: "Albert Einstein", lang: "en"},
  { id: 10, text: "La única fuente de conocimiento es la experiencia.", author: "Albert Einstein", lang: "es"},
];

export const getQuotes = () => quotes;
