import type { MetadataRoute } from "next";

const base = "https://universalgymumred.com";
const paths = ["", "/about", "/coach", "/equipment", "/ladies-batch", "/transformations", "/membership", "/gallery", "/faq", "/contact", "/free-trial"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${base}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
