
import { NavLink, Outlet } from "react-router-dom";
import {
  HeartPulse,
  Home,
  BrainCircuit,
  Info,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", path: "/", icon: Home },
  { name: "AI Assistant", path: "/ai-chat", icon: BrainCircuit },
  { name: "About", path: "/about", icon: Info },
  { name: "Contact", path: "/contact", icon: Phone },
];

function DashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
      isActive
        ? "bg-blue-50 text-blue-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
    }`;

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <HeartPulse size={25} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                CareFlow<span className="text-blue-600">.</span>
              </h1>
              <p className="text-xs text-slate-400">
                Healthcare Made Simple
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={navLinkClass}
              >
                <item.icon size={17} />
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* AI Chat Button */}
          <NavLink
            to="/ai-chat"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 md:flex"
          >
            <BrainCircuit size={18} />
            Chat with AI
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
            <div className="mx-auto max-w-7xl space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={navLinkClass}
                >
                  <item.icon size={18} />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Page Content */}
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              CareFlow<span className="text-blue-600">.</span>
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Making healthcare information easier to access.
            </p>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} CareFlow AI. All rights reserved.
          </p>

        </div>
      </footer>
    </div>
  );
}

export default DashboardLayout;
