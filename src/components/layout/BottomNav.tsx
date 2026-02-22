import Link from 'next/link';
import { Home, ShoppingBag, ShieldAlert, User, Compass } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-zinc-950/80 backdrop-blur-md border-t border-zinc-800 pb-safe pb-4 pt-3 px-6 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link href="/community" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-amber-500 transition-colors">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Início</span>
        </Link>
        <Link href="/marketplace" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-amber-500 transition-colors">
          <ShoppingBag className="w-6 h-6" />
          <span className="text-[10px] font-medium">Mercado</span>
        </Link>
        <Link href="/roulette" className="flex flex-col items-center gap-1 -translate-y-4">
          <div className="bg-amber-500 p-3 rounded-full shadow-lg shadow-amber-500/30 text-zinc-950">
            <Compass className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-medium mt-1 text-zinc-400">Roleta</span>
        </Link>
        <Link href="/admin/dashboard" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-amber-500 transition-colors">
          <ShieldAlert className="w-6 h-6" />
          <span className="text-[10px] font-medium">ADM</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-amber-500 transition-colors">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Perfil</span>
        </Link>
      </div>
    </nav>
  );
}
