import React, { FC } from "react";
import NextHead from "next/head";
import { useRouter } from "next/dist/client/router";

export interface HeadProps {
  title?: string;
  description?: string;
  path?: string;
}

const Head: FC<HeadProps> = ({ title, description }) => {
  const router = useRouter();

  return (
    <NextHead>
      <title>{title ? `${title} | Bipandu Apps` : `Bipandu Aps`}</title>
      <meta name="description" content={description || "Kumpulan aplikasi dan informasi islami"}/>
      <link rel="canonical" href={`https://quran.dedihidayat.id${router.pathname}`} />
    </NextHead>
  );
};

export default Head;
