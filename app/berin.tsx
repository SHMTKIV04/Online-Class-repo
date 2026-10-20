
export default function Berin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-10 text-center shadow-2xl">
        <h1 className="mb-6 text-3xl font-bold text-white">
          Përshëndetje! 👋
        </h1>

        <p className="mb-8 text-gray-400">
          Kliko butonin më poshtë.
        </p>

        <button
          onClick={() => alert("Përshëndetje, Erdon!")}
          className="rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Butoni
        </button>
      </div>
    </div>
  );
}
