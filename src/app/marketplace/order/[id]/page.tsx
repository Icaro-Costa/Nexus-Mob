'use client';

import { useState } from 'react';
import { ArrowLeft, Send, Upload, ShieldCheck, CheckCheck } from 'lucide-react';
import Link from 'next/link';

export default function OrderTransactionPage({ params }: { params: { id: string } }) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'Sistema',
            text: 'O Vendedor Icaro resgatou o pedido. O envio de RSS já pode ser negociado.',
            time: '12:00'
        }
    ]);
    const [input, setInput] = useState('');
    const [confirmedDest, setConfirmedDest] = useState(false);

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, {
            id: Date.now(),
            sender: 'Você (Cliente)',
            text: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setInput('');
    };

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)]">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-md px-4 py-3 flex flex-col gap-2 border-b border-zinc-900 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/marketplace" className="p-2 -ml-2 text-zinc-400 hover:text-zinc-100 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h2 className="text-lg font-bold leading-tight">Transação Segura</h2>
                            <p className="text-xs text-zinc-400">Pedido {params.id}</p>
                        </div>
                    </div>
                    <div className="bg-amber-500/10 text-amber-500 px-2.5 py-1 rounded-lg border border-amber-500/20 text-xs font-bold">
                        2B Ouro
                    </div>
                </div>

                {/* Progress Bar Mock */}
                <div className="flex items-center gap-2 px-1 mt-1">
                    <div className="h-1 bg-amber-500 flex-1 rounded-full"></div>
                    <div className={`h-1 flex-1 rounded-full ${confirmedDest ? 'bg-amber-500' : 'bg-zinc-800'}`}></div>
                    <div className="h-1 bg-zinc-800 flex-1 rounded-full"></div>
                </div>
                <div className="flex justify-between px-1 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                    <span>Resgatado</span>
                    <span className={confirmedDest ? 'text-amber-500' : ''}>Envio</span>
                    <span>Finalizado</span>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'Você (Cliente)' ? 'justify-end' : msg.sender === 'Sistema' ? 'justify-center' : 'justify-start'}`}>
                        {msg.sender === 'Sistema' ? (
                            <div className="px-4 py-2 bg-zinc-900/50 border border-zinc-800/50 rounded-full text-xs text-zinc-400 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                {msg.text}
                            </div>
                        ) : (
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.sender === 'Você (Cliente)'
                                    ? 'bg-amber-500 text-zinc-950 rounded-br-none'
                                    : 'bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-bl-none'
                                }`}>
                                {msg.sender !== 'Você (Cliente)' && <p className="text-xs font-bold text-amber-500 mb-1">{msg.sender}</p>}
                                <p>{msg.text}</p>
                                <p className={`text-[10px] mt-1 text-right ${msg.sender === 'Você (Cliente)' ? 'text-zinc-800' : 'text-zinc-500'}`}>
                                    {msg.time}
                                </p>
                            </div>
                        )}
                    </div>
                ))}

                {!confirmedDest && (
                    <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 mt-4 animate-in fade-in">
                        <h4 className="font-bold text-sm text-zinc-100 mb-2">Comprovante de Envio</h4>
                        <p className="text-xs text-zinc-400 mb-3 leading-relaxed">O vendedor solicitou a confirmação de que os recursos chegaram na sua conta. Por favor, verifique e confirme para encerrar o pedido.</p>
                        <button
                            onClick={() => setConfirmedDest(true)}
                            className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-2.5 rounded-lg text-sm transition-colors flex justify-center items-center gap-2"
                        >
                            <CheckCheck className="w-4 h-4" />
                            Confirmar Recebimento de RSS
                        </button>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-zinc-950 border-t border-zinc-900">
                <form onSubmit={sendMessage} className="flex gap-2">
                    <button type="button" className="p-3 bg-zinc-900 text-zinc-400 hover:text-amber-500 rounded-xl transition-colors border border-zinc-800">
                        <Upload className="w-5 h-5" />
                    </button>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="No chat da transação..."
                        className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                    <button type="submit" className="p-3 bg-amber-500 text-zinc-950 hover:bg-amber-400 rounded-xl transition-colors">
                        <Send className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}
