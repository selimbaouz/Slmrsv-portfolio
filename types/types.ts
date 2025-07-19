import { StaticImageData } from "next/image";

export type Article = {
  link: string;
  date: string;
  title: string;
  ReadingTime: string;
};

export type WorksData = {
  title: string;
  category: string;
  date: string;
  slug: string;
  image: StaticImageData;
  backgroundColor: string;
  color: string;
}

export type Case = {
  title: string;
  category: string;
  date: string;
  company: string | null;
  role: string | null;
  construction: string | null;
  content: string | null;
  slug: string;
  siteUrl: string | null;
  images: StaticImageData[];
  backgroundColor: string;
  color: string;
} | null;

