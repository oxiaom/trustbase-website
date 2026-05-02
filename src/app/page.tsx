"use client";

import { useState } from "react";
import Link from "next/link";
import { translations, Language } from "@/lib/translations";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// SVG Icons
const DecentralizedIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="12" r="6" className="fill-blue-400" />
    <circle cx="12" cy="36" r="6" className="fill-blue-400" />
    <circle cx="36" cy="36" r="6" className="fill-blue-400" />
    <path d="M24 18 L12 30 M24 18 L36 30 M12 36 L36 36" className="stroke-blue-400" strokeWidth="2" />
  </svg>
);

const GovernanceIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
    <rect x="8" y="20" width="12" height="20" rx="2" className="fill-purple-400" />
    <rect x="20" y="12" width="12" height="28" rx="2" className="fill-purple-500" />
    <rect x="32" y="24" width="12" height="16" rx="2" className="fill-purple-400" />
    <circle cx="14" cy="8" r="4" className="fill-purple-300" />
    <circle cx="26" cy="8" r="4" className="fill-purple-300" />
    <circle cx="38" cy="8" r="4" className="fill-purple-300" />
  </svg>
);

const NetworkIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" className="stroke-green-400" strokeWidth="2" fill="none" />
    <circle cx="24" cy="24" r="8" className="stroke-green-400" strokeWidth="2" fill="none" />
    <circle cx="24" cy="24" r="3" className="fill-green-400" />
    <path d="M24 8 L24 16 M24 32 L24 40 M8 24 L16 24 M32 24 L40 24" className="stroke-green-400" strokeWidth="2" />
  </svg>
);

const SDKIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
    <rect x="4" y="8" width="40" height="32" rx="4" className="stroke-orange-400" strokeWidth="2" fill="none" />
    <path d="M12 20 L20 28 L12 36" className="stroke-orange-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 20 L36 20 M28 28 L36 28 M28 36 L36 36" className="stroke-orange-400" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GameIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <rect x="4" y="12" width="32" height="20" rx="4" className="fill-blue-400" />
    <circle cx="12" cy="22" r="4" className="fill-blue-600" />
    <circle cx="28" cy="18" r="2" className="fill-blue-600" />
    <circle cx="32" cy="22" r="2" className="fill-blue-600" />
    <circle cx="28" cy="26" r="2" className="fill-blue-600" />
  </svg>
);

const TutorialIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="4" width="28" height="32" rx="2" className="fill-green-400" />
    <path d="M12 12 L28 12 M12 18 L28 18 M12 24 L20 24" className="stroke-green-600" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <rect x="4" y="8" width="24" height="24" rx="2" className="fill-purple-400" />
    <polygon points="32,14 40,20 32,26" className="fill-purple-400" />
    <polygon points="12,14 20,20 12,26" className="fill-purple-600" />
  </svg>
);

const BlogIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="4" width="28" height="32" rx="2" className="fill-orange-400" />
    <path d="M10 10 L30 10 M10 16 L30 16 M10 22 L24 22 M10 28 L18 28" className="stroke-orange-600" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  const [lang, setLang] = useState<Language>("zh");
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(lang === "en" ? "zh" : "en");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="border-b border-gray-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t.brand}
            </div>
            <div className="flex items-center space-x-6">
              <LanguageSwitcher lang={lang} onToggle={toggleLanguage} />
              <Link href="/docs" className="hover:text-blue-400 transition-colors">
                {t.docs}
              </Link>
              <Link href="/team" className="hover:text-blue-400 transition-colors">
                {t.team}
              </Link>
              <Link href="/community" className="hover:text-blue-400 transition-colors">
                {t.community}
              </Link>
              <a
                href="https://github.com/oxiaom/trustcoin-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t.heroTitle}
        </h1>
        <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {t.heroSubtitle}
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.heroDesc}
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/docs"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t.getStarted}
          </Link>
          <a
            href="https://github.com/oxiaom/trustcoin-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">{t.featuresTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="mb-4">
              <DecentralizedIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">{t.feature1Title}</h3>
            <p className="text-gray-400">{t.feature1Desc}</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="mb-4">
              <GovernanceIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">{t.feature2Title}</h3>
            <p className="text-gray-400">{t.feature2Desc}</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="mb-4">
              <NetworkIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">{t.feature3Title}</h3>
            <p className="text-gray-400">{t.feature3Desc}</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="mb-4">
              <SDKIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">{t.feature4Title}</h3>
            <p className="text-gray-400">{t.feature4Desc}</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 py-20 bg-gray-800/50">
        <h2 className="text-4xl font-bold text-center mb-16">{t.useCasesTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mb-4">
              <GameIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">{t.useCase1Title}</h3>
            <p className="text-gray-400">{t.useCase1Desc}</p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <TutorialIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">{t.useCase2Title}</h3>
            <p className="text-gray-400">{t.useCase2Desc}</p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <VideoIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">{t.useCase3Title}</h3>
            <p className="text-gray-400">{t.useCase3Desc}</p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <BlogIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">{t.useCase4Title}</h3>
            <p className="text-gray-400">{t.useCase4Desc}</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">{t.techStackTitle}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-3 text-blue-400">{t.chainLayer}</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Cosmos SDK v0.53.6</li>
              <li>• CometBFT</li>
              <li>• Go 1.24.1</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-3 text-purple-400">{t.p2pNetwork}</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• IPv6 Priority</li>
              <li>• Auto NAT Traversal</li>
              <li>• Self-hosted Relay</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-3 text-pink-400">{t.devTools}</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• JavaScript SDK</li>
              <li>• Python SDK</li>
              <li>• 28 API Tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
        <p className="text-xl text-gray-300 mb-8">{t.ctaDesc}</p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/community"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all"
          >
            {t.learnMore}
          </Link>
          <a
            href="https://github.com/oxiaom/trustcoin-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t.footerBrand}
              </div>
              <p className="text-gray-400">{t.footerDesc}</p>
            </div>
            <div>
              <div className="font-bold mb-4">{t.footerDocs}</div>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/docs/api" className="hover:text-white">{t.footerApiDocs}</Link></li>
                <li><Link href="/docs/sdk" className="hover:text-white">{t.footerSdkDocs}</Link></li>
                <li><Link href="/docs/guide" className="hover:text-white">{t.footerDevGuide}</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-4">{t.footerCommunity}</div>
              <ul className="text-gray-400 space-y-2">
                <li><a href="https://github.com/oxiaom/trustcoin-ecommerce" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
                <li><Link href="/community" className="hover:text-white">Discord</Link></li>
                <li><Link href="/blog" className="hover:text-white">{lang === "zh" ? "博客" : "Blog"}</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-4">{t.footerAbout}</div>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/team" className="hover:text-white">{t.team}</Link></li>
                <li><Link href="/community" className="hover:text-white">{t.footerContributors}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>{t.footerCopyright}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}