import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
}

export default function Button({ variant = 'primary', children, icon: Icon, onClick }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg flex items-center gap-2 transition-all";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "border border-gray-300 hover:bg-gray-50"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
      {Icon && <Icon className="h-5 w-5" />}
    </button>
  );
}