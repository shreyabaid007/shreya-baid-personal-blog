export interface Category {
  slug: string
  label: string
  description: string
  accent: string
  accentPale: string
}

export const CATEGORIES: Record<string, Category> = {
  ai: {
    slug: 'ai',
    label: 'AI & Machine Learning',
    description: 'Thinking through transformers, training dynamics, alignment, and what it means to build with these systems responsibly.',
    accent: '#5C3D11',
    accentPale: '#F7F0E6',
  },
  climate: {
    slug: 'climate',
    label: 'Climate & Sustainability',
    description: 'The intersection of technology and environmental systems — from energy policy to carbon accounting to what engineers can actually do.',
    accent: '#1A4731',
    accentPale: '#E6F2EC',
  },
  security: {
    slug: 'security',
    label: 'Security & Privacy',
    description: 'Differential privacy, threat models, adversarial ML, and the uncomfortable gap between security theory and practice.',
    accent: '#1E3A5F',
    accentPale: '#E6EEF7',
  },
  philosophy: {
    slug: 'philosophy',
    label: 'Philosophy & Ideas',
    description: "Epistemology, ethics of technology, decision-making under uncertainty. The questions that don't have clean engineering solutions.",
    accent: '#4A1D6B',
    accentPale: '#F1E8F7',
  },
}
