import { getTranslation, type Locale } from '@/lib/translations';
import { blogPosts, getAllCategories, getPostsByCategory } from '@/lib/blog';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ category?: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return [
    { locale: 'pt' },
    { locale: 'en' },
  ];
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const { category } = await searchParams;

  return {
    title: locale === 'pt' ? 'Blog & Insights - Comércio Exterior' : 'Blog & Insights - Foreign Trade',
    description: locale === 'pt'
      ? 'Artigos técnicos sobre comércio exterior, legislação aduaneira, drawback, classificação fiscal NCM, regimes especiais e estratégias tributárias.'
      : 'Technical articles on foreign trade, customs legislation, drawback, NCM tax classification, special regimes, and tax strategies.',
  };
}

export default async function BlogPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { category } = await searchParams;
  const t = (key: string) => getTranslation(locale, key);

  const categories = getAllCategories();
  const posts = category ? getPostsByCategory(category) : blogPosts;
  const selectedCategory = category ? decodeURIComponent(category) : null;

  return (
    <div className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center max-w-3xl mx-auto mb-12" aria-labelledby="blog-hero-title">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-4">
            {t('blog.title')}
          </span>
          <h1 id="blog-hero-title" className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </section>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter by category">
          <Link
            href={`/${locale}/blog`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !selectedCategory
                ? 'bg-blue-700 text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-700 dark:hover:border-blue-500 dark:hover:text-blue-300'
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/${locale}/blog?category=${encodeURIComponent(cat)}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-700 text-white'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-700 dark:hover:border-blue-500 dark:hover:text-blue-300'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/${locale}/blog/${post.slug}`} className="block h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300 h-full flex flex-col">
                    <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        {post.title[locale]}
                      </h2>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
                        {post.excerpt[locale]}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.author}</span>
                        <span className="inline-flex items-center gap-1.5 text-blue-700 dark:text-blue-300 font-medium">
                          {t('blog.readMore')}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting another category or check back later.
            </p>
          </div>
        )}

        <section className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get our insights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sign up to receive exclusive articles on foreign trade, legislation changes, and tax strategies directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#" method="POST">
              <input
                type="email"
                placeholder="Your corporate email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button type="submit" className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}