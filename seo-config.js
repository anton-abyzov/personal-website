// SEO Configuration for antonabyzov.com
// This file centralizes all SEO-related settings and integrations

const SEOConfig = {
  // Site Information
  site: {
    url: 'https://antonabyzov.com',
    title: 'Anton Abyzov - Technology Evangelist & Digital Transformation Pioneer',
    description: 'Technology Evangelist & Digital Transformation Pioneer with 15+ years driving enterprise innovation through cloud-native architectures and AI/ML solutions',
    author: 'Anton Abyzov',
    email: 'anton.abyzov@gmail.com',
    locale: 'en_US',
    type: 'website'
  },

  // Social Media Profiles (for structured data)
  social: {
    twitter: '@aabyzov',
    linkedin: 'https://linkedin.com/in/antonabyzov',
    github: 'https://github.com/anton-abyzov',
    scholar: 'https://scholar.google.com/citations?user=fvm5dY-8Q3EC'
  },

  // Analytics Configuration
  analytics: {
    // Google Analytics 4
    ga4: {
      measurementId: 'G-XXXXXXXXXX', // TODO: Replace with actual GA4 measurement ID
      enabled: true
    },
    // Google Tag Manager (optional)
    gtm: {
      containerId: 'GTM-XXXXXXX', // TODO: Add if using GTM
      enabled: false
    }
  },

  // Monetization
  monetization: {
    kofi: {
      username: 'antonabyzov', // TODO: Replace with actual Ko-fi username
      widgetEnabled: true,
      floatingButton: true,
      buttonColor: '#ff5e5b'
    },
    stripe: {
      publicKey: 'pk_live_XXXXXXXXXX', // TODO: Replace with actual Stripe public key
      currency: 'USD',
      products: [
        {
          id: 'consultation-1hr',
          name: '1-Hour Technology Consultation',
          description: 'Personal consultation on technology strategy and architecture',
          price: 250,
          currency: 'USD'
        },
        {
          id: 'workshop-full',
          name: 'Full Day Workshop',
          description: 'Comprehensive workshop on cloud-native architectures and AI/ML',
          price: 2500,
          currency: 'USD'
        },
        {
          id: 'advisory-monthly',
          name: 'Monthly Technology Advisory',
          description: 'Ongoing technology advisory and mentorship',
          price: 5000,
          currency: 'USD',
          recurring: true
        }
      ]
    }
  },

  // SEO Keywords (for content optimization)
  keywords: {
    primary: [
      'Anton Abyzov',
      'Technology Evangelist',
      'Digital Transformation',
      'Platform Architect',
      'Enterprise Architecture'
    ],
    secondary: [
      'Cloud Native Architecture',
      'AI/ML Solutions',
      'DevOps',
      'Kubernetes',
      'Azure',
      'AWS',
      'Solution Architecture',
      'Machine Learning',
      'Platform Engineering',
      'Technical Leadership'
    ],
    longtail: [
      'enterprise cloud migration strategy',
      'AI implementation in enterprise',
      'cloud native application development',
      'digital transformation consulting',
      'platform architecture best practices',
      'kubernetes enterprise deployment',
      'ML ops implementation',
      'technology strategy consulting'
    ]
  },

  // Performance Targets (Core Web Vitals)
  performance: {
    targets: {
      lcp: 2500, // Largest Contentful Paint (ms)
      fid: 100,  // First Input Delay (ms)
      cls: 0.1,  // Cumulative Layout Shift
      ttfb: 800  // Time to First Byte (ms)
    }
  },

  // Schema.org Structured Data
  structuredData: {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Anton Abyzov',
      jobTitle: 'Technology Evangelist & Platform Architect',
      description: 'Technology Evangelist & Digital Transformation Pioneer with 15+ years driving enterprise innovation',
      knowsAbout: [
        'Cloud Native Architecture',
        'Artificial Intelligence',
        'Machine Learning',
        'DevOps',
        'Digital Transformation',
        'Kubernetes',
        'Azure',
        'AWS',
        'Enterprise Architecture',
        'Platform Engineering'
      ]
    }
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SEOConfig;
}