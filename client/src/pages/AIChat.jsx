
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BrainCircuit,
  Send,
  Bot,
  User,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Plus,
  ArrowRight,
} from "lucide-react";

const suggestions = [
  "What is a healthy lifestyle?",
  "What are common causes of headaches?",
  "When should I consult a doctor?",
  "How can I prepare for a clinic appointment?",
];

function AIChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to the latest message.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Send a message to the Node.js backend.
  const sendMessage = async (text = message) => {
    const userMessage = text.trim();

    if (!userMessage || loading) return;

    // Keep previous messages for Gemini conversation context.
   const history = messages.slice(-20).map((item) => ({
  role: item.role,
  text: item.text,
}));

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
            history,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to get an AI response."
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat API error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text:
            error.message ||
            "Sorry, I couldn't connect to the AI assistant. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  // Start a new conversation.
  const clearChat = () => {
    if (loading) return;

    setMessages([]);
    setMessage("");
    inputRef.current?.focus();
  };

  // Enter sends; Shift + Enter adds a new line.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Page Heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              <Sparkles size={17} />
              CAREFLOW AI
            </div>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              AI Healthcare Assistant
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Ask questions about general healthcare and wellness.
            </p>
          </div>

          <button
            onClick={clearChat}
            disabled={messages.length === 0 || loading}
            className="flex items-center justify-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto"
          >
            <Plus size={17} />
            New Chat
          </button>
        </div>

        {/* Chat Card */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <BrainCircuit size={23} />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  CareFlow Assistant
                </h2>

                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {loading ? "Generating response..." : "Ready to help"}
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500 sm:flex">
              <ShieldCheck size={15} />
              General information
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex h-[540px] flex-col overflow-y-auto bg-slate-50/70 p-4 sm:p-6">

            {messages.length === 0 ? (
              <div className="m-auto w-full max-w-xl py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Bot size={34} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  Hello! How can I help you?
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                  I'm your CareFlow assistant. Ask me about
                  general healthcare, wellness, medical terms,
                  and when to seek professional medical advice.
                </p>

                <div className="mt-8 text-left">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Suggested Questions
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {suggestions.map((item) => (
                      <button
                        key={item}
                        onClick={() => sendMessage(item)}
                        disabled={loading}
                        className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left text-sm font-medium text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 disabled:opacity-50"
                      >
                        <MessageSquare
                          size={17}
                          className="shrink-0 text-blue-500"
                        />

                        <span className="flex-1">{item}</span>

                        <ArrowRight
                          size={15}
                          className="shrink-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((item) => (
                  <div
                    key={item.id}
                    className={`flex gap-3 ${
                      item.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        item.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {item.role === "user" ? (
                        <User size={18} />
                      ) : (
                        <Bot size={19} />
                      )}
                    </div>

                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 sm:max-w-[75%] ${
                        item.role === "user"
                          ? "rounded-tr-sm bg-blue-600 text-white"
                          : "rounded-tl-sm border border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <p className="whitespace-pre-wrap break-words">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {loading && (
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Bot size={19} />
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:300ms]" />

                      <span className="ml-1 text-xs text-slate-400">
                        Thinking...
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-100 bg-white p-4 sm:p-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-end gap-3 rounded-xl border border-slate-200 bg-slate-50 p-2 transition focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100"
            >
              <textarea
                ref={inputRef}
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask CareFlow AI anything..."
                className="max-h-28 min-h-10 min-w-0 flex-1 resize-y bg-transparent px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                disabled={!message.trim() || loading}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>

            <div className="mt-3 flex flex-col justify-between gap-2 text-center text-[11px] text-slate-400 sm:flex-row sm:text-left">
              <span>Press Enter to send · Shift + Enter for a new line</span>
              <span>AI can make mistakes. Verify important information.</span>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4">
          <ShieldCheck size={19} className="mt-0.5 shrink-0 text-amber-600" />

          <p className="text-xs leading-6 text-slate-600">
            <strong className="text-slate-800">
              Medical disclaimer:
            </strong>{" "}
            CareFlow AI provides general healthcare information only.
            It does not diagnose conditions, prescribe medicines, or
            replace professional medical advice. Contact a qualified
            healthcare professional for medical concerns.
          </p>
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          Need clinic-specific information?{" "}
          <NavLink
            to="/contact"
            className="font-semibold text-blue-600 hover:underline"
          >
            Contact the clinic
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default AIChat;
