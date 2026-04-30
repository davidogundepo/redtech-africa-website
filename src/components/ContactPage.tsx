import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2, Loader2, Building2, User } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const serviceOptions = [
  { value: '', label: 'Select a service area...' },
  { value: 'Resourcing & Talent', label: 'Resourcing & Talent' },
  { value: 'Education & Capability Training', label: 'Education & Capability Training' },
  { value: 'Training', label: 'Training' },
  { value: 'Digital Technology Advisory', label: 'Digital Technology Advisory' },
  { value: 'LEG UP — I\'m an Employer', label: 'LEG UP — I\'m an Employer' },
  { value: 'LEG UP — I\'m Looking for Opportunities', label: 'LEG UP — I\'m Looking for Opportunities' },
  { value: 'Strategic Partnership', label: 'Strategic Partnership' },
  { value: 'General Enquiry', label: 'General Enquiry' },
];

export default function ContactPage() {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    serviceInterest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.serviceInterest) {
      setErrorMsg('Please select a service area.');
      return;
    }
    setErrorMsg('');
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly at hello@redtechafrica.com');
    }
  };

  const inputBase = `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-[#8e5e42]/30 ${
    isDark
      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-[#8e5e42]'
      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#8e5e42]'
  }`;

  const label = `block text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`;

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gray-950 text-white' : 'bg-[#f9f7f5] text-gray-900'}`}>

      {/* Subtle background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-3xl opacity-30 ${isDark ? 'bg-[#8e5e42]/15' : 'bg-[#8e5e42]/8'}`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 blur-3xl opacity-20 ${isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'}`} />
      </div>

      <div className="relative container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-4">Get In Touch</p>
          <h1 className={`font-heading font-black leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            Let's Start a Real Conversation.
          </h1>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            No pitch decks. No jargon. Tell us what you're working with and we'll tell you honestly whether and how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ─── FORM ─── */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className={`rounded-3xl p-12 text-center border ${isDark ? 'bg-gray-900 border-[#8e5e42]/30' : 'bg-white border-[#8e5e42]/20'}`}>
                <div className="w-20 h-20 rounded-full bg-[#8e5e42]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-[#8e5e42]" size={40} />
                </div>
                <h2 className={`text-2xl font-bold font-heading mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Message Received.
                </h2>
                <p className={`text-base leading-relaxed mb-8 max-w-md mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Thank you for reaching out. We've sent a confirmation to your email and our team will be in touch within one business day.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', organisation: '', serviceInterest: '', message: '' }); }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8e5e42] text-white font-bold rounded-xl hover:bg-[#8e5e42]/90 transition-all duration-200"
                >
                  Send Another Message <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`rounded-3xl p-8 sm:p-10 border shadow-sm ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={label}>Full Name *</label>
                    <div className="relative">
                      <User size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Amaka Okonkwo"
                        className={`${inputBase} pl-10`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={label}>Email Address *</label>
                    <div className="relative">
                      <Mail size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`${inputBase} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className={label}>Organisation / Company <span className={`${isDark ? 'text-gray-600' : 'text-gray-400'} font-normal normal-case tracking-normal`}>(optional)</span></label>
                  <div className="relative">
                    <Building2 size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder="Your organisation name"
                      className={`${inputBase} pl-10`}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className={label}>Service Interest *</label>
                  <select
                    name="serviceInterest"
                    required
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className={`${inputBase} appearance-none cursor-pointer`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238e5e42' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                  >
                    {serviceOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''} className={isDark ? 'bg-gray-800' : 'bg-white'}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label className={label}>Tell us more <span className={`${isDark ? 'text-gray-600' : 'text-gray-400'} font-normal normal-case tracking-normal`}>(optional)</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share some context — what are you working on, what's the challenge, and what are you hoping to achieve?"
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {errorMsg && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-sm text-red-400">{errorMsg}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className={`text-xs leading-relaxed max-w-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-[#8e5e42] hover:underline">Privacy Policy</a>.
                    We don't spam.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8e5e42] text-white font-bold text-sm rounded-xl hover:bg-[#8e5e42]/90 hover:shadow-lg hover:shadow-[#8e5e42]/25 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <ArrowRight size={16} /></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ─── SIDEBAR ─── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Image */}
            <div className="w-full h-56 rounded-3xl overflow-hidden relative group shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                alt="REDtech Africa Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-5 z-20">
                <p className="text-white text-xs font-bold tracking-widest uppercase opacity-80">Practitioners. Not Consultants.</p>
              </div>
            </div>

            {/* Lagos */}
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#8e5e42]/10 flex items-center justify-center">
                  <MapPin size={13} className="text-[#8e5e42]" />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Lagos, Nigeria</span>
              </div>
              <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Unit 20, Trocadero Square,<br />The Rock Drive, Lekki Phase 1
              </p>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#8e5e42]" />
                <a href="tel:+2348189696614" className={`text-sm hover:text-[#8e5e42] transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>+234 818 969 6614</a>
              </div>
            </div>

            {/* London */}
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#8e5e42]/10 flex items-center justify-center">
                  <MapPin size={13} className="text-[#8e5e42]" />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>London, UK</span>
              </div>
              <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                11 Old Bond Street, Mayfair,<br />London W1S 4PN
              </p>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#8e5e42]" />
                <a href="tel:+447535718997" className={`text-sm hover:text-[#8e5e42] transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>+44 7535 718997</a>
              </div>
            </div>

            {/* Email */}
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#8e5e42]/10 flex items-center justify-center">
                  <Mail size={13} className="text-[#8e5e42]" />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email Us</span>
              </div>
              <a href="mailto:hello@redtechafrica.com" className={`text-sm font-medium hover:text-[#8e5e42] transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                hello@redtechafrica.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}