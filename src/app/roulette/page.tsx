'use client';

import { useState, useTransition } from 'react';
import { Gift, Sparkles, Coins, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { spinRoulette } from '@/actions';

export default function RoulettePage() {
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [isPending, startTransition] = useTransition();

    const bonusItem = "Ouro (Mais comprado desta semana)";

    const handleSpin = () => {
        if (spinning || result !== null || isPending) return;
        setSpinning(true);

        // Dispara a Action no Servidor
        startTransition(async () => {
            const data = await spinRoulette();

            if (data.success) {
                setResult(data.result);
                setSpinning(false);
                setTimeout(() => setShowModal(true), 800);
            }
        });
    };

    return (
        <div className="animate-in fade-in duration-500 min-h-[calc(100vh-8rem)] flex flex-col pt-10 px-4 pb-12">

            {/* Header text */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Roleta de Bônus</h2>
                <p className="text-zinc-400 text-sm max-w-[280px] mx-auto leading-relaxed">
                    Gatilho disponível 1x por semana. Os lucros são focados no que você mais compra!
                </p>
            </div>

            {/* The Wheel UI */}
            <div className="flex-1 flex flex-col items-center justify-center relative my-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-tr from-amber-600/20 to-amber-400/20 rounded-full blur-3xl -z-10" />

                <motion.div
                    animate={spinning ? { rotate: 360 * 5 + 180 } : { rotate: result ? 360 : 0 }}
                    transition={{ duration: spinning ? 3 : 1, ease: "circOut" }}
                    className="relative w-64 h-64 rounded-full border-4 border-zinc-800 bg-zinc-900 shadow-2xl flex items-center justify-center overflow-hidden"
                >
                    {/* Wheel slices mock */}
                    <div className="absolute inset-0 border-[16px] border-zinc-950/40 rounded-full z-10 pointer-events-none" />
                    <div className="absolute inset-0 rotate-45 border-r border-zinc-800 w-full h-full" />
                    <div className="absolute inset-0 -rotate-45 border-t border-zinc-800 w-full h-full" />

                    <div className="z-20 w-20 h-20 rounded-full bg-zinc-950 border-4 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center justify-center">
                        <Gift className="w-8 h-8 text-amber-500" />
                    </div>
                </motion.div>

                {/* Pointer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-amber-500 drop-shadow-lg z-30" />
            </div>

            <div className="text-center mt-auto">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-6 inline-flex flex-col items-center justify-center min-w-[200px]">
                    <span className="text-xs text-zinc-500 font-semibold mb-1">Seu recurso principal:</span>
                    <span className="flex items-center gap-2 font-bold text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                        <Coins className="w-4 h-4" /> {bonusItem}
                    </span>
                </div>

                <button
                    onClick={handleSpin}
                    disabled={spinning || result !== null}
                    className="w-full relative overflow-hidden group bg-gradient-to-r from-amber-600 to-amber-500 text-zinc-950 font-bold py-4 rounded-2xl text-lg shadow-[0_0_40px_rgba(245,158,11,0.3)] disabled:opacity-50 disabled:grayscale transition-all hover:scale-[1.02] active:scale-95"
                >
                    {spinning ? 'Rodando...' : result ? 'Bônus Resgatado' : 'Girar Roleta Grátis'}
                </button>
            </div>

            {/* Modal Result */}
            <AnimatePresence>
                {showModal && result && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 w-full max-w-[320px] text-center shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600" />

                            <div className="w-20 h-20 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-4 relative">
                                <Sparkles className="w-10 h-10 text-amber-500" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-0 border border-amber-500/30 rounded-full border-dashed"
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-1">+{result}% de Bônus</h3>
                            <p className="text-sm text-zinc-400 mb-6">
                                No seu próximo pedido de <span className="text-amber-500 font-bold">Ouro</span>, você receberá {result}% a mais automaticamente!
                            </p>

                            <div className="bg-zinc-950 rounded-xl p-3 mb-6 border border-zinc-800">
                                <p className="text-[10px] text-zinc-500 uppercase font-semibold mb-1">Código Promocional</p>
                                <p className="font-mono text-lg font-bold text-zinc-300 tracking-widest">OURO{result}X</p>
                            </div>

                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-3 rounded-xl transition-colors"
                            >
                                Voltar pro Início
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
