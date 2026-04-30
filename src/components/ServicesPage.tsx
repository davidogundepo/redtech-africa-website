import React from 'react';
import { ArrowRight, Users, Settings, Briefcase } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ServicesPage() {
  const { isDark } = useTheme();

  const services = [
    {
      icon: Users,
      title: 'Capability & Workforce Transformation',
      desc: 'We help organisations diagnose capability gaps, build real skills, and embed systems that sustain performance. Not training for training\'s sake — structured interventions that create measurable, lasting change.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900&h=600',
    },
    {
      icon: Briefcase,
      title: 'Talent Infrastructure (LEG UP)',
      desc: 'Portfolio-first hiring. We verify what talent can do before employers engage. Through our hackathon-led Skill Snapshot system, we give employers confidence and talent a credible way into the room.',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=900&h=600',
    },
    {
      icon: Settings,
      title: 'Strategic & Ecosystem Advisory',
      desc: 'We design and deliver large-scale talent and capability systems across sectors and economies. From AI strategy to workforce planning — we help organisations and governments build what doesn\'t yet exist.',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900&h=600',
    },
  ];

  const industries = [
    'Financial Institutions',
    'Government Departments',
    'Technology Organisations',
    'Learning Institutions',
    'Development Partners',
    'MSMEs',
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-[#8e5e42]/5 text-gray-900'
    }`}>

      {/* ── HERO — FULL-WIDTH WITH BACKGROUND IMAGE ── */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1800&h=1000"
            alt="Modern corporate workspace"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isDark
            ? 'bg-gradient-to-r from-gray-900/97 via-gray-900/88 to-gray-900/60'
            : 'bg-gradient-to-r from-white via-white/99 to-white/70'
          }`} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-8">Our Services</p>
            <h1
              className={`font-heading font-black leading-[1.02] mb-10 ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
            >
              The Problem Isn't The Brief.<br />
              It's What's Missing{' '}
              <span className="text-[#8e5e42]">Behind It.</span>
            </h1>
            <p className={`text-xl max-w-xl mb-12 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Behind every hiring challenge, training programme, or workforce issue is a capability gap that hasn't been properly diagnosed. We uncover what's broken and build systems that prove what people can do.
            </p>
            <a href="#services" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#8e5e42] text-white font-bold text-base rounded-2xl hover:bg-[#8e5e42]/90 hover:shadow-2xl hover:shadow-[#8e5e42]/30 transition-all duration-300 hover:-translate-y-1">
              Explore How It Works <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CREDIBILITY STRIP ── */}
      <section className={`py-10 px-6 sm:px-8 lg:px-16 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className={`p-8 rounded-3xl border-l-4 border-l-[#8e5e42] ${isDark ? 'bg-gray-900/80 border-y border-r border-gray-800' : 'bg-[#8e5e42]/5 border-y border-r border-[#8e5e42]/20'}`}>
            <p className={`text-xl font-medium leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>15+ years</strong> building workforce, hiring, and capability systems across financial institutions, government departments, and technology organisations in the UK and Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES TICKER ── */}
      <section className={`py-8 overflow-hidden border-y ${isDark ? 'border-[#8e5e42]/20 bg-gray-900/50' : 'border-[#8e5e42]/20 bg-gray-50'}`}>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...industries, ...industries, ...industries, ...industries].map((industry, i) => (
              <span key={i} className={`mx-8 text-sm font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {industry} <span className="mx-8 text-[#8e5e42]">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 SERVICES — LARGE CARDS WITH IMAGES ── */}
      <section id="services" className="py-28 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-6xl font-black font-heading mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Three Services. One System.
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Each service addresses a different dimension of the capability gap — but they're designed to work together.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((s, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-0 rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  isDark
                    ? 'bg-gray-900 border-gray-800'
                    : 'bg-white border-gray-200'
                } ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                {/* Image side */}
                <div className={`h-80 lg:h-auto min-h-[400px] overflow-hidden relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content side */}
                <div className={`flex items-center p-12 lg:p-16 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-[#8e5e42]/10 flex items-center justify-center mb-8">
                      <s.icon className="text-[#8e5e42]" size={32} />
                    </div>
                    <h3 className={`text-3xl font-bold mb-6 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
                    <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{s.desc}</p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-3 text-base font-bold text-[#8e5e42] hover:gap-4 transition-all duration-200"
                    >
                      Get in Touch <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA — FULL WIDTH ── */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600&h=600"
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gray-900/92' : 'bg-white/97'}`} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className={`text-5xl md:text-6xl font-black mb-8 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Close the Gap Between Potential and Performance.
          </h2>
          <p className={`text-xl mb-12 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            We help organisations diagnose capability gaps, verify real skills, and connect talent to opportunity through a system built for results.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#8e5e42] text-white font-bold text-xl rounded-2xl hover:bg-[#8e5e42]/90 hover:shadow-2xl hover:shadow-[#8e5e42]/30 transition-all duration-300 hover:-translate-y-1">
            Start the Conversation <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </div>
  );
}
