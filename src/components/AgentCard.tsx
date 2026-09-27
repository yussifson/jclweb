'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import { Agent } from '@/data/mockData';

interface AgentCardProps {
  agent: Agent;
  onContact?: (agent: Agent) => void;
}

export default function AgentCard({ agent, onContact }: AgentCardProps) {
  return (
    <div className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-[#0466c8] transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top: Avatar & Rating */}
        <div className="flex items-center justify-between mb-5">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 ring-2 ring-slate-100 group-hover:ring-[#0466c8] transition-all duration-300 shadow-sm">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 text-[#FF5500] text-xs font-black">
            <span>{agent.rating.toFixed(1)}</span>
            <Star className="w-3.5 h-3.5 fill-[#FF5500] text-[#FF5500]" />
          </div>
        </div>

        {/* Agent Name & Role */}
        <h4 className="text-lg font-extrabold text-[#001845] group-hover:text-[#0466c8] transition-colors">
          {agent.name}
        </h4>
        <p className="text-xs text-[#0466c8] font-bold mb-1.5">
          {agent.role}
        </p>
        <p className="text-xs text-slate-600 mb-3 font-medium leading-relaxed">
          {agent.specialty}
        </p>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
          <span>● {agent.projectsSupervised}+ Deliveries Supervised</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onContact && onContact(agent)}
          className="w-full py-3 px-4 rounded-full bg-slate-50 hover:bg-[#0466c8] text-slate-700 hover:text-white text-xs font-bold transition-all duration-200 border border-slate-200 hover:border-[#0466c8] flex items-center justify-center gap-2 group-hover:bg-[#0466c8] group-hover:text-white"
        >
          <span>Connect with {agent.name.split(' ')[0]}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
