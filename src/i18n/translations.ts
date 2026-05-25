export type Locale = 'en' | 'hi' | 'bn' | 'ne';

export const locales: Locale[] = ['en', 'hi', 'bn', 'ne'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  bn: 'বাংলা',
  ne: 'नेपाली',
};

const en = {
  nav: {
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    getHelp: 'Get Help',
  },
  hero: {
    badge: 'For Indian Small Businesses',
    headline: 'Your business is online.\nBut is it working?',
    subheadline: 'Most small businesses lose customers because their website, Google listing, or social media is built wrong. We show you exactly what\'s broken — in plain language.',
    cta: 'Find out what\'s wrong',
    ctaSecondary: 'Read the blog',
  },
  value: {
    title: 'What we help you figure out',
    items: [
      { title: 'Why Google doesn\'t show your business', desc: 'Your competitors show up when someone searches. You don\'t. We tell you exactly why and what to do about it.' },
      { title: 'Why your website doesn\'t get calls', desc: 'You spent money on a website. But no one calls, no one messages. We show you what\'s pushing customers away.' },
      { title: 'Why your social media isn\'t working', desc: 'You post regularly but nothing happens. We decode what\'s actually wrong with your approach.' },
      { title: 'Why you\'re wasting money on ads', desc: 'Running Google/Facebook ads but no real business coming in? We show you where the money is actually going.' },
    ],
  },
  cta: {
    title: 'Ready to find out what\'s wrong?',
    desc: 'Our team at KhojKaro works with businesses like yours — no jargon, just results that make you money.',
    button: 'Talk to KhojKaro',
  },
  blog: {
    title: 'Latest Insights',
    subtitle: 'Straight answers about what Indian SMBs get wrong online',
    readMore: 'Read more',
  },
  about: {
    title: 'About Us',
    mission: 'We exist because small businesses in India deserve straight answers.',
    story: 'Most digital marketing agencies sell you things you don\'t understand. We believe Indian SMBs — the kirana stores, manufacturers, traders, service providers — deserve to know what\'s actually wrong with their online presence before spending a single rupee on fixing it.',
    powered: 'Powered by QuickLabs Enterprises',
    khojkaro: 'Businesses work with our team at',
  },
  contact: {
    title: 'Let\'s Talk',
    desc: 'No forms. No waiting. Just message us directly.',
    whatsapp: 'Message on WhatsApp',
    email: 'Send an Email',
  },
  footer: {
    tagline: 'We decode what\'s wrong with your business online — no tech jargon, just straight answers that make you money.',
    navigate: 'Navigate',
    services: 'Services',
    poweredBy: 'A QuickLabs Enterprise',
    workWith: 'Businesses work with us at',
    rights: 'All rights reserved.',
  },
};

const hi = {
  nav: {
    blog: 'ब्लॉग',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    getHelp: 'मदद लें',
  },
  hero: {
    badge: 'भारत के छोटे बिजनेस के लिए',
    headline: 'आपका बिजनेस ऑनलाइन है।\nलेकिन काम कर रहा है क्या?',
    subheadline: 'ज़्यादातर छोटे बिजनेस कस्टमर इसलिए खोते हैं क्योंकि उनकी वेबसाइट, Google लिस्टिंग, या सोशल मीडिया गलत तरीके से बनी है। हम आपको सीधी भाषा में बताते हैं कि क्या खराब है।',
    cta: 'पता करें क्या गलत है',
    ctaSecondary: 'ब्लॉग पढ़ें',
  },
  value: {
    title: 'हम आपको क्या समझाते हैं',
    items: [
      { title: 'Google पर आपका बिजनेस क्यों नहीं दिखता', desc: 'जब कोई सर्च करता है तो आपका competitor दिखता है, आप नहीं। हम बताते हैं एक्ज़ैक्टली क्यों।' },
      { title: 'वेबसाइट बनवाई लेकिन कॉल नहीं आते', desc: 'पैसे खर्च किए वेबसाइट पर, लेकिन कोई फोन नहीं करता। हम बताते हैं कस्टमर क्यों भाग रहे हैं।' },
      { title: 'सोशल मीडिया पर कुछ नहीं हो रहा', desc: 'रोज़ पोस्ट करते हो लेकिन कोई फायदा नहीं। हम बताते हैं असली प्रॉब्लम क्या है।' },
      { title: 'Ads पर पैसा बर्बाद हो रहा है', desc: 'Google/Facebook ads चला रहे हो लेकिन बिजनेस नहीं आ रहा? हम बताते हैं पैसा कहाँ जा रहा है।' },
    ],
  },
  cta: {
    title: 'पता करना चाहते हैं क्या गलत है?',
    desc: 'KhojKaro की टीम आपके जैसे बिजनेस के साथ काम करती है — कोई जटिल भाषा नहीं, बस नतीजे।',
    button: 'KhojKaro से बात करें',
  },
  blog: {
    title: 'ताज़ा इनसाइट्स',
    subtitle: 'भारतीय छोटे बिजनेस ऑनलाइन क्या गलत करते हैं — सीधी बात',
    readMore: 'पूरा पढ़ें',
  },
  about: {
    title: 'हमारे बारे में',
    mission: 'हम इसलिए हैं क्योंकि भारत के छोटे बिजनेस को सीधे जवाब मिलने चाहिए।',
    story: 'ज़्यादातर डिजिटल मार्केटिंग एजेंसीज़ आपको वो चीज़ें बेचती हैं जो आप समझते ही नहीं। हम मानते हैं कि भारतीय MSMEs — किराना स्टोर, मैन्युफैक्चरर्स, ट्रेडर्स, सर्विस प्रोवाइडर्स — को ये जानने का हक है कि उनकी ऑनलाइन presence में असल में क्या गड़बड़ है, एक पैसा खर्च करने से पहले।',
    powered: 'QuickLabs Enterprises द्वारा संचालित',
    khojkaro: 'बिजनेस हमारी टीम के साथ काम करते हैं',
  },
  contact: {
    title: 'बात करें',
    desc: 'कोई फॉर्म नहीं। कोई इंतज़ार नहीं। सीधे मैसेज करें।',
    whatsapp: 'WhatsApp पर मैसेज करें',
    email: 'ईमेल भेजें',
  },
  footer: {
    tagline: 'हम आपके बिजनेस की ऑनलाइन गड़बड़ी सीधी भाषा में समझाते हैं — कोई टेक्निकल बात नहीं, बस वो जानकारी जो पैसा कमाए।',
    navigate: 'नेविगेट करें',
    services: 'सेवाएं',
    poweredBy: 'एक QuickLabs Enterprise',
    workWith: 'बिजनेस हमसे काम करते हैं',
    rights: 'सर्वाधिकार सुरक्षित।',
  },
};

const bn = {
  nav: {
    blog: 'ব্লগ',
    about: 'আমাদের সম্পর্কে',
    contact: 'যোগাযোগ',
    getHelp: 'সাহায্য নিন',
  },
  hero: {
    badge: 'ভারতের ছোট ব্যবসার জন্য',
    headline: 'তোমার ব্যবসা অনলাইনে আছে।\nকিন্তু কাজ কি হচ্ছে?',
    subheadline: 'বেশিরভাগ ছোট ব্যবসা কাস্টমার হারায় কারণ তাদের ওয়েবসাইট, Google লিস্টিং, বা সোশ্যাল মিডিয়া ভুলভাবে তৈরি। আমরা সহজ ভাষায় বলি ঠিক কোথায় গণ্ডগোল।',
    cta: 'জানুন কী ভুল হচ্ছে',
    ctaSecondary: 'ব্লগ পড়ুন',
  },
  value: {
    title: 'আমরা কী বোঝাই',
    items: [
      { title: 'Google-এ তোমার ব্যবসা কেন দেখায় না', desc: 'কেউ সার্চ করলে তোমার competitor দেখায়, তুমি না। আমরা বলি ঠিক কেন।' },
      { title: 'ওয়েবসাইট বানিয়েছো কিন্তু ফোন আসে না', desc: 'টাকা খরচ করে ওয়েবসাইট বানালে, কিন্তু কেউ ফোন করে না। আমরা বলি কাস্টমার কেন পালাচ্ছে।' },
      { title: 'সোশ্যাল মিডিয়ায় কিছু হচ্ছে না', desc: 'রোজ পোস্ট করছো কিন্তু কোনো ফল নেই। আমরা বলি আসল সমস্যাটা কী।' },
      { title: 'Ads-এ টাকা জলে যাচ্ছে', desc: 'Google/Facebook ads চালাচ্ছো কিন্তু ব্যবসা আসছে না? আমরা বলি টাকা কোথায় যাচ্ছে।' },
    ],
  },
  cta: {
    title: 'জানতে চাও কী ভুল হচ্ছে?',
    desc: 'KhojKaro-র টিম তোমার মতো ব্যবসার সাথে কাজ করে — কোনো জটিল কথা নয়, শুধু ফলাফল।',
    button: 'KhojKaro-র সাথে কথা বলুন',
  },
  blog: {
    title: 'সাম্প্রতিক ইনসাইটস',
    subtitle: 'ভারতীয় ছোট ব্যবসা অনলাইনে কী ভুল করে — সোজা কথা',
    readMore: 'আরো পড়ুন',
  },
  about: {
    title: 'আমাদের সম্পর্কে',
    mission: 'আমরা আছি কারণ ভারতের ছোট ব্যবসার সোজা উত্তর পাওয়া উচিত।',
    story: 'বেশিরভাগ ডিজিটাল মার্কেটিং এজেন্সি তোমাকে এমন জিনিস বেচে যা তুমি বোঝোই না। আমরা মনে করি ভারতীয় MSMEs — কিরানা দোকান, মানুফ্যাকচারার, ব্যাপারী, সার্ভিস প্রোভাইডার — তাদের জানার অধিকার আছে যে অনলাইনে আসলে কোথায় গণ্ডগোল, একটা পয়সা খরচ করার আগে।',
    powered: 'QuickLabs Enterprises দ্বারা পরিচালিত',
    khojkaro: 'ব্যবসারা আমাদের টিমের সাথে কাজ করে',
  },
  contact: {
    title: 'কথা বলুন',
    desc: 'কোনো ফর্ম নেই। কোনো অপেক্ষা নেই। সরাসরি মেসেজ করুন।',
    whatsapp: 'WhatsApp-এ মেসেজ করুন',
    email: 'ইমেইল পাঠান',
  },
  footer: {
    tagline: 'তোমার ব্যবসার অনলাইন গণ্ডগোল সহজ ভাষায় বুঝিয়ে দিই — কোনো টেকনিক্যাল কথা নয়, শুধু সেই তথ্য যা টাকা আনবে।',
    navigate: 'নেভিগেট',
    services: 'পরিষেবা',
    poweredBy: 'একটি QuickLabs Enterprise',
    workWith: 'ব্যবসারা আমাদের সাথে কাজ করে',
    rights: 'সর্বস্বত্ব সংরক্ষিত।',
  },
};

const ne = {
  nav: {
    blog: 'ब्लग',
    about: 'हाम्रो बारेमा',
    contact: 'सम्पर्क',
    getHelp: 'सहयोग लिनुहोस्',
  },
  hero: {
    badge: 'भारतका सानो व्यापारका लागि',
    headline: 'तिम्रो व्यापार अनलाइनमा छ।\nतर काम गरिरहेको छ?',
    subheadline: 'धेरैजसो सानो व्यापारहरूले ग्राहक गुमाउँछन् किनभने तिनीहरूको वेबसाइट, Google लिस्टिङ, वा सोशल मिडिया गलत तरिकाले बनाइएको छ। हामी सजिलो भाषामा बताउँछौं ठ्याक्कै कहाँ बिग्रेको छ।',
    cta: 'पत्ता लगाउनुहोस् के गलत छ',
    ctaSecondary: 'ब्लग पढ्नुहोस्',
  },
  value: {
    title: 'हामी के बुझाउँछौं',
    items: [
      { title: 'Google मा तिम्रो व्यापार किन देखिँदैन', desc: 'कसैले सर्च गर्दा तिम्रो competitor देखिन्छ, तिमी देखिँदैनौ। हामी बताउँछौं किन।' },
      { title: 'वेबसाइट बनायौ तर फोन आउँदैन', desc: 'पैसा खर्च गरेर वेबसाइट बनायौ, तर कसैले फोन गर्दैन। हामी बताउँछौं ग्राहक किन भाग्छन्।' },
      { title: 'सोशल मिडियामा केही भइरहेको छैन', desc: 'रोज पोस्ट गर्छौ तर कुनै फाइदा छैन। हामी बताउँछौं असली समस्या के हो।' },
      { title: 'Ads मा पैसा बर्बाद भइरहेको छ', desc: 'Google/Facebook ads चलाइरहेछौ तर व्यापार आइरहेको छैन? हामी बताउँछौं पैसा कहाँ जाँदैछ।' },
    ],
  },
  cta: {
    title: 'जान्न चाहनुहुन्छ के गलत छ?',
    desc: 'KhojKaro को टोलीले तिम्रो जस्तो व्यापारसँग काम गर्छ — कुनै जटिल भाषा छैन, बस नतिजा।',
    button: 'KhojKaro सँग कुरा गर्नुहोस्',
  },
  blog: {
    title: 'ताजा इनसाइटहरू',
    subtitle: 'भारतीय सानो व्यापारले अनलाइनमा के गलत गर्छन् — सोझो कुरा',
    readMore: 'थप पढ्नुहोस्',
  },
  about: {
    title: 'हाम्रो बारेमा',
    mission: 'हामी छौं किनभने भारतका सानो व्यापारलाई सोझो जवाफ पाउनुपर्छ।',
    story: 'धेरैजसो डिजिटल मार्केटिङ एजेन्सीहरूले तिमीलाई त्यो कुरा बेच्छन् जो तिमीले बुझ्दैनौ। हामी मान्छौं कि भारतीय MSMEs — किराना पसल, मैन्युफ्याक्चरर, व्यापारी, सर्भिस प्रोभाइडर — लाई जान्ने अधिकार छ कि अनलाइनमा वास्तवमा कहाँ गडबड छ, एक पैसा खर्च गर्नुअघि।',
    powered: 'QuickLabs Enterprises द्वारा सञ्चालित',
    khojkaro: 'व्यापारहरू हाम्रो टोलीसँग काम गर्छन्',
  },
  contact: {
    title: 'कुरा गरौं',
    desc: 'कुनै फारम छैन। कुनै पर्खाइ छैन। सिधै मेसेज गर्नुहोस्।',
    whatsapp: 'WhatsApp मा मेसेज गर्नुहोस्',
    email: 'इमेल पठाउनुहोस्',
  },
  footer: {
    tagline: 'तिम्रो व्यापारको अनलाइन गडबड सजिलो भाषामा बुझाउँछौं — कुनै टेक्निकल कुरा छैन, बस त्यो जानकारी जसले पैसा कमाउँछ।',
    navigate: 'नेभिगेट',
    services: 'सेवाहरू',
    poweredBy: 'एउटा QuickLabs Enterprise',
    workWith: 'व्यापारहरू हामीसँग काम गर्छन्',
    rights: 'सर्वाधिकार सुरक्षित।',
  },
};

export const translations: Record<Locale, typeof en> = { en, hi, bn, ne };

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function getLocalePath(locale: Locale, path: string = '') {
  if (locale === 'en') return `/${path}`;
  return `/${locale}/${path}`;
}
