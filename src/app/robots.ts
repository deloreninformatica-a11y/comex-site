import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://deloren.com.br';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}