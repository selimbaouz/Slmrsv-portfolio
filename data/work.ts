import Themify1 from "../public/images/themify1.webp";
import Themify2 from "../public/images/themify2.webp";
import Bright from "../public/images/bright.png";
import Beautycare from "../public/images/beautycare.png";
import Maely from "../public/images/maely.png";
import Luxurm from "../public/images/luxurm.png";
import Bagisty from "../public/images/bagisty.png";
import Wemom from "../public/images/wemom.png";
import HelloPurly from "../public/images/hellopurly.png";
import HelloPurlyMobile from "../public/images/hellopurly-mobile.png";
import HelloPurlyMockup from "../public/images/hellopurly-cover.png";
import Notisucess from "../public/images/notisuccess.png";
import TailwindLiquid from "../public/images/tailwindliquid.png";
import MosqiBlock from "../public/images/MosqiBlock.png"
import { Case } from "@/types/types";

export const navLinks = [
  { href: "/works", label: "Works" },
  { href: "https://medium.com/@selimbaouz", label: "Blog" },
  { href: "/support", label: "Support" },
  { href: "/legal-notice", label: "Legal Notice" },
]; 

export const worksData = [
  {
    title: "Mosqi\nBlock",
    category: "Shopify Headless",
    date: "2025",
    image: MosqiBlock,
    backgroundColor: "#F3F1FE",   // Jaune pâle doux
    color: "#222140",             // Bleu nuit saturé
    slug: "mosqiblock",
  },
  {
    title: "Tailwind\nLiquid",
    category: "Saas",
    date: "2025",
    image: TailwindLiquid,
    backgroundColor: "#B8FFF8",   // Cyan pastel
    color: "#22223B",             // Bleu marine intense
    slug: "tailwindliquid",
  },
  {
    title: "Bagisty",
    category: "Shopify Headless",
    date: "2025",
    image: Bagisty,
    backgroundColor: "#FFD6D6",   // Rose très clair
    color: "#490B3D",             // Prune foncée
    slug: "bagisty",
  },
  {
    title: "Luxurm",
    category: "Shopify Headless",
    date: "2025",
    image: Luxurm,
    backgroundColor: "#EEF2FB",   // Bleu gris très clair
    color: "#152D35",             // Bleu sarcelle foncé
    slug: "luxurm",
  },
  {
    title: "Wewom",
    category: "Shopify Headless",
    date: "2025",
    image: Wemom,
    backgroundColor: "#FFD6D2",   // Pêche clair
    color: "#611C35",             // Bordeaux
    slug: "wewom",
  },
  {
    title: "Hello\nPurly",
    category: "Shopify Headless",
    date: "2024",
    image: HelloPurlyMobile,
    backgroundColor: "#30304A",   // Gris bleu foncé
    color: "#FFEEA9",             // Jaune albâtre pastel
    slug: "hellopurly",
  },
  {
    title: "Noti\nSuccess",
    category: "Notifications",
    date: "2024",
    image: Notisucess,
    backgroundColor: "#24202B",   // Violet gris très sombre
    color: "#F4B393",             // Abricot doux
    slug: "notisuccess",
  },
  {
    title: "Themify",
    category: "Product",
    date: "2023",
    image: Themify1,
    backgroundColor: "#C9D6FF",   // Bleu lavande glacier
    color: "#403B4A",             // Gris charbon bleu
    slug: "themify",
  },
  {
    title: "Maely",
    category: "Theme Shopify Custom",
    date: "2023",
    image: Maely,
    backgroundColor: "#232526",   // Anthracite/noir chaud
    color: "#FEC9C9",             // Rose crémeux nude
    slug: "maely",
  },
  {
    title: "Beauty\nCare",
    category: "Theme Shopify Custom",
    date: "2023",
    image: Beautycare,
    backgroundColor: "#ECF2F9",   // Bleu poudre ultra-pâle
    color: "#073B4C",             // Bleu pétrole
    slug: "beautycare",
  },
  {
    title: "Bright",
    category: "Theme Shopify Custom",
    date: "2023",
    image: Bright,
    backgroundColor: "#191716",   // Noir subtil
    color: "#FFE066",             // Jaune pastel solaire
    slug: "bright",
  },
];


export const worksBySlugData: Case[] = [
   {
    title: "MosqiBlock",
    category: "Shopify Headless",
    date: "2025",
    images: [MosqiBlock],
    slug: "colorduo",
    company: "Selim Baouz",
    role: "Application Developer",
    construction: "ReactJs, Canva Sdk, Typescript",
    content: "Helps designers choose complementary color pairs tailored to their project, promoting aesthetic harmony and brand coherence within Canva.",
    siteUrl: "",
  },
   {
    title: "TailwindLiquid",
    category: "Shopify Headless",
    date: "2025",
    images: [TailwindLiquid],
    slug: "tailwindliquid",
    company: "Selim Baouz",
    role: "Founder",
    construction: "Shopify, NextJs, Tailwindcss, Prisma",
    content: "An accessible alternative to premium themes and paid apps on Shopify, enabling merchants to easily professionalize their stores with a simple copy-paste.",
    siteUrl: "https://tailwindliquid.com/",
  },
  {
    title: "Bagisty",
    category: "Shopify Headless",
    date: "2025",
    images: [Bagisty],
    slug: "bagisty",
    company: "Selim Baouz",
    role: "UX/UI Designer",
    construction: "Figma",
    content: "Bagisty is an e-commerce store specializing in leather goods with a minimalist aesthetic and optimized user experience.",
    siteUrl: "",
  },
  {
    title: "Luxurm",
    category: "Shopify Headless",
    date: "2025",
    images: [Luxurm],
    slug: "luxurm",
    company: "Selim Baouz",
    role: "UX/UI Designer",
    construction: "Figma",
    content: "Luxurm is an online store dedicated to high-end perfumes, showcasing the essence of olfactory luxury through an immersive experience.",
    siteUrl: "",
  },
  {
    title: "Wewom",
    category: "Shopify Headless",
    date: "2025",
    images: [Wemom],
    slug: "wewom",
    company: "Selim Baouz",
    role: "UX/UI Designer",
    construction: "Figma",
    content: "Wewom is a store dedicated to the safety of expectant mothers, featuring an essential product: a belt that effectively protects both mother and baby.",
    siteUrl: "https://headless-template-nextjs.vercel.app/",
  },
  {
    title: "HelloPurly",
    category: "Shopify Headless",
    date: "2024",
    images: [HelloPurlyMockup, HelloPurly],
    slug: "hellopurly",
    company: "Selim Baouz",
    role: "UX/UI Design and Development",
    construction: "Figma, Shopify Headless, Next.js, React, Tailwindcss",
    content: "HelloPurly is a headless Shopify store dedicated to modern bidets, designed to transform daily hygiene while minimizing ecological impact. Fully developed, from design to integration, it combines innovation and sustainability.",
    siteUrl: "https://hellopurly.fr/",
  },
  {
    title: "Notisuccess",
    category: "Notifications",
    date: "2024",
    images: [Notisucess],
    slug: "notisuccess",
    company: "Selim Baouz",
    role: "Front-End Developer",
    construction: "Next.js, React, Tailwindcss",
    content: "Notisuccess is a generator for fake Stripe payment notifications.",
    siteUrl: "https://notisuccess.vercel.app/",
  },
  {
    title: "Themify",
    category: "Product",
    date: "2023",
    images: [Themify1, Themify2],
    slug: "themify",
    company: "Selim Baouz",
    role: "UX/UI Designer and FullStack Developer",
    construction: "Figma, NextJs, ReactJs, Tailwindcss, Strapi, Snipcart",
    content: "I created Themify to practice designing a fully custom e-commerce site, developed with Next.js for the front-end and Strapi for the back-end, integrating Snipcart for secure cart management.",
    siteUrl: 'https://github.com/selimbaouz/Themify',
  },
  {
    title: "Maely",
    category: "Shopify Custom Theme",
    date: "2023",
    images: [Maely],
    slug: "maely",
    company: "Selim Baouz",
    role: "Shopify Theme Creator",
    construction: "Liquid, Figma, Shopify",
    content: "Maely, Bright, and BeautyCare are three custom Shopify themes I created to learn UX/UI design and master Liquid code. \nPassword: sejiux.",
    siteUrl: "https://theme-maely.myshopify.com/",
  },
  {
    title: "Beautycare",
    category: "Shopify Custom Theme",
    date: "2023",
    images: [Beautycare],
    slug: "beautycare",
    company: "Selim Baouz",
    role: "Shopify Theme Creator",
    construction: "Liquid, Figma, Shopify",
    content: "Maely, Bright, and BeautyCare are three custom Shopify themes I created to learn UX/UI design and master Liquid code. \nPassword: sejiux.",
    siteUrl: "https://theme-beautycare.myshopify.com/",
  },
  {
    title: "Bright",
    category: "Shopify Custom Theme",
    date: "2023",
    images: [Bright],
    slug: "bright",
    company: "Selim Baouz",
    role: "Shopify Theme Creator",
    construction: "Liquid, Figma, Shopify",
    content: "Maely, Bright, and BeautyCare are three custom Shopify themes I created to learn UX/UI design and master Liquid code. \nPassword: sejiux.",
    siteUrl: "https://theme-bright.myshopify.com/",
  },
];

export const legalsPagesData = (handle: string) => {
  switch (handle) {
    case "legal-notice":
      return {
        title: "Legal Notice",
        data: [
          {
            title: "1. Legal Information",
            content: `
            Creator of the site: Selim Baouz
            Publisher: Selim Baouz
            Address: 5 rue Marcel Sembat, 83200 Toulon, France
            Email: slmrsv.bz@gmail.com
            SIRET number: 83012126500037`,
          },
          {
            title: "2. Hosting",
            content: `
            Host: Vercel Inc.
            Address: 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            Website: vercel.com`,
          },
          {
            title: "3. Intellectual Property",
            content: `All content on this site (texts, images, videos, logos, etc.) is protected by intellectual property laws. Any reproduction, in whole or in part, without written permission is prohibited.`,
          },
          {
            title: "4. Use of Third-Party Services",
            content: `This site uses third-party tools like Canva and Shopify to enhance the user experience. By using this site, you agree to the terms and conditions of these services in addition to ours. Please refer to Canva and Shopify's privacy policies for more details on how your data is handled.`,
          },
          {
            title: "5. Privacy Policy",
            content: `We respect your privacy and are committed to protecting your personal information. Data collected is anonymized and only used to analyze traffic and improve the site. No personal data is sold or shared, except for technical purposes required by services like Vercel, Canva, and Shopify. You have the right to access, correct, or delete your data by contacting us at slmrsv.bz@gmail.com.`,
          },
          {
            title: "6. Cookies",
            content: `No cookies are used to collect personal data. However, technical cookies may be generated for the operation of analytical services.`,
          },
          {
            title: "7. Terms of Use",
            content: `By using this site, you agree not to use it for illegal or harmful purposes. Access to the site is provided as-is, and no guarantees are made regarding its availability.`,
          },
          {
            title: "8. Applicable Law",
            content: `These legal terms are governed by French law. In case of a dispute, the competent courts will be those of Toulon, France.`,
          },
        ],
      };
    case "support":
      return {
        title: "Support",
        data: [
          {
            title: "1. How to Get Support",
            content: `If you need any assistance or have any questions about the site or services, please do not hesitate to contact me directly at the following email address: slmrsv.bz@gmail.com. I am here to help you!`,
          },
        ],
      };
    default:
      return {
        title: "Page Not Found",
        data: [
          {
            title: "Error 404",
            content: "The page you requested does not exist.",
          },
        ],
      };
  }
};
