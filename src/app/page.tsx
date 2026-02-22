'use client';

import { motion } from 'framer-motion';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/community');
    }
  }, [status, router]);

  const handleLogin = async () => {
    setIsLoading(true);
    await signIn('credentials', {
      username: 'Icaro',
      password: 'nexus',
      redirect: false
    });
    // the useEffect will catch the auth change and bring them to /community
  };

  if (status === 'loading' || status === 'authenticated') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <Loader2 className="w-8 h-8 text-amber-500 animate-spin mb-4" />
        <p className="text-zinc-500 font-medium">Iniciando Nexus-Mob...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center w-full"
      >
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center mb-6 shadow-2xl shadow-amber-500/30 relative">
          <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse mix-blend-overlay"></div>
          <span className="font-bold text-zinc-950 text-5xl tracking-tighter drop-shadow-sm">N</span>
        </div>

        <h1 className="text-3xl font-bold mb-3 tracking-tight">Bem-vindo ao<br /><span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-600">Nexus-Mob</span></h1>
        <p className="text-zinc-400 mb-10 max-w-[280px] leading-relaxed text-sm">
          O ecossistema definitivo para jogadores de Rise of Kingdoms.
        </p>

        <div className="w-full space-y-3">
          <motion.button
            onClick={handleLogin}
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-950 font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] flex justify-center items-center gap-2"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Entrar na Conta (Demonstração)'}
          </motion.button>

          <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold mt-4">Acesso Premium Restrito</p>
        </div>
      </motion.div>
    </div>
  );
}
