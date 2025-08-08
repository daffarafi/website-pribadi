import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: "Muhammad Daffa'I Rafi Prasetyo",
    alternateName: 'Daffa Rafi',
    jobTitle: 'Web Developer & Designer',
    description:
      "Hi! My name is Muhammad Daffa'I Rafi Prasetyo, 22 years old. I'm a Web Developer and Designer, based in Jakarta, Indonesia.",
    url: 'https://daffarafi.com',
    image: 'https://daffarafi.com/assets/images/profile.jpeg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'Indonesia',
    },
    sameAs: [
      'https://www.instagram.com/daffa.tgi/',
      'https://twitter.com/DaffaTGI',
      'https://github.com/daffarafi',
      'https://www.linkedin.com/in/daffa-rafi/',
      'https://line.me/ti/p/yG3Hze09OI',
      'https://wa.me/6285693478856',
      'https://discordapp.com/users/303537787628552192/',
    ],
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'UI/UX Design',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-856-9347-8856',
      contactType: 'customer service',
      availableLanguage: ['English', 'Indonesian'],
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
