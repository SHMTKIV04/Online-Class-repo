export default function Andi() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 font-sans antialiased">
      {/* Background Subtle Ambient Light / Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Glassmorphic Container Card */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl shadow-2xl shadow-black/50">
        <h1 className="text-2xl font-bold tracking-tight text-white/90">
          Ready to get started?
        </h1>
        <p className="max-w-xs text-center text-sm text-slate-400">
          Experience fluid micro-interactions and modern design components.
        </p>

        {/* Glow Button */}
        <div className="group relative">
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur transition duration-500 group-hover:opacity-100 group-hover:blur-md" />
          <button
            type="button"
            className="relative flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-3.5 text-base font-medium text-white transition-all duration-300 group-hover:bg-slate-900/80 group-hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Click Me</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}