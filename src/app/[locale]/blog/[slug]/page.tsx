import { getTranslation, type Locale } from '@/lib/translations';
import { blogPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

export async function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of ['pt', 'en'] as Locale[]) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Not Found' };
  }

  return {
    title: post.title[locale],
    description: post.excerpt[locale],
    openGraph: {
      title: post.title[locale],
      description: post.excerpt[locale],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title[locale],
      description: post.excerpt[locale],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = (key: string) => getTranslation(locale, key);

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <article className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {locale === 'pt' ? 'Voltar ao Blog' : 'Back to Blog'}
        </Link>

        {/* Post Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
              {post.category}
            </span>
            <time dateTime={post.date} className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title[locale]}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {post.excerpt[locale]}
          </p>
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">{post.author}</span>
            </div>
            <div className="flex gap-2" role="group" aria-label="Compartilhar">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://deloren.com.br/${locale}/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Compartilhar no LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title[locale])}&url=${encodeURIComponent(`https://deloren.com.br/${locale}/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Compartilhar no Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content[locale] }} />

        {/* Author Box */}
        <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{post.author}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {locale === 'pt' ? 'Especialista em Comércio Exterior' : 'Foreign Trade Specialist'}
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16" aria-labelledby="related-title">
            <h2 id="related-title" className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {locale === 'pt' ? 'Artigos Relacionados' : 'Related Articles'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/${locale}/blog/${relatedPost.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300 h-full flex flex-col"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 relative">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <time className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(relatedPost.date).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                    <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2">
                      {relatedPost.title[locale]}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 p-8 bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {locale === 'pt' ? 'Precisa de ajuda especializada?' : 'Need expert help?'}
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {locale === 'pt'
              ? 'Nossa equipe está pronta para ajudar com sua operação de comércio exterior. Agende uma conversa sem compromisso.'
              : 'Our team is ready to help with your foreign trade operation. Schedule a no-obligation conversation.'}
          </p>
          <Link href={`/${locale}/contato`} className="inline-block">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              {locale === 'pt' ? 'Falar com Especialista' : 'Talk to a Specialist'}
            </button>
          </Link>
        </section>
      </div>
    </article>
  );
}