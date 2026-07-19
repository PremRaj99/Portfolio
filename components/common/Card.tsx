import React from 'react';

export default function Card({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 shadow-xs shadow-white/25 transition-shadow duration-300 sm:rounded-4xl ${
        className.includes('p-') ? '' : 'p-4 sm:p-6 lg:p-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}
