declare module 'tarteaucitronjs' {
  interface TarteaucitronOptions {
    privacyUrl?: string
    hashtag?: string
    cookieName?: string
    orientation?: 'top' | 'bottom'
    showAlertSmall?: boolean
    cookieslist?: boolean
    adblocker?: boolean
    DenyAllCta?: boolean
    AcceptAllCta?: boolean
    highPrivacy?: boolean
    handleBrowserDNTRequest?: boolean
    removeCredit?: boolean
    moreInfoLink?: boolean
    useExternalCss?: boolean
    useExternalJs?: boolean
    readmoreLink?: string
    mandatory?: boolean
  }

  interface Tarteaucitron {
    init: (options: TarteaucitronOptions) => void
    job?: string[]
  }

  const tarteaucitron: Tarteaucitron
  export default tarteaucitron
}
