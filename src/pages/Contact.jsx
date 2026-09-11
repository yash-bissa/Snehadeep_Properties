import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { siteConfig } from '../config/siteConfig';

// Contact page sends the React form through EmailJS without exposing a private SMTP password in the browser.
export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('');

    const settings = siteConfig.emailJs;
    const isConfigured = !settings.serviceId.includes('YOUR_') && !settings.templateId.includes('YOUR_') && !settings.publicKey.includes('YOUR_');

    if (!isConfigured) {
      setStatus('EmailJS is not configured yet. Add the three EmailJS values in src/config/siteConfig.js.');
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        settings.serviceId,
        settings.templateId,
        {
          from_name: form.name,
          phone: form.phone,
          reply_to: form.email,
          message: form.description,
          to_email: siteConfig.email,
        },
        { publicKey: settings.publicKey },
      );
      setStatus('Message sent successfully. We will get back to you soon.');
      setForm({ name: '', phone: '', email: '', description: '' });
    } catch (error) {
      console.error(error);
      setStatus('Could not send your enquiry. Please try again or contact us directly.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="page-shell py-10 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <SectionLabel>CONTACT US</SectionLabel>
          <h1 className="display-heading mt-4 text-5xl sm:text-6xl">Let's find the<br /><em className="text-[#65775e]">right land</em> for you.</h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#455349]">Tell us what you are looking for — area, location, land details or development requirements.</p>

          <div className="mt-9 space-y-5 text-sm">
  {siteConfig.phones.map((phone) => (
    <a
      key={phone}
      className="flex items-center gap-4"
      href={`tel:${phone.replace(/\s/g, '')}`}
    >
      <Phone size={20} /> {phone}
    </a>
  ))}

  <a
    className="flex items-center gap-4"
    href={`mailto:${siteConfig.email}`}
  >
    <Mail size={20} /> {siteConfig.email}
  </a>

  <div className="flex items-center gap-4">
    <MapPin size={20} /> {siteConfig.location}
  </div>
</div>

          {/* <button type="button" onClick={openGoogleForm} className="solid-button mt-8">Open Google Form <ArrowRight size={18} /></button> */}
        </div>

        <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-6 shadow-soft sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">Name<input required name="name" value={form.name} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-[#173326]/15 bg-[#f8f6ef] px-4 py-3 outline-none focus:border-[#173326]" placeholder="Your name" /></label>
            <label className="text-sm font-medium">Phone Number<input required name="phone" value={form.phone} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-[#173326]/15 bg-[#f8f6ef] px-4 py-3 outline-none focus:border-[#173326]" placeholder="+91..." /></label>
            <label className="text-sm font-medium sm:col-span-2">Email Address<input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-[#173326]/15 bg-[#f8f6ef] px-4 py-3 outline-none focus:border-[#173326]" placeholder="you@example.com" /></label>
            <label className="text-sm font-medium sm:col-span-2">Description<textarea required name="description" value={form.description} onChange={handleChange} rows="7" className="mt-2 w-full resize-none rounded-2xl border border-[#173326]/15 bg-[#f8f6ef] px-4 py-3 outline-none focus:border-[#173326]" placeholder="Area, location, land details, budget, requirements, or anything else you would like us to know..." /></label>
          </div>
          <button disabled={isSending} type="submit" className="solid-button mt-6 disabled:cursor-not-allowed disabled:opacity-60">{isSending ? 'Sending...' : 'Submit'} <ArrowRight size={18} /></button>
          {status && <p className="mt-4 rounded-2xl bg-[#edf0e8] px-4 py-3 text-sm text-[#173326]">{status}</p>}
        </form>
      </div>
    </section>
  );
}
