import { LinkType } from "@/components/Table/Table";

export function getUrlType(url: string): LinkType {
  if (typeof url !== "string") return "commonUrl";

  const patterns = {
    github: /github\.com/,
    playStore: /play\.google\.com\/store\/apps/,
    appStore: /apps\.apple\.com\/[a-z]{2}\/app/,
  };

  for (const [type, regex] of Object.entries(patterns)) {
    if (regex.test(url)) return type as LinkType;
  }

  return "commonUrl";
}
