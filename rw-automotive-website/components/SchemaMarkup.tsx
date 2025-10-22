export default function SchemaMarkup() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'RW General Automotive and Tire Services',
    image: 'https://rwgeneralautomotiveandtires.com/logo.jpg',
    '@id': 'https://rwgeneralautomotiveandtires.com',
    url: 'https://rwgeneralautomotiveandtires.com',
    telephone: '+1-404-429-0256',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3795 Kings Hwy',
      addressLocality: 'Douglasville',
      addressRegion: 'GA',
      postalCode: '30135',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.7490,
      longitude: -84.7458,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:30',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/rwautomotive',
      'https://www.instagram.com/rwautomotive',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RW General Automotive and Tire Services',
    url: 'https://rwgeneralautomotiveandtires.com',
    logo: 'https://rwgeneralautomotiveandtires.com/logo.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-404-429-0256',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
