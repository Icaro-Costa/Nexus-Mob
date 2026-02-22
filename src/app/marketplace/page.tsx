'use client';

import { useState } from 'react';
import { ShoppingCart, Coins, Package, Timer, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function MarketplacePage() {
    const [orders, setOrders] = useState([
        {
            id: "REQ-99X2",
            resource: "Ouro",
            amount: "2B",
            kingdom: "77",
            status: "waiting", // waiting | in_progress
            time: "2m",
            buyerIsVip: true
        },
        {
            id: "REQ-10B4",
            resource: "Comida",
            amount: "5B",
            kingdom: "77",
            status: "in_progress",
            time: "15m",
            buyerIsVip: false
        }
    ]);

    return (
        <div className="animate-in fade-in duration-500 pb-10">
            <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-md px-4 py-3 border-b border-zinc-900 flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold tracking-tight">Marketplace RSS</h2>
                    <p className="text-xs text-zinc-400">Fila Pública de Pedidos</p>
                </div>
                <Link
                    href="/services"
                    className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 px-3 py-1.5 rounded-full flex items-center gap-1 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
                >
                    Ver Serviços
                    <ArrowRight className="w-3 h-3" />
                </Link>
            </div>

            <div className="p-4">
                {/* Nova Ordem Hero */}
                <div className="bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl p-5 mb-6 text-zinc-950 shadow-xl shadow-amber-500/10 relative overflow-hidden">
                    <div className="absolute right-[-20px] top-[-20px] opacity-20">
                        <Coins className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="font-bold text-xl mb-1 mt-2">Faça seu Pedido</h3>
                        <p className="text-sm font-medium opacity-90 mb-4 max-w-[200px]">
                            Comida, Madeira, Pedra ou Ouro. Seguro via ADM.
                        </p>
                        <button className="bg-zinc-950 text-amber-500 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-zinc-900 transition-colors">
                            Solicitar RSS
                        </button>
                    </div>
                </div>

                {/* Info Fila */}
                <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <p className="text-xs text-zinc-400 font-medium">Os pedidos são anônimos na fila pública. Apenas o <span className="text-amber-500">Vendedor Aprovado</span> vê com quem será a transação.</p>
                </div>

                {/* Fila Pública */}
                <div className="space-y-3">
                    {orders.map(order => (
                        <div key={order.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${order.resource === 'Ouro' ? 'bg-amber-500/20 text-amber-500' :
                                        order.resource === 'Comida' ? 'bg-emerald-500/20 text-emerald-500' :
                                            'bg-zinc-800 text-zinc-400'
                                    }`}>
                                    <Package className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold flex items-center gap-2">
                                        {order.amount} {order.resource}
                                        {order.buyerIsVip && <span className="text-[10px] bg-amber-500 text-zinc-950 px-1.5 py-0.5 rounded font-bold uppercase">VIP</span>}
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium font-mono mt-0.5">
                                        <span>{order.id}</span>
                                        <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                                        <span className="flex items-center gap-1"><Timer className="w-3 h-3" /> {order.time}</span>
                                    </div>
                                </div>
                            </div>

                            {order.status === 'waiting' ? (
                                // Only "Vendedores" could officially click this, but we leave it routing to the chat for the mock.
                                <Link href={`/marketplace/order/${order.id}`}>
                                    <button className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-4 py-2 rounded-lg text-sm transition-colors">
                                        Resgatar
                                    </button>
                                </Link>
                            ) : (
                                <div className="bg-zinc-950 border border-zinc-800 text-zinc-500 px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1">
                                    Em Andamento
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
