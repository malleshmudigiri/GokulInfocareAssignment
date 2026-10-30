
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  HeartPulse,
  Clock,
  ShieldCheck,
  Stethoscope,
  Activity,
  Heart,
  Baby,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description:
      "Get information about general health services and routine consultations.",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Explore heart health services and learn about available consultations.",
  },
  {
    icon: Activity,
    title: "Diagnostics",
    description:
      "Find information about diagnostic tests and available healthcare services.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Learn about healthcare services and consultations for children.",
  },
];

function Home() {
  return (
    <div className="overflow-hidden">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-28">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700">
              <HeartPulse size={17} />
              Your Healthcare Information Assistant
            </div>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Healthcare Made
              <span className="block text-blue-600">
                Simple & Smarter.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              Find healthcare information, explore clinic services, and get
              answers to your questions with our AI-powered assistant.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/ai-chat"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
              >
                <BrainCircuit size={19} />
                Chat with AI
                <ArrowRight size={18} />
              </NavLink>

              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
              >
                Learn More
              </NavLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-600" />
                Easy Access
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-blue-600" />
                Quick Responses
              </div>
            </div>
          </div>

          {/* AI Assistant Preview */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-blue-100/60">

              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <BrainCircuit size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    CareFlow AI
                  </h3>
                  <p className="text-xs text-slate-400">
                    Healthcare Information Assistant
                  </p>
                </div>

                <span className="ml-auto h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>

              <div className="space-y-5 py-6">
                <div>
                  <p className="mb-2 text-xs font-medium text-slate-400">
                    YOU
                  </p>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-blue-600 p-4 text-sm leading-6 text-white">
                    What services are available at your clinic?
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <BrainCircuit size={15} className="text-blue-600" />
                    CAREFLOW AI
                  </div>
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    Hello! I can help you explore clinic services, consultation
                    information, opening hours, and appointment procedures.
                    How can I help you today?
                  </div>
                </div>
              </div>

              <NavLink
                to="/ai-chat"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-50 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                <MessageCircle size={17} />
                Start a Conversation
                <ArrowRight size={16} />
              </NavLink>

              <p className="mt-4 text-center text-xs text-slate-400">
                AI provides general information, not medical diagnosis.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="border-b border-slate-100 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BrainCircuit size={23} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                AI-Powered Assistance
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Get quick answers to common questions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              <HeartPulse size={23} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Healthcare Information
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Explore services and clinic information.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <CalendarCheck size={23} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Appointment Guidance
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Learn how to schedule a consultation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore Healthcare Services
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Discover available healthcare services and use our AI assistant
              to find the information you need.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <service.icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI Call to Action */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-6 py-14 text-center shadow-xl shadow-blue-100 sm:px-12">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
            <BrainCircuit size={32} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Have a Healthcare Question?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
            Chat with CareFlow AI to learn about clinic services, opening
            hours, appointment procedures, and general healthcare information.
          </p>

          <NavLink
            to="/ai-chat"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Start Chatting
            <ArrowRight size={18} />
          </NavLink>

        </div>
      </section>

    </div>
  );
}

export default Home;
