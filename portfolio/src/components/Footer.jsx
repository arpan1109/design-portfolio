import React, { useState } from "react";

// --- Internal FAQ Item Component ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left hover:text-zinc-300 transition-colors cursor-pointer group"
      >
        <h4 className="text-lg md:text-xl font-bold tracking-tight text-white">
          {question}
        </h4>
        <span
          className="text-2xl font-light text-white/60 ml-4 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed pb-6 pr-8 font-onest">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Footer() {
  const faqs = [
    {
      question: "What is your typical timeline for a project?",
      answer:
        "Most branding and visual identity projects take between 2 to 4 weeks depending on the complexity.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Absolutely. I typically include 2 to 3 rounds of structured revisions to ensure the final result aligns with your vision.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "I request a 50% deposit upfront, and the remaining 50% is due upon completion of the project.",
    },
    {
      question: "Do you design websites as well?",
      answer:
        "Yes! I build custom, high-performance web experiences using React and Tailwind CSS.",
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 font-onest relative z-10">
        {/* 1. FAQ SECTION */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl md:text-7xl font-onest tracking-tight mb-4 text-white">
                FAQs
              </h2>
              <p className="text-zinc-400 md:text-xl">
                Common questions about my process and timelines.
              </p>
            </div>
            <div className="md:col-span-8 flex flex-col">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 2. MASSIVE CALL TO ACTION */}
        <div className="mb-14">
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-prata leading-none tracking-tight mb-6">
            Let's create <br />
            <span className="text-white/60 italic">together.</span>
          </h2>
          <p className="text-xl pt-3  text-white md:text-2xl ">
            Currently available for freelance projects and agency
            collaborations.
          </p>
        </div>

        {/* 3. CONTACT LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-t border-zinc-500 pt-12">
          <div className="flex items-center border-r-2 border-white/50  justify-center">
            <p className="text-4xl md:text-5xl italic font-prata leading-none tracking-tight text-white">
              Contact Me
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="md:text-xl text-md tracking-widest uppercase text-white/60 mb-2">
              01 — Email
            </span>
            <a
              href="mailto:divyanshpal17@gmail.com"
              className="text-xl md:text-2xl hover:text-zinc-400 transition-colors"
            >
              divyanshpal17@gmail.com
            </a>
          </div>

          {/* Upwork */}
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="md:text-xl text-md tracking-widest uppercase text-white/60 mb-2">
              02 — Platform
            </span>
            <a
              href="https://www.upwork.com/freelancers/~01876a295a90e865e3"
              target="_blank"
              rel="noreferrer"
              className="text-xl md:text-2xl hover:text-zinc-400 transition-colors"
            >
              Upwork
            </a>
          </div>
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center md:text-xl text-md text-zinc-200 tracking-wide gap-4 border-t border-zinc-900 pt-12">
          <p>© {new Date().getFullYear()} Dev Creates4U</p>
          <p>Delhi, INDIA.</p>
          <div className="flex gap-6">
            <a
              href="mailto:yourname@gmail.com"
              className="flex items-center gap-2 hover:text-zinc-500 transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z" />
              </svg>
            </a>

            <a
              href="YOUR_INSTAGRAM_URL"
              className="flex items-center gap-2 hover:text-zinc-500 transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              className="flex items-center gap-2 hover:text-zinc-500 transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-zinc-800/20 blur-[120px] rounded-full -z-0 pointer-events-none"></div>
    </footer>
  );
}
