import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // Replace with your actual API key
  dangerouslyAllowBrowser: true
});

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
    throw new Error('Failed to process query');
  }
}