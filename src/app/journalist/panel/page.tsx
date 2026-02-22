'use client';

import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Trash2, AlertOctagon } from 'lucide-react';
import Link from 'next/link';

export default function JournalistPanelPage() {
    const [pendings, setPendings] = useState([
        {
            id: 101,
            author: 'GamerFake',
            content: 'Visitem meu site de bot pra gemas!! http://bot-malicioso.com',
            reason: 'Contém link suspeito e a palavra "bot"',
            time: '10m',
        },
        {
            id: 102,
            author: 'NoobMaster',
            content: 'Eu odeio vocês todos do reino 77, bando de @#$%*',
            reason: 'Contém palavras ofensivas',
            time: '45m',
        }
    ]);

    const removePending = (id: number) => {
        setPendings(pendings.filter(p => p.id !== id));
    };

    return (
        <div className="animate-in slide-in-from-right-8 duration-300 min-h-screen pb-10">
            <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-md px-4 py-4 flex items-center gap-3 border-b border-rose-900/50 shadow-sm">
                <Link href="/community" className="p-2 -ml-2 text-zinc-400 hover:text-zinc-100 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h2 className="text-lg font-bold">Painel do Jornalista</h2>
            </div>

            <div className="p-4">
                <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-rose-500 font-bold mb-2">
                        <AlertOctagon className="w-5 h-5" />
                        Pendências de Moderação
                    </div>
                    <p className="text-xs text-rose-200/70 leading-relaxed">
                        Você é responsável por aprovar ou rejeitar as postagens que foram filtradas pelo sistema Anti-Spam.
                    </p>
                </div>

                {pendings.length === 0 ? (
                    <div className="text-center py-10 border border-zinc-800 border-dashed rounded-xl">
                        <p className="text-zinc-500 text-sm">Nenhuma postagem pendente.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {pendings.map(post => (
                            <div key={post.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-sm tracking-tight">{post.author}</h4>
                                    <span className="text-xs text-zinc-500">{post.time}</span>
                                </div>
                                <p className="text-sm text-zinc-300 bg-zinc-950 p-3 rounded-lg border border-zinc-800 mb-3 whitespace-pre-wrap">
                                    {post.content}
                                </p>
                                <div className="text-xs text-rose-400 mb-4 bg-rose-500/5 px-2 py-1 rounded inline-block">
                                    Motivo do bloqueio: {post.reason}
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => removePending(post.id)}
                                        className="flex-1 flex items-center justify-center gap-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 font-bold py-2 rounded-lg transition-colors text-sm"
                                    >
                                        <Trash2 className="w-4 h-4" /> Rejeitar
                                    </button>
                                    <button
                                        onClick={() => removePending(post.id)}
                                        className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 font-bold py-2 rounded-lg transition-colors text-sm"
                                    >
                                        <CheckCircle2 className="w-4 h-4" /> Aprovar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
