import { ShieldCheck, UserCheck, AlertTriangle, Eye } from 'lucide-react';
import Link from 'next/link';
import { AdminApproveButton, AdminRejectButton } from './ClientButtons';

// Server Component (Buscar de DB falso)
async function getCandidates() {
    return [
        { id: 1, user: 'GamerFake', requestedRole: 'Vendedor', rss: '5B Comida', link: 'wa.me/fake1' },
        { id: 2, user: 'Lancelot', requestedRole: 'Jornalista', reason: 'Sou muito ativo e conheço as regras.', link: 'wa.me/lancelot2' }
    ];
}

async function getDisputes() {
    return [
        { id: 'REQ-10B4', buyer: 'ReiArthur', seller: 'Icaro', status: 'Disputa', amount: '5B Comida' }
    ];
}

export default async function AdminDashboardPage() {
    const candidates = await getCandidates();
    const disputes = await getDisputes();

    return (
        <div className="animate-in fade-in duration-500 min-h-[calc(100vh-8rem)] pb-10">
            <div className="sticky top-0 z-10 bg-amber-500/10 backdrop-blur-md px-4 py-3 border-b border-amber-500/20 text-amber-500 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    <h2 className="text-xl font-bold tracking-tight">Painel ADM</h2>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest border border-amber-500/50 px-2 rounded bg-amber-500/10">Modo Divino</span>
            </div>

            <div className="p-4 space-y-8">

                {/* Gestão de Cargos */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold flex items-center gap-2 text-zinc-100">
                            <UserCheck className="w-5 h-5 text-emerald-500" /> Triagem de Cargos
                        </h3>
                        <span className="bg-zinc-800 text-xs text-zinc-400 px-2 py-0.5 rounded-full">{candidates.length} pendentes</span>
                    </div>

                    {candidates.length === 0 ? (
                        <div className="text-center py-6 border border-zinc-800 border-dashed rounded-xl">
                            <p className="text-zinc-500 text-sm">Nenhum candidato aguardando triagem.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {candidates.map(candidate => (
                                <div key={candidate.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                                    <div className="absolute top-0 right-0 bg-blue-500/10 text-blue-500 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                        Solicita: {candidate.requestedRole}
                                    </div>

                                    <h4 className="font-bold text-sm mb-2 mt-1">{candidate.user}</h4>

                                    <div className="space-y-1 mb-4">
                                        {candidate.rss && <p className="text-xs text-zinc-400"><span className="text-zinc-500">Estoque:</span> {candidate.rss}</p>}
                                        {candidate.reason && <p className="text-xs text-zinc-400"><span className="text-zinc-500">Motivo:</span> {candidate.reason}</p>}
                                        <p className="text-xs font-mono text-zinc-500 mt-1 truncate">{candidate.link}</p>
                                    </div>

                                    {/* Isolando interatividade em Client Components */}
                                    <div className="flex gap-2">
                                        <AdminRejectButton candidateId={candidate.id} />
                                        <AdminApproveButton candidateId={candidate.id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Auditoria de Transações */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold flex items-center gap-2 text-zinc-100">
                            <AlertTriangle className="w-5 h-5 text-rose-500" /> Disputas e Auditoria
                        </h3>
                        <span className="bg-rose-500/10 text-xs text-rose-500 px-2 py-0.5 border border-rose-500/20 rounded-full font-bold">{disputes.length} alertas</span>
                    </div>

                    <div className="space-y-4">
                        {disputes.map(dispute => (
                            <div key={dispute.id} className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-sm text-rose-400">{dispute.id}</h4>
                                    <span className="text-[10px] bg-rose-500 text-zinc-950 font-bold px-1.5 py-0.5 rounded uppercase">Disputa</span>
                                </div>

                                <p className="text-xs text-zinc-300 mb-3 leading-relaxed">
                                    Conflito reportado entre o Vendedor <strong className="text-zinc-100">{dispute.seller}</strong> e o Comprador <strong className="text-zinc-100">{dispute.buyer}</strong> referente ao resgate de {dispute.amount}.
                                </p>

                                <Link href={`/marketplace/order/${dispute.id}`} className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 font-bold py-2.5 rounded-lg text-xs transition-colors flex justify-center items-center gap-2 active:scale-95">
                                    <Eye className="w-4 h-4" />
                                    Intervir no Chat de Transação
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
