import ErionButton from "./erion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-950 px-6 py-16 text-center text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold sm:text-6xl">Erion Selimi</h1>
        <p className="text-gray-400">hello world</p>
      </div>
      <ErionButton />
      <p className="mt-8 text-sm text-gray-400">mirepusfshim</p>
    </main>
  );
}
