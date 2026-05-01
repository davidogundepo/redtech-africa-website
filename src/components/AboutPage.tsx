import React, { useState, useEffect } from 'react';
import { Code, Video, Zap, Globe, Shield, Cloud, Brain, Settings, Rocket, Users, Target, Award, TrendingUp, Heart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [isVisible, setIsVisible] = useState<{[key: number]: boolean}>({});
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const hasAnimated = React.useRef(false);
  const { isDark } = useTheme();

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and creative approaches to solve complex challenges.',
      icon: Rocket,
      color: 'from-[#8e5e42] to-[#8e5e42]'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with our clients to understand their vision and bring it to life.',
      icon: Users,
      color: 'from-[#8e5e42] to-[#8e5e42]'
    },
    {
      title: 'Excellence',
      description: 'We deliver nothing but the highest quality solutions, ensuring every project exceeds expectations and sets new industry standards.',
      icon: Award,
      color: 'from-[#8e5e42] to-[#8e5e42]'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(prev => ({ ...prev, [index]: isInView }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [values.length]);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step1 = 0, step2 = 0, step3 = 0;
      const target1 = 7, target2 = 6, target3 = 20;

      const timer = setInterval(() => {
        step1 += target1 / steps;
        step2 += target2 / steps;
        step3 += target3 / steps;

        setCounter1(Math.min(Math.floor(step1), target1));
        setCounter2(Math.min(Math.floor(step2), target2));
        setCounter3(Math.min(Math.floor(step3), target3));

        if (step1 >= target1 && step2 >= target2 && step3 >= target3) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    if (isVisible[3] && !hasAnimated.current) {
      hasAnimated.current = true;
      animateCounters();
    }
  }, [isVisible]);

  const backgroundClass = isDark
    ? 'min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
    : 'min-h-screen bg-gradient-to-br from-[#8e5e42]/5 via-white to-[#8e5e42]/10 text-gray-900';

  return (
    <div className={`${backgroundClass} overflow-hidden transition-all duration-500`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {isDark ? (
          <>
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </>
        ) : (
          <>
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#8e5e42]/30 to-[#8e5e42]/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#8e5e42]/30 to-[#8e5e42]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-br from-[#8e5e42]/30 to-[#8e5e42]/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </>
        )}
        
        {/* Floating Tech Elements */}
        <div className={`absolute top-32 left-32 w-4 h-4 ${isDark ? 'bg-[#8e5e42]/30' : 'bg-[#8e5e42]/40'} rounded-full animate-ping delay-500`}></div>
        <div className={`absolute top-64 right-64 w-6 h-6 border-2 ${isDark ? 'border-[#8e5e42]/30' : 'border-[#8e5e42]/40'} rounded-lg rotate-45 animate-spin`}></div>
        <div className={`absolute bottom-32 right-32 w-8 h-8 ${isDark ? 'bg-gradient-to-r from-[#8e5e42]/20 to-[#8e5e42]/20' : 'bg-gradient-to-r from-[#8e5e42]/30 to-[#8e5e42]/30'} rounded-full animate-pulse delay-1500`}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-0">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            data-animate
            className={`transition-all duration-1000 transform ${
              isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {/* Text + Image split */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight font-heading ${
                  isDark
                    ? 'bg-gradient-to-r from-white via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-gray-900 via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
                }`}>
                  Who We Are
                </h1>
                <p className={`text-xl md:text-2xl leading-relaxed mb-10 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  RAC closes the gap between the workforce you have and the results you need — through resourcing, education, and digital advisory that only comes from 7+ years on the inside: within HR teams, financial institutions, and technology organisations.
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-[#8e5e42] flex items-center justify-center`}>
                    <Code size={22} className="text-white" />
                  </div>
                  <div className={`w-14 h-14 rounded-xl bg-[#8e5e42]/80 flex items-center justify-center`}>
                    <Brain size={26} className="text-white" />
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-[#8e5e42]/60 flex items-center justify-center`}>
                    <Video size={22} className="text-white" />
                  </div>
                  <span className={`ml-2 text-sm font-semibold tracking-widest uppercase ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>Resourcing · Education · Digital</span>
                </div>
              </div>
              {/* Hero image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&h=600&fit=crop&crop=center&q=85"
                    alt="Professional business consulting team"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
                </div>
                {/* Floating stat badge */}
                <div className={`absolute -bottom-6 -left-6 ${
                  isDark ? 'bg-gray-900 border-[#8e5e42]/30' : 'bg-white border-[#8e5e42]/20'
                } border rounded-2xl px-6 py-4 shadow-xl`}>
                  <p className="text-2xl font-black text-[#8e5e42]">7+</p>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>Years Insider Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`grid lg:grid-cols-2 gap-16 transition-all duration-1000 transform ${
              isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {/* Mission */}
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/20 hover:border-[#8e5e42]/40' : 'bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/30 hover:border-[#8e5e42]/50'} backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 group`}>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-[#8e5e42] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Target size={28} className="text-white" />
                </div>
                <h2 className={`text-4xl font-black mb-6 font-heading font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Mission</h2>
              </div>
              <div className="space-y-4">
                <div className={`w-full h-1 bg-[#8e5e42] rounded-full`}></div>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                To close the capability gap facing organisations by connecting them to the right people, equipping 
                their teams with skills that stick, and embedding the digital knowledge needed to compete. We work 
                from the inside out, building infrastructure that transforms how organisations resource, learn, and grow.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/20 hover:border-[#8e5e42]/40' : 'bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/30 hover:border-[#8e5e42]/50'} backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 group`}>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-[#8e5e42] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Rocket size={28} className="text-white" />
                </div>
                <h2 className={`text-4xl font-black mb-6 font-heading font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Vision</h2>
              </div>
              <div className="space-y-4">
                <div className={`w-full h-1 bg-[#8e5e42] rounded-full`}></div>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                To be the most trusted capability partner for organisations globally — where every business, 
                regardless of size or sector, has access to practitioner-led resourcing, real-world learning, and 
                technology expertise that drives lasting performance and competitive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`text-center space-y-16 transition-all duration-1000 transform ${
              isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className={`${isDark ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-gray-600/30' : 'bg-gradient-to-r from-white/80 to-gray-50/80 border-gray-200/50'} backdrop-blur-sm rounded-3xl p-12 border`}>
              <h2 className={`text-5xl font-black mb-8 font-heading font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Business Model</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className={`w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Users size={32} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 font-heading font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>Resourcing</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Practitioner-led talent matching and workforce design</p>
                </div>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Brain size={32} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 font-heading font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Bespoke capability programmes delivered by industry practitioners</p>
                </div>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Code size={32} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 font-heading font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>Digital Technology Advisory</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>AI literacy, cyber awareness, and digital strategy</p>
                </div>
              </div>
              <p className={`text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                RAC operates at the intersection of Resourcing, Education, and Digital Technology — not as three separate services, 
                but as one connected capability system. Because the organisations we work with don't have isolated problems. 
                They have people gaps, skills gaps, and technology gaps that feed each other. We close all three — from the inside out, 
                grounded in real experience across HR, financial services, and technology organisations.
              </p>
            </div>

            <div className={`${isDark ? 'bg-gradient-to-r from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/20' : 'bg-gradient-to-r from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/30'} backdrop-blur-sm rounded-3xl overflow-hidden border`}>
              <div className="grid lg:grid-cols-2 items-stretch">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop&crop=center&q=85"
                    alt="Africa and global presence"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${
                    isDark ? 'bg-gradient-to-r from-transparent to-gray-900/60' : 'bg-gradient-to-r from-transparent to-[#8e5e42]/20'
                  }`} />
                </div>
                {/* Content */}
                <div className="p-10 lg:p-14">
                  <h2 className={`text-4xl font-black mb-6 font-heading font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Presence</h2>
                  <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="block font-bold text-[#8e5e42] mb-3">Rooted in Africa. Active Globally.</span>
                    RAC works across the globe — bringing practitioner knowledge from two markets into every engagement. Our clients range from growing businesses navigating their first capability investment to established institutions restructuring how their people perform.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`${isDark ? 'bg-gray-800/50' : 'bg-white/70'} rounded-2xl p-4 text-center border ${
                      isDark ? 'border-[#8e5e42]/20' : 'border-[#8e5e42]/20'
                    }`}>
                      <Globe size={24} className="mx-auto mb-2 text-[#8e5e42]" />
                      <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Africa</span>
                    </div>
                    <div className={`${isDark ? 'bg-gray-800/50' : 'bg-white/70'} rounded-2xl p-4 text-center border ${
                      isDark ? 'border-[#8e5e42]/20' : 'border-[#8e5e42]/20'
                    }`}>
                      <Globe size={24} className="mx-auto mb-2 text-[#8e5e42]" />
                      <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Europe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${isDark ? 'bg-gradient-to-r from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/20' : 'bg-gradient-to-r from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/30'} backdrop-blur-sm rounded-3xl overflow-hidden border`}>
              <div className="grid lg:grid-cols-2 items-stretch">
                {/* Content */}
                <div className="p-10 lg:p-14">
                  <h2 className={`text-4xl font-black mb-6 font-heading font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>Our History</h2>
                  <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    REDtech Africa Consulting was founded in 2018 on a simple but urgent insight — that the gap
                    between learning and real work was costing organisations and individuals alike. Too many people
                    were being trained without being employed.
                  </p>
                  <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Drawing on 7+ years spent working inside HR functions, financial institutions, and technology
                    organisations across Nigeria and the UK, our founders designed a different kind of firm — one
                    where resourcing, education, and digital advisory are a connected system.
                  </p>
                  <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    From day one, the mission has been the same: connect learning to real work, build skills that earn,
                    and develop people and organisations from the inside out.
                  </p>
                </div>
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&crop=center&q=85"
                    alt="Corporate team meeting and strategy"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${
                    isDark ? 'bg-gradient-to-l from-transparent to-gray-900/50' : 'bg-gradient-to-l from-transparent to-[#8e5e42]/10'
                  }`} />
                  {/* Year badge */}
                  <div className={`absolute top-6 right-6 ${
                    isDark ? 'bg-gray-900/90' : 'bg-white/90'
                  } rounded-2xl px-5 py-3 shadow-lg backdrop-blur-sm`}>
                    <p className="text-xl font-black text-[#8e5e42]">Est. 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 transform ${
              isVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/30' : 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/40'} backdrop-blur-sm rounded-3xl p-8 border text-center group hover:scale-105 transition-transform duration-300`}>
              <div className={`text-6xl font-black mb-4 ${isDark ? 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'}`}>
                {counter1}+
              </div>
              <div className={`font-bold text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Years of Excellence</div>
              <div className={`w-full h-1 bg-[#8e5e42] rounded-full mt-4 group-hover:scale-x-110 transition-transform duration-300`}></div>
            </div>
            
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/30' : 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/40'} backdrop-blur-sm rounded-3xl p-8 border text-center group hover:scale-105 transition-transform duration-300`}>
              <div className={`text-6xl font-black mb-4 ${isDark ? 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'}`}>
                {counter2}+
              </div>
              <div className={`font-bold text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Innovation Projects Delivered</div>
              <div className={`w-full h-1 bg-[#8e5e42] rounded-full mt-4 group-hover:scale-x-110 transition-transform duration-300`}></div>
            </div>
            
            <div className={`${isDark ? 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/30' : 'bg-gradient-to-br from-[#8e5e42]/20 to-[#8e5e42]/20 border-[#8e5e42]/40'} backdrop-blur-sm rounded-3xl p-8 border text-center group hover:scale-105 transition-transform duration-300`}>
              <div className={`text-6xl font-black mb-4 ${isDark ? 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'}`}>
                {counter3}+
              </div>
              <div className={`font-bold text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Global Clients & Partners</div>
              <div className={`w-full h-1 bg-[#8e5e42] rounded-full mt-4 group-hover:scale-x-110 transition-transform duration-300`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            className={`transition-all duration-1000 transform ${
              isVisible[4] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className={`text-5xl font-black text-center mb-16 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  desc: 'We don\'t retrofit old solutions to new problems. From hackathon-led skill verification to AI literacy programmes and digital advisory, we bring fresh thinking to how organisations resource, learn, and grow — always grounded in what works in the real world.',
                  icon: Rocket,
                  img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center&q=80',
                  imgAlt: 'Technology and digital innovation',
                },
                {
                  title: 'Collaboration',
                  desc: 'We work alongside our clients, not above them. Every engagement starts with understanding the organisation from the inside — its people, its gaps, its ambitions. We build with you, not just for you, because lasting capability only comes from shared ownership.',
                  icon: Users,
                  img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&crop=center&q=80',
                  imgAlt: 'Team collaborating around a table',
                },
                {
                  title: 'Excellence',
                  desc: 'We hold ourselves to the standard of the organisations we\'ve worked inside. No generic frameworks, no off-the-shelf programmes. Every solution is practitioner-led, context-aware, and built to last beyond the engagement.',
                  icon: Award,
                  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=faces&q=80',
                  imgAlt: 'Professional excellence and achievement',
                },
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className={`${
                    isDark ? 'bg-gradient-to-br from-[#8e5e42]/10 to-[#8e5e42]/10 border-[#8e5e42]/20' : 'bg-gradient-to-br from-[#8e5e42]/5 to-[#8e5e42]/5 border-[#8e5e42]/20'
                  } backdrop-blur-sm rounded-3xl overflow-hidden border hover:shadow-xl transition-shadow duration-300 group`}>
                    {/* Photo header */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <img
                        src={value.img}
                        alt={value.imgAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className="w-12 h-12 bg-[#8e5e42] rounded-xl flex items-center justify-center">
                          <Icon size={22} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className={`text-2xl font-bold mb-3 font-heading font-playfair ${isDark ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{value.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isDark ? 'bg-gradient-to-r from-[#8e5e42]/10 via-[#8e5e42]/10 to-[#8e5e42]/10 border-white/10' : 'bg-gradient-to-r from-[#8e5e42]/10 via-[#8e5e42]/10 to-[#8e5e42]/10 border-gray-200/30'} backdrop-blur-sm rounded-3xl p-16 border`}>
            <h2 className={`text-5xl md:text-6xl font-black mb-8 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Transform Your Digital Future?
            </h2>
            <p className={`text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Join us on a journey of innovation, creativity, and digital excellence. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className={`px-10 py-5 bg-[#8e5e42] rounded-2xl font-bold text-white text-lg hover:shadow-2xl hover:shadow-[#8e5e42]/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}>
                Start Your Journey
              </button>
              <button className={`px-10 py-5 border-2 ${isDark ? 'border-white/20 hover:bg-white/10 hover:border-white/40' : 'border-gray-300/50 hover:bg-gray-100/50 hover:border-gray-400/60'} rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Discover Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}