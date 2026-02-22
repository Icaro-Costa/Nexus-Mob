import { ArrowLeft, Rocket, Cpu, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    const tabs = [
        { id: 'farms', title: 'Farms Prontas', icon: ShoppingBag, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { id: 'piloto', title: 'Pilotagem', icon: Rocket, color: 'text-amber-500', bg: 'bg-amber-500/10' },
        { id: 'bot', title: 'Bots e Scripts', icon: Cpu, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    ];

    return (
        <div className="animate-in slide-in-from-right-8 duration-300 min-h-screen pb-10">
            <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-md px-4 py-4 flex items-center gap-3 border-b border-zinc-900 shadow-sm">
                <Link href="/marketplace" className="p-2 -ml-2 text-zinc-400 hover:text-zinc-100 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h2 className="text-xl font-bold">Serviços Extras</h2>
            </div>

            <div className="p-4 space-y-6">

                {tabs.map((tab) => (
                    <div key={tab.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors group cursor-pointer">
                        <div className="p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tab.bg} ${tab.color}`}>
                                    <tab.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{tab.title}</h3>
                                    <p className="text-xs text-zinc-400">Ver ofertas disponíveis</p>
                                </div>
                            </div>

                            {tab.id === 'farms' && (
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Vitrines de contas prontas criadas por usuários verificados. Fotos e detalhes disponíveis. Transação direta com bloqueio de posse.
                                </p>
                            )}
                            {tab.id === 'piloto' && (
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Contrate um piloto para cuidar da sua conta. Receba <strong>Relatórios Diários</strong> de atividade via painel interno estruturado.
                                </p>
                            )}
                            {tab.id === 'bot' && (
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Área para download de ferramentas de automação (Farm de gemas, etc.). Compra garante suporte do desenvolvedor na plataforma.
                                </p>
                            )}
                        </div>
                        <div className="bg-zinc-950/50 py-3 px-5 border-t border-zinc-800 flex justify-between items-center group-hover:bg-zinc-800/50 transition-colors">
                            <span className="text-xs font-semibold text-zinc-500">22 serviços listados</span>
                            <span className={`text-xs font-bold ${tab.color}`}>Acessar Vitrine &rarr;</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
