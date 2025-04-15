"use client"

import Image from "next/image"
import { ChevronRight, MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーションバー */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/nanakamado-logo.png"
              alt="ななかまど株式会社"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <h1 className="text-xl font-bold text-black">
              ななかまど<span className="text-neutral-500">株式会社</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-neutral-800 hover:text-black transition-colors">
              {t.nav.about}
            </a>
            <a href="#products" className="text-neutral-800 hover:text-black transition-colors">
              {t.nav.products}
            </a>
            <a href="#tourism" className="text-neutral-800 hover:text-black transition-colors">
              {t.nav.tourism}
            </a>
            <a href="#contact" className="text-neutral-800 hover:text-black transition-colors">
              {t.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="outline" className="md:hidden" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-landscape.png" alt="北海道の美しい風景" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              {t.hero.title}
              <br />
              <span className="text-neutral-700">{t.hero.titleHighlight}</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 mb-8">{t.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-neutral-800 text-white">
                {t.hero.cta.details} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-white/80">
                {t.hero.cta.contact}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section id="about" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-80 bg-neutral-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/nanakamado-tree.jpeg"
                    alt="ななかまどの木と実"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-lg"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-sm font-medium text-neutral-500 mb-2">{t.about.subtitle}</h3>
              <h2 className="text-3xl font-bold text-black mb-6">{t.about.title}</h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">{t.about.description1}</p>
              <p className="text-neutral-700 mb-8 leading-relaxed">{t.about.description2}</p>
              <Button variant="outline" className="border-black text-black hover:bg-neutral-100">
                {t.about.cta} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 製品セクション */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-medium text-neutral-500 mb-2">{t.products.subtitle}</h3>
            <h2 className="text-3xl font-bold text-black mb-6">{t.products.title}</h2>
            <p className="text-neutral-700 max-w-2xl mx-auto">{t.products.description}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto bg-neutral-100 relative">
                  <Image
                    src="/images/wander-japan-app.png"
                    alt="Wander Japan アプリ"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-black mb-4">{t.products.productTitle}</h3>
                  <p className="text-neutral-700 mb-6 leading-relaxed">{t.products.productDescription}</p>
                  <Button variant="outline" className="border-black text-black hover:bg-neutral-100 self-start">
                    {t.products.cta} <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 観光セクション */}
      <section id="tourism" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-80 bg-neutral-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/tourism-winter.jpeg"
                    alt="冬の美しい風景 - ファーム富田"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-black rounded-lg"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-sm font-medium text-neutral-500 mb-2">{t.tourism.subtitle}</h3>
              <h2 className="text-3xl font-bold text-black mb-6">{t.tourism.title}</h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">{t.tourism.description1}</p>
              <p className="text-neutral-700 mb-8 leading-relaxed">{t.tourism.description2}</p>
              <Button variant="outline" className="border-black text-black hover:bg-neutral-100">
                {t.tourism.cta} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-medium text-neutral-300 mb-2">{t.contact.subtitle}</h3>
            <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">{t.contact.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-neutral-900 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">{t.contact.form.title}</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>
                <Button className="w-full bg-white hover:bg-neutral-200 text-black">{t.contact.form.submit}</Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-800 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{t.contact.info.address.title}</h4>
                    <p className="text-neutral-300">{t.contact.info.address.value}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-800 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{t.contact.info.email.title}</h4>
                    <p className="text-neutral-300">{t.contact.info.email.value}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-800 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{t.contact.info.phone.title}</h4>
                    <p className="text-neutral-300">{t.contact.info.phone.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-neutral-900 text-neutral-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/nanakamado-logo.png"
                  alt="ななかまど株式会社"
                  width={40}
                  height={40}
                  className="h-10 w-auto brightness-[2]" // フッターでは明るくして見やすく
                />
                <h2 className="text-xl font-bold text-white">
                  ななかまど<span className="text-neutral-400">株式会社</span>
                </h2>
              </div>
              <p className="mt-2 text-neutral-400">{t.footer.tagline}</p>
            </div>
            <nav className="grid grid-cols-2 gap-x-12 gap-y-2 mb-6 md:mb-0">
              <a href="#about" className="hover:text-white transition-colors">
                {t.nav.about}
              </a>
              <a href="#products" className="hover:text-white transition-colors">
                {t.nav.products}
              </a>
              <a href="#tourism" className="hover:text-white transition-colors">
                {t.nav.tourism}
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                {t.nav.contact}
              </a>
            </nav>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p>{t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
