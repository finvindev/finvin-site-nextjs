import { site } from "@/content/site";

export default function sitemap() {
  const paths = ["", "/services", "/investments", "/events"];

  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
