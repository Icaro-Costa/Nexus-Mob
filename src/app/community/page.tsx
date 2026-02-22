'use client';

import { useState } from 'react';
import { Heart, MessageCircle, AlertTriangle, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

// Mocked Blacklist
const BLACKLIST = ['hack', 'bot', 'venda externa', 'discord', 'telegram', 'ofensivo'];

export default function CommunityPage() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: 'ReiArthur',
            role: 'Piloto',
            content: 'Alguém precisando de piloto pro próximo KvK? Tenho 3 anos de xp.',
            likes: 45,
            comments: 12,
            time: '2h',
            status: 'approved'
        },
        {
            id: 2,
            author: 'Lancelot',
            role: 'Jornalista',
            content: '🚨 ATENÇÃO: O reino 77 declarou guerra! Leia o guia completo no meu perfil.',
            likes: 120,
            comments: 5,
            time: '4h',
            status: 'approved',
            isOfficial: true
        }
    ]);

    const [newPost, setNewPost] = useState('');
    const [warning, setWarning] = useState<string | null>(null);

    const handlePost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPost.trim()) return;

        const lowerPost = newPost.toLowerCase();
        const hasBadWords = BLACKLIST.some(word => lowerPost.includes(word));

        if (hasBadWords) {
            setWarning('Sua postagem contém termos restritos e foi enviada para Revisão do Jornalista.');
            const post = {
                id: Date.now(),
                author: 'Icaro',
                role: 'Vendedor',
                content: newPost,
                likes: 0,
                comments: 0,
                time: 'Agora',
                status: 'pending' // pending review
            };
            // Em produção, isso iria para um banco de dados de pendências
            setTimeout(() => setWarning(null), 5000);
        } else {
            setPosts([{
                id: Date.now(),
                author: 'Icaro',
                role: 'Vendedor',
                content: newPost,
                likes: 0,
                comments: 0,
                time: 'Agora',
                status: 'approved'
            }, ...posts]);
        }
        setNewPost('');
    };

    return (
        <div className="animate-in fade-in duration-500 pb-8">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-md px-4 py-3 border-b border-zinc-900">
                <h2 className="text-xl font-bold tracking-tight">Praça da Comunidade</h2>
                <p className="text-xs text-zinc-400">Notícias, Guias e Interações</p>
            </div>

            {/* Editor do Jogador */}
            <div className="p-4 border-b border-zinc-900/50 bg-zinc-900/20">
                <form onSubmit={handlePost}>
                    <textarea
                        rows={3}
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="O que está acontecendo no seu reino?"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    />
                    {warning && (
                        <div className="flex items-start gap-2 mt-2 p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                            <AlertTriangle className="w-4 h-4 shrink-0" />
                            <p>{warning}</p>
                        </div>
                    )}
                    <div className="flex justify-between items-center mt-3">
                        <Link href="/journalist/panel" className="text-xs text-zinc-500 flex items-center gap-1 hover:text-amber-500 transition-colors">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            Jornalista? Veja os Pendentes
                        </Link>
                        <button
                            type="submit"
                            disabled={!newPost.trim()}
                            className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:hover:bg-amber-500 text-zinc-950 text-sm font-bold px-5 py-2 rounded-full transition-colors"
                        >
                            Publicar
                        </button>
                    </div>
                </form>
            </div>

            {/* Feed Area */}
            <div className="divide-y divide-zinc-900/50">
                {posts.filter(p => p.status === 'approved').map(post => (
                    <div key={post.id} className="p-4 hover:bg-zinc-900/20 transition-colors">
                        <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 p-0.5 shrink-0">
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}&backgroundColor=1f2937`}
                                    alt="Avatar"
                                    className="w-full h-full rounded-full object-cover bg-zinc-900"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-sm tracking-tight inline-flex items-center gap-1">
                                            {post.author}
                                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                                                {post.role}
                                            </span>
                                        </h4>
                                        {post.isOfficial && (
                                            <span className="block text-[10px] text-amber-500 font-bold tracking-wider uppercase mt-0.5">Conteúdo Oficial</span>
                                        )}
                                    </div>
                                    <span className="text-xs text-zinc-600">{post.time}</span>
                                </div>

                                <p className="text-sm mt-2 text-zinc-300 leading-relaxed whitespace-pre-wrap">
                                    {post.content}
                                </p>

                                <div className="flex items-center gap-6 mt-4">
                                    <button className="flex items-center gap-1.5 text-zinc-500 hover:text-rose-500 transition-colors group">
                                        <Heart className="w-4 h-4 group-hover:fill-rose-500/20" />
                                        <span className="text-xs font-semibold">{post.likes}</span>
                                    </button>
                                    <button className="flex items-center gap-1.5 text-zinc-500 hover:text-blue-500 transition-colors group">
                                        <MessageCircle className="w-4 h-4 group-hover:fill-blue-500/20" />
                                        <span className="text-xs font-semibold">{post.comments}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
