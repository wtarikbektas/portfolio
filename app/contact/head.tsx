import { siteConfig } from "@/lib/seo";

export default function Head() {
  const pageUrl = `${siteConfig.url}/contact`;

  return (
    <>
      <title>İletişim | W3M Yazılım Ofisi</title>
      <meta
        name="description"
        content="Projenizi konuşmak, teklif almak veya yazılım ihtiyaçlarınız için W3M ile iletişime geçin."
      />
      <meta
        name="keywords"
        content="iletişim, teklif al, yazılım ofisi iletişim, kurumsal web sitesi teklif"
      />
      <link rel="canonical" href={pageUrl} />
      <meta
        name="robots"
        content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
      />
      <meta property="og:title" content="İletişim | W3M Yazılım Ofisi" />
      <meta
        property="og:description"
        content="Yazılım projeniz için W3M ile iletişime geçin ve ihtiyaçlarınıza uygun bir çözüm konuşalım."
      />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.fullName} />
      <meta
        property="og:image"
        content={`${siteConfig.url}${siteConfig.ogImage}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="İletişim | W3M Yazılım Ofisi" />
      <meta
        name="twitter:description"
        content="Projeniz için teklif almak veya yazılım ihtiyaçlarınızı konuşmak için W3M ile iletişime geçin."
      />
      <meta
        name="twitter:image"
        content={`${siteConfig.url}${siteConfig.ogImage}`}
      />
    </>
  );
}
