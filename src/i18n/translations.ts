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
  audit: {
    title: 'Free Website Audit',
    subtitle: 'Find out what\'s wrong with your website in 30 seconds — completely free',
    formUrl: 'Your website URL',
    formUrlPlaceholder: 'e.g. www.yourbusiness.com',
    formName: 'Business Name',
    formNamePlaceholder: 'e.g. Sharma Plumbing',
    formCity: 'City',
    formCityPlaceholder: 'e.g. Siliguri',
    formCategory: 'Business Category',
    formCategorySelect: 'Select your category',
    formSubmit: 'Run Free Audit',
    formLoading: 'Analyzing your website...',
    navLabel: 'Free Audit',
  },
};

const hi = {
  nav: {
    blog: 'ब्लॉग',
    about: 'हमारे बारे में',
    contact: 'संपर्क करें',
    getHelp: 'मदद लें',
  },
  hero: {
    badge: 'भारतीय छोटे व्यापारियों के लिए',
    headline: 'आपका बिज़नेस ऑनलाइन तो है।\nपर क्या उससे कोई फायदा हो रहा है?',
    subheadline: 'ज़्यादातर छोटे व्यापारी अपने ग्राहक खो देते हैं क्योंकि उनकी वेबसाइट, गूगल लिस्टिंग या सोशल मीडिया में गड़बड़ी होती है। हम आपको आसान भाषा में बताते हैं कि दिक्कत कहाँ है।',
    cta: 'पता करें कि क्या गलत है',
    ctaSecondary: 'ब्लॉग पढ़ें',
  },
  value: {
    title: 'हम आपको क्या समझाते हैं',
    items: [
      { title: 'गूगल पर आपका बिज़नेस क्यों नहीं दिखता?', desc: 'जब कोई सर्च करता है, तो आपके कॉम्पिटिटर दिखते हैं, आप नहीं। हम बताते हैं ऐसा क्यों है और इसे कैसे ठीक करें।' },
      { title: 'आपकी वेबसाइट से कॉल क्यों नहीं आते?', desc: 'आपने वेबसाइट पर पैसे खर्च किए। पर न कोई कॉल आता है, न मैसेज। हम आपको दिखाते हैं कि कौन सी चीज़ ग्राहकों को दूर भगा रही है।' },
      { title: 'आपका सोशल मीडिया काम क्यों नहीं कर रहा?', desc: 'आप रोज़ पोस्ट करते हैं पर कुछ हासिल नहीं होता। हम समझाते हैं कि आपके तरीके में असल में क्या कमी है।' },
      { title: 'आप विज्ञापनों पर पैसा क्यों बर्बाद कर रहे हैं?', desc: 'गूगल या फेसबुक पर एड चला रहे हैं पर कोई बिज़नेस नहीं आ रहा? हम आपको बताते हैं कि आपका पैसा असल में जा कहाँ रहा है।' },
    ],
  },
  cta: {
    title: 'जानने के लिए तैयार हैं कि दिक्कत कहाँ है?',
    desc: 'KhojKaro की हमारी टीम आपके जैसे बिज़नेस के साथ काम करती है — कोई उलझाने वाली बातें नहीं, सिर्फ वो नतीजे जो आपकी कमाई बढ़ाएं।',
    button: 'KhojKaro से बात करें',
  },
  blog: {
    title: 'ताज़ा जानकारी',
    subtitle: 'सीधे जवाब: भारतीय छोटे व्यापारी ऑनलाइन कहाँ गलती करते हैं',
    readMore: 'आगे पढ़ें',
  },
  about: {
    title: 'हमारे बारे में',
    mission: 'हम इसलिए हैं क्योंकि भारत के छोटे व्यापारियों को सीधे और सच्चे जवाब मिलने चाहिए।',
    story: 'ज़्यादातर डिजिटल मार्केटिंग एजेंसियां आपको वो चीज़ें बेचती हैं जो आपकी समझ से बाहर होती हैं। हमारा मानना है कि भारत के छोटे व्यापारियों — जैसे किराना दुकान, मैन्युफैक्चरर, और सर्विस देने वालों — को अपनी ऑनलाइन कमियों को ठीक करने पर एक भी रुपया खर्च करने से पहले ये जानने का हक है कि असल में दिक्कत कहाँ है।',
    powered: 'QuickLabs Enterprises द्वारा संचालित',
    khojkaro: 'व्यापारी हमारी टीम के साथ यहाँ जुड़ते हैं',
  },
  contact: {
    title: 'आइए बात करें',
    desc: 'कोई फॉर्म नहीं। कोई इंतज़ार नहीं। बस सीधे हमें मैसेज करें।',
    whatsapp: 'WhatsApp पर मैसेज करें',
    email: 'ईमेल भेजें',
  },
  footer: {
    tagline: 'हम पता लगाते हैं कि आपके बिज़नेस के ऑनलाइन सेटअप में क्या कमी है — बिना किसी तकनीकी उलझन के, सिर्फ सीधे जवाब जो आपकी कमाई बढ़ाएं।',
    navigate: 'नेविगेट करें',
    services: 'सेवाएं',
    poweredBy: 'एक QuickLabs Enterprise',
    workWith: 'बिज़नेस हमारे साथ यहाँ जुड़ते हैं',
    rights: 'सर्वाधिकार सुरक्षित।',
  },
  audit: {
    title: 'मुफ्त वेबसाइट ऑडिट',
    subtitle: '30 सेकंड में जानें आपकी वेबसाइट में क्या गलत है — बिल्कुल मुफ्त',
    formUrl: 'आपकी वेबसाइट का URL',
    formUrlPlaceholder: 'जैसे www.yourbusiness.com',
    formName: 'बिज़नेस का नाम',
    formNamePlaceholder: 'जैसे शर्मा प्लंबिंग',
    formCity: 'शहर',
    formCityPlaceholder: 'जैसे सिलीगुड़ी',
    formCategory: 'बिज़नेस कैटेगरी',
    formCategorySelect: 'अपनी कैटेगरी चुनें',
    formSubmit: 'मुफ्त ऑडिट चलाएं',
    formLoading: 'आपकी वेबसाइट का विश्लेषण हो रहा है...',
    navLabel: 'मुफ्त ऑडिट',
  },
};

const bn = {
  nav: {
    blog: 'ব্লগ',
    about: 'আমাদের কথা',
    contact: 'যোগাযোগ',
    getHelp: 'সাহায্য নিন',
  },
  hero: {
    badge: 'ভারতের ছোট ব্যবসায়ীদের জন্য',
    headline: 'আপনার ব্যবসা অনলাইনে আছে।\nকিন্তু তা থেকে কি কোনো লাভ হচ্ছে?',
    subheadline: 'বেশিরভাগ ছোট ব্যবসায়ী তাদের গ্রাহক হারায় কারণ তাদের ওয়েবসাইট, গুগল লিস্টিং বা সোশ্যাল মিডিয়া ঠিকমতো বানানো নেই। আমরা আপনাকে সহজ ভাষায় বলে দিই যে আসল সমস্যাটা কোথায়।',
    cta: 'জানুন কোথায় ভুল হচ্ছে',
    ctaSecondary: 'ব্লগ পড়ুন',
  },
  value: {
    title: 'আমরা কী বোঝাই',
    items: [
      { title: 'গুগলে আপনার ব্যবসা কেন দেখায় না?', desc: 'কেউ সার্চ করলে আপনার প্রতিযোগীদের নাম আসে, কিন্তু আপনারটা আসে না। আমরা আপনাকে জানাই এমনটা কেন হচ্ছে আর এর সমাধান কী।' },
      { title: 'আপনার ওয়েবসাইট থেকে কল কেন আসে না?', desc: 'আপনি ওয়েবসাইট বানাতে টাকা খরচ করেছেন। কিন্তু কেউ কল বা মেসেজ করে না। আমরা আপনাকে দেখাব কোন কারণে গ্রাহকরা ফিরে যাচ্ছে।' },
      { title: 'আপনার সোশ্যাল মিডিয়া কোনো কাজে আসছে না কেন?', desc: 'আপনি রোজ পোস্ট করেন কিন্তু কিছুই লাভ হয় না। আমরা আপনাকে বুঝিয়ে দিই যে আপনার পদ্ধতিতে আসলে কোথায় ভুল আছে।' },
      { title: 'অ্যাডে (Ads) শুধু শুধু টাকা নষ্ট করছেন কেন?', desc: 'গুগল বা ফেসবুকে অ্যাড চালাচ্ছেন অথচ কোনো নতুন কাজ আসছে না? আমরা আপনাকে দেখাব আপনার টাকা আসলে কোথায় যাচ্ছে।' },
    ],
  },
  cta: {
    title: 'কোথায় ভুল হচ্ছে জানতে প্রস্তুত?',
    desc: 'KhojKaro-তে আমাদের টিম আপনাদের মতো ব্যবসার সাথেই কাজ করে — কোনো কঠিন কথা নয়, শুধুই এমন ফলাফল যা আপনার রোজগার বাড়ায়।',
    button: 'KhojKaro-র সাথে কথা বলুন',
  },
  blog: {
    title: 'নতুন খবরাখবর',
    subtitle: 'সোজাসাপ্টা উত্তর: ভারতের ছোট ব্যবসায়ীরা অনলাইনে কোথায় ভুল করে',
    readMore: 'আরও পড়ুন',
  },
  about: {
    title: 'আমাদের কথা',
    mission: 'আমরা কাজ করি কারণ ভারতের ছোট ব্যবসায়ীদের সোজাসাপ্টা এবং সত্যি উত্তর পাওয়ার অধিকার আছে।',
    story: 'বেশিরভাগ ডিজিটাল মার্কেটিং এজেন্সি আপনাকে এমন সব জিনিস বিক্রি করে যা আপনার মাথার ওপর দিয়ে যায়। আমাদের বিশ্বাস, ভারতের ছোট ব্যবসায়ীদের — যেমন মুদির দোকান, ম্যানুফ্যাকচারার বা সার্ভিস প্রোভাইডারদের — নিজেদের অনলাইন সমস্যার পিছনে এক টাকাও খরচ করার আগে এটা জানার অধিকার আছে যে আসল সমস্যাটা কোথায়।',
    powered: 'QuickLabs Enterprises দ্বারা পরিচালিত',
    khojkaro: 'ব্যবসায়ীরা আমাদের টিমের সাথে কাজ করে এখানে',
  },
  contact: {
    title: 'চলুন কথা বলি',
    desc: 'কোনো ফর্ম নেই। কোনো অপেক্ষাও নেই। সোজা আমাদের মেসেজ করুন।',
    whatsapp: 'WhatsApp-এ মেসেজ করুন',
    email: 'ইমেল পাঠান',
  },
  footer: {
    tagline: 'আমরা আপনার ব্যবসার অনলাইন সেটআপের সমস্যাগুলো খুঁজে বের করি — কোনো কঠিন প্রযুক্তিগত কথা ছাড়া, শুধু সোজাসাপ্টা উত্তর যা আপনার রোজগার বাড়াতে সাহায্য করে।',
    navigate: 'নেভিগেট করুন',
    services: 'পরিষেবা',
    poweredBy: 'একটি QuickLabs Enterprise',
    workWith: 'ব্যবসায়ীরা আমাদের সাথে কাজ করে এখানে',
    rights: 'সর্বস্বত্ব সংরক্ষিত।',
  },
  audit: {
    title: 'বিনামূল্যে ওয়েবসাইট অডিট',
    subtitle: '৩০ সেকেন্ডে জানুন আপনার ওয়েবসাইটে কী সমস্যা আছে — সম্পূর্ণ বিনামূল্যে',
    formUrl: 'আপনার ওয়েবসাইটের URL',
    formUrlPlaceholder: 'যেমন www.yourbusiness.com',
    formName: 'ব্যবসার নাম',
    formNamePlaceholder: 'যেমন শর্মা প্লাম্বিং',
    formCity: 'শহর',
    formCityPlaceholder: 'যেমন শিলিগুড়ি',
    formCategory: 'ব্যবসার ক্যাটেগরি',
    formCategorySelect: 'আপনার ক্যাটেগরি বেছে নিন',
    formSubmit: 'বিনামূল্যে অডিট চালান',
    formLoading: 'আপনার ওয়েবসাইট বিশ্লেষণ করা হচ্ছে...',
    navLabel: 'বিনামূল্যে অডিট',
  },
};

const ne = {
  nav: {
    blog: 'ब्लग',
    about: 'हाम्रो बारेमा',
    contact: 'सम्पर्क',
    getHelp: 'मद्दत लिनुहोस्',
  },
  hero: {
    badge: 'भारतका साना व्यापारीहरूका लागि',
    headline: 'तपाईँको व्यापार अनलाइन त छ।\nतर के त्यसले काम गरिरहेको छ?',
    subheadline: 'धेरैजसो साना व्यापारीहरूले आफ्ना ग्राहक गुमाउँछन् किनभने उनीहरूको वेबसाइट, गुगल लिस्टिङ वा सोसल मिडिया सही तरिकाले बनेको हुँदैन। हामी तपाईँलाई सजिलो भाषामा बताउँछौँ कि खासमा गल्ती कहाँ छ।',
    cta: 'के गल्ती छ, पत्ता लगाउनुहोस्',
    ctaSecondary: 'ब्लग पढ्नुहोस्',
  },
  value: {
    title: 'हामी के बुझाउँछौँ',
    items: [
      { title: 'गुगलमा तपाईँको व्यापार किन देखिँदैन?', desc: 'कसैले सर्च गर्दा तपाईँका प्रतिस्पर्धीहरू देखिन्छन्, तर तपाईँको नाम आउँदैन। यस्तो किन हुन्छ र यसलाई कसरी सुधार्ने भनेर हामी बताउँछौँ।' },
      { title: 'तपाईँको वेबसाइटबाट कल किन आउँदैन?', desc: 'तपाईँले वेबसाइटमा पैसा खर्च गर्नुभयो। तर न कसैको कल आउँछ, न म्यासेज। हामी तपाईँलाई देखाउँछौँ कि कुन कुराले ग्राहकहरूलाई भगाइरहेको छ।' },
      { title: 'तपाईँको सोसल मिडियाले किन काम गरिरहेको छैन?', desc: 'तपाईँ सधैँ पोस्ट गर्नुहुन्छ तर केही फाइदा हुँदैन। हामी तपाईँलाई बुझाउँछौँ कि तपाईँको तरिकामा खासमा के गल्ती छ।' },
      { title: 'तपाईँ विज्ञापनमा किन पैसा खेर फालिरहनुभएको छ?', desc: 'गुगल वा फेसबुकमा विज्ञापन चलाइरहनुभएको छ तर नयाँ व्यापार आएको छैन? हामी तपाईँलाई देखाउँछौँ कि तपाईँको पैसा खासमा कहाँ जाँदैछ।' },
    ],
  },
  cta: {
    title: 'गल्ती कहाँ छ भनेर जान्न तयार हुनुहुन्छ?',
    desc: 'KhojKaro मा हाम्रो टिम तपाईँजस्तै व्यापारीहरूसँग काम गर्छ — कुनै गाह्रो कुरा होइन, मात्र त्यस्तो नतिजा जसले तपाईँको कमाइ बढाउँछ।',
    button: 'KhojKaro सँग कुरा गर्नुहोस्',
  },
  blog: {
    title: 'नयाँ जानकारी',
    subtitle: 'सिधा जवाफ: भारतका साना व्यापारीहरूले अनलाइनमा कहाँ गल्ती गर्छन्',
    readMore: 'थप पढ्नुहोस्',
  },
  about: {
    title: 'हाम्रो बारेमा',
    mission: 'हामी यसकारण छौँ किनभने भारतका साना व्यापारीहरूले सिधा र साँचो जवाफ पाउनुपर्छ।',
    story: 'धेरैजसो डिजिटल मार्केटिङ एजेन्सीहरूले तपाईँलाई त्यस्ता कुराहरू बेच्छन् जुन तपाईँ बुझ्नुहुन्न। हाम्रो विश्वास छ कि भारतका साना व्यापारीहरू — जस्तै किराना पसल, म्यानुफ्याक्चरर, व्यापारी र सेवा दिनेहरूले — आफ्नो अनलाइन समस्या सुधार्न एक रुपैयाँ खर्च गर्नुअघि खासमा गल्ती कहाँ छ भनेर जान्न पाउनुपर्छ।',
    powered: 'QuickLabs Enterprises द्वारा सञ्चालित',
    khojkaro: 'व्यापारीहरू हाम्रो टिमसँग यहाँ काम गर्छन्',
  },
  contact: {
    title: 'कुरा गरौँ',
    desc: 'कुनै फारम छैन। कुनै पर्खाइ छैन। सिधै हामीलाई म्यासेज गर्नुहोस्।',
    whatsapp: 'WhatsApp मा म्यासेज गर्नुहोस्',
    email: 'इमेल पठाउनुहोस्',
  },
  footer: {
    tagline: 'हामी तपाईँको व्यापारको अनलाइन सेटअपमा के गल्ती छ भनेर पत्ता लगाउँछौँ — कुनै गाह्रो प्राविधिक कुरा बिना, मात्र सिधा जवाफ जसले तपाईँको कमाइ बढाउँछ।',
    navigate: 'नेभिगेट गर्नुहोस्',
    services: 'सेवाहरू',
    poweredBy: 'एक QuickLabs Enterprise',
    workWith: 'व्यापारीहरू हाम्रो साथ यहाँ काम गर्छन्',
    rights: 'सर्वाधिकार सुरक्षित।',
  },
  audit: {
    title: 'निःशुल्क वेबसाइट अडिट',
    subtitle: '३० सेकेन्डमा जान्नुहोस् तपाईंको वेबसाइटमा के गल्ती छ — पूर्णतया निःशुल्क',
    formUrl: 'तपाईंको वेबसाइट URL',
    formUrlPlaceholder: 'जस्तै www.yourbusiness.com',
    formName: 'व्यापारको नाम',
    formNamePlaceholder: 'जस्तै शर्मा प्लम्बिंग',
    formCity: 'शहर',
    formCityPlaceholder: 'जस्तै सिलिगुडी',
    formCategory: 'व्यापार कैटेगरी',
    formCategorySelect: 'आफ्नो कैटेगरी छान्नुहोस्',
    formSubmit: 'निःशुल्क अडिट चलाउनुहोस्',
    formLoading: 'तपाईंको वेबसाइट विश्लेषण हुँदैछ...',
    navLabel: 'निःशुल्क अडिट',
  },
};

export const translations: Record<Locale, typeof en> = { en, hi, bn, ne };

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function getLocalePath(locale: Locale, path: string = '') {
  return `/in/${locale}/${path}`;
}
