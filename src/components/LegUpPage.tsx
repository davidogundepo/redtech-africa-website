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

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-96 h-96 blur-3xl animate-pulse ${isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'}`} />
        <div className={`absolute bottom-40 left-20 w-80 h-80 blur-3xl animate-pulse delay-1000 ${isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'}`} />
      </div>

      {/* PLATFORM BANNER (HERO) */}
      <section className={`pt-32 pb-0 px-4 sm:px-6 lg:px-8 relative border-b ${isDark ? 'border-[#8e5e42]/20' : 'border-[#8e5e42]/20'}`}>
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center pb-24">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-6">Platform</p>
              <h1 className={`text-5xl md:text-6xl font-black leading-tight mb-8 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
                LEG UP —<br />Where Capability<br />Speaks Louder<br />Than a CV.
              </h1>
              <p className={`text-xl max-w-xl mb-12 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                LEG UP is a hackathon-led talent matching and skill verification ecosystem built for the way work gets done. Through our Skill Snapshot, individuals are assessed on real, project-based capability — not unverified claims on a page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="px-8 py-4 rounded-2xl bg-[#8e5e42] text-white font-bold text-lg hover:bg-[#8e5e42]/90 hover:shadow-xl hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                  I'm an Employer <ArrowRight size={20} />
                </a>
                <a href="/contact" className={`px-8 py-4 rounded-2xl border-2 border-[#8e5e42] font-bold text-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 ${
                  isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'
                }`}>
                  I'm Looking for Opportunities <ArrowRight size={20} />
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?auto=format&fit=crop&q=80&w=900"
                alt="LEG UP Platform - talent at work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className={`absolute bottom-6 left-6 right-6 z-20 p-4 rounded-2xl backdrop-blur-md border ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/80 border-white/60'}`}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#8e5e42] mb-1">Verified by performance</p>
                <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Employers see what candidates can do — before they interview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILL SNAPSHOT - PRODUCT DESCRIPTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-4">What is a Skill Snapshot?</p>
            <h2 className={`text-4xl md:text-5xl font-black font-heading mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Your Proof of Work. Not Just a Record of It.
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              A Skill Snapshot is your verified, living portfolio — built through real challenges, not self-reported claims.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            {/* Left Column */}
            <div className="space-y-8">
              <div className={`p-8 rounded-3xl border transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20' : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20'}`}>
                <div className="w-12 h-12 rounded-2xl bg-[#8e5e42]/10 flex items-center justify-center mb-6">
                  <Target className="text-[#8e5e42]" size={24} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>How It Works</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Through LEG UP's hackathon-led challenges, you are placed in live, project-based scenarios that reflect the demands of today's workplace. Your performance is assessed, verified, and captured in your Skill Snapshot — a portable, employer-ready record of demonstrated capability.
                </p>
              </div>

              <div className={`p-8 rounded-3xl border transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20' : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20'}`}>
                <div className="w-12 h-12 rounded-2xl bg-[#8e5e42]/10 flex items-center justify-center mb-6">
                  <TrendingUp className="text-[#8e5e42]" size={24} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>Why It Matters</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  For too long, hiring has rewarded those who can write a strong CV over those who can do strong work. The Skill Snapshot changes that — giving overlooked talent a credible, evidence-based way into the room, and giving employers the confidence to hire on capability, not assumption.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className={`p-10 rounded-3xl border-l-4 border-[#8e5e42] shadow-2xl ${isDark ? 'bg-gray-900/80 border-y border-r border-gray-800' : 'bg-white border-y border-r border-gray-200'}`}>
              <div className="w-16 h-16 rounded-2xl bg-[#8e5e42] flex items-center justify-center mb-8 shadow-lg shadow-[#8e5e42]/20">
                <ShieldCheck className="text-white" size={32} />
              </div>
              <h3 className={`text-3xl font-bold mb-8 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>What It Includes</h3>
              <ul className="space-y-6 mb-10">
                {[
                  'Verified project outcomes across relevant skill areas',
                  'Assessor-validated performance ratings — not self-scored',
                  'A capability profile matched to employer requirements',
                  'A continuously updated record that grows as you do',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-[#8e5e42]" size={20} />
                    </div>
                    <span className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Skill Snapshot Visual */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden relative shadow-lg shadow-black/20 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Skill Snapshot Team Collaboration"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 rounded-2xl bg-[#8e5e42] text-white font-bold text-lg hover:bg-[#8e5e42]/90 hover:shadow-xl hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
              For Employers <ArrowRight size={20} />
            </a>
            <a href="/contact" className={`px-8 py-4 rounded-2xl border-2 border-[#8e5e42] font-bold text-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 ${isDark ? 'text-white hover:bg-[#8e5e42]/10' : 'text-gray-900 hover:bg-[#8e5e42]/10'}`}>
              Build Your Skill Snapshot <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
