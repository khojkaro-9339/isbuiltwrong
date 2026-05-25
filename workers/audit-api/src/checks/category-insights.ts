import { type LocalizedText, type Locale, t } from '../i18n';

interface CategoryData {
  topScore: number;
  avgReviews: number;
  monthlyLeadLossMin: number;
  monthlyLeadLossMax: number;
  benchmarks: LocalizedText[];
  commonGaps: LocalizedText[];
}

const categories: Record<string, CategoryData> = {
  plumber: {
    topScore: 82,
    avgReviews: 40,
    monthlyLeadLossMin: 15000,
    monthlyLeadLossMax: 45000,
    benchmarks: [
      { en: 'Top plumbers have 40+ Google reviews', hi: 'टॉप plumbers के 40+ Google reviews हैं', bn: 'সেরা plumber-দের ৪০+ Google review আছে', ne: 'शीर्ष plumber हरूसँग ४०+ Google reviews छन्' },
      { en: 'They show before/after photos of their work', hi: 'वे अपने काम की before/after फोटो दिखाते हैं', bn: 'তারা কাজের before/after ফটো দেখায়', ne: 'तिनीहरूले आफ्नो कामको before/after फोटो देखाउँछन्' },
      { en: 'Emergency contact number is always visible', hi: 'Emergency contact number हमेशा दिखता है', bn: 'Emergency contact number সবসময় দেখা যায়', ne: 'Emergency contact number सधैं देखिन्छ' },
    ],
    commonGaps: [
      { en: 'No emergency service hours mentioned', hi: 'कोई emergency service hours नहीं बताए', bn: 'কোনো emergency service hours উল্লেখ নেই', ne: 'कुनै emergency service hours उल्लेख छैन' },
      { en: 'No service area/city coverage listed', hi: 'कोई service area/city coverage सूची नहीं', bn: 'কোনো service area/city coverage তালিকা নেই', ne: 'कुनै service area/city coverage सूची छैन' },
    ],
  },
  electrician: {
    topScore: 78,
    avgReviews: 35,
    monthlyLeadLossMin: 12000,
    monthlyLeadLossMax: 40000,
    benchmarks: [
      { en: 'Top electricians have licensed/certified badges displayed', hi: 'टॉप electricians licensed/certified बैज दिखाते हैं', bn: 'সেরা electrician-রা licensed/certified ব্যাজ দেখায়', ne: 'शीर्ष electrician हरूले licensed/certified badges देखाउँछन्' },
      { en: 'They list specific services with pricing ranges', hi: 'वे specific services pricing ranges के साथ list करते हैं', bn: 'তারা specific services pricing range সহ তালিকাভুক্ত করে', ne: 'तिनीहरूले specific services pricing ranges सहित सूचीबद्ध गर्छन्' },
    ],
    commonGaps: [
      { en: 'No mention of safety certifications', hi: 'Safety certifications का कोई उल्लेख नहीं', bn: 'Safety certifications-এর কোনো উল্লেখ নেই', ne: 'Safety certifications को कुनै उल्लेख छैन' },
      { en: 'No 24/7 availability mentioned', hi: '24/7 उपलब्धता का कोई उल्लेख नहीं', bn: '24/7 availability-এর কোনো উল্লেখ নেই', ne: '24/7 उपलब्धता को कुनै उल्लेख छैन' },
    ],
  },
  restaurant: {
    topScore: 85,
    avgReviews: 100,
    monthlyLeadLossMin: 25000,
    monthlyLeadLossMax: 75000,
    benchmarks: [
      { en: 'Top restaurants have 100+ reviews with photos', hi: 'टॉप restaurants के 100+ reviews और photos हैं', bn: 'সেরা restaurant-গুলোর ১০০+ review ও photo আছে', ne: 'शीर्ष restaurants सँग १००+ reviews र photos छन्' },
      { en: 'Online menu with prices is easily accessible', hi: 'Online menu prices के साथ आसानी से available है', bn: 'Online menu দাম সহ সহজে পাওয়া যায়', ne: 'Online menu मूल्य सहित सजिलै उपलब्ध छ' },
      { en: 'Online ordering or reservation system is active', hi: 'Online ordering या reservation system active है', bn: 'Online ordering বা reservation system চালু আছে', ne: 'Online ordering वा reservation system सक्रिय छ' },
    ],
    commonGaps: [
      { en: 'No online menu or outdated menu', hi: 'कोई online menu नहीं या पुराना menu', bn: 'কোনো online menu নেই বা পুরোনো menu', ne: 'कुनै online menu छैन वा पुरानो menu' },
      { en: 'No food photos or low quality images', hi: 'कोई food photos नहीं या low quality images', bn: 'কোনো food photo নেই বা low quality images', ne: 'कुनै food photos छैनन् वा low quality images' },
    ],
  },
  salon: {
    topScore: 80,
    avgReviews: 60,
    monthlyLeadLossMin: 20000,
    monthlyLeadLossMax: 60000,
    benchmarks: [
      { en: 'Top salons show their work portfolio with photos', hi: 'टॉप salons अपना work portfolio photos के साथ दिखाते हैं', bn: 'সেরা salon-গুলো photo সহ work portfolio দেখায়', ne: 'शीर्ष salons ले photos सहित work portfolio देखाउँछन्' },
      { en: 'Online booking is available', hi: 'Online booking उपलब्ध है', bn: 'Online booking পাওয়া যায়', ne: 'Online booking उपलब्ध छ' },
      { en: 'Price list is clearly displayed', hi: 'Price list स्पष्ट रूप से दिखाई गई है', bn: 'Price list স্পষ্টভাবে দেখানো হয়েছে', ne: 'Price list स्पष्ट रूपमा देखाइएको छ' },
    ],
    commonGaps: [
      { en: 'No before/after transformation photos', hi: 'कोई before/after transformation photos नहीं', bn: 'কোনো before/after transformation photo নেই', ne: 'कुनै before/after transformation photos छैनन्' },
      { en: 'No online booking option', hi: 'कोई online booking option नहीं', bn: 'কোনো online booking option নেই', ne: 'कुनै online booking option छैन' },
    ],
  },
  doctor: {
    topScore: 83,
    avgReviews: 50,
    monthlyLeadLossMin: 30000,
    monthlyLeadLossMax: 80000,
    benchmarks: [
      { en: 'Top clinics show doctor qualifications and experience', hi: 'टॉप clinics doctor की qualifications और experience दिखाते हैं', bn: 'সেরা clinic-গুলো doctor-এর qualification ও experience দেখায়', ne: 'शीर्ष clinics ले doctor को qualifications र experience देखाउँछन्' },
      { en: 'Online appointment booking is available', hi: 'Online appointment booking उपलब्ध है', bn: 'Online appointment booking পাওয়া যায়', ne: 'Online appointment booking उपलब्ध छ' },
    ],
    commonGaps: [
      { en: 'No doctor credentials or specialization listed', hi: 'कोई doctor credentials या specialization सूचीबद्ध नहीं', bn: 'কোনো doctor credential বা specialization তালিকাভুক্ত নেই', ne: 'कुनै doctor credentials वा specialization सूचीबद्ध छैन' },
      { en: 'Clinic timings not clearly mentioned', hi: 'Clinic timings स्पष्ट रूप से नहीं बताए', bn: 'Clinic timings স্পষ্টভাবে উল্লেখ নেই', ne: 'Clinic timings स्पष्ट रूपमा उल्लेख छैन' },
    ],
  },
  retail_shop: {
    topScore: 75,
    avgReviews: 30,
    monthlyLeadLossMin: 10000,
    monthlyLeadLossMax: 35000,
    benchmarks: [
      { en: 'Top retail shops have product catalogs online', hi: 'टॉप retail shops के product catalogs online हैं', bn: 'সেরা retail shop-গুলোর product catalog online আছে', ne: 'शीर्ष retail shops को product catalogs online छन्' },
      { en: 'Store hours and location clearly displayed', hi: 'Store hours और location स्पष्ट रूप से दिखाए गए हैं', bn: 'Store hours ও location স্পষ্টভাবে দেখানো হয়েছে', ne: 'Store hours र location स्पष्ट रूपमा देखाइएको छ' },
    ],
    commonGaps: [
      { en: 'No product showcase or catalog', hi: 'कोई product showcase या catalog नहीं', bn: 'কোনো product showcase বা catalog নেই', ne: 'कुनै product showcase वा catalog छैन' },
      { en: 'No delivery/shipping information', hi: 'कोई delivery/shipping जानकारी नहीं', bn: 'কোনো delivery/shipping তথ্য নেই', ne: 'कुनै delivery/shipping जानकारी छैन' },
    ],
  },
  gym_fitness: {
    topScore: 79,
    avgReviews: 45,
    monthlyLeadLossMin: 15000,
    monthlyLeadLossMax: 50000,
    benchmarks: [
      { en: 'Top gyms show facility photos and equipment list', hi: 'टॉप gyms facility photos और equipment list दिखाते हैं', bn: 'সেরা gym-গুলো facility photo ও equipment list দেখায়', ne: 'शीर्ष gyms ले facility photos र equipment list देखाउँछन्' },
      { en: 'Membership plans with pricing are visible', hi: 'Pricing के साथ membership plans दिखाई देते हैं', bn: 'Pricing সহ membership plan দেখা যায়', ne: 'Pricing सहित membership plans देखिन्छन्' },
    ],
    commonGaps: [
      { en: 'No class schedule or timing information', hi: 'कोई class schedule या timing जानकारी नहीं', bn: 'কোনো class schedule বা timing তথ্য নেই', ne: 'कुनै class schedule वा timing जानकारी छैन' },
      { en: 'No trainer profiles or certifications shown', hi: 'कोई trainer profiles या certifications नहीं दिखाए', bn: 'কোনো trainer profile বা certification দেখানো হয়নি', ne: 'कुनै trainer profiles वा certifications देखाइएको छैन' },
    ],
  },
  tuition_coaching: {
    topScore: 76,
    avgReviews: 25,
    monthlyLeadLossMin: 10000,
    monthlyLeadLossMax: 30000,
    benchmarks: [
      { en: 'Top coaching centers show student results and testimonials', hi: 'टॉप coaching centers student results और testimonials दिखाते हैं', bn: 'সেরা coaching centre-গুলো student result ও testimonial দেখায়', ne: 'शीर्ष coaching centers ले student results र testimonials देखाउँछन्' },
      { en: 'Course details with fee structure are clearly listed', hi: 'Fee structure के साथ course details स्पष्ट रूप से listed हैं', bn: 'Fee structure সহ course details স্পষ্টভাবে listed আছে', ne: 'Fee structure सहित course details स्पष्ट रूपमा listed छन्' },
    ],
    commonGaps: [
      { en: 'No student success stories or results', hi: 'कोई student success stories या results नहीं', bn: 'কোনো student success story বা result নেই', ne: 'कुनै student success stories वा results छैनन्' },
      { en: 'No demo class or trial offered', hi: 'कोई demo class या trial offer नहीं', bn: 'কোনো demo class বা trial অফার নেই', ne: 'कुनै demo class वा trial offer छैन' },
    ],
  },
  real_estate: {
    topScore: 81,
    avgReviews: 30,
    monthlyLeadLossMin: 50000,
    monthlyLeadLossMax: 200000,
    benchmarks: [
      { en: 'Top agents list properties with photos and virtual tours', hi: 'टॉप agents photos और virtual tours के साथ properties list करते हैं', bn: 'সেরা agent-রা photo ও virtual tour সহ property তালিকাভুক্ত করে', ne: 'शीर्ष agents ले photos र virtual tours सहित properties list गर्छन्' },
      { en: 'RERA registration number is displayed', hi: 'RERA registration number दिखाया गया है', bn: 'RERA registration number দেখানো হয়েছে', ne: 'RERA registration number देखाइएको छ' },
    ],
    commonGaps: [
      { en: 'No property listings or outdated listings', hi: 'कोई property listings नहीं या पुरानी listings', bn: 'কোনো property listing নেই বা পুরোনো listing', ne: 'कुनै property listings छैनन् वा पुराना listings' },
      { en: 'No RERA or regulatory compliance shown', hi: 'कोई RERA या regulatory compliance नहीं दिखाया', bn: 'কোনো RERA বা regulatory compliance দেখানো হয়নি', ne: 'कुनै RERA वा regulatory compliance देखाइएको छैन' },
    ],
  },
  hotel_lodge: {
    topScore: 84,
    avgReviews: 80,
    monthlyLeadLossMin: 30000,
    monthlyLeadLossMax: 100000,
    benchmarks: [
      { en: 'Top hotels have online booking and room photos', hi: 'टॉप hotels में online booking और room photos हैं', bn: 'সেরা hotel-গুলোতে online booking ও room photo আছে', ne: 'शीर्ष hotels मा online booking र room photos छन्' },
      { en: 'Reviews from multiple platforms are showcased', hi: 'Multiple platforms से reviews showcase किए गए हैं', bn: 'একাধিক platform থেকে review showcase করা হয়েছে', ne: 'बहु platforms बाट reviews showcase गरिएको छ' },
    ],
    commonGaps: [
      { en: 'No online booking system', hi: 'कोई online booking system नहीं', bn: 'কোনো online booking system নেই', ne: 'कुनै online booking system छैन' },
      { en: 'No room photos or amenity list', hi: 'कोई room photos या amenity list नहीं', bn: 'কোনো room photo বা amenity তালিকা নেই', ne: 'कुनै room photos वा amenity list छैन' },
    ],
  },
  ca_accountant: {
    topScore: 77,
    avgReviews: 20,
    monthlyLeadLossMin: 20000,
    monthlyLeadLossMax: 60000,
    benchmarks: [
      { en: 'Top CAs list all services clearly with specializations', hi: 'टॉप CAs सभी services specializations के साथ clearly list करते हैं', bn: 'সেরা CA-রা সব service specialization সহ clearly তালিকাভুক্ত করে', ne: 'शीर्ष CAs ले सबै services specializations सहित clearly list गर्छन्' },
      { en: 'Client testimonials and case studies are shown', hi: 'Client testimonials और case studies दिखाए गए हैं', bn: 'Client testimonial ও case study দেখানো হয়েছে', ne: 'Client testimonials र case studies देखाइएको छ' },
    ],
    commonGaps: [
      { en: 'No clear service list or pricing indication', hi: 'कोई clear service list या pricing indication नहीं', bn: 'কোনো clear service list বা pricing indication নেই', ne: 'कुनै clear service list वा pricing indication छैन' },
      { en: 'No compliance deadlines or resources section', hi: 'कोई compliance deadlines या resources section नहीं', bn: 'কোনো compliance deadline বা resources section নেই', ne: 'कुनै compliance deadlines वा resources section छैन' },
    ],
  },
  tailor: {
    topScore: 72,
    avgReviews: 20,
    monthlyLeadLossMin: 8000,
    monthlyLeadLossMax: 25000,
    benchmarks: [
      { en: 'Top tailors showcase their work with before/after photos', hi: 'टॉप tailors before/after photos के साथ अपना काम showcase करते हैं', bn: 'সেরা tailor-রা before/after photo সহ কাজ showcase করে', ne: 'शीर्ष tailors ले before/after photos सहित आफ्नो काम showcase गर्छन्' },
      { en: 'Price ranges for common services are listed', hi: 'Common services के price ranges listed हैं', bn: 'Common service-এর price range তালিকাভুক্ত আছে', ne: 'Common services को price ranges listed छन्' },
    ],
    commonGaps: [
      { en: 'No photos of completed work', hi: 'Completed work की कोई photos नहीं', bn: 'সম্পন্ন কাজের কোনো photo নেই', ne: 'सम्पन्न कामको कुनै photos छैनन्' },
      { en: 'No turnaround time or delivery promise', hi: 'कोई turnaround time या delivery promise नहीं', bn: 'কোনো turnaround time বা delivery promise নেই', ne: 'कुनै turnaround time वा delivery promise छैन' },
    ],
  },
  other: {
    topScore: 78,
    avgReviews: 30,
    monthlyLeadLossMin: 10000,
    monthlyLeadLossMax: 40000,
    benchmarks: [
      { en: 'Top businesses in your category have strong online presence', hi: 'आपकी category के टॉप businesses की strong online presence है', bn: 'আপনার category-র সেরা ব্যবসাগুলোর strong online presence আছে', ne: 'तपाईंको category का शीर्ष businesses को strong online presence छ' },
      { en: 'They respond to customer queries within hours', hi: 'वे customer queries का hours के भीतर जवाब देते हैं', bn: 'তারা hours-এর মধ্যে customer queries-এর উত্তর দেয়', ne: 'तिनीहरूले hours भित्र customer queries को जवाफ दिन्छन्' },
    ],
    commonGaps: [
      { en: 'No clear unique selling proposition', hi: 'कोई clear unique selling proposition नहीं', bn: 'কোনো clear unique selling proposition নেই', ne: 'कुनै clear unique selling proposition छैन' },
      { en: 'No customer testimonials or social proof', hi: 'कोई customer testimonials या social proof नहीं', bn: 'কোনো customer testimonial বা social proof নেই', ne: 'कुनै customer testimonials वा social proof छैन' },
    ],
  },
};

export interface CategoryInsightsResult {
  topScore: number;
  monthlyLeadLossMin: number;
  monthlyLeadLossMax: number;
  benchmarks: string[];
  gaps: string[];
}

export function getCategoryInsights(
  category: string,
  city: string,
  locale: string
): CategoryInsightsResult {
  const loc = (locale || 'en') as Locale;
  const key = category.toLowerCase().replace(/[\s\/&]+/g, '_');
  const data = categories[key] || categories.other;

  return {
    topScore: data.topScore,
    monthlyLeadLossMin: data.monthlyLeadLossMin,
    monthlyLeadLossMax: data.monthlyLeadLossMax,
    benchmarks: data.benchmarks.map(b => t(b, loc)),
    gaps: data.commonGaps.map(g => t(g, loc)),
  };
}

export function getCategoryList(): Array<{ value: string; label: LocalizedText }> {
  return [
    { value: 'plumber', label: { en: 'Plumber', hi: 'प्लंबर', bn: 'প্লাম্বার', ne: 'प्लम्बर' } },
    { value: 'electrician', label: { en: 'Electrician', hi: 'इलेक्ट्रीशियन', bn: 'ইলেকট্রিশিয়ান', ne: 'इलेक्ट्रिसियन' } },
    { value: 'restaurant', label: { en: 'Restaurant / Food', hi: 'रेस्टोरेंट / फूड', bn: 'রেস্টুরেন্ট / ফুড', ne: 'रेस्टुरेन्ट / फूड' } },
    { value: 'salon', label: { en: 'Salon / Beauty', hi: 'सैलून / ब्यूटी', bn: 'সেলুন / বিউটি', ne: 'सैलून / ब्यूटी' } },
    { value: 'doctor', label: { en: 'Doctor / Clinic', hi: 'डॉक्टर / क्लिनिक', bn: 'ডাক্তার / ক্লিনিক', ne: 'डाक्टर / क्लिनिक' } },
    { value: 'retail_shop', label: { en: 'Retail Shop', hi: 'रिटेल शॉप', bn: 'রিটেল শপ', ne: 'रिटेल शप' } },
    { value: 'gym_fitness', label: { en: 'Gym / Fitness', hi: 'जिम / फिटनेस', bn: 'জিম / ফিটনেস', ne: 'जिम / फिटनेस' } },
    { value: 'tuition_coaching', label: { en: 'Tuition / Coaching', hi: 'ट्यूशन / कोचिंग', bn: 'টিউশন / কোচিং', ne: 'ट्युसन / कोचिंग' } },
    { value: 'real_estate', label: { en: 'Real Estate', hi: 'रियल एस्टेट', bn: 'রিয়েল এস্টেট', ne: 'रियल इस्टेट' } },
    { value: 'hotel_lodge', label: { en: 'Hotel / Lodge', hi: 'होटल / लॉज', bn: 'হোটেল / লজ', ne: 'होटल / लज' } },
    { value: 'ca_accountant', label: { en: 'CA / Accountant', hi: 'CA / अकाउंटेंट', bn: 'CA / অ্যাকাউন্ট্যান্ট', ne: 'CA / अकाउन्टेन्ट' } },
    { value: 'tailor', label: { en: 'Tailor / Fashion', hi: 'टेलर / फैशन', bn: 'টেলার / ফ্যাশন', ne: 'टेलर / फ्यासन' } },
    { value: 'other', label: { en: 'Other', hi: 'अन्य', bn: 'অন্যান্য', ne: 'अन्य' } },
  ];
}
