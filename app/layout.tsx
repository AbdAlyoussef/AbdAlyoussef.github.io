import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  url: siteUrl,
  name: 'Abdul Rahman Alyoussef',
  alternateName: [
    'Abdulrahman Alyoussef',
    'Abdul Rahman Al-Youssef',
    'عبد الرحمن اليوسف',
    'عبدالرحمن اليوسف',
  ],
  jobTitle: 'AI Engineer and Researcher',
  description:
    'AI Engineer and Research Assistant at Fraunhofer SCAI working across scientific AI, agentic systems, language models, reinforcement learning, machine learning, and deep learning.',
  affiliation: [
    {
      '@type': 'Organization',
      name: 'Fraunhofer Institute for Algorithms and Scientific Computing SCAI',
      url: 'https://www.scai.fraunhofer.de/en.html',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Bonn',
      url: 'https://www.uni-bonn.de/en',
    },
  ],
  knowsAbout: [
    'Agentic AI',
    'Large language models',
    'Reinforcement learning',
    'Machine learning',
    'Deep learning',
    'Representation learning',
    'AI-driven scientific discovery',
  ],
  sameAs: ['https://github.com/AbdAlyoussef'],
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Abdul Rahman Alyoussef — AI Engineer & Researcher',
  description:
    'Portfolio of Abdul Rahman Alyoussef, AI Engineer and Research Assistant in AI-driven Scientific Discovery at Fraunhofer SCAI.',
  applicationName: 'Abdul Rahman Alyoussef — Portfolio',
  authors: [{ name: 'Abdul Rahman Alyoussef', url: siteUrl }],
  creator: 'Abdul Rahman Alyoussef',
  keywords: [
    'Abdul Rahman Alyoussef',
    'Abdulrahman Alyoussef',
    'Abdul Rahman Al-Youssef',
    'عبد الرحمن اليوسف',
    'عبدالرحمن اليوسف',
    'AI Engineer',
    'AI Researcher',
    'Fraunhofer SCAI',
    'Agentic AI',
    'Large Language Models',
    'Reinforcement Learning',
    'Machine Learning',
    'Deep Learning',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Abdul Rahman Alyoussef — AI Engineer & Researcher',
    description:
      'AI engineering and research across agentic AI, language models, reinforcement learning, representation learning, and machine learning.',
    type: 'website',
    siteName: 'Abdul Rahman Alyoussef',
    locale: 'en_US',
    url: '/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Abdul Rahman Alyoussef — AI Engineer & Researcher' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Rahman Alyoussef — AI Engineer & Researcher',
    description:
      'AI engineering and research across agentic AI, language models, reinforcement learning, representation learning, and machine learning.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
