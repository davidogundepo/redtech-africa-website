import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function HomePage() {
  const { isDark } = useTheme();

  const accent = '#8e5e42';
  const accentDim = 'rgba(142,94,66,0.15)';
  const accentBorder = 'rgba(142,94,66,0.25)';

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-[#8e5e42]/5 text-gray-900'
    }`}>

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-96 h-96 blur-3xl animate-pulse ${isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'}`} />
        <div className={`absolute bottom-20 left-20 w-80 h-80 blur-3xl animate-pulse delay-1000 ${isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'}`} />
        <div className={`absolute top-1/2 left-1/2 w-72 h-72 blur-3xl animate-pulse delay-[2000ms] ${isDark ? 'bg-[#8e5e42]/8' : 'bg-[#8e5e42]/4'}`} />
      </div>

      {/* ── SECTION 1: HERO ── */}
      <section className={`relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
          : 'bg-gradient-to-br from-[#8e5e42]/5 via-white to-[#8e5e42]/10'
      }`}>
        <div className="container max-w-5xl mx-auto z-10">

          {/* Label */}
          <p className="text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-[#8e5e42] mb-8 leading-relaxed">
            REDtech Africa Consulting (RAC) — Lagos · London
          </p>

          {/* Main Headline */}
          <h1
            className={`font-heading font-black leading-[1.05] mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)' }}
          >
            <span className="block">Closing the Gap Between</span>
            <span className="block">the Workforce You Have</span>
            <span className={`block italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              and the Results You Need.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className={`text-lg md:text-xl max-w-2xl leading-relaxed mb-12 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            RAC closes that gap — through resourcing, education, and digital advisory built from 15+ years working inside HR, financial institutions, and technology organisations across Nigeria and the UK.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@redtechafrica.com?subject=Discovery Call Request"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8e5e42] text-white font-bold text-base rounded-xl hover:bg-[#8e5e42]/90 hover:shadow-xl hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:-translate-y-1"
            >
              Book a Discovery Call <ArrowRight size={18} />
            </a>
            <a
              href="mailto:hello@redtechafrica.com?subject=Capability Diagnostic Request"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#8e5e42] font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'
              }`}
            >
              Request a Capability Diagnostic
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container max-w-5xl mx-auto mt-20 pt-8 border-t border-[#8e5e42]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '27K+', label: 'Community Members' },
              { num: '7', label: 'Self-funded Hackathons' },
              { num: '15+', label: 'Years of Experience' },
              { num: '2018', label: 'Founded' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-black text-[#8e5e42] font-heading">{stat.num}</div>
                <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Origin quote */}
        <div className="container max-w-5xl mx-auto mt-8">
          <p className={`text-sm italic border-l-2 border-[#8e5e42] pl-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Built from 15+ years working inside HR, financial institutions, and technology organisations across Nigeria and the UK.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: R · E · D NAME STRIP ── */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-10">What RAC Stands For</p>

          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#8e5e42]/20 -mx-4 sm:mx-0 px-4 sm:px-0">
            {[
              {
                letter: 'R',
                title: 'Resourcing',
                desc: 'Evidence-based hiring and workforce infrastructure. From emerging talent to executive roles — we build the system, not just fill the seat.',
              },
              {
                letter: 'E',
                title: 'Education',
                desc: 'Bespoke training that builds real capability. Delivered by practitioners with context. Embedded to last after we leave.',
              },
              {
                letter: 'D',
                title: 'Digital Technology',
                desc: '15+ years of technology expertise deployed into African enterprise contexts. Strategy, AI literacy, and digital advisory.',
              },
            ].map((arm, i) => (
              <div key={i} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-6xl font-black text-[#8e5e42] font-heading leading-none">{arm.letter}</span>
                  <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{arm.title}</span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{arm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE GAP ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-4">The Problem</p>
          <h2 className={`text-3xl md:text-4xl font-black font-heading mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Two Sides of the Same Broken System.
          </h2>
          <p className={`text-lg mb-12 max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            This is not a talent problem or an employer problem. It is an infrastructure problem — and infrastructure can be rebuilt.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`p-8 rounded-3xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-xl font-bold mb-4 pb-4 border-b ${isDark ? 'border-gray-800 text-white' : 'border-gray-200 text-gray-900'}`}>Organisations Say</h3>
              <p className="text-[#8e5e42] font-bold text-lg mb-4">"We can't find people who can actually do the work."</p>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {['CV screening is expensive and inaccurate', 'Training budgets spent, same problems remain', 'AI tools deployed, nobody knows how to use them', "Best people leaving for growth they can't find"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#8e5e42] mt-0.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className={`p-8 rounded-3xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-xl font-bold mb-4 pb-4 border-b ${isDark ? 'border-gray-800 text-white' : 'border-gray-200 text-gray-900'}`}>Talent Says</h3>
              <p className="text-[#8e5e42] font-bold text-lg mb-4">"Can't get experience without a job. Can't get a job without experience."</p>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {['No verifiable experience to show', 'No structured path from learning to earning', 'Invisible beyond a generic CV', 'No way to prove capability employers trust'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#8e5e42] mt-0.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`p-8 rounded-3xl border-l-4 border-l-[#8e5e42] ${isDark ? 'bg-gray-900/80 border-y border-r border-gray-800' : 'bg-[#8e5e42]/5 border-y border-r border-[#8e5e42]/20'}`}>
            <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              RAC builds the infrastructure that closes both sides — through evidence-based talent matching, bespoke capability training, and digital advisory.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THREE CONNECTED ARMS ── */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-black' : 'bg-[#8e5e42]/5'}`}>
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-4">What We Build</p>
          <h2 className={`text-3xl md:text-4xl font-black font-heading mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Three Connected Arms
          </h2>
          <p className={`text-lg mb-12 max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Each works independently. Together, they close the gap.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { letter: 'R', title: 'Resourcing', desc: 'Evidence-based hiring and workforce infrastructure. From emerging talent to executive roles.' },
              { letter: 'E', title: 'Education', desc: 'Bespoke training that builds real capability. Delivered by practitioners. Embedded to last.' },
              { letter: 'D', title: 'Digital Technology', desc: '15+ years of AI and cybersecurity expertise deployed into African enterprise contexts.' },
            ].map((pillar, i) => (
              <a
                key={i}
                href="/services"
                className={`group p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                    : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#8e5e42] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-[#8e5e42] font-heading leading-none">{pillar.letter}</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>{pillar.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{pillar.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[#8e5e42] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: LEGUP ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
            isDark
              ? 'bg-gradient-to-br from-[#8e5e42]/20 to-gray-800/80 border-[#8e5e42]/30'
              : 'bg-gradient-to-br from-[#8e5e42]/10 to-white/80 border-[#8e5e42]/30'
          }`}>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-4">Platform</p>
            <h2 className={`text-3xl md:text-4xl font-black font-heading mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              LegUp — We built what we needed and couldn't find.
            </h2>
            <p className={`text-lg leading-relaxed mb-6 max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              LegUp is a portfolio-first talent platform that lets people show what they can actually do — and lets employers see it directly. No more guessing from CVs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@redtechafrica.com?subject=LegUp - Employer Enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8e5e42] text-white font-bold text-base rounded-xl hover:bg-[#8e5e42]/90 hover:shadow-xl hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:-translate-y-1"
              >
                I'm an Employer <ArrowRight size={18} />
              </a>
              <a
                href="mailto:hello@redtechafrica.com?subject=LegUp - Talent Enquiry"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#8e5e42] font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                  isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'
                }`}
              >
                I'm Looking for Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE NUMBERS ── */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-10">By the Numbers</p>
          <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
            isDark
              ? 'bg-gradient-to-br from-[#8e5e42]/20 to-gray-800/80 border-[#8e5e42]/30'
              : 'bg-gradient-to-br from-[#8e5e42]/10 to-white/80 border-[#8e5e42]/30'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: '27K+', label: 'Community Members' },
                { num: '7', label: 'Self-funded Hackathons' },
                { num: '15+', label: 'Years of Experience' },
                { num: '2018', label: 'Year Founded' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-black mb-2 text-[#8e5e42] font-heading">{stat.num}</div>
                  <div className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: START HERE ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-4">Start Here</p>
          <h2 className={`text-3xl md:text-4xl font-black font-heading mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Where would you like to begin?
          </h2>
          <p className={`text-lg mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Four routes in. All roads lead to closing the gap.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                tag: 'For Organisations',
                title: 'Book a Discovery Call',
                desc: 'No pitch deck. No jargon. A straight conversation about whether we can help — and how.',
                cta: 'Book a Call',
                href: 'mailto:hello@redtechafrica.com?subject=Discovery Call Request',
              },
              {
                tag: 'For Organisations',
                title: 'Request a Capability Diagnostic',
                desc: 'For organisations that know something is not performing but are not sure what. A structured assessment with a priority roadmap delivered in 10 working days.',
                cta: 'Request Diagnostic',
                href: 'mailto:hello@redtechafrica.com?subject=Capability Diagnostic Request',
              },
              {
                tag: 'For Talent',
                title: 'Join LegUp Waitlist',
                desc: 'Build your verifiable portfolio. Get matched to employers who judge on capability, not CV.',
                cta: 'Join LegUp',
                href: 'mailto:hello@redtechafrica.com?subject=LegUp - Join Waitlist',
              },
              {
                tag: 'For Everyone',
                title: 'Explore a Partnership',
                desc: "Institutions, investors, and strategic partners — let's talk about ecosystem-level collaboration.",
                cta: 'Explore Partnership',
                href: 'mailto:hello@redtechafrica.com?subject=Partnership Enquiry',
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                    : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                }`}
              >
                <p className="text-xs font-bold tracking-widest uppercase text-[#8e5e42] mb-3">{card.tag}</p>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{card.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{card.desc}</p>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8e5e42] hover:gap-3 transition-all duration-200"
                >
                  {card.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}