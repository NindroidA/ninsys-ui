import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    background?: 'none' | 'subtle' | 'gradient';
    padding?: 'sm' | 'md' | 'lg' | 'xl';
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '6xl' | 'full';
}

export function Section({ children, title, subtitle, className = '', background = 'none', padding = 'lg', maxWidth = '6xl' }: SectionProps) {
    const backgrounds = {
        none: '',
        subtle: 'bg-gradient-to-b from-white/5 via-transparent to-white/5 backdrop-blur-3xl',
        gradient: 'bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20'
    };
    
    const paddings = {
        sm: 'py-12 px-6',
        md: 'py-16 px-8',
        lg: 'py-20 px-8',
        xl: 'py-32 px-8'
    };
    
    const maxWidths = {
        sm: 'max-w-sm',
        md: 'max-w-md', 
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '6xl': 'max-w-6xl',
        full: 'max-w-full'
    };
    
    return (
        <section className={`relative ${paddings[padding]} ${backgrounds[background]} ${className}`}>
            <div className={`${maxWidths[maxWidth]} mx-auto`}>
                {(title || subtitle) && (
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                    >
                        {title && (
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <span className="bg-gradient-to-r from-violet-400 via-purple-700 to-pink-300 bg-clip-text text-transparent">
                                    {title}
                                </span>
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
}