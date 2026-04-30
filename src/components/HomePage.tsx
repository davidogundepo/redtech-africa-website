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
        <div className={`absolute top-20 right-20 w-[600px] h-[600px] blur-3xl animate-pulse ${isDark ? 'bg-[#8e5e42]/8' : 'bg-[#8e5e42]/4'}`} />
        <div className={`absolute bottom-20 left-20 w-[500px] h-[500px] blur-3xl animate-pulse delay-1000 ${isDark ? 'bg-[#8e5e42]/8' : 'bg-[#8e5e42]/4'}`} />
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        {/* Full-bleed hero image on the right */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full overflow-hidden">
          <div className={`absolute inset-0 z-10 hidden lg:block ${isDark
            ? 'bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/30'
            : 'bg-gradient-to-r from-white via-white/98 to-white/20'
          }`} />
          <div className={`absolute inset-0 z-10 lg:hidden ${isDark ? 'bg-gray-900/80' : 'bg-white/85'}`} />
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=85&w=1400&h=1000"
            alt="Professional business leader"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-8">
              REDtech Africa Consulting (RAC)
            </p>
            <h1
              className={`font-heading font-black leading-[1.02] mb-10 ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              <span className="block">Closing the Gap</span>
              <span className="block">Between the Workforce</span>
              <span className="block">You Have</span>
              <span className={`block italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                and the Results You Need.
              </span>
            </h1>
            <p className={`text-xl leading-relaxed mb-12 max-w-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              RAC closes that gap — through resourcing, education, and digital advisory that only comes from 15+ years on the inside.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#8e5e42] text-white font-bold text-base rounded-2xl hover:bg-[#8e5e42]/90 hover:shadow-2xl hover:shadow-[#8e5e42]/30 transition-all duration-300 hover:-translate-y-1"
              >
                Start the Conversation <ArrowRight size={18} />
              </a>
              <a
                href="/services"
                className={`inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#8e5e42] font-bold text-base rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'
                }`}
              >
                Discover Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className={`py-16 px-6 sm:px-8 lg:px-16 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {[
              { num: '5K+', label: 'Community Members' },
              { num: '7', label: 'Self-Funded Hackathons' },
              { num: '2018', label: 'Founded' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-[#8e5e42] font-heading">{stat.num}</div>
                <div className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── R · E · D NAME STRIP ── */}
      <section className="py-28 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-14">What RAC Stands For</p>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                letter: 'R',
                title: 'Resourcing',
                desc: 'Strategic hiring and workforce design built on insider knowledge. From emerging talent to senior leadership — we don\'t just fill roles; we help you build the people infrastructure your organisation needs.',
                img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800&h=500',
              },
              {
                letter: 'E',
                title: 'Education',
                desc: 'Capability programmes designed and delivered by practitioners who have sat where your people sit. Context-aware, results-focused, and built to outlast the engagement.',
                img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=500',
              },
              {
                letter: 'D',
                title: 'Digital Technology',
                desc: 'Deep expertise translating technology into enterprise realities. From AI literacy and digital strategy to cyber awareness and security — we help organisations move with confidence, not guesswork.',
                img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500',
              },
            ].map((arm, i) => (
              <div key={i} className="group">
                <div className="w-full h-56 rounded-2xl overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                  <img src={arm.img} alt={arm.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-7xl font-black text-[#8e5e42] font-heading leading-none">{arm.letter}</span>
                  <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{arm.title}</span>
                </div>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{arm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE GAP ── */}
      <section className={`py-28 px-6 sm:px-8 lg:px-16 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-6">The Problem</p>
          <h2 className={`text-4xl md:text-5xl font-black font-heading mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Two Sides of the Same Broken System.
          </h2>
          <p className={`text-xl mb-16 max-w-3xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            This is not a talent problem or an employer problem. It is a capability and infrastructure problem — and with the right partner, it can be fixed.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            {/* Organisations card */}
            <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200&h=600"
                  alt="Corporate boardroom meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-8 z-20">
                  <p className="text-white font-bold text-lg">Organisations Say</p>
                </div>
              </div>
              <div className="p-10">
                <p className="text-[#8e5e42] font-bold text-xl mb-6">"We keep investing in our people, but nothing seems to change."</p>
                <ul className={`space-y-3 text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {['Hiring processes that screen for credentials, not capability', 'Training delivered and forgotten — with no measurable shift in performance', 'Digital tools adopted without the knowledge to use them effectively', "High-potential people leaving because growth pathways don't exist"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="text-[#8e5e42] mt-1 text-lg">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Talent card */}
            <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200&h=600"
                  alt="Young professionals collaborating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-8 z-20">
                  <p className="text-white font-bold text-lg">Talent Says</p>
                </div>
              </div>
              <div className="p-10">
                <p className="text-[#8e5e42] font-bold text-xl mb-6">"I have the ability. I just can't prove it in a way that gets me in the room."</p>
                <ul className={`space-y-3 text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {['No verifiable way to demonstrate real-world capability', 'No clear path from learning to employment or progression', 'Lost in a sea of CVs with nothing to differentiate', 'Skills developed in isolation, disconnected from what employers need'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="text-[#8e5e42] mt-1 text-lg">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={`p-10 rounded-3xl border-l-4 border-l-[#8e5e42] ${isDark ? 'bg-gray-900/80 border-y border-r border-gray-800' : 'bg-[#8e5e42]/5 border-y border-r border-[#8e5e42]/20'}`}>
            <p className={`text-xl font-medium leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
              RAC closes both sides of the gap — because we've sat with organisations like yours and seen these challenges from the inside. Our resourcing, capability programmes, and digital advisory are built on what works.
            </p>
          </div>
        </div>
      </section>

      {/* ── LEGUP — FULL-WIDTH HERO-STYLE ── */}
      <section className="relative py-0">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left: Image */}
          <div className="h-80 lg:h-auto overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=85&w=1200&h=900"
              alt="LEG UP platform - team hackathon"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right: Content */}
          <div className={`flex items-center p-12 lg:p-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-6">Platform</p>
              <h2 className={`text-4xl md:text-5xl font-black font-heading mb-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                LEG UP — Where Capability Speaks Louder Than a CV.
              </h2>
              <p className={`text-lg leading-relaxed mb-10 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                LEG UP is a hackathon-led talent matching and skill verification ecosystem. Through our Skill Snapshot, individuals are assessed on real, project-based capability. Employers see what candidates can do — not just what they claim.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#8e5e42] text-white font-bold text-base rounded-2xl hover:bg-[#8e5e42]/90 hover:shadow-2xl hover:shadow-[#8e5e42]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  I'm an Employer <ArrowRight size={18} />
                </a>
                <a
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#8e5e42] font-bold text-base rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                    isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'
                  }`}
                >
                  I'm Talent
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BY THE NUMBERS ── */}
      <section className="py-28 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-12">By the Numbers</p>
          <div className={`rounded-3xl p-16 border ${
            isDark
              ? 'bg-gradient-to-br from-[#8e5e42]/15 to-gray-800/80 border-[#8e5e42]/20'
              : 'bg-gradient-to-br from-[#8e5e42]/8 to-white/80 border-[#8e5e42]/20'
          }`}>
            <div className="grid grid-cols-3 gap-12 text-center">
              {[
                { num: '5K+', label: 'Community Members' },
                { num: '7', label: 'Hackathons Hosted' },
                { num: '2018', label: 'Year Founded' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl md:text-7xl font-black mb-3 text-[#8e5e42] font-heading">{stat.num}</div>
                  <div className={`font-medium text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHOOSE YOUR ENTRY POINT ── */}
      <section className={`py-28 px-6 sm:px-8 lg:px-16 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-6">Entry Point</p>
          <h2 className={`text-4xl md:text-5xl font-black font-heading mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Entry Point
          </h2>
          <p className={`text-xl mb-16 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Every route leads to the same place — real capability, built to last.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
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
                className={`p-10 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                    : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                }`}
              >
                <p className="text-xs font-bold tracking-widest uppercase text-[#8e5e42] mb-4">{card.tag}</p>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{card.title}</h3>
                <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{card.desc}</p>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-3 text-base font-bold text-[#8e5e42] hover:gap-4 transition-all duration-200"
                >
                  {card.cta} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA — FULL WIDTH IMAGE BEHIND ── */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600&h=600"
            alt="Modern workspace"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gray-900/90' : 'bg-white/97'}`} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className={`text-5xl md:text-6xl font-black font-heading mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Close the Capability Gap?
          </h2>
          <p className={`text-xl leading-relaxed mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Whether you need the right people, programmes that build real skills, or digital advisory that sticks — RAC brings the practitioner experience to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#8e5e42] text-white font-bold text-lg rounded-2xl hover:bg-[#8e5e42]/90 hover:shadow-2xl hover:shadow-[#8e5e42]/30 transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch <ArrowRight size={20} />
            </a>
            <a
              href="/services"
              className={`inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#8e5e42] font-bold text-lg rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
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