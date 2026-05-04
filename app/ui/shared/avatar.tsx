import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/outline';

interface AvatarProps {
  src?: string | null;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Avatar component for displaying user profile images with fallback to icon
 * 
 * @param src - Image URL, if null or empty will show fallback icon
 * @param alt - Alt text for accessibility
 * @param size - Size variant (sm: 24px, md: 28px, lg: 40px)
 * @param className - Additional CSS classes
 */
export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  const sizeClasses = {
    sm: 'size-6',
    md: 'size-7', 
    lg: 'size-10'
  };

  const iconSizes = {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-7'
  };

  if (src && src.trim() !== '') {
    return (
      <Image
        src={src}
        className={`rounded-full ${className}`}
        alt={alt}
        width={size === 'sm' ? 24 : size === 'md' ? 28 : 40}
        height={size === 'sm' ? 24 : size === 'md' ? 28 : 40}
      />
    );
  }

  return (
    <div className={`flex ${sizeClasses[size]} items-center justify-center rounded-full bg-gray-200 ${className}`}>
      <UserCircleIcon className={`${iconSizes[size]} text-gray-500`} />
    </div>
  );
}
