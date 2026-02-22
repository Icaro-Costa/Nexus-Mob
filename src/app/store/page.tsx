import { ShoppingBag, Star, Zap, ShieldCheck } from 'lucide-react';

export default function InvictusStorePage() {
    const products = [
        { name: "Pacote VIP Mensal", type: "Assinatura", price: "$19.99", icon: Star, color: "amber" },
        { name: "Automação Farming Lv5", type: "Script Oficial", price: "$49.99", icon: Zap, color: "emerald" },
    ];

    return (
        <div className="animate-in fade-in duration-500 pb-10">
            <div className="sticky top-0 z-10 bg-zinc-950/60 backdrop-blur-xl px-4 py-3 flex items-center justify-between border-b border-zinc-500/10">
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Invictus Store</h2>
                    <p className="text-xs text-zinc-400">Produtos Oficiais & Verificados</p>
                </div>
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                    <ShoppingBag className="w-5 h-5 text-emerald-500" />
                </div>
            </div>

            <div className="p-4 space-y-6">

                {/* Store Trust Badge */}
                <div className="bg-emerald-500/5 text-emerald-500 text-xs px-4 py-3 rounded-xl border border-emerald-500/10 flex items-start gap-3 backdrop-blur-md">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <p className="leading-relaxed">Todas as compras realizadas na Invictus Store possuem garantia incondicional e liberação imediata via ADM.</p>
                </div>

                {/* Vitrine Premium */}
                <div className="space-y-4">
                    {products.map((prod, i) => (
                        <div key={i} className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-5 hover:border-zinc-700/50 transition-all active:scale-[0.98] group cursor-pointer relative overflow-hidden">
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-${prod.color}-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity opacity-50 group-hover:opacity-100`} />

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 bg-${prod.color}-500/10 text-${prod.color}-500 rounded-xl flex items-center justify-center border border-${prod.color}-500/20 shadow-inner`}>
                                        <prod.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base tracking-tight">{prod.name}</h3>
                                        <p className="text-xs text-zinc-500">{prod.type}</p>
                                    </div>
                                </div>
                                <div className="bg-zinc-950 text-zinc-100 font-bold px-3 py-1.5 rounded-lg border border-zinc-800 shadow-sm text-sm">
                                    {prod.price}
                                </div>
                            </div>

                            <button className={`w-full bg-${prod.color}-500/10 text-${prod.color}-500 font-bold py-3 rounded-xl border border-${prod.color}-500/20 transition-colors group-hover:bg-${prod.color}-500 group-hover:text-zinc-950 text-sm`}>
                                Comprar Agora
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
