import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] p-4 text-center">
      <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center mb-6 shadow-2xl shadow-amber-500/20">
        <span className="font-bold text-zinc-950 text-5xl tracking-tighter">N</span>
      </div>
      <h1 className="text-3xl font-bold mb-3 tracking-tight">Bem-vindo ao<br /><span className="text-amber-500">Nexus-Mob</span></h1>
      <p className="text-zinc-400 mb-8 max-w-[280px]">
        O ecossistema definitivo para jogadores de Rise of Kingdoms.
      </p>

      <Link
        href="/community"
        className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-4 rounded-xl transition-colors text-lg"
      >
        Entrar na Comunidade
      </Link>
    </div>
  );
}
