
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HeartPulse,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const whatsappMessage = `
Hello CareFlow Team,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `;

    // Replace with your clinic's WhatsApp number.
    const whatsappNumber = "911234567890";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <MessageCircle size={30} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            We're Here to Help
          </h1>

          <p className="mt-5 leading-8 text-slate-600">
            Have questions about our clinic services or need assistance?
            Send us a message or connect with our AI assistant.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          {/* Contact Information */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Contact Information
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Reach out to us for general clinic enquiries, service
              information, or assistance.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Phone Number
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email Address
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    contact@example.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Clinic Address
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Add your clinic address here.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Working Hours
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Sunday: Closed
                  </p>
                </div>
              </div>

            </div>

            {/* AI Assistant Link */}
            <div className="mt-10 rounded-2xl bg-blue-50 p-6">
              <div className="flex items-center gap-3">
                <HeartPulse className="text-blue-600" size={25} />
                <h3 className="font-bold text-slate-900">
                  Need Quick Information?
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our AI assistant can help answer common questions about
                clinic services and appointment procedures.
              </p>

              <NavLink
                to="/ai-chat"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800"
              >
                Chat with AI
                <MessageCircle size={17} />
              </NavLink>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100 sm:p-9">
            <h2 className="text-2xl font-bold text-slate-900">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill in the form below to contact our team through WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;
