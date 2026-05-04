import { Avatar } from './avatar';

interface UserInfoProps {
  name: string;
  email?: string;
  imageUrl?: string | null;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * User info component displaying avatar, name and email
 * 
 * @param name - User's display name
 * @param email - User's email address (optional)
 * @param imageUrl - Profile image URL (optional)
 * @param size - Avatar size (sm, md, lg)
 * @param className - Additional CSS classes
 */
export function UserInfo({ 
  name, 
  email, 
  imageUrl, 
  size = 'md', 
  className = '' 
}: UserInfoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Avatar 
        src={imageUrl} 
        alt={`${name}'s profile picture`} 
        size={size}
      />
      <div>
        <p className="font-medium">{name}</p>
        {email && (
          <p className="text-sm text-gray-500">{email}</p>
        )}
      </div>
    </div>
  );
}
