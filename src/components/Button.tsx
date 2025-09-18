import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    className?: string;
    href?: string;
    target?: string;
    type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, onClick, variant = 'primary', size = 'md', disabled = false, className = '', href, target, type = 'button' }: ButtonProps) {
    const baseClasses = "rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 border";
    
    const variants = {
        primary: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-transparent hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105",
        secondary: "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 hover:shadow-lg",
        ghost: "bg-transparent hover:bg-white/10 text-white/80 hover:text-white border-transparent",
        gradient: "bg-gradient-to-r from-violet-400 via-purple-700 to-pink-300 hover:from-violet-500 hover:via-purple-800 hover:to-pink-400 text-white border-transparent hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
    };
    
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;
    
    const content = (
        <motion.div
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        className={classes}
        onClick={disabled ? undefined : onClick}
        >
            {children}
        </motion.div>
    );
    
    if (href) {
        return (
            <a href={href} target={target} className="inline-block">
                {content}
            </a>
        );
    }
    
    return (
        <button type={type} disabled={disabled} className="inline-block">
            {content}
        </button>
    );
}