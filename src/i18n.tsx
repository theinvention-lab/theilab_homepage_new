import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'ko' | 'en'

/** 국문/영문 쌍. 영문이 없으면 국문을 그대로 사용합니다. */
export type L10n = { ko: string; en?: string }

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  /** t('국문', 'English') */
  t: (ko: string, en?: string) => string
  /** 데이터 객체의 국문/영문 필드 선택 */
  pick: (v: L10n | undefined) => string
}

const LangContext = createContext<LangContextValue | null>(null)
const STORAGE_KEY = 'til-lang'

function readStoredLang(): Lang {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    return v === 'en' ? 'en' : 'ko'
  } catch {
    return 'ko'
  }
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* 저장 불가 환경은 무시 */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback((ko: string, en?: string) => (lang === 'en' && en ? en : ko), [lang])
  const pick = useCallback((v: L10n | undefined) => (v ? (lang === 'en' && v.en ? v.en : v.ko) : ''), [lang])

  return <LangContext.Provider value={{ lang, setLang, t, pick }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
