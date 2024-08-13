export interface ISvgIconProps {
  icon: SvgIconType;
  svgSize?: number | number[];
  color?: string;
  className?: string;
}

export type SvgIconType =
  | 'logo'
  | 'cross'
  | 'bar'
  | 'people'
  | 'chart'
  | 'diamond'
  | 'phone'
  | 'smile'
  | 'star'
  | 'wallet'
  | 'hand'
  | 'payment'
  | 'support'
  | 'access'
  | 'arrow'
  | 'youtube'
  | 'netflix'
  | 'spotify'
  | 'check'
  | 'instagram'
  | 'x'
  | 'tiktok'
  | 'facebook'
