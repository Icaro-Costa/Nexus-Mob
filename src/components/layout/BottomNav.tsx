import Link from 'next/link';
import { Home, ShoppingBag, ShieldAlert, User, Compass } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-zinc-950/60 backdrop-blur-xl border-t border-zinc-500/10 pb-safe pb-4 pt-3 px-6 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link href="/community" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-amber-500 active:scale-90 transition-all">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Início</span>
        </Link>
        <Link href="/marketplace" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-amber-500 active:scale-90 transition-all">
          <ShoppingBag className="w-6 h-6" />
          <span className="text-[10px] font-medium">Mercado</span>
        </Link>
        <Link href="/roulette" className="flex flex-col items-center gap-1 -translate-y-4 active:scale-95 transition-transform group">
          <div className="bg-gradient-to-tr from-amber-600 to-amber-400 p-3 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] text-zinc-950 transition-shadow">
            <Compass className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-medium mt-1 text-zinc-400 group-hover:text-amber-500 transition-colors">Roleta</span>
        </Link>
        <Link href="/admin/dashboard" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-amber-500 active:scale-90 transition-all">
          <ShieldAlert className="w-6 h-6" />
          <span className="text-[10px] font-medium">ADM</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-amber-500 active:scale-90 transition-all">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Perfil</span>
        </Link>
      </div>
    </nav>
  );
}
