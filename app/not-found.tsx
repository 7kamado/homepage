"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "../lib/i18n/language-context"
import { Button } from "../components/ui/button"
import { FadeIn } from "../components/animations"

export default function NotFound() {
  const { language } = useLanguage()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <FadeIn>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black mb-4">404</h1>
          <h2 className="text-2xl font-medium text-neutral-700 mb-6">
            {language === "ja" ? "ページが見つかりません" : "Page Not Found"}
          </h2>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            {language === "ja" 
              ? "お探しのページは存在しないか、移動した可能性があります。" 
              : "The page you are looking for doesn't exist or has been moved."}
          </p>
          <Link href="/" passHref>
            <Button className="bg-black hover:bg-neutral-800 text-white">
              {language === "ja" ? "ホームに戻る" : "Back to Home"}
            </Button>
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}
