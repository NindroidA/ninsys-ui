import type { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'accent';
    className?: string;
}

export function GradientText({ children, variant = 'primary', className = '' }: GradientTextProps) {
    const variants = {
        primary: 'bg-gradient-to-r from-violet-400 via-purple-700 to-pink-300',
        secondary: 'bg-gradient-to-r from-cyan-400 to-blue-500',
        accent: 'bg-gradient-to-r from-emerald-400 to-cyan-500'
    };
    
    return (
        <span className={`${variants[variant]} bg-clip-text text-transparent ${className}`}>
            {children}
        </span>
    );
}