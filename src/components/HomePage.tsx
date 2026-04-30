import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function HomePage() {
  const { isDark } = useTheme();

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
        <div className="container max-w-6xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Copy */}
            <div>
              <p className="text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-[#8e5e42] mb-8 leading-relaxed">
                REDtech Africa Consulting (RAC)
              </p>
              <h1
                className={`font-heading font-black leading-[1.05] mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)' }}
              >
                <span className="block">Closing the Gap Between</span>
                <span className="block">the Workforce You Have</span>
                <span className={`block italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  and the Results You Need.
                </span>
              </h1>
              <p className={`text-lg md:text-xl max-w-2xl leading-relaxed mb-12 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                RAC closes that gap — through resourcing, education, and digital advisory that only comes from 15+ years on the inside: within HR teams, financial institutions, and technology organisations across Nigeria and the UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8e5e42] text-white font-bold text-base rounded-xl hover:bg-[#8e5e42]/90 hover:shadow-xl hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:-translate-y-1"
                >
                  Start the Conversation <ArrowRight size={18} />
                </a>
                <a
                  href="/services"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#8e5e42] font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                    isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'
                  }`}
                >
                  Discover Our Services
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900"
                  alt="Professional team collaboration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating badge */}
                <div className={`absolute bottom-6 left-6 right-6 z-20 p-4 rounded-2xl backdrop-blur-md border ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/80 border-white/60'}`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8e5e42] mb-1">Built on insider knowledge</p>
                  <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>15+ years working inside HR, financial institutions & tech organisations</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[#8e5e42]/20 blur-xl" />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container max-w-5xl mx-auto mt-20 pt-8 border-t border-[#8e5e42]/20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { num: '5K+', label: 'Community Members' },
              { num: '7', label: 'Self-Funded Hackathons' },
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
                desc: 'Strategic hiring and workforce design built on insider knowledge. From emerging talent to senior leadership — we don\'t just fill roles; we help you build the people infrastructure your organisation needs.',
              },
              {
                letter: 'E',
                title: 'Education',
                desc: 'Capability programmes designed and delivered by practitioners who have sat where your people sit. Context-aware, results-focused, and built to outlast the engagement.',
              },
              {
                letter: 'D',
                title: 'Digital Technology',
                desc: 'Deep expertise translating technology into enterprise realities. From AI literacy and digital strategy to cyber awareness and security — we help organisations move with confidence, not guesswork.',
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
            This is not a talent problem or an employer problem. It is a capability and infrastructure problem — and with the right partner, it can be fixed.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Organisations card */}
            <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=700"
                  alt="Organisation boardroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-5 z-20">
                  <p className="text-white font-bold text-sm">Organisations Say</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#8e5e42] font-bold text-lg mb-4">"We keep investing in our people, but nothing seems to change."</p>
                <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {['Hiring processes that screen for credentials, not capability', 'Training delivered and forgotten — with no measurable shift in performance', 'Digital tools adopted without the knowledge to use them effectively', "High-potential people leaving because growth pathways don't exist"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#8e5e42] mt-0.5">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Talent card */}
            <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=700"
                  alt="Young professional at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-5 z-20">
                  <p className="text-white font-bold text-sm">Talent Says</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#8e5e42] font-bold text-lg mb-4">"I have the ability. I just can't prove it in a way that gets me in the room."</p>
                <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {['No verifiable way to demonstrate real-world capability', 'No clear path from learning to employment or progression', 'Lost in a sea of CVs with nothing to differentiate', 'Skills developed in isolation, disconnected from what employers need'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#8e5e42] mt-0.5">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-3xl border-l-4 border-l-[#8e5e42] ${isDark ? 'bg-gray-900/80 border-y border-r border-gray-800' : 'bg-[#8e5e42]/5 border-y border-r border-[#8e5e42]/20'}`}>
            <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              RAC closes both sides of the gap — because we've sat with organisations like yours and seen these challenges from the inside. Our resourcing, capability programmes, and digital advisory are built on what works.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: LEGUP ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <div className={`backdrop-blur-sm rounded-3xl overflow-hidden border ${
            isDark
              ? 'bg-gradient-to-br from-[#8e5e42]/20 to-gray-800/80 border-[#8e5e42]/30'
              : 'bg-gradient-to-br from-[#8e5e42]/10 to-white/80 border-[#8e5e42]/30'
          }`}>
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-10 sm:p-12">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-4">Platform</p>
                <h2 className={`text-3xl md:text-4xl font-black font-heading mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  LEG UP — Where Capability Speaks Louder Than a CV.
                </h2>
                <p className={`text-lg leading-relaxed mb-6 max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  LEG UP is a hackathon-led talent matching and skill verification ecosystem. Through our Skill Snapshot, individuals are assessed on real, project-based capability. Employers see what candidates can do — not just what they claim.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8e5e42] text-white font-bold text-base rounded-xl hover:bg-[#8e5e42]/90 hover:shadow-xl hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:-translate-y-1"
                  >
                    I'm an Employer <ArrowRight size={18} />
                  </a>
                  <a
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#8e5e42] font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                      isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'
                    }`}
                  >
                    I'm Looking for Opportunities
                  </a>
                </div>
              </div>
              <div className="h-64 md:h-full min-h-[300px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="LEG UP platform - team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {[
                { num: '5K+', label: 'Community Members' },
                { num: '7', label: 'Hackathons Hosted' },
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

      {/* ── SECTION 7: CHOOSE YOUR ENTRY POINT ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-4">Entry Point</p>
          <h2 className={`text-3xl md:text-4xl font-black font-heading mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Entry Point
          </h2>
          <p className={`text-lg mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Every route leads to the same place — real capability, built to last.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                tag: 'FOR ORGANISATIONS',
                title: 'Start the Conversation',
                desc: "No pitch deck. No jargon. Tell us what you're working with — and we'll tell you honestly whether and how we can help.",
                cta: 'Get in Touch',
                href: '/contact',
              },
              {
                tag: 'FOR ORGANISATIONS',
                title: 'Is Your People Function Performing?',
                desc: 'For organisations that sense something isn\'t working but can\'t pinpoint what. Share your details and we\'ll reach out to explore what a structured assessment could look like for you.',
                cta: 'Get in Touch',
                href: '/contact',
              },
              {
                tag: 'FOR TALENT',
                title: 'Join the LEG UP Waitlist',
                desc: 'Build a verifiable portfolio that speaks louder than a CV. Get matched to employers who hire on demonstrated capability — not credentials alone.',
                cta: 'Join LEG UP',
                href: '/contact',
              },
              {
                tag: 'FOR EVERYONE',
                title: 'Let\'s Build Something Together',
                desc: "Whether you're an institution, investor, or strategic partner — if you see the same gap we do, let's talk about what ecosystem-level collaboration could unlock.",
                cta: 'Explore Partnership',
                href: '/contact',
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

      {/* ── SECTION 8: CLOSING CTA BANNER ── */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'}`}>
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-black font-heading mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Close the Capability Gap?
          </h2>
          <p className={`text-xl leading-relaxed mb-10 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Whether you need the right people, programmes that build real skills, or digital advisory that sticks — RAC brings the practitioner experience to make it happen. Let's find your starting point.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8e5e42] text-white font-bold text-lg rounded-xl hover:bg-[#8e5e42]/90 hover:shadow-xl hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch <ArrowRight size={18} />
            </a>
            <a
              href="/services"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#8e5e42] font-bold text-lg rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'
              }`}
            >
              See How We Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}