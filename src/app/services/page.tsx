import { ArrowLeft, Rocket, Cpu, ShoppingBag, ShieldCheck, Swords } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    const tabs = [
        { id: 'store', title: 'Invictus Store (Novo)', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-500/10', link: '/store' },
        { id: 'alliance', title: 'QG da Fênix (Aliança)', icon: Swords, color: 'text-rose-500', bg: 'bg-rose-500/10', link: '/alliance' },
        { id: 'farms', title: 'Farms Prontas', icon: ShoppingBag, color: 'text-amber-500', bg: 'bg-amber-500/10', link: '#' },
        { id: 'piloto', title: 'Pilotagem de Contas', icon: Rocket, color: 'text-blue-500', bg: 'bg-blue-500/10', link: '#' },
        { id: 'bot', title: 'Bots e Scripts Automáticos', icon: Cpu, color: 'text-indigo-500', bg: 'bg-indigo-500/10', link: '#' },
    ];

    return (
        <div className="animate-in slide-in-from-right-8 duration-300 min-h-screen pb-10">
            <div className="sticky top-0 z-10 bg-zinc-950/60 backdrop-blur-xl px-4 py-4 flex items-center gap-3 border-b border-zinc-900 shadow-sm">
                <Link href="/marketplace" className="p-2 -ml-2 text-zinc-400 hover:text-zinc-100 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h2 className="text-xl font-bold">Serviços e Módulos</h2>
            </div>

            <div className="p-4 space-y-4">
                {tabs.map((tab) => (
                    <Link href={tab.link} key={tab.id}>
                        <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700/50 transition-colors group cursor-pointer active:scale-[0.98] mb-4">
                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tab.bg} ${tab.color}`}>
                                        <tab.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">{tab.title}</h3>
                                        <p className="text-xs text-zinc-400">Ver módulo especializado</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-zinc-950/50 py-3 px-5 border-t border-zinc-800 flex justify-between items-center group-hover:bg-zinc-800/50 transition-colors">
                                <span className="text-xs font-semibold text-zinc-500">Módulo Verificado</span>
                                <span className={`text-xs font-bold ${tab.color}`}>Acessar &rarr;</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
