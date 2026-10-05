import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.autoric.com.br',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.autoric.com.br/deliveries',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}