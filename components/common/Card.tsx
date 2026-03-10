import React from 'react';

export default function Card({
  className,
  children,
}: {
  className: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-4xl border border-white/10 bg-white/5 p-8 shadow-xs shadow-white/25 transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
