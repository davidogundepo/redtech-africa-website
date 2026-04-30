import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function LegUpPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-[#8e5e42]/5 text-gray-900'
    }`}>

      {/* ── HERO — FULL-WIDTH SPLIT ── */}
      <section className="relative min-h-screen flex items-center">
        {/* Full-bleed image right side */}
        <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full overflow-hidden">
          <div className={`absolute inset-0 z-10 hidden lg:block ${isDark
            ? 'bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/30'
            : 'bg-gradient-to-r from-white via-white/98 to-white/20'
          }`} />
          <div className={`absolute inset-0 z-10 lg:hidden ${isDark ? 'bg-gray-900/80' : 'bg-white/85'}`} />
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=85&w=1400&h=1000"
            alt="Diverse team of professionals collaborating on a project"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-8">Platform</p>
            <h1
              className={`font-heading font-black leading-[1.02] mb-10 ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
            >
              LEG UP —<br />
              Where Capability<br />
              Speaks Louder<br />
              Than a CV.
            </h1>
            <p className={`text-xl max-w-xl mb-12 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              A hackathon-led talent matching and skill verification ecosystem built for the way work actually gets done. Through our Skill Snapshot, individuals are assessed on real, project-based capability — not unverified claims on a page.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#8e5e42] text-white font-bold text-base rounded-2xl hover:bg-[#8e5e42]/90 hover:shadow-2xl hover:shadow-[#8e5e42]/30 transition-all duration-300 hover:-translate-y-1">
                I'm an Employer <ArrowRight size={18} />
              </a>
              <a href="/contact" className={`inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#8e5e42] font-bold text-base rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'
              }`}>
                I'm Looking for Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ── */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=85&w=1800&h=700"
          alt="Hackathon participants working together"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-gray-900/40 via-transparent to-gray-900/60' : 'bg-gradient-to-b from-white/20 via-transparent to-white/40'}`} />
        <div className="absolute bottom-10 left-0 right-0 text-center z-10">
          <p className="text-white text-lg font-bold tracking-widest uppercase bg-black/40 backdrop-blur-sm inline-block px-8 py-3 rounded-full">
            Capability Verified. Not Assumed.
          </p>
        </div>
      </section>

      {/* ── SKILL SNAPSHOT ── */}
      <section className="py-28 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-6">What is a Skill Snapshot?</p>
            <h2 className={`text-4xl md:text-6xl font-black font-heading mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Your Proof of Work.<br />Not Just a Record of It.
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              A Skill Snapshot is your verified, living portfolio — built through real challenges, not self-reported claims. Where a traditional CV tells employers what you say you can do, a Skill Snapshot shows them what you have done.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left: Cards */}
            <div className="space-y-8">
              <div className={`p-10 rounded-3xl border transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20' : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20'}`}>
                <div className="w-14 h-14 rounded-2xl bg-[#8e5e42]/10 flex items-center justify-center mb-8">
                  <Target className="text-[#8e5e42]" size={28} />
                </div>
                <h3 className={`text-2xl font-bold mb-5 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>How It Works</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Through LEG UP's hackathon-led challenges, you are placed in live, project-based scenarios that reflect the demands of today's workplace. Your performance is assessed, verified, and captured in your Skill Snapshot — a portable, employer-ready record of demonstrated capability.
                </p>
              </div>

              <div className={`p-10 rounded-3xl border transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20' : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20'}`}>
                <div className="w-14 h-14 rounded-2xl bg-[#8e5e42]/10 flex items-center justify-center mb-8">
                  <TrendingUp className="text-[#8e5e42]" size={28} />
                </div>
                <h3 className={`text-2xl font-bold mb-5 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>Why It Matters</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  For too long, hiring has rewarded those who can write a strong CV over those who can do strong work. The Skill Snapshot changes that — giving overlooked talent a credible, evidence-based way into the room.
                </p>
              </div>
            </div>

            {/* Right: What It Includes + Large image */}
            <div>
              <div className={`p-10 rounded-3xl border-l-4 border-[#8e5e42] shadow-2xl mb-10 ${isDark ? 'bg-gray-900/80 border-y border-r border-gray-800' : 'bg-white border-y border-r border-gray-200'}`}>
                <div className="w-16 h-16 rounded-2xl bg-[#8e5e42] flex items-center justify-center mb-8 shadow-lg shadow-[#8e5e42]/20">
                  <ShieldCheck className="text-white" size={32} />
                </div>
                <h3 className={`text-3xl font-bold mb-8 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>What It Includes</h3>
                <ul className="space-y-6">
                  {[
                    'Verified project outcomes across relevant skill areas',
                    'Assessor-validated performance ratings — not self-scored',
                    'A capability profile matched to employer requirements',
                    'A continuously updated record that grows as you do',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="text-[#8e5e42]" size={22} />
                      </div>
                      <span className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Large image */}
              <div className="w-full h-80 rounded-3xl overflow-hidden relative shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=85&w=1200&h=700"
                  alt="Skill Snapshot - team collaboration and assessment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#8e5e42] text-white font-bold text-lg rounded-2xl hover:bg-[#8e5e42]/90 hover:shadow-2xl hover:shadow-[#8e5e42]/30 transition-all duration-300 hover:-translate-y-1">
              For Employers <ArrowRight size={20} />
            </a>
            <a href="/contact" className={`inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#8e5e42] font-bold text-lg rounded-2xl transition-all duration-300 hover:-translate-y-1 ${isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'}`}>
              Build Your Skill Snapshot <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
