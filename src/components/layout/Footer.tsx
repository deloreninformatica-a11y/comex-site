import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
  t: (key: string) => string;
}

export function Footer({ locale, t }: FooterProps) {
  const currentYear = 2026;

  const footerLinks = {
    quickLinks: [
      { href: `/${locale}`, label: t('nav.home') },
      { href: `/${locale}/sobre`, label: t('nav.about') },
      { href: `/${locale}/servicos`, label: t('nav.services') },
      { href: `/${locale}/blog`, label: t('nav.blog') },
      { href: `/${locale}/contato`, label: t('nav.contact') },
    ],
    services: [
      { href: `/${locale}/servicos#import`, label: locale === 'pt' ? 'Importação' : 'Import' },
      { href: `/${locale}/servicos#export`, label: locale === 'pt' ? 'Exportação' : 'Export' },
      { href: `/${locale}/servicos#classification`, label: locale === 'pt' ? 'Classificação Fiscal (NCM)' : 'Tax Classification (NCM)' },
      { href: `/${locale}/servicos#regimes`, label: locale === 'pt' ? 'Regimes Aduaneiros Especiais' : 'Special Customs Regimes' },
      { href: `/${locale}/servicos#compliance`, label: locale === 'pt' ? 'Compliance Aduaneiro' : 'Customs Compliance' },
      { href: `/${locale}/servicos#consulting`, label: locale === 'pt' ? 'Consultoria Tributária Internacional' : 'International Tax Consulting' },
    ],
    legal: [
      { href: `/${locale}/privacidade`, label: t('footer.privacy') },
      { href: `/${locale}/termos`, label: t('footer.terms') },
      { href: `/${locale}/lgpd`, label: t('footer.lgpd') },
    ],
  };

  const contactInfo = {
    address: 'Rua Lázaro Bueno, 140\nSão Paulo - SP',
    phone: '+55 11 99323-6724',
    email: 'requena.daniel@gmail.com',
  };

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 text-xl font-bold text-blue-400 mb-6" aria-label="Deloren Comex - Página inicial">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="currentColor"/>
                <path d="M8 12h16M8 16h12M8 20h8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="22" cy="20" r="4" stroke="white" strokeWidth="2"/>
                <path d="M22 18v4M20 20h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Deloren Comex</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${'5511993236724'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.42.01-.643.078-.223.069-.48.242-.767.715-.253.418-.487.85-.487.917 0 .058.01.149.025.223.01.068.172.168.37.316.223.168.48.402.48.85 0 .47-.15.916-.316 1.192-.222.298-.578.788-.97 1.397-.372.579-.772 1.174-1.017 1.412-.242.242-.52.414-.715.488-.172.074-.502.123-.733.123-.297 0-.67-.124-.94-.372zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.011L2 22l5.335-1.342A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quick-links">
            <h3 id="footer-quick-links" className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services">
            <h3 id="footer-services" className="text-white font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic" aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">{contactInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">{contactInfo.email}</a>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Deloren Comex. {t('footer.rights')}
          </p>
          <nav aria-label="Links legais" className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}