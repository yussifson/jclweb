'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Phone, MessageCircle } from 'lucide-react';
import { Agent } from '@/data/mockData';

interface AgentCardProps {
  agent: Agent;
  onContact?: (agent: Agent) => void;
}

export default function AgentCard({ agent, onContact }: AgentCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-card hover:shadow-float transition-all duration-300 flex flex-col justify-between group hover:border-blue-100">
      <div>
        {/* Top: Avatar & Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 ring-2 ring-[#0466c8]/20 group-hover:ring-[#FF5500] transition-all duration-300">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>

          <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-[#FFF0EB] border border-[#FF5500]/30 text-[#FF5500] text-xs font-bold">
            <span>{agent.rating.toFixed(1)}</span>
            <Star className="w-3.5 h-3.5 fill-[#FF5500] text-[#FF5500]" />
          </div>
        </div>

        {/* Agent Name & Role */}
        <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0466c8] transition-colors">
          {agent.name}
        </h4>
        <p className="text-xs text-[#0466c8] font-bold mb-1">
          {agent.role}
        </p>
        <p className="text-xs text-slate-500 mb-2 font-medium">
          {agent.specialty}
        </p>
        <p className="text-xs text-slate-400">
          {agent.propertiesSold}+ successful transactions
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-5 pt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onContact && onContact(agent)}
          className="w-full py-2.5 px-4 rounded-full border border-[#0466c8] text-[#0466c8] text-xs font-bold hover:bg-[#0466c8] hover:text-white transition-all duration-200 shadow-sm"
        >
          Contact Advisor
        </button>
      </div>
    </div>
  );
}
