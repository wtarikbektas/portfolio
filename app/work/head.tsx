import { siteConfig, services } from "@/lib/seo";

export default function Head() {
  const pageUrl = `${siteConfig.url}/work`;

  return (
    <>
      <title>Yazılım Hizmetleri | W3M Yazılım Ofisi</title>
      <meta
        name="description"
        content="W3M'nin kurumsal web sitesi, e-ticaret, özel yazılım, mobil uygulama, veri robotları, yapay zeka ve otomasyon hizmetlerini keşfedin."
      />
      <meta
        name="keywords"
        content="yazılım hizmetleri, kurumsal web sitesi, e-ticaret çözümleri, özel yazılım, mobil uygulama geliştirme, yapay zeka, otomasyon"
      />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Yazılım Hizmetleri | W3M Yazılım Ofisi"
      />
      <meta
        property="og:description"
        content="Kurumsal yazılım, e-ticaret, mobil uygulama ve otomasyon çözümleri için W3M hizmet kataloğu."
      />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteConfig.fullName} />
      <meta
        property="og:image"
        content={`${siteConfig.url}${siteConfig.ogImage}`}
      />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Yazılım Hizmetleri | W3M Yazılım Ofisi"
      />
      <meta
        name="twitter:description"
        content="Kurumsal web, e-ticaret, özel yazılım, mobil uygulama ve yapay zeka çözümleri."
      />
      <meta
        name="twitter:image"
        content={`${siteConfig.url}${siteConfig.ogImage}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "W3M Yazılım Hizmetleri",
            url: pageUrl,
            description:
              "W3M'nin kurumsal web, e-ticaret, özel yazılım, mobil uygulama ve otomasyon hizmetleri.",
            inLanguage: "tr-TR",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: services.map((service, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: service.name,
                description: service.description,
              })),
            },
          }),
        }}
      />
    </>
  );
}
