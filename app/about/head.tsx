import { siteConfig } from "@/lib/seo";

export default function Head() {
  const pageUrl = `${siteConfig.url}/about`;

  return (
    <>
      <title>Hakkımızda | W3M Yazılım Ofisi</title>
      <meta
        name="description"
        content="W3M hakkında kısa bilgi ve yönlendirme. Bu sayfa geçici olarak LinkedIn profiline yönlendirilmektedir."
      />
      <link rel="canonical" href={pageUrl} />
      <meta name="robots" content="noindex,nofollow" />
      <meta property="og:title" content="Hakkımızda | W3M Yazılım Ofisi" />
      <meta
        property="og:description"
        content="W3M hakkında kısa bilgi ve yönlendirme sayfası."
      />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.fullName} />
    </>
  );
}
