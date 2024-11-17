import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { processAyurvedicQuery } from '../utils/ayurvedicAI';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  error?: boolean;
}

interface AyurvedicChatProps {
  onBack: () => void;
}

export default function AyurvedicChat({ onBack }: AyurvedicChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Namaste! I am your Ayurvedic guide. How can I assist you today? Feel free to ask about natural remedies, lifestyle recommendations, or specific health concerns.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      type: 'user' as const,
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await processAyurvedicQuery(input.trim());
      
      const botMessage = {
        type: 'bot' as const,
        content: response,
        timestamp: new Date(),
        error: response.includes('unavailable') || response.includes('unable')
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        type: 'bot' as const,
        content: 'I apologize, but I am unable to process your request at the moment. Please try again later.',
        timestamp: new Date(),
        error: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

      <div className="max-w-4xl mx-auto pt-20 px-4 pb-4 flex flex-col h-screen">
        <h1 className="text-3xl font-bold text-sage-900 mb-8 text-center">Ayurvedic AI Guide</h1>

        <div className="flex-1 bg-white rounded-t-xl shadow-lg overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' ? 'bg-sage-600' : message.error ? 'bg-red-100' : 'bg-sage-100'
                  }`}
                >
                  {message.type === 'user' ? (
                    <User className="h-5 w-5 text-white" />
                  ) : message.error ? (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  ) : (
                    <Bot className="h-5 w-5 text-sage-600" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-4 max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-sage-600 text-white'
                      : message.error
                      ? 'bg-red-50 text-red-800'
                      : 'bg-sage-50 text-sage-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <span className="text-xs opacity-70 mt-2 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-sage-600" />
                </div>
                <div className="bg-sage-50 rounded-lg p-4">
                  <Loader2 className="h-5 w-5 animate-spin text-sage-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-sage-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Ayurvedic remedies, lifestyle, or health concerns..."
                className="flex-1 p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-sage-600 text-white p-3 rounded-lg hover:bg-sage-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}