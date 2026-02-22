'use client';

import { CheckCircle2, XCircle } from 'lucide-react';
import { useTransition } from 'react';
import { handleCandidateAction } from '@/actions';

export function AdminRejectButton({ candidateId }: { candidateId: number }) {
    const [isPending, startTransition] = useTransition();

    const handleAction = () => {
        startTransition(async () => {
            await handleCandidateAction(candidateId, 'reject');
        });
    };

    return (
        <button
            onClick={handleAction}
            disabled={isPending}
            className="flex-1 flex items-center justify-center gap-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 font-bold py-2 rounded-lg transition-colors text-xs disabled:opacity-50 active:scale-95"
        >
            <XCircle className="w-4 h-4" /> {isPending ? 'Recusando...' : 'Recusar'}
        </button>
    );
}

export function AdminApproveButton({ candidateId }: { candidateId: number }) {
    const [isPending, startTransition] = useTransition();

    const handleAction = () => {
        startTransition(async () => {
            await handleCandidateAction(candidateId, 'approve');
        });
    };

    return (
        <button
            onClick={handleAction}
            disabled={isPending}
            className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 font-bold py-2 rounded-lg transition-colors text-xs disabled:opacity-50 active:scale-95"
        >
            <CheckCircle2 className="w-4 h-4" /> {isPending ? 'Aprovando...' : 'Aprovar'}
        </button>
    );
}
