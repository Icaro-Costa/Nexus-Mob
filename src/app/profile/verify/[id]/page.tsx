'use client';

import { useState } from 'react';
import { ArrowLeft, Send, Upload, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function VerificationChatPage({ params }: { params: { id: string } }) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'ADM',
            text: 'Olá! Para verificar a posse do ID ' + params.id + ', precisamos de uma prova.',
            time: '10:00'
        },
        {
            id: 2,
            sender: 'ADM',
            text: 'Mude o nome da sua cidade para "NEXUS-77" e me mande o print do seu perfil agora.',
            time: '10:00'
        }
    ]);
    const [input, setInput] = useState('');

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, {
            id: Date.now(),
            sender: 'Você',
            text: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setInput('');
    };

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)]">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-md px-4 py-4 flex flex-col gap-1 border-b border-zinc-900 shadow-sm">
                <div className="flex items-center gap-3">
                    <Link href="/profile" className="p-2 -ml-2 text-zinc-400 hover:text-zinc-100 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-amber-500" />
                        <h2 className="text-lg font-bold">Verificação de Conta</h2>
                    </div>
                </div>
                <p className="text-xs text-zinc-500 ml-10">ID em análise: <span className="text-zinc-300 font-mono">{params.id}</span></p>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'Você' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.sender === 'Você'
                                ? 'bg-amber-500 text-zinc-950 rounded-br-none'
                                : 'bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-bl-none'
                            }`}>
                            {msg.sender !== 'Você' && <p className="text-xs font-bold text-amber-500 mb-1">{msg.sender}</p>}
                            <p>{msg.text}</p>
                            <p className={`text-[10px] mt-1 text-right ${msg.sender === 'Você' ? 'text-zinc-800' : 'text-zinc-500'}`}>
                                {msg.time}
                            </p>
                        </div>
                    </div>
                ))}
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
                        placeholder="Enviar mensagem..."
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
