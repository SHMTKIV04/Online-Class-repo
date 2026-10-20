import ErionButton from "./erion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-950 px-6 py-16 text-center text-white">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-300">
          Online Class
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl">Erion Selimi</h1>
        <p className="text-gray-400">Projekti im i parë me Next.js dhe Git.</p>
      </div>
      <ErionButton />
      <section aria-labelledby="classmates" className="mt-8 space-y-3">
        <h2 id="classmates" className="text-sm font-semibold text-gray-300">
          Përshëndetje nga klasa
        </h2>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
          <li>Andi Neziri</li>
          <li>Arbr Demiri</li>
          <li>Berin Ramadani</li>
        </ul>
      </section>
    </main>
  );
}
