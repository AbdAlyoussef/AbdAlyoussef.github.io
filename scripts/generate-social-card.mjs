import sharp from 'sharp';

const [source, destination = 'public/og.png'] = process.argv.slice(2);

if (!source) {
  throw new Error('Pass the generated background path as the first argument.');
}

const overlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" x2="1">
        <stop offset="0" stop-color="#090a0b" stop-opacity="0.94"/>
        <stop offset="0.48" stop-color="#090a0b" stop-opacity="0.57"/>
        <stop offset="0.77" stop-color="#090a0b" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <rect width="930" height="630" fill="url(#fade)"/>

    <g transform="translate(68 58)">
      <rect width="58" height="58" rx="14" fill="#0b0c0d" stroke="#3a3633" stroke-width="1.5"/>
      <path d="M15 43 29 15 43 43" fill="none" stroke="#f1ede7" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.5 33h15" fill="none" stroke="#c77752" stroke-width="5" stroke-linecap="round"/>
      <circle cx="43" cy="43" r="3.5" fill="#c77752"/>
    </g>

    <text x="145" y="83" fill="#aaa39b" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="600" letter-spacing="3.2">PERSONAL PORTFOLIO</text>
    <line x1="68" y1="158" x2="535" y2="158" stroke="#c77752" stroke-width="2"/>

    <text x="64" y="278" fill="#f3efe9" font-family="Segoe UI, Arial, sans-serif" font-size="67" font-weight="700" letter-spacing="-2.2">Abdul Rahman</text>
    <text x="64" y="354" fill="#f3efe9" font-family="Segoe UI, Arial, sans-serif" font-size="67" font-weight="700" letter-spacing="-2.2">Alyoussef</text>

    <text x="68" y="419" fill="#cf805c" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="500">AI Researcher &amp; Engineer</text>
    <text x="68" y="466" fill="#aaa39b" font-family="Segoe UI, Arial, sans-serif" font-size="21" font-weight="400">Fraunhofer SCAI · University of Bonn</text>

    <line x1="68" y1="536" x2="535" y2="536" stroke="#4c4641" stroke-width="1"/>
    <text x="68" y="574" fill="#8f8982" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="500" letter-spacing="0.8">abdalyoussef.github.io</text>
  </svg>
`);

await sharp(source)
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .png({ compressionLevel: 9, adaptiveFiltering: true, quality: 92 })
  .toFile(destination);

console.log(`Wrote ${destination}`);