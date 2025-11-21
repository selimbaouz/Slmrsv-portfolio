export const brandsData = [
  { image: "/images/db.avif", alt: "Dectective Box Logo" },
  { image: "/images/paalm.png", alt: "Paalm Logo" },
  { image: "/images/mushngo.png", alt: "MushnGo Logo" },
  { image: "/images/moea.png", alt: "Moea Logo" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Works" },
  { href: "https://medium.com/@selimbaouz", label: "Blog" },
  { href: "/support", label: "Support" },
  { href: "/legal-notice", label: "Legal Notice" },
]; 

export const socialLinks = [
  { href: "https://linkedin.com/in/selimbaouz/", label: "Linkedin" }
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
