import { GoogleGenAI } from '@google/genai';
import { CLUB_INFO, EVENTS, NEWS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual oficial do "${CLUB_INFO.name}". 
Sua missão é ajudar os membros com informações precisas e amigáveis.

### Dados do Clube:
- Endereço: ${CLUB_INFO.address}
- Horários: Semana (${CLUB_INFO.hours.weekdays}), Finais de Semana (${CLUB_INFO.hours.weekends})
- Facilidades: ${CLUB_INFO.facilities.join(', ')}

### Próximos Eventos:
${EVENTS.map(e => `- ${e.title} (${new Date(e.date).toLocaleDateString('pt-BR')}): ${e.description}`).join('\n')}

### Notícias Recentes:
${NEWS.map(n => `- ${n.title}: ${n.summary}`).join('\n')}

### Diretrizes:
1. Responda em Português do Brasil.
2. Seja entusiasmado e incentive a prática de esportes.
3. Se não souber de algo específico, peça para o membro entrar em contato com a secretaria no endereço informado.
4. Use formatação Markdown (negrito, listas, etc.) para deixar a resposta legível.
5. Tente sempre sugerir um evento relacionado ao interesse do usuário.
`;

export async function sendMessage(history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, tive um problema ao processar sua mensagem.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ops! Ocorreu um erro na conexão com o assistente. Tente novamente mais tarde.";
  }
}
