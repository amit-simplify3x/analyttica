import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string | ReactNode;
  action?: ReactNode;
}

export const Card = ({ children, className = '', title, action }: CardProps) => {
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-purple-100/50 hover:shadow-3xl transition-all duration-300 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gradient-to-r from-indigo-100 to-purple-100">
          {title && (
            <h3 className={`text-2xl font-bold ${typeof title === 'string' ? 'bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent' : ''}`}>
              {title}
            </h3>
          )}
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

