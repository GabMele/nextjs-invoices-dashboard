import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Base card component for consistent styling
 */
export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`mb-2 w-full rounded-md bg-white p-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card header section with border
 */
export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`flex items-center justify-between border-b pb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card content section
 */
export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card section with optional border
 */
export function CardSection({ children, className = '' }: CardSectionProps) {
  return (
    <div className={`flex w-full items-center justify-between border-b py-5 last:border-b-0 ${className}`}>
      {children}
    </div>
  );
}
