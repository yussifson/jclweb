'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Agent } from '@/data/mockData';

interface AgentCardProps {
  agent: Agent;
  onContact?: (agent: Agent) => void;
}

export default function AgentCard({ agent, onContact }: AgentCardProps) {
  const firstName = agent.name.startsWith('Mr.')
    ? agent.name
    : agent.name.split(' ')[0];

  return (
    <div className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-[#0466c8] transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        
        {/* Top: Avatar & Verification Seal */}
        <div className="flex items-center justify-between">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 ring-2 ring-slate-100 group-hover:ring-[#0466c8] transition-all duration-300 shadow-sm">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-[11px] font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0466c8]" />
            <span>Verified Team</span>
          </span>
        </div>

        {/* Agent Identity & Specialty */}
        <div className="space-y-1">
          <h4 className="text-lg font-extrabold text-[#001845] group-hover:text-[#0466c8] transition-colors">
            {agent.name}
          </h4>
          <p className="text-xs text-[#0466c8] font-bold">
            {agent.role}
          </p>
          <p className="text-xs text-slate-600 font-medium leading-relaxed pt-1">
            {agent.specialty}
          </p>
        </div>

        {/* Bio Narrative */}
        {agent.bio && (
          <p className="text-xs text-slate-500 font-normal leading-relaxed pt-1 border-t border-slate-100">
            {agent.bio}
          </p>
        )}

      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onContact && onContact(agent)}
          className="w-full py-3 px-4 rounded-full bg-slate-50 hover:bg-[#0466c8] text-slate-700 hover:text-white text-xs font-bold transition-all duration-200 border border-slate-200 hover:border-[#0466c8] flex items-center justify-center gap-2 group-hover:bg-[#0466c8] group-hover:text-white"
        >
          <span>Connect with {firstName}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
