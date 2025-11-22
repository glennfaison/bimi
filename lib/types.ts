// Database types
export interface Card {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  link_url: string | null;
  category: string;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface PageSection {
  id: string;
  page_slug: string;
  section_key: string;
  title: string | null;
  content: string | null;
  image_url: string | null;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string | null;
  bio: string | null;
  image_url: string | null;
  linkedin_url: string | null;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ImpactStory {
  id: string;
  company_name: string;
  story: string;
  impact_metrics: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Pillar {
  id: string;
  name: string;
  country: string;
  bio: string | null;
  image_url: string | null;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Pillar {
  id: string;
  name: string;
  country: string | null;
  bio: string | null;
  image_url: string | null;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
