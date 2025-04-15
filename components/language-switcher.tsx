"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { Language } from "@/lib/i18n/translations"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "ja" ? "en" : "ja")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="text-xs font-medium"
    >
      {language === "ja" ? t.language.en : t.language.ja}
    </Button>
  )
}
