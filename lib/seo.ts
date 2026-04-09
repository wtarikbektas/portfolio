export const siteConfig = {
  name: "W3M",
  fullName: "W3M Yazılım Ofisi",
  url: "https://w3m.com.tr",
  locale: "tr_TR",
  description:
    "W3M; kurumsal web sitesi, e-ticaret, özel yazılım, mobil uygulama, otomasyon ve yapay zeka çözümleri geliştiren bir yazılım ofisidir.",
  keywords: [
    "yazılım ofisi",
    "kurumsal web sitesi",
    "özel yazılım",
    "e-ticaret yazılımı",
    "mobil uygulama geliştirme",
    "otomasyon çözümleri",
    "yapay zeka çözümleri",
    "web robotları",
    "SEO uyumlu web sitesi",
    "w3m",
  ],
  ogImage: "/og-image.svg",
};

export const services = [
  {
    name: "Kurumsal ve reklam web siteleri",
    description: "İçerik odaklı, hızlı ve dönüşüm üreten tanıtım siteleri.",
  },
  {
    name: "E-ticaret çözümleri",
    description: "Satış sürecini ölçekleyen özel e-ticaret altyapıları.",
  },
  {
    name: "Özel yazılım geliştirme",
    description: "İş akışına göre şekillenen web tabanlı yazılım ürünleri.",
  },
  {
    name: "Mobil uygulama geliştirme",
    description: "Android ve iOS odaklı mobil ürün geliştirme.",
  },
  {
    name: "Veri ve web robotları",
    description: "Otomatik veri toplama ve tekrar eden işlemleri hızlandırma.",
  },
  {
    name: "Yapay zeka çözümleri",
    description: "Model destekli iş akışları ve akıllı ürün özellikleri.",
  },
  {
    name: "Otomasyon çözümleri",
    description: "Manuel işleri azaltan, zaman kazandıran sistemler.",
  },
];

export const socialLinks = [
  "https://www.linkedin.com/in/tar%C4%B1k-bekta%C5%9F-2a4b731a8/",
  "https://github.com/wtarikbektas",
  "https://x.com/wtarikbektas",
  "https://t.me/wtarikbektas",
];

export const siteStructuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.fullName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/w3m%20logo.png`,
      sameAs: socialLinks,
      description: siteConfig.description,
      areaServed: "TR",
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.fullName,
      inLanguage: "tr-TR",
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
});
