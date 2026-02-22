import { Swords, Users, Target, MessageSquare, ChevronRight } from 'lucide-react';

export default function AlliancePage() {
    return (
        <div className="animate-in fade-in duration-500 pb-10">
            <div className="sticky top-0 z-10 bg-zinc-950/60 backdrop-blur-xl px-4 py-3 flex items-center justify-between border-b border-zinc-500/10">
                <div>
                    <h2 className="text-xl font-bold tracking-tight">QG da Fênix</h2>
                    <p className="text-xs text-zinc-400">Gestão de Aliança & Estratégia</p>
                </div>
                <div className="w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center border border-rose-500/30">
                    <Swords className="w-5 h-5 text-rose-500" />
                </div>
            </div>

            <div className="p-4 space-y-6">
                {/* Banner */}
                <div className="bg-gradient-to-br from-rose-900/50 to-zinc-900 border border-rose-500/20 rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute right-[-10px] bottom-[-10px] opacity-10">
                        <Swords className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1 block">Aviso do Rei</span>
                        <h3 className="font-bold text-lg mb-2">Preparação KvK: Fase 3</h3>
                        <p className="text-sm text-zinc-300 leading-relaxed max-w-[250px] mb-4">
                            Todos os membros devem acumular pontos de ação. Marcharemos para a Zona 3 às 20h UTC.
                        </p>
                        <button className="bg-rose-500 hover:bg-rose-400 text-zinc-950 font-bold px-4 py-2 rounded-lg text-xs transition-colors active:scale-95 shadow-lg shadow-rose-500/20">
                            Confirmar Leitura
                        </button>
                    </div>
                </div>

                {/* Modules */}
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { title: "Membros", icon: Users, color: "blue", desc: "145/150 Ativos" },
                        { title: "Guerra", icon: Target, color: "rose", desc: "Alvos Setados" },
                    ].map((item, i) => (
                        <div key={i} className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 rounded-xl p-4 hover:border-zinc-700/50 transition-colors active:scale-95 cursor-pointer">
                            <item.icon className={`w-6 h-6 text-${item.color}-500 mb-3`} />
                            <h4 className="font-bold text-sm">{item.title}</h4>
                            <p className="text-[10px] text-zinc-500 mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Chats Internos */}
                <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-4">
                    <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Comunicações</h3>
                    <div className="space-y-3">
                        {[
                            { name: "Oficiais R4/R5", msg: "Precisamos fechar a diplomacia com a 77K.", time: "Agora" },
                            { name: "Chat Geral", msg: "Alguém online pra rali de forte?", time: "5m" }
                        ].map((chat, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-zinc-950/50 rounded-xl border border-zinc-800/50 active:scale-[0.98] cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
                                        <MessageSquare className="w-4 h-4 text-zinc-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm tracking-tight">{chat.name}</h4>
                                        <p className="text-xs text-zinc-500 truncate max-w-[150px]">{chat.msg}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-[10px] text-zinc-600">{chat.time}</span>
                                    <ChevronRight className="w-4 h-4 text-zinc-600" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
