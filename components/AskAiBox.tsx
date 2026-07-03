'use client';

import { useState } from 'react';
import { FiSend, FiCpu } from 'react-icons/fi';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export default function AskAiBox() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Ask me anything about this article — I can go deeper, simplify further, or connect it to other topics.' }
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: input },
      { role: 'ai', text: 'This is a UI placeholder — real answers arrive once the AI microservice is wired in.' }
    ]);
    setInput('');
  };

  return (
    <div className="rounded-card border border-line bg-surface p-4">
      <div className="mb-3 max-h-64 space-y-3 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
            <div
              className={[
                'flex max-w-[85%] items-start gap-2 rounded-card px-3 py-2 font-body text-sm',
                m.role === 'user' ? 'bg-primary text-white' : 'bg-bg text-ink/80'
              ].join(' ')}
            >
              {m.role === 'ai' && <FiCpu className="mt-0.5 shrink-0" size={14} />}
              <span>{m.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Ask a follow-up question…"
          className="flex-1 rounded-full border border-line bg-bg px-4 py-2 font-body text-sm outline-none focus:border-primary"
        />
        <button
          type="button"
          onClick={send}
          aria-label="Send"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:opacity-90"
        >
          <FiSend size={14} />
        </button>
      </div>
    </div>
  );
}
