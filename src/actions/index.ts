'use server';

import { revalidatePath } from 'next/cache';

// Mocked DB
const ADM_ALERTS: string[] = [];

/**
 * Filtro de palavras ofensivas/restritas para a Comunidade
 */
const BLACKLIST = ['hack', 'bot', 'venda externa', 'discord', 'telegram', 'ofensivo'];

export async function validateCommunityPost(formData: FormData) {
    const content = formData.get('content') as string;

    if (!content || !content.trim()) {
        return { success: false, error: 'O conteúdo não pode ser vazio.' };
    }

    const lowerPost = content.toLowerCase();
    const hasBadWords = BLACKLIST.some(word => lowerPost.includes(word));

    if (hasBadWords) {
        // Envia alerta para o banco de dados do Jornalista
        ADM_ALERTS.push(`Postagem restrita enviada por Vendedor: ${content}`);
        return {
            success: true,
            warning: 'Sua postagem contém termos restritos e foi enviada para Revisão do Jornalista.',
            status: 'pending'
        };
    }

    // Aprovação automática simulada no BD
    revalidatePath('/community'); // Limpa cache para atualizar UI localmente

    return {
        success: true,
        warning: null,
        status: 'approved',
        post: {
            id: Date.now(),
            author: 'Icaro',
            role: 'Vendedor',
            content,
            likes: 0,
            comments: 0,
            time: 'Agora',
            status: 'approved'
        }
    };
}

/**
 * Lógica da Roleta no Servidor para evitar manipulação de probabilidade no Client
 */
export async function spinRoulette() {
    // delay falso
    await new Promise(resolve => setTimeout(resolve, 800));

    // A inteligência de porcentagem é gerada em backend
    const spinOptions = [5, 10, 15, 20];
    const result = spinOptions[Math.floor(Math.random() * spinOptions.length)];

    return { success: true, result };
}

/**
 * Envia aplicação de cargo (Work With Us) sem precisar prevenir reload de forma manual
 */
export async function submitApplication(formData: FormData) {
    const role = formData.get('role');
    const reason = formData.get('reason');
    const stock = formData.get('stock');
    const link = formData.get('link');

    // Aqui estaria a lógica do Prisma/Supabase para inserir um novo 'Candidate' na fila
    ADM_ALERTS.push(`Novo pedido de cargo: ${role}`);

    return { success: true, message: 'Seu pedido foi enviado ao ADM para triagem rigorosa.' };
}

/**
 * Ação do ADM para aprovar ou recusar um candidato
 */
export async function handleCandidateAction(candidateId: number, action: 'approve' | 'reject') {
    // Simulando tempo de banco de dados
    await new Promise(resolve => setTimeout(resolve, 500));

    // DB log simulation
    ADM_ALERTS.push(`Candidato ${candidateId} foi ${action === 'approve' ? 'aprovado' : 'recusado'}.`);

    // Revalidar a página para que o Server Component do Dashboard busque os novos dados limpos
    revalidatePath('/admin/dashboard');

    return { success: true };
}
