
import React, { useState, useEffect } from 'react';
import { LeafIcon, CheckIcon, StarIcon } from './components/Icons';
import { Testimonial, FAQItem, FeatureItem, ProductBundle } from './types';

const testimonials: Testimonial[] = [
  { id: 1, name: "Sarah J.", age: 34, rating: 5, content: "I've been using WellaNaturals for 3 weeks now. My morning energy levels feel much more stable, and I've noticed a real difference in my skin's clarity. It tastes like mild mint, which I actually enjoy." },
  { id: 2, name: "Mark T.", age: 42, rating: 4, content: "Great for digestion. I take it in my water every morning. It's not a 'magic pill' but as a part of my overall routine, I feel lighter and less bloated." },
  { id: 3, name: "Elena R.", age: 29, rating: 5, content: "Started taking this for detoxing purposes. It's easy to use and high concentration (1500mg) compared to others I found. Definitely a quality product." },
  { id: 4, name: "David L.", age: 51, rating: 4, content: "Honest review: The taste is fine, and I feel generally better. The only downside is I have to order it online, but the shipping was fast." }
];

const faqs: FAQItem[] = [
  { question: "Is Liquid Chlorophyll safe?", answer: "Yes, chlorophyll is a natural pigment found in plants. WellaNaturals is formulated with high-quality chlorophyllin and is vegan and non-GMO. As with any supplement, consult your doctor if you have underlying conditions." },
  { question: "How do I take it?", answer: "Simply add the recommended dosage (check the label, usually 1 full dropper) to a glass of water or your favorite smoothie once daily." },
  { question: "How long until I see results?", answer: "While some notice changes in digestion within a week, we recommend consistent use for at least 30 days to experience full benefits in skin health and energy." },
  { question: "Can men and women use it?", answer: "Absolutely. WellaNaturals is designed for any adult seeking natural detox and wellness support." },
  { question: "Is this FDA approved?", answer: "Dietary supplements are not 'approved' by the FDA in the same way drugs are. However, WellaNaturals is manufactured in certified facilities that follow strict GMP (Good Manufacturing Practices) guidelines." }
];

const features: FeatureItem[] = [
  { title: "Natural Detox Support", description: "Supports the body's natural elimination processes for a refreshed feeling.", icon: <LeafIcon /> },
  { title: "Digestive Balance", description: "Helps maintain a comfortable and balanced gut environment.", icon: <CheckIcon /> },
  { title: "Skin Wellness", description: "Known for promoting skin clarity by supporting internal health.", icon: <StarIcon /> },
  { title: "Internal Freshness", description: "Acts as a natural internal deodorizer for breath and body.", icon: <LeafIcon /> },
];

const bundles: ProductBundle[] = [
  { id: 1, quantity: 1, discount: 60, originalPrice: 112.48, pricePerUnit: 44.99 },
  { id: 2, quantity: 2, discount: 65, originalPrice: 228.51, pricePerUnit: 39.99 },
  { id: 3, quantity: 3, discount: 70, originalPrice: 339.90, pricePerUnit: 33.99, tag: "BEST VALUE & MOST POPULAR", tagColor: "bg-emerald-600", isPopular: true },
  { id: 4, quantity: 4, discount: 75, originalPrice: 479.84, pricePerUnit: 29.99, tag: "FAMILY PACK", tagColor: "bg-slate-800" }
];

const AFFILIATE_URL = "https://www.diginear.com/2ZPMFMCK/2277MR1M/";

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth text-slate-700 bg-white">
      {/* Top Disclosure */}
      <div className="bg-slate-50 py-2 border-b border-slate-100 px-4 text-center">
        <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-widest">
          Independent Review Analysis • Advertiser Disclosure • Latest Update: March 2024
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-600 p-2 rounded-xl text-white">
              <LeafIcon />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none tracking-tight text-slate-900">HealthReview<span className="text-emerald-600">Daily</span></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Expert Editorial Hub</span>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#benefits" className="hover:text-emerald-600 transition">Benefits</a>
            <a href="#ritual" className="hover:text-emerald-600 transition">Ritual</a>
            <a href="#price" className="hover:text-emerald-600 transition">Check Price</a>
            <a href="#testimonials" className="hover:text-emerald-600 transition">Testimonials</a>
          </nav>
          <a 
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-emerald-600 text-white px-7 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-emerald-700 transition shadow-lg shadow-emerald-100"
          >
            Official Website
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-emerald-50/40 rounded-full blur-[140px] -z-10"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Neutral Expert Analysis</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.05] mb-8">
                Is WellaNaturals Liquid Chlorophyll Right For You?
              </h1>
              <p className="text-xl text-slate-500 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium italic">
                A non-biased deep dive into ingredients, dosage, and real user results for the popular 1,500mg daily supplement.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 text-white px-12 py-6 rounded-2xl text-lg font-black hover:bg-slate-800 transition-all shadow-2xl shadow-slate-300"
                >
                  Buy Now – Official Website
                </a>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?u=health${i}`} alt="Verified Reviewer" />
                    </div>
                  ))}
                </div>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Joined by 12k+ Wellness Enthusiasts</p>
              </div>
            </div>

            <div className="relative group mx-auto lg:ml-auto max-w-lg">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full -z-10"></div>
              <div className="relative p-3 bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(16,185,129,0.12)] border border-slate-50 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584017947486-5917ed3a5025?auto=format&fit=crop&q=95&w=800&h=1000" 
                  alt="WellaNaturals Liquid Chlorophyll Premium Supplement" 
                  className="w-full h-auto rounded-[2rem] object-cover"
                />
                <div className="absolute top-8 right-8 bg-emerald-600 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Top Rated Review
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 px-4 bg-white border-y border-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Health-Forward Benefits</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Why thousands of adults are choosing a liquid chlorophyll concentrate as their primary morning supplement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
                  <div className="mb-8 p-4 bg-white rounded-2xl shadow-sm text-emerald-600">{f.icon}</div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ritual Section */}
        <section id="ritual" className="py-24 px-4 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-[150px] opacity-50 -z-0"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">The Daily Morning Ritual</h2>
              <p className="text-emerald-100 text-xl opacity-80 max-w-3xl mx-auto">
                Effective supplementation is about consistency and ritual. Here is the recommended method for WellaNaturals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16 text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-emerald-800 flex items-center justify-center text-3xl font-black mb-8 border border-emerald-700 text-emerald-300 shadow-2xl">01</div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">Extract Potency</h4>
                <p className="text-emerald-100/70 leading-relaxed font-medium">Use the glass dropper to measure one full dose (approx. 15-20 drops) of the emerald concentrate.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-emerald-800 flex items-center justify-center text-3xl font-black mb-8 border border-emerald-700 text-emerald-300 shadow-2xl">02</div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">The Activation</h4>
                <p className="text-emerald-100/70 leading-relaxed font-medium">Add to 8-10oz of cool filtered water or your favorite organic morning smoothie for rapid absorption.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-emerald-800 flex items-center justify-center text-3xl font-black mb-8 border border-emerald-700 text-emerald-300 shadow-2xl">03</div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">The Habit</h4>
                <p className="text-emerald-100/70 leading-relaxed font-medium">Ideally taken on an empty stomach 20 minutes before breakfast to maximize bioavailable nutrient uptake.</p>
              </div>
            </div>

            <div className="mt-24 p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 max-w-4xl mx-auto">
              <h4 className="text-2xl font-black mb-6 text-center text-emerald-300">Safety & Precautions</h4>
              <p className="text-emerald-100/60 text-sm leading-relaxed text-center mb-0">
                WellaNaturals is generally well-tolerated. However, users should be aware of natural digestive adjustments in the first 7 days. If you are pregnant, nursing, or on blood-thinning medication, consult your healthcare provider prior to use.
              </p>
            </div>
          </div>
        </section>

        {/* Price Section */}
        <section id="price" className="py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 bg-rose-100 text-rose-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">Official Deal Active</div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Verified Purchase Options</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
                Check current availability and secure your shipment directly from the official manufacturer warehouse.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bundles.map((bundle) => (
                <div 
                  key={bundle.id} 
                  className={`relative flex flex-col p-10 rounded-[3rem] border-2 transition-all duration-500 bg-white ${bundle.isPopular ? 'border-emerald-600 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-lg hover:border-emerald-200'}`}
                >
                  {bundle.tag && (
                    <div className={`absolute -top-5 left-1/2 -translate-x-1/2 ${bundle.tagColor} text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-xl`}>
                      {bundle.tag}
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <span className="block text-sm font-black text-emerald-600 uppercase tracking-widest mb-4">Save {bundle.discount}%</span>
                    <h3 className="text-2xl font-black text-slate-900 mb-8">{bundle.quantity}x Bottles</h3>
                    <img 
                      src="https://images.unsplash.com/photo-1584017947486-5917ed3a5025?auto=format&fit=crop&q=80&w=200&h=250" 
                      alt="Liquid Chlorophyll Bottle" 
                      className="h-40 mx-auto object-contain drop-shadow-xl mb-6"
                    />
                  </div>

                  <div className="mt-auto text-center">
                    <div className="mb-2 text-slate-300 line-through text-xs font-bold">$ {bundle.originalPrice.toFixed(2)}</div>
                    <div className="flex items-baseline justify-center space-x-1 mb-10">
                      <span className="text-sm font-black text-slate-400">$</span>
                      <span className="text-5xl font-black text-slate-900">{bundle.pricePerUnit.toFixed(2)}</span>
                    </div>
                    
                    <a 
                      href={AFFILIATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-5 rounded-2xl text-base font-black transition-all shadow-xl ${bundle.isPopular ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-100' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                    >
                      Check Availability
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center text-slate-400 text-[10px] font-black uppercase tracking-widest flex flex-wrap items-center justify-center gap-6 md:gap-12">
               <div className="flex items-center space-x-2"><CheckIcon /> <span>Secure SSL Encrypted</span></div>
               <div className="flex items-center space-x-2"><CheckIcon /> <span>30-Day Guarantee</span></div>
               <div className="flex items-center space-x-2"><CheckIcon /> <span>Fast Domestic Shipping</span></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-24 text-slate-900">Verified User Experiences</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((t) => (
                <div key={t.id} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-all">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <p className="text-slate-600 mb-8 flex-grow italic leading-relaxed text-sm">"{t.content}"</p>
                  <div className="pt-6 border-t border-slate-200 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-black text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-sm leading-none mb-1">{t.name}</span>
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Verified Buyer</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section (Brief) */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-[0.1em] text-slate-900">Expert Q&A</h2>
            <div className="space-y-4">
              {faqs.slice(0, 3).map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-7 text-left hover:bg-slate-50 transition"
                  >
                    <span className="font-bold text-slate-900">{faq.question}</span>
                    <svg className={`w-5 h-5 text-emerald-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="p-7 pt-0 text-slate-500 text-sm leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Buy Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-700 transform ${showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
        <div className="bg-white/90 backdrop-blur-3xl border-t border-slate-200 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-4 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="hidden md:block w-12 h-16 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1584017947486-5917ed3a5025?auto=format&fit=crop&q=80&w=60&h=80" alt="Supplement Bottle" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-xs md:text-sm leading-none mb-1">WellaNaturals Liquid Chlorophyll</div>
                <div className="flex items-center">
                  <span className="text-[9px] font-black uppercase text-emerald-600 tracking-widest">Official Direct Link</span>
                </div>
              </div>
            </div>
            
            <a 
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-6 md:px-12 py-3 md:py-4 rounded-xl text-[11px] md:text-sm font-black uppercase tracking-widest hover:bg-emerald-700 transition shadow-xl"
            >
              Check Price
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 pt-32 pb-16 px-4 text-[10px] md:text-[11px] font-medium leading-relaxed">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 text-white mb-10">
                <div className="bg-emerald-600 p-1.5 rounded-lg">
                  <LeafIcon />
                </div>
                <span className="font-black text-2xl tracking-tight">HealthReviewDaily</span>
              </div>
              <p className="max-w-md mb-10 text-slate-500 text-sm leading-relaxed">
                HealthReviewDaily is a premium independent resource for modern supplement analysis. We decode complex ingredient profiles to provide consumers with transparent, actionable health reviews.
              </p>
              <div className="bg-slate-800/40 p-8 rounded-[2rem] border border-slate-800">
                <h5 className="text-white font-black text-xs uppercase tracking-widest mb-4">Affiliate Disclosure</h5>
                <p>
                  This review contains affiliate links. If you click on a link and make a purchase, we may receive a commission at no additional cost to you. This helps support our editorial team and independent research process.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10">Editorial</h4>
              <ul className="space-y-5 text-xs">
                <li><a href="#" className="hover:text-emerald-400">Our Review Process</a></li>
                <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400">Terms of Use</a></li>
                <li><a href="#" className="hover:text-emerald-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10">Legal Platform</h4>
              <p className="mb-6 opacity-60">
                This site is not a part of the Google website or Google Inc. Additionally, this site is NOT endorsed by Google in any way.
              </p>
              <p className="opacity-60">
                This site is not a part of the Meta website or Meta Platforms Inc. FACEBOOK is a trademark of META, Inc.
              </p>
            </div>
          </div>
          
          <div className="pt-16 border-t border-slate-800">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-slate-600 leading-loose mb-10 font-bold italic">
                * This site is not the official WellaNaturals website. We provide an independent analytical review. These statements have not been evaluated by the Food and Drug Administration. The products reviewed are not intended to diagnose, treat, cure, or prevent any disease. Consult with your physician before starting any new supplement.
              </p>
              <p className="text-slate-600 font-black uppercase tracking-[0.3em]">
                © 2024 HealthReviewDaily • Premium Editorial Content
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
