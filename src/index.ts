import { Bundle, DataItem, unbundleData } from "arbundles";

export interface Tags {
  [key: string]: string
}

async function fetchBundle(url: string): Promise<Buffer> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}, status code: ${res.status}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function unbundleUrl(url: string): Promise<Bundle> {
  const data = unbundleData(await fetchBundle(url));
  return data;
}

export function getBundleFeed(bundle: Bundle, id: number = 0): string {
  const item = bundle.get(id);
  const contentType = flattenTagArray(item.tags)["Content-Type"];
  const blob = new Blob([item.rawData], { type: contentType });
  return URL.createObjectURL(blob);
}

function flattenTagArray(input: { name: string; value: string }[]): Tags {
  return input.reduce((acc, item) => {
    const sanitizedName = item.name.replace(/-/g, "_").toLowerCase();
    acc[sanitizedName] = item.value;
    return acc;
  }, {} as Tags);
}

export async function bundleToVideo(url: string): Promise<string> {
  const bundle = await unbundleUrl(url);
  return getBundleFeed(bundle);
}
