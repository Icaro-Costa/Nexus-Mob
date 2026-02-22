import { CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";

interface IDVerifyProps {
    id: string;
    isVerified: boolean;
}

export function IDVerify({ id, isVerified }: IDVerifyProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-3">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isVerified ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                    {isVerified ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                </div>
                <div>
                    <p className="font-mono font-medium text-zinc-200">ID: {id}</p>
                    <p className="text-xs text-zinc-500">{isVerified ? 'Verificado' : 'Aguardando Verificação'}</p>
                </div>
            </div>

            {!isVerified && (
                <button className="flex items-center gap-1 text-xs font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 px-3 py-1.5 rounded-full transition-colors">
                    Verificar
                    <ChevronRight className="w-3 h-3" />
                </button>
            )}
        </div>
    );
}
