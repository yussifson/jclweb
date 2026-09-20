'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Mail, Phone } from 'lucide-react';
import { Agent } from '@/data/mockData';

interface AgentCardProps {
  agent: Agent;
  onContact?: (agent: Agent) => void;
}

export default function AgentCard({ agent, onContact }: AgentCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-card hover:shadow-float transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top: Avatar & Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 ring-2 ring-slate-100 group-hover:ring-brand-gold/50 transition-all duration-300">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>

          <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-bold">
            <span>{agent.rating.toFixed(1)}</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        {/* Agent Name & Role */}
        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {agent.name}
        </h4>
        <p className="text-xs text-slate-500 font-medium mb-1">
          {agent.role}
        </p>
        <p className="text-xs text-slate-400">
          {agent.propertiesSold} properties &amp; parcels closed
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-5 pt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onContact && onContact(agent)}
          className="w-full py-2 px-4 rounded-full border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-brand-dark hover:border-brand-dark hover:text-white transition-all duration-200"
        >
          Contact Advisor
        </button>
      </div>
    </div>
  );
}
