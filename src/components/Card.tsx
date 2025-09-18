import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'glass' | 'elevated' | 'minimal';
    hover?: boolean;
    animate?: boolean;
    delay?: number;
}

export function Card({ children, className = '', variant = 'default', hover = true, animate = true,delay = 0 }: CardProps) {
    const baseClasses = "rounded-2xl border transition-all duration-500";
  
    const variants = {
        default: "bg-gradient-to-br from-white/12 via-gray-800/20 to-white/8 backdrop-blur-xl border-white/20",
        glass: "bg-white/5 backdrop-blur-2xl border-white/10 shadow-2xl",
        elevated: "bg-gradient-to-br from-white/15 via-gray-700/25 to-white/10 backdrop-blur-xl border-white/30 shadow-2xl",
        minimal: "bg-white/8 backdrop-blur-lg border-white/15"
    };
  
    const hoverClasses = hover ? "hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-gradient-to-br hover:from-white/15 hover:via-gray-700/25 hover:to-white/10" : "";
    
    const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;
    
    if (animate) {
        return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className={classes}
        >
            {children}
        </motion.div>
        );
    }
    
    return <div className={classes}>{children}</div>;
}