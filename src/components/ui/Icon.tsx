import {
  Hand,
  Network,
  Compass,
  GitBranch,
  LayoutGrid,
  ShieldCheck,
  Boxes,
  Wheat,
  Building2,
  Zap,
  Sprout,
  Truck,
  Fish,
  Mountain,
  Globe2,
  Target,
  Scale,
  Leaf,
  Handshake,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

// Curated icon map — keeps a single icon set and avoids bundling all of lucide.
const map: Record<string, LucideIcon> = {
  Hand,
  Network,
  Compass,
  GitBranch,
  LayoutGrid,
  ShieldCheck,
  Boxes,
  Wheat,
  Building2,
  Zap,
  Sprout,
  Truck,
  Fish,
  Mountain,
  Globe2,
  Target,
  Scale,
  Leaf,
  Handshake,
  TrendingUp,
};

type Props = {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, size = 22, className, strokeWidth = 1.6 }: Props) {
  const Cmp = map[name] ?? Target;
  return (
    <Cmp size={size} className={className} strokeWidth={strokeWidth} aria-hidden />
  );
}
