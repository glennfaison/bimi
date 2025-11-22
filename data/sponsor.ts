import { Sponsor } from './types';

export const sponsors: Sponsor[] = [
  {
    id: '1',
    title: 'Sponsor 1',
    description: 'Description for Sponsor 1',
    image_url: 'sponsor-1.jpg',
    link_url: 'https://sponsor-1.com',
    category: '',
    order_index: 1,
    is_published: true,
    created_at: '',
    updated_at: ''
  },
  {
    id: '2',
    title: 'Sponsor 2',
    description: 'Description for Sponsor 2',
    image_url: 'sponsor-2.jpg',
    link_url: 'https://sponsor-2.com',
    category: '',
    order_index: 2,
    is_published: true,
    created_at: '',
    updated_at: ''
  },
  {
    id: '3',
    title: 'Coca Cola',
    description: 'Corporate Sponsor',
    image_url: '/coca-cola-logo.png',
    link_url: null,
    category: '',
    order_index: 2,
    is_published: true,
    created_at: '',
    updated_at: ''
  }
];
