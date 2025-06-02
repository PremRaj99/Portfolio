import React, { Children } from "react";

export default function Card({
  className,
  children,
}: {
  className: String | undefined;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-white/5 p-8 rounded-4xl shadow-xs shadow-white/25 border border-white/10 transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
