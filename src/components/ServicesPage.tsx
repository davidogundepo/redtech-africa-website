import React from 'react';
import { ArrowRight, Users, BookOpen, Shield, Settings, Search, Building, Briefcase } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ServicesPage() {
  const { isDark } = useTheme();

  const services = [
    {
      icon: BookOpen,
      title: 'Training & Capability Development',
      desc: 'Bespoke programmes that build real capability — not just attendance certificates.',
    },
    {
      icon: Users,
      title: 'LegUp — Talent Platform',
      desc: 'Portfolio-first hiring. Employers see what people can do, not just what their CV claims.',
    },
    {
      icon: Briefcase,
      title: 'HR Advisory',
      desc: 'Strategic HR support — workforce planning, policy, and systems built for your context.',
    },
    {
      icon: Search,
      title: 'Recruitment & Selection',
      desc: 'End-to-end hiring powered by evidence, not guesswork. Entry level to executive.',
    },
    {
      icon: Shield,
      title: 'Capability Diagnostic',
      desc: 'For organisations that know something is not performing but are not sure what. A structured assessment with a priority roadmap delivered in 10 working days.',
    },
    {
      icon: Building,
      title: 'Institutional Academy Build',
      desc: 'We help large organisations build their own sustainable internal learning infrastructure.',
    },
    {
      icon: Settings,
      title: 'Consulting & Strategic Advisory',
      desc: 'From workforce planning to ecosystem design — for organisations navigating change.',
    },
  ];

  const d3Steps = [
    { num: '01', title: 'Diagnose', desc: 'Find what is actually broken.' },
    { num: '02', title: 'Design', desc: 'Build a solution for your context.' },
    { num: '03', title: 'Deliver', desc: 'Practitioners, not theorists.' },
    { num: '04', title: 'Embed', desc: 'Make it stick after we leave.' },
  ];

  const levels = [
    { name: 'Entry Level', desc: 'Interns & first-year employees' },
    { name: 'Staff', desc: 'Individual contributors growing in role' },
    { name: 'Team Leads', desc: 'First-time people managers' },
    { name: 'Managers', desc: 'Function & department heads' },
    { name: 'Senior Leaders', desc: 'Executives setting direction' },
  ];

  const packs = [
    { name: 'Execution Discipline', desc: 'Fix meeting culture, build KPI ownership, create accountability.' },
    { name: 'Service Excellence', desc: 'Elevate service quality, communication, and stakeholder confidence.' },
    { name: 'Leadership Acceleration', desc: 'Strengthen mid-management where most capability gaps appear.' },
    { name: 'AI for Productivity', desc: 'Move from AI curiosity to genuine daily application.' },
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>

      {/* HERO */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-black' : 'bg-[#8e5e42]/5'}`}>
        <div className="container max-w-5xl mx-auto">
          <h1 className={`text-5xl md:text-7xl font-black leading-tight mb-6 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The Brief Is Rarely<br />The Whole <span className="text-[#8e5e42]">Problem.</span>
          </h1>
          <p className={`text-xl max-w-2xl mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Behind every brief is a system. We find what is actually broken — then fix it properly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:hello@redtechafrica.com?subject=Discovery Call Request" className="px-8 py-4 rounded-2xl bg-[#8e5e42] text-white font-bold text-lg hover:bg-[#8e5e42]/90 transition-all flex items-center gap-2">
              Book a Discovery Call <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ORIGIN STRIP */}
      <section className={`py-10 border-y ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6 items-start">
          <div className="w-1 bg-[#8e5e42] rounded-full self-stretch hidden md:block"></div>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <strong>15+ years</strong> working inside HR, financial institutions, and technology organisations across Nigeria and the UK.
          </p>
        </div>
      </section>

      {/* SECTORS */}
      <section className={`py-6 overflow-x-auto ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 md:gap-8 min-w-max">
          {['Financial Services', 'Development Finance', 'Public Sector', 'Oil & Gas', 'Higher Education', 'SMEs', 'NGOs', 'Technology'].map((s, i) => (
            <span key={i} className={`text-xs md:text-sm font-bold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{s}</span>
          ))}
        </div>
      </section>

      {/* 7 SERVICES */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-black mb-4 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Seven Services. One System.
          </h2>
          <p className={`text-lg mb-12 max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Each works on its own. Together, they close the gap.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <a key={i} href="mailto:hello@redtechafrica.com?subject=Discovery Call Request" className={`group p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg ${
                isDark ? 'bg-gray-800/50 border-gray-700 hover:border-[#8e5e42]' : 'bg-white border-gray-200 hover:border-[#8e5e42]'
              }`}>
                <s.icon className="text-[#8e5e42] mb-4" size={28} />
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* D³ APPROACH */}
      <section className={`py-20 ${isDark ? 'bg-black' : 'bg-[#8e5e42]/5'}`}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#8e5e42] font-bold tracking-widest uppercase text-sm mb-3">Our Approach — D³</p>
          <h2 className={`text-3xl md:text-4xl font-black mb-4 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            We define the problem<br />before we design the solution.
          </h2>
          <p className={`text-lg mb-12 max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Every engagement starts with diagnosis. No assumptions. No off-the-shelf solutions.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {d3Steps.map((step, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                <span className="text-[#8e5e42] font-bold text-sm">{step.num}</span>
                <h4 className={`text-xl font-bold mt-2 mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{step.title}</h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 LEVELS */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-black mb-4 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Right capability. Right level.
          </h2>
          <p className={`text-lg mb-12 max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Five levels. Each with different needs. We build for all of them.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {levels.map((l, i) => (
              <div key={i} className={`p-5 rounded-2xl border text-center transition-all hover:border-[#8e5e42] ${
                isDark ? 'bg-gray-800/40 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <span className="text-[#8e5e42] font-bold text-xs tracking-widest">LEVEL {i + 1}</span>
                <h4 className={`font-bold mt-2 mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{l.name}</h4>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP PACKS */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-black mb-4 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready-to-deploy programmes.
          </h2>
          <p className={`text-lg mb-12 max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Four proven programmes. Measurable outcomes. Deploy immediately.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {packs.map((p, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
                <span className="text-[#8e5e42] font-bold text-xs tracking-widest">PACK {i + 1}</span>
                <h3 className={`text-xl font-bold mt-2 mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className={`text-4xl md:text-5xl font-black mb-6 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to close the gap?
          </h2>
          <p className={`text-xl mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Tell us what is not working. We will tell you honestly whether we can fix it.
          </p>
          <a href="mailto:hello@redtechafrica.com?subject=Discovery Call Request" className="px-10 py-5 rounded-2xl bg-[#8e5e42] text-white font-bold text-xl hover:bg-[#8e5e42]/90 transition-all inline-flex items-center gap-3">
            Book a Discovery Call <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </div>
  );
}
