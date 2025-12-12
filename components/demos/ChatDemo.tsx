'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';

// Demo scenarios - cycles through different capabilities
const DEMO_SCENARIOS = [
  {
    userMessage: "How much did I spend on software this month?",
    aiResponse: "Hey Sarah! Let me check... You spent $342.50 on software this month across 3 vendors. That's down 12% from last month. Your top spend was Adobe at $54.99. Anything look off?",
  },
  {
    userMessage: "I just got a receipt from Office Depot",
    aiResponse: "Got it! I've logged your Office Depot receipt and will match it to your transaction. Categorizing as Office Supplies — let me know if it should be something else!",
  },
  {
    userMessage: "What was that big charge on the 15th?",
    aiResponse: "Let me check... That was a $2,400 payment to 'ABC Supplies' categorized as Inventory. Does that look right, or should we recategorize it?",
  },
  {
    userMessage: "Can you break down my expenses by category?",
    aiResponse: "Here's your breakdown this month:\n• Inventory: $4,200 (52%)\n• Software: $342 (4%)\n• Rent: $1,800 (22%)\n• Utilities: $485 (6%)\n\nInventory is your biggest spend. Want to dig into any of these?",
  },
];

const DEMO_CONFIG = {
  typingSpeed: 35,        // ms per character
  delayBeforeAI: 800,     // ms pause before AI starts "typing"
  loopDelay: 3000,        // ms before moving to next scenario
};

type Phase = 'idle' | 'typing-input' | 'user-sent' | 'ai-thinking' | 'ai-typing' | 'complete';

export function ChatDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const [phase, setPhase] = useState<Phase>('idle');
  const [inputText, setInputText] = useState('');
  const [aiText, setAiText] = useState('');
  const [scenarioIndex, setScenarioIndex] = useState(0);

  const currentScenario = DEMO_SCENARIOS[scenarioIndex];

  // Reset and start when scrolling into view
  useEffect(() => {
    if (isInView) {
      resetAndStart();
    } else {
      setPhase('idle');
      setInputText('');
      setAiText('');
    }
  }, [isInView]);

  // Phase state machine
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case 'typing-input':
        if (inputText.length < currentScenario.userMessage.length) {
          timeout = setTimeout(() => {
            setInputText(currentScenario.userMessage.slice(0, inputText.length + 1));
          }, DEMO_CONFIG.typingSpeed);
        } else {
          timeout = setTimeout(() => setPhase('user-sent'), 400);
        }
        break;

      case 'user-sent':
        timeout = setTimeout(() => setPhase('ai-thinking'), DEMO_CONFIG.delayBeforeAI);
        break;

      case 'ai-thinking':
        timeout = setTimeout(() => setPhase('ai-typing'), 1200);
        break;

      case 'ai-typing':
        if (aiText.length < currentScenario.aiResponse.length) {
          timeout = setTimeout(() => {
            setAiText(currentScenario.aiResponse.slice(0, aiText.length + 1));
          }, DEMO_CONFIG.typingSpeed / 2);
        } else {
          setPhase('complete');
        }
        break;

      case 'complete':
        timeout = setTimeout(() => {
          // Move to next scenario
          setScenarioIndex((prev) => (prev + 1) % DEMO_SCENARIOS.length);
          resetAndStart();
        }, DEMO_CONFIG.loopDelay);
        break;
    }

    return () => clearTimeout(timeout);
  }, [phase, inputText, aiText, currentScenario]);

  function resetAndStart() {
    setInputText('');
    setAiText('');
    setPhase('typing-input');
  }

  const showUserMessage = ['user-sent', 'ai-thinking', 'ai-typing', 'complete'].includes(phase);
  const showTypingIndicator = phase === 'ai-thinking';
  const showAiMessage = ['ai-typing', 'complete'].includes(phase);

  return (
    <div ref={ref} className="flex justify-center py-8">
      {/* Chat window container */}
      <div className="w-full max-w-md rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-xl">
        {/* Window chrome - macOS style */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="flex-1 text-center text-xs text-gray-500 font-medium">
            Endless Winning AI
          </span>
        </div>

        {/* Messages area */}
        <div className="p-4 min-h-[240px] flex flex-col gap-3 bg-[#F5F5F5]">
          <AnimatePresence mode="popLayout">
            {showUserMessage && (
              <motion.div
                key="user-message"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="self-end max-w-[85%]"
              >
                <div className="px-4 py-2.5 rounded-2xl rounded-br-md bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white text-sm leading-relaxed">
                  {currentScenario.userMessage}
                </div>
              </motion.div>
            )}

            {showTypingIndicator && (
              <motion.div
                key="typing-indicator"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="self-start"
              >
                <div className="flex gap-1 px-4 py-3 rounded-2xl rounded-bl-md bg-white border border-gray-200">
                  <span className="w-2 h-2 bg-[#8AB2B5] rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-[#8AB2B5] rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-[#8AB2B5] rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </motion.div>
            )}

            {showAiMessage && (
              <motion.div
                key="ai-message"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="self-start max-w-[85%]"
              >
                <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-white border border-gray-200 text-[#1E1A2A] text-sm leading-relaxed">
                  {aiText}
                  {phase === 'ai-typing' && (
                    <span className="inline-block w-0.5 h-4 ml-0.5 bg-[#8AB2B5] animate-pulse" />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input bar */}
        <div className="flex gap-2 p-3 border-t border-gray-200 bg-white">
          <div className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1E1A2A] min-h-[40px]">
            {phase === 'typing-input' ? (
              <>
                <span>{inputText}</span>
                <span className="inline-block w-0.5 h-4 ml-0.5 bg-[#8AB2B5] animate-pulse" />
              </>
            ) : (
              <span className="text-gray-400">Type a message...</span>
            )}
          </div>
          <button
            className="px-4 py-2 bg-gradient-to-r from-[#5856d6] to-[#ec4899] hover:opacity-90 text-white rounded-lg font-medium text-sm transition-opacity"
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatDemo;
