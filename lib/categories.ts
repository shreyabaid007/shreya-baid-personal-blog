export interface Category {
  slug: string
  label: string
  description: string
  accent: string
  accentPale: string
}

export const CATEGORIES: Record<string, Category> = {
  tech: {
    slug: 'tech',
    label: 'Tech & AI',
    description: '',
    accent: '#5C3D11',
    accentPale: '#F7F0E6',
  },
  security: {
    slug: 'security',
    label: 'Security & Privacy',
    description: '',
    accent: '#1E3A5F',
    accentPale: '#E6EEF7',
  },
  climate: {
    slug: 'climate',
    label: 'Climate Change',
    description: '',
    accent: '#1A4731',
    accentPale: '#E6F2EC',
  },
  philosophy: {
    slug: 'philosophy',
    label: 'Philosophy',
    description: "",
    accent: '#4A1D6B',
    accentPale: '#F1E8F7',
  },
}
