import { HomePageMetadata } from "@/metadata";

export default function sitemap() {
  return [
    {
      url: HomePageMetadata.metadataBase,
      lastModified: new Date(),
    },
  ];
}
