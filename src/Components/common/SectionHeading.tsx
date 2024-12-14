import React from 'react';

export interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-900">{title}</h2>
      <p className="max-w-2xl mx-auto text-xl text-gray-600">{subtitle}</p>
    </div>
  );
}