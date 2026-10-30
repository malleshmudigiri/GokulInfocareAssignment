
import { NavLink } from "react-router-dom";
import {
  HeartPulse,
  BrainCircuit,
  ShieldCheck,
  Users,
  ArrowRight,
  Stethoscope,
  Clock,
} from "lucide-react";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-100">
            <HeartPulse size={32} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
            About CareFlow AI
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Making Healthcare
            <span className="block text-blue-600">
              Information Simple.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            CareFlow AI is a healthcare information platform designed to make
            clinic information easier to access through a simple website and
            an AI-powered chat assistant.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              A Smarter Way to Find Healthcare Information
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Finding the right clinic information should be simple.
              CareFlow AI brings essential clinic information together in
              one place and provides an AI assistant to help visitors find
              answers to common questions.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you want to explore healthcare services, understand
              appointment procedures, or learn about clinic timings, our
              platform makes it easier to find relevant information.
            </p>

            <NavLink
              to="/ai-chat"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore AI Assistant
              <ArrowRight size={18} />
            </NavLink>
          </div>

          {/* Feature Card */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 sm:p-10">
            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    AI-Powered Assistant
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Get quick responses to common clinic-related questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Accessible Information
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Find clinic services and general information in one place.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Visitor Friendly
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Simple navigation and an easy-to-use interface.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              To simplify access to healthcare information by combining
              user-friendly technology with AI-powered assistance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-7 text-center">
              <BrainCircuit className="mx-auto text-blue-600" size={30} />
              <h3 className="mt-4 font-bold text-slate-900">
                Innovation
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Using AI technology to make finding information easier.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-7 text-center">
              <HeartPulse className="mx-auto text-blue-600" size={30} />
              <h3 className="mt-4 font-bold text-slate-900">
                Simplicity
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Keeping healthcare information easy to understand and access.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-7 text-center">
              <Clock className="mx-auto text-blue-600" size={30} />
              <h3 className="mt-4 font-bold text-slate-900">
                Convenience
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Helping visitors find common clinic information quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl gap-4 rounded-2xl border border-amber-100 bg-amber-50 p-6">
          <Stethoscope className="mt-1 shrink-0 text-amber-600" size={22} />
          <div>
            <h3 className="font-semibold text-slate-900">
              Important Healthcare Notice
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              CareFlow AI provides general healthcare and clinic information.
              It does not provide medical diagnoses, prescriptions, or
              emergency medical advice. Always consult a qualified healthcare
              professional for medical concerns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
