import React from 'react';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = 'md',
    shadow = 'md',
}) => {
    const baseClasses =
        'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700';

    const paddingClasses = {
        none: '',
        sm: 'p-3',
        md: 'p-6',
        lg: 'p-8',
    };

    const shadowClasses = {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
    };

    const classes =
        `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`.trim();

    return <div className={classes}>{children}</div>;
};
