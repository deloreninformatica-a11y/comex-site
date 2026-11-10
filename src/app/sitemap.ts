import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://deloren.com.br';
  const lastModified = new Date();

  const staticRoutes = ['', '/sobre', '/servicos', '/blog', '/contato'];
  const enRoutes = ['', '/about', '/services', '/blog', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add static routes for each locale
  locales.forEach((locale) => {
    const routes = locale === 'pt' ? staticRoutes : enRoutes;
    const localePrefix = locale === defaultLocale ? '' : `/${locale}`;

    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}${localePrefix}${route}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            'pt-BR': `${baseUrl}${route}`,
            'en': `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });

  // Add blog posts
  blogPosts.forEach((post) => {
    locales.forEach((locale) => {
      const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
      sitemapEntries.push({
        url: `${baseUrl}${localePrefix}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: {
            'pt-BR': `${baseUrl}/blog/${post.slug}`,
            'en': `${baseUrl}/en/blog/${post.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}