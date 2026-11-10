'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { blogPosts, getAllCategories } from '@/lib/blog';
import { format } from 'date-fns';
import type { Locale } from '@/lib/i18n';
import { useTranslation } from '@/hooks/useTranslation';

interface BlogProps {
  locale: Locale;
}

export function Blog({ locale }: BlogProps) {
  const { t } = useTranslation(locale);
  const categories = getAllCategories();
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50" aria-labelledby="blog-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-4">
              {t('blog.title')}
            </span>
            <h2 id="blog-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {t('blog.title')}
            </h2>
          </div>
          <Link href={`/${locale}/blog`}>
            <Button variant="outline">
              {locale === 'pt' ? 'Ver todos os artigos' : 'View all articles'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtrar por categoria">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/${locale}/blog?category=${encodeURIComponent(cat)}`}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-700 dark:hover:border-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Card variant="outlined" padding="none" className="h-full hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300 overflow-hidden group">
                {/* Post Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), locale === 'pt' ? 'dd MMM yyyy' : 'MMM dd, yyyy', { locale: locale === 'pt' ? undefined : undefined })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link href={`/${locale}/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors line-clamp-2">
                      {post.title[locale]}
                    </h3>
                  </Link>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt[locale]}
                  </p>

                  <Link href={`/${locale}/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-blue-700 dark:text-blue-300 font-medium hover:underline">
                    {t('blog.readMore')}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}