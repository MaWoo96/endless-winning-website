'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function DemoPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hey there! Welcome to Endless Winning. I'm here to help you understand your numbers and make smarter financial decisions.\n\nI can pull up your financials, answer questions about transactions, or help with anything else. What can I help you with?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+15551234567');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call the agent API
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          phone_number: phoneNumber,
          session_id: 'demo-session',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Unable to connect to the agent. Make sure the server is running on localhost:8000.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const quickQuestions = [
    "What's my financial summary this month?",
    "How much did I spend on software?",
    "Show me my recent transactions",
    "What are your pricing plans?",
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-[#1E1A2A] text-white py-4 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#EF4444] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">Endless Winning</h1>
              <p className="text-sm text-[#8AB2B5]">AI Financial Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-400">Test Phone:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-[#2F4F6A] text-white text-sm px-3 py-1 rounded border border-[#8AB2B5]/30 focus:outline-none focus:border-[#8AB2B5] w-36"
            />
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Quick Questions */}
        <div className="mb-4">
          <p className="text-sm text-[#2F4F6A] mb-2">Quick questions to try:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInput(question)}
                className="text-sm px-3 py-1.5 rounded-full bg-white border border-[#8AB2B5]/30 text-[#2F4F6A] hover:bg-[#8AB2B5]/10 hover:border-[#8AB2B5] transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white'
                        : 'bg-[#F5F5F5] text-[#1E1A2A] border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-white/70' : 'text-[#B8B8B8]'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Loading indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-[#F5F5F5] rounded-2xl px-4 py-3 border border-gray-200">
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 rounded-full bg-[#8AB2B5]"
                    />
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 rounded-full bg-[#8AB2B5]"
                    />
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 rounded-full bg-[#8AB2B5]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-100 p-4">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8AB2B5] focus:ring-2 focus:ring-[#8AB2B5]/20 text-[#1E1A2A] placeholder-[#B8B8B8]"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#EF4444] text-white font-medium hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Info */}
        <div className="mt-4 text-center text-sm text-[#B8B8B8]">
          <p>Demo mode - Connects to local agent at localhost:8000</p>
          <p className="mt-1">Test client: Sarah&apos;s Coffee Shop (+15551234567)</p>
        </div>
      </div>
    </main>
  );
}
