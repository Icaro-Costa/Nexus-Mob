import { Heart, Trophy, Shield, Briefcase, Settings, ChevronRight } from 'lucide-react';
import { IDVerify } from '@/components/profile/IDVerify';
import Link from 'next/link';

export default function ProfilePage() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative min-h-screen">
            {/* Header Profile */}
            <div className="relative pt-6 px-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-700 p-0.5 shadow-xl relative">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Icaro&backgroundColor=1f2937"
                                alt="Profile"
                                className="w-full h-full rounded-2xl object-cover bg-zinc-900"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-amber-500 text-zinc-950 text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-zinc-950 shadow-sm">
                                Lvl 42
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Icaro</h2>
                            <p className="text-zinc-400 text-sm mb-1">Amante de KvK & Farm</p>
                            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                                <Heart className="w-3.5 h-3.5 text-rose-500" />
                                <span>1.2k Corações</span>
                                <span className="w-1 h-1 rounded-full bg-zinc-700 mx-1"></span>
                                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                                <span>Top #4</span>
                            </div>
                        </div>
                    </div>
                    <button className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-zinc-100 transition-colors">
                        <Settings className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Reputação */}
            <div className="mt-8 px-4">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Reputação & Cargos</h3>
                <div className="flex gap-2">
                    <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1.5 rounded-full text-xs font-semibold">
                        <Shield className="w-3.5 h-3.5" />
                        Vendedor Verificado
                    </div>
                    <div className="flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-full text-xs font-semibold">
                        <Briefcase className="w-3.5 h-3.5" />
                        Piloto
                    </div>
                </div>
            </div>

            {/* Identidade Multi-Conta */}
            <div className="mt-8 px-4">
                <div className="flex justify-between items-end mb-3">
                    <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Identidade (IDs do Jogo)</h3>
                    <button className="text-xs font-medium text-amber-500 hover:text-amber-400">+ Novo ID</button>
                </div>

                <div className="space-y-3">
                    <IDVerify id="12345678" isVerified={true} />
                    <IDVerify id="87654321" isVerified={false} />
                </div>

                <p className="mt-2 text-[11px] text-zinc-500 leading-relaxed">
                    Os IDs são fixos e não podem ser apagados ou alterados. Verifique cada conta com o ADM para provar posse via 'print dinâmico'.
                </p>
            </div>

            {/* Trabalhe Conosco CTA */}
            <div className="mt-8 px-4">
                <Link href="/profile/work-with-us" className="block w-full bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700/50 hover:border-zinc-600 rounded-xl p-4 transition-all group">
                    <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-semibold text-zinc-100 mb-0.5">Trabalhe Conosco</h4>
                            <p className="text-xs text-zinc-400">Torne-se Vendedor, Piloto ou Jornalista.</p>
                        </div>
                        <div className="bg-zinc-800 group-hover:bg-amber-500 group-hover:text-zinc-950 p-2 rounded-full transition-colors text-zinc-400">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </div>
                </Link>
            </div>

            {/* Feed Social (Placeholder) */}
            <div className="mt-8 px-4 pb-8 border-t border-zinc-800/50 pt-6">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Suas Postagens</h3>
                <div className="flex flex-col items-center justify-center py-8 text-center bg-zinc-900/30 rounded-2xl border border-zinc-800 border-dashed">
                    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
                        <Heart className="w-5 h-5 text-zinc-500" />
                    </div>
                    <p className="text-zinc-400 text-sm">Você ainda não postou nada na roça.</p>
                </div>
            </div>
        </div>
    );
}
