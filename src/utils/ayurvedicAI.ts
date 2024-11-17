import OpenAI from 'openai';

let openai: OpenAI | null = null;

try {
  if (import.meta.env.VITE_OPENAI_API_KEY) {
    openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true
    });
  }
} catch (error) {
  console.error('Failed to initialize OpenAI client:', error);
}

const SYSTEM_PROMPT = `You are an expert Ayurvedic practitioner with deep knowledge of traditional Ayurvedic medicine, remedies, and lifestyle practices. Your responses should:

1. Focus on natural, holistic solutions based on Ayurvedic principles
2. Include specific herbs, remedies, and lifestyle modifications when appropriate
3. Recommend gentle exercises or yoga poses that may help
4. Always emphasize safety and mention when professional consultation is needed
5. Provide context about why certain recommendations are being made
6. Use simple language while maintaining accuracy
7. Include relevant dietary suggestions based on Ayurvedic principles

Remember to:
- Always prioritize safety and mention contraindications
- Suggest only well-established remedies
- Emphasize the importance of lifestyle and prevention
- Acknowledge when certain conditions require professional medical attention`;

export async function processAyurvedicQuery(query: string): Promise<string> {
  try {
    if (!openai) {
      return 'The chat feature is currently unavailable. Please try again later.';
    }

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: query }
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0]?.message?.content || 'I apologize, but I am unable to provide a response at this time.';
  } catch (error) {
    console.error('Error processing Ayurvedic query:', error);
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return 'The chat feature is currently unavailable. Please try again later.';
      }
      return 'I apologize, but I am unable to process your request at this moment. Please try again later.';
    }
    return 'An unexpected error occurred. Please try again later.';
  }
}