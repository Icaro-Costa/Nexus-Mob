'use client';

import { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

export default function WorkWithUsPage() {
    const [role, setRole] = useState('vendedor');

    return (
        <div className="animate-in slide-in-from-right-8 duration-300 min-h-screen">
            <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur-md px-4 py-4 flex items-center gap-3 border-b border-zinc-900">
                <Link href="/profile" className="p-2 -ml-2 text-zinc-400 hover:text-zinc-100 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h2 className="text-xl font-bold">Trabalhe Conosco</h2>
            </div>

            <div className="p-4 mt-2">
                <p className="text-zinc-400 text-sm mb-6">
                    Para garantir a segurança dos usuários, a liberação de cargos passa por uma triagem direta com o ADM via WhatsApp ou Chat Interno.
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Seleção do Cargo */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-zinc-300 uppercase tracking-wider block">Escolha o Cargo</label>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { id: 'vendedor', title: 'Vendedor', desc: 'Venda RSS' },
                                { id: 'piloto', title: 'Piloto', desc: 'Preste Serviços' },
                                { id: 'jornalista', title: 'Jornalista', desc: 'Moderação' },
                                { id: 'bot', title: 'Vendedor de Bots', desc: 'Área Técnica' }
                            ].map((r) => (
                                <button
                                    key={r.id}
                                    type="button"
                                    onClick={() => setRole(r.id)}
                                    className={`p-3 rounded-xl border text-left transition-all ${role === r.id
                                            ? 'bg-amber-500/10 border-amber-500/50 text-amber-500'
                                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800/50'
                                        }`}
                                >
                                    <p className="font-semibold">{r.title}</p>
                                    <p className="text-[10px] mt-0.5 opacity-80">{r.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dinâmico por Tipo */}
                    <div className="space-y-3 animate-in fade-in">
                        {role === 'vendedor' && (
                            <>
                                <div>
                                    <label className="text-xs font-semibold text-zinc-400 mb-1.5 block">Qual seu estoque atual de RSS?</label>
                                    <input type="text" placeholder="Ex: 5B Comida, 2B Ouro" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-zinc-400 mb-1.5 block">Link do seu WhatsApp para contato / triagem</label>
                                    <input type="text" placeholder="https://wa.me/..." className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                                </div>
                            </>
                        )}

                        {role === 'piloto' && (
                            <div>
                                <label className="text-xs font-semibold text-zinc-400 mb-1.5 block">Qual sua experiência como piloto?</label>
                                <textarea rows={4} placeholder="Conte sobre suas campanhas KVK, horários disponíveis..." className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"></textarea>
                            </div>
                        )}

                        {(role === 'jornalista' || role === 'bot') && (
                            <div>
                                <label className="text-xs font-semibold text-zinc-400 mb-1.5 block">Por que deseja esta função?</label>
                                <textarea rows={4} placeholder="Diga o motivo para o ADM analisar seu pedido." className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"></textarea>
                            </div>
                        )}
                    </div>

                    <button className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-8">
                        Enviar Solicitação ao ADM
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    );
}
