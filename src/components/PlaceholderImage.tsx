import { PawPrint } from 'lucide-react';
import { cn } from '../lib/utils'; // Keep local path resolution if needed

interface PlaceholderImageProps {
  className?: string;
  theme?: 'teal' | 'orange' | 'light-teal';
}

export default function PlaceholderImage({ className, theme = 'light-teal' }: PlaceholderImageProps) {
  const bgColors = {
    'teal': 'bg-brand-teal text-white',
    'orange': 'bg-brand-orange text-white',
    'light-teal': 'bg-brand-light-teal text-brand-teal'
  };

  return (
    <div className={cn('flex items-center justify-center rounded-2xl w-full h-full object-cover overflow-hidden', bgColors[theme], className)}>
      <PawPrint className="w-12 h-12 opacity-50" />
    </div>
  );
}
