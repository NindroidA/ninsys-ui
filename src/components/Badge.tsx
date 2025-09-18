import type { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md';
    className?: string;
}

export function Badge({ children, variant = 'default', size = 'md', className = '' }: BadgeProps) {
    const variants = {
        default: 'bg-white/20 text-white/90 border-white/30',
        success: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        warning: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        error: 'bg-red-500/20 text-red-300 border-red-500/30',
        info: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    };
    
    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm'
    };
    
    return (
        <span className={`inline-flex items-center rounded-full border backdrop-blur-sm font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </span>
    );
}