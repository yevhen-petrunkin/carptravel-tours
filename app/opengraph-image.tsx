import { ImageResponse } from "next/server";
import { HomePageMetadata } from "@/metadata";

export const runtime = "edge";

export const alt = "CarpTravel Homepage";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const imgUrl = `url(${HomePageMetadata.openGraph.url}/assets/xl/hero-xl.jpg)`;

  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex items-center justify-center text-white text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px]"
        style={{
          backgroundImage: imgUrl,
        }}
      >
        CarpTravel Homepage
      </div>
    ),
    {
      ...size,
    }
  );
}
