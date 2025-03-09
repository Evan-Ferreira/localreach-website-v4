import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false
}) => {
  // Core style maps
  const variants = {
    primary: 'bg-[var(--text-highlight)] text-[--text-base] hover:bg-orange-600',
    secondary: 'bg-[#1f1b1b] text-[--foreground] hover:bg-[#2a2525]',
    outline: 'bg-transparent border-2 border-[--text-highlight] text-[--text-highlight] hover:bg-orange-500/10'
  };

  const sizes = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-5'
  };

  // Combined class string
  const buttonClasses = `
    rounded font-medium transition-all duration-200
    flex items-center justify-center gap-2
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow hover:translate-y-[-1px]'}
    ${className}
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;