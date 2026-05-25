export type Locale = 'en' | 'hi' | 'bn' | 'ne';

export interface LocalizedText {
  en: string;
  hi: string;
  bn: string;
  ne: string;
}

export const issueTexts: Record<string, LocalizedText> = {
  slow_page_load: {
    en: 'Your website takes too long to load — customers leave after 3 seconds',
    hi: 'आपकी वेबसाइट लोड होने में बहुत समय लेती है — ग्राहक 3 सेकंड के बाद चले जाते हैं',
    bn: 'আপনার ওয়েবসাইট লোড হতে অনেক সময় নেয় — গ্রাহকরা ৩ সেকেন্ডের পরে চলে যায়',
    ne: 'तपाईंको वेबसाइट लोड हुन धेरै समय लाग्छ — ग्राहकहरू ३ सेकेन्ड पछि छोड्छन्',
  },
  poor_lcp: {
    en: 'Main content appears too slowly — visitors see a blank screen for too long',
    hi: 'मुख्य सामग्री बहुत धीरे दिखती है — विजिटर बहुत देर तक खाली स्क्रीन देखते हैं',
    bn: 'মূল কন্টেন্ট খুব ধীরে দেখায় — ভিজিটররা অনেকক্ষণ ফাঁকা স্ক্রিন দেখে',
    ne: 'मुख्य सामग्री धेरै ढिलो देखिन्छ — भ्रमणकर्ताहरूले लामो समयसम्म खाली स्क्रिन देख्छन्',
  },
  missing_title: {
    en: 'Your website has no title tag — Google doesn\'t know what your business does',
    hi: 'आपकी वेबसाइट पर कोई title tag नहीं है — Google को नहीं पता आपका बिज़नेस क्या करता है',
    bn: 'আপনার ওয়েবসাইটে কোনো title tag নেই — Google জানে না আপনার ব্যবসা কী করে',
    ne: 'तपाईंको वेबसाइटमा title tag छैन — Google लाई थाहा छैन तपाईंको व्यापारले के गर्छ',
  },
  poor_title_length: {
    en: 'Your page title is too short or too long — Google may cut it off in search results',
    hi: 'आपका page title बहुत छोटा या बहुत लंबा है — Google इसे search results में काट सकता है',
    bn: 'আপনার page title খুব ছোট বা বড় — Google এটা search results-এ কেটে দিতে পারে',
    ne: 'तपाईंको page title धेरै छोटो वा लामो छ — Google ले search results मा काट्न सक्छ',
  },
  missing_meta_description: {
    en: 'No meta description found — Google shows a random snippet from your page instead',
    hi: 'कोई meta description नहीं मिला — Google आपके पेज से एक random snippet दिखाता है',
    bn: 'কোনো meta description পাওয়া যায়নি — Google আপনার পেজ থেকে random snippet দেখায়',
    ne: 'Meta description भेटिएन — Google ले तपाईंको पेजबाट random snippet देखाउँछ',
  },
  missing_viewport: {
    en: 'Your site is not optimized for mobile phones — it looks broken on small screens',
    hi: 'आपकी साइट मोबाइल के लिए optimize नहीं है — छोटी स्क्रीन पर टूटी हुई दिखती है',
    bn: 'আপনার সাইট মোবাইলের জন্য optimize নয় — ছোট স্ক্রিনে ভাঙা দেখায়',
    ne: 'तपाईंको साइट मोबाइलको लागि optimize छैन — सानो स्क्रिनमा भाँचिएको देखिन्छ',
  },
  no_structured_data: {
    en: 'No structured data (Schema) — Google can\'t show your business info in rich results',
    hi: 'कोई structured data (Schema) नहीं — Google आपकी बिज़नेस info rich results में नहीं दिखा सकता',
    bn: 'কোনো structured data (Schema) নেই — Google আপনার business info rich results-এ দেখাতে পারে না',
    ne: 'Structured data (Schema) छैन — Google ले तपाईंको business info rich results मा देखाउन सक्दैन',
  },
  no_phone_visible: {
    en: 'No phone number visible on your homepage — customers can\'t call you easily',
    hi: 'होमपेज पर कोई फोन नंबर दिखाई नहीं दे रहा — ग्राहक आसानी से कॉल नहीं कर सकते',
    bn: 'হোমপেজে কোনো ফোন নম্বর দেখা যাচ্ছে না — গ্রাহকরা সহজে কল করতে পারছে না',
    ne: 'होमपेजमा फोन नम्बर देखिँदैन — ग्राहकहरूले सजिलै कल गर्न सक्दैनन्',
  },
  no_whatsapp_link: {
    en: 'No WhatsApp button or link found — you\'re missing the easiest way for customers to contact you',
    hi: 'कोई WhatsApp बटन या लिंक नहीं मिला — ग्राहकों के संपर्क करने का सबसे आसान तरीका गायब है',
    bn: 'কোনো WhatsApp বাটন বা লিংক নেই — গ্রাহকদের যোগাযোগের সবচেয়ে সহজ উপায় মিস করছেন',
    ne: 'WhatsApp बटन वा लिंक भेटिएन — ग्राहकहरूलाई सम्पर्क गर्ने सबैभन्दा सजिलो तरिका छुटेको छ',
  },
  no_social_links: {
    en: 'No social media links found — customers can\'t verify your business on Facebook/Instagram',
    hi: 'कोई social media लिंक नहीं मिला — ग्राहक Facebook/Instagram पर आपके बिज़नेस को verify नहीं कर सकते',
    bn: 'কোনো social media লিংক নেই — গ্রাহকরা Facebook/Instagram-এ আপনার ব্যবসা verify করতে পারে না',
    ne: 'Social media लिंक भेटिएन — ग्राहकहरूले Facebook/Instagram मा तपाईंको व्यापार verify गर्न सक्दैनन्',
  },
  no_google_maps: {
    en: 'No Google Maps embed found — customers can\'t find your physical location',
    hi: 'कोई Google Maps embed नहीं मिला — ग्राहक आपकी physical location नहीं खोज सकते',
    bn: 'কোনো Google Maps embed নেই — গ্রাহকরা আপনার physical location খুঁজে পাচ্ছে না',
    ne: 'Google Maps embed भेटिएन — ग्राहकहरूले तपाईंको physical location भेट्टाउन सक्दैनन्',
  },
  images_no_alt: {
    en: 'Images without descriptions — Google can\'t understand your images, hurting your SEO',
    hi: 'बिना description वाली images — Google आपकी images समझ नहीं सकता, SEO को नुकसान होता है',
    bn: 'Description ছাড়া images — Google আপনার images বুঝতে পারে না, SEO ক্ষতিগ্রস্ত হচ্ছে',
    ne: 'Description नभएका images — Google ले तपाईंका images बुझ्न सक्दैन, SEO लाई हानि हुन्छ',
  },
  no_ssl: {
    en: 'Your website is not secure (no HTTPS) — browsers show a "Not Secure" warning to visitors',
    hi: 'आपकी वेबसाइट secure नहीं है (HTTPS नहीं) — ब्राउज़र विज़िटर्स को "Not Secure" warning दिखाता है',
    bn: 'আপনার ওয়েবসাইট secure নয় (HTTPS নেই) — ব্রাউজার ভিজিটরদের "Not Secure" সতর্কতা দেখায়',
    ne: 'तपाईंको वेबसाइट secure छैन (HTTPS छैन) — ब्राउजरले भ्रमणकर्ताहरूलाई "Not Secure" चेतावनी देखाउँछ',
  },
  no_hreflang: {
    en: 'No language tags found — Google may show the wrong language version to searchers',
    hi: 'कोई language tags नहीं मिले — Google सर्चर्स को गलत भाषा version दिखा सकता है',
    bn: 'কোনো language tags নেই — Google searchers-কে ভুল ভাষার version দেখাতে পারে',
    ne: 'Language tags भेटिएनन् — Google ले खोजकर्ताहरूलाई गलत भाषा version देखाउन सक्छ',
  },
  no_cta_above_fold: {
    en: 'No clear call-to-action above the fold — visitors don\'t know what to do next',
    hi: 'ऊपर कोई clear call-to-action नहीं है — विजिटर्स को नहीं पता आगे क्या करना है',
    bn: 'উপরে কোনো clear call-to-action নেই — ভিজিটররা জানে না এরপর কী করতে হবে',
    ne: 'माथि कुनै clear call-to-action छैन — भ्रमणकर्ताहरूलाई थाहा छैन अब के गर्ने',
  },
  poor_accessibility: {
    en: 'Accessibility issues found — some visitors (and Google) can\'t properly read your site',
    hi: 'Accessibility समस्याएं मिलीं — कुछ विजिटर्स (और Google) आपकी साइट ठीक से नहीं पढ़ सकते',
    bn: 'Accessibility সমস্যা পাওয়া গেছে — কিছু ভিজিটর (এবং Google) আপনার সাইট ঠিকমতো পড়তে পারে না',
    ne: 'Accessibility समस्याहरू भेटिए — केही भ्रमणकर्ताहरू (र Google) ले तपाईंको साइट राम्ररी पढ्न सक्दैनन्',
  },
};

export const hookTexts: Record<string, LocalizedText> = {
  invisible_line: {
    en: 'Your business is INVISIBLE to {percent}% of people searching for {category} in {city}',
    hi: '{city} में {category} खोजने वाले {percent}% लोगों के लिए आपका बिज़नेस INVISIBLE है',
    bn: '{city}-তে {category} খুঁজছেন এমন {percent}% মানুষের কাছে আপনার ব্যবসা INVISIBLE',
    ne: '{city} मा {category} खोज्ने {percent}% मानिसहरूको लागि तपाईंको व्यापार INVISIBLE छ',
  },
  competitor_line: {
    en: 'Top {category} businesses in your area score {topScore}+. They\'re getting the customers you\'re losing.',
    hi: 'आपके इलाके के टॉप {category} बिज़नेस {topScore}+ स्कोर करते हैं। वो आपके customers ले रहे हैं।',
    bn: 'আপনার এলাকার সেরা {category} ব্যবসাগুলো {topScore}+ স্কোর করে। তারা আপনার customer নিয়ে নিচ্ছে।',
    ne: 'तपाईंको क्षेत्रका शीर्ष {category} व्यापारहरूले {topScore}+ स्कोर गर्छन्। तिनीहरूले तपाईंका ग्राहकहरू लैजान्छन्।',
  },
  money_loss_line: {
    en: 'You\'re losing an estimated ₹{min}-{max}/month in missed leads',
    hi: 'आप हर महीने अनुमानित ₹{min}-{max} के leads खो रहे हैं',
    bn: 'আপনি প্রতি মাসে আনুমানিক ₹{min}-{max} হারাচ্ছেন',
    ne: 'तपाईं हरेक महिना अनुमानित ₹{min}-{max} गुमाउँदै हुनुहुन्छ',
  },
  issues_found: {
    en: '{count} Critical Issues Found:',
    hi: '{count} गंभीर समस्याएं मिलीं:',
    bn: '{count}টি গুরুতর সমস্যা পাওয়া গেছে:',
    ne: '{count} गम्भीर समस्याहरू भेटिए:',
  },
  more_issues: {
    en: '{count} more issues found. See them all + how to fix each one.',
    hi: '{count} और समस्याएं मिलीं। सभी देखें + हर एक को कैसे ठीक करें।',
    bn: 'আরও {count}টি সমস্যা পাওয়া গেছে। সব দেখুন + প্রতিটি কীভাবে ঠিক করবেন।',
    ne: '{count} थप समस्याहरू भेटिए। सबै हेर्नुहोस् + प्रत्येक कसरी ठीक गर्ने।',
  },
  whatsapp_cta: {
    en: 'Get Full Report on WhatsApp',
    hi: 'WhatsApp पर पूरी रिपोर्ट पाएं',
    bn: 'WhatsApp-এ পুরো রিপোর্ট পান',
    ne: 'WhatsApp मा पूरा रिपोर्ट पाउनुहोस्',
  },
  whatsapp_subtitle: {
    en: 'Your full report is ready. Tap below to get it on WhatsApp.',
    hi: 'आपकी पूरी रिपोर्ट तैयार है। WhatsApp पर पाने के लिए नीचे टैप करें।',
    bn: 'আপনার পুরো রিপোর্ট তৈরি। WhatsApp-এ পেতে নিচে ট্যাপ করুন।',
    ne: 'तपाईंको पूरा रिपोर्ट तयार छ। WhatsApp मा प्राप्त गर्न तल ट्याप गर्नुहोस्।',
  },
  score_label: {
    en: 'Score',
    hi: 'स्कोर',
    bn: 'স্কোর',
    ne: 'स्कोर',
  },
};

export const reportLabels: Record<string, LocalizedText> = {
  performance: {
    en: 'Speed & Performance',
    hi: 'स्पीड और परफॉर्मेंस',
    bn: 'স্পিড ও পারফরম্যান্স',
    ne: 'स्पिड र परफर्मेन्स',
  },
  seo: {
    en: 'SEO Basics',
    hi: 'SEO बेसिक्स',
    bn: 'SEO বেসিক্স',
    ne: 'SEO बेसिक्स',
  },
  trust: {
    en: 'Trust Signals',
    hi: 'विश्वास संकेत',
    bn: 'বিশ্বাসের সংকেত',
    ne: 'विश्वास संकेत',
  },
  mobile: {
    en: 'Mobile Friendliness',
    hi: 'मोबाइल फ्रेंडलीनेस',
    bn: 'মোবাইল ফ্রেন্ডলিনেস',
    ne: 'मोबाइल फ्रेन्डलिनेस',
  },
  leadCapture: {
    en: 'Lead Capture & CTA',
    hi: 'लीड कैप्चर और CTA',
    bn: 'লিড ক্যাপচার ও CTA',
    ne: 'लिड क्याप्चर र CTA',
  },
  overall: {
    en: 'Overall Score',
    hi: 'कुल स्कोर',
    bn: 'সার্বিক স্কোর',
    ne: 'समग्र स्कोर',
  },
  report_title: {
    en: 'Website Audit Report',
    hi: 'वेबसाइट ऑडिट रिपोर्ट',
    bn: 'ওয়েবসাইট অডিট রিপোর্ট',
    ne: 'वेबसाइट अडिट रिपोर्ट',
  },
  business: {
    en: 'Business',
    hi: 'बिज़नेस',
    bn: 'ব্যবসা',
    ne: 'व्यापार',
  },
  website: {
    en: 'Website',
    hi: 'वेबसाइट',
    bn: 'ওয়েবসাইট',
    ne: 'वेबसाइट',
  },
  city_label: {
    en: 'City',
    hi: 'शहर',
    bn: 'শহর',
    ne: 'शहर',
  },
  category_label: {
    en: 'Category',
    hi: 'कैटेगरी',
    bn: 'ক্যাটেগরি',
    ne: 'कैटेगरी',
  },
  fix_cta: {
    en: 'KhojKaro can fix all of this for you',
    hi: 'KhojKaro यह सब आपके लिए ठीक कर सकता है',
    bn: 'KhojKaro এই সব আপনার জন্য ঠিক করতে পারে',
    ne: 'KhojKaro ले यो सबै तपाईंको लागि ठीक गर्न सक्छ',
  },
  fix_button: {
    en: 'Talk to KhojKaro',
    hi: 'KhojKaro से बात करें',
    bn: 'KhojKaro-এর সাথে কথা বলুন',
    ne: 'KhojKaro सँग कुरा गर्नुहोस्',
  },
  severity_critical: {
    en: 'Critical',
    hi: 'गंभीर',
    bn: 'গুরুতর',
    ne: 'गम्भीर',
  },
  severity_high: {
    en: 'High',
    hi: 'उच्च',
    bn: 'উচ্চ',
    ne: 'उच्च',
  },
  severity_medium: {
    en: 'Medium',
    hi: 'मध्यम',
    bn: 'মাঝারি',
    ne: 'मध्यम',
  },
  severity_low: {
    en: 'Low',
    hi: 'कम',
    bn: 'কম',
    ne: 'कम',
  },
};

export function t(texts: LocalizedText, locale: Locale): string {
  return texts[locale] || texts.en;
}

export function tReplace(texts: LocalizedText, locale: Locale, vars: Record<string, string | number>): string {
  let result = t(texts, locale);
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
  }
  return result;
}
