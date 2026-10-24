import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

// Social images render outside the page, so Once UI's CSS variables aren't available:
// the brand and traffic-light colors are spelled out here.
const colors = {
  page: '#000000',
  text: '#ffffff',
  muted: '#a1a1aa',
  red: '#ef4444',
  amber: '#f59e0b',
  green: '#22c55e',
};

const fontDir = join(process.cwd(), 'node_modules/geist/dist/fonts/geist-sans');

interface OgImageOptions {
  eyebrow: string;
  title: string;
  /** Second headline line, in red. */
  accent: string;
  quote: string;
}

/** 1200×630 card: traffic light, headline and quote on the left, portrait on the right. */
export async function renderOgImage({ eyebrow, title, accent, quote }: OgImageOptions) {
  const [regular, bold, italic, portrait] = await Promise.all([
    readFile(join(fontDir, 'Geist-Regular.ttf')),
    readFile(join(fontDir, 'Geist-Bold.ttf')),
    readFile(join(fontDir, 'Geist-Italic.ttf')),
    readFile(join(process.cwd(), 'public/andre0.jpg')),
  ]);
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: colors.page,
          color: colors.text,
          fontFamily: 'Geist',
        }}
      >
        {/* Red glow from the top left */}
        <div
          style={{
            position: 'absolute',
            top: -260,
            left: -260,
            width: 900,
            height: 900,
            display: 'flex',
            background: 'radial-gradient(circle, rgba(239,68,68,0.35), rgba(0,0,0,0) 70%)',
          }}
        />

        {/* Portrait on the right, fading into the background */}
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only renders plain img */}
        <img
          src={portraitSrc}
          alt=""
          width={520}
          height={630}
          style={{ position: 'absolute', top: 0, right: 0, width: 520, height: 630, objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 520,
            height: 630,
            display: 'flex',
            background: 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Text */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 780,
            height: '100%',
            padding: '64px 72px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Vertical housing, so it reads as a traffic light rather than window controls */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                width: 44,
                padding: '10px 0',
                borderRadius: 12,
                background: '#18181b',
                border: '2px solid #3f3f46',
              }}
            >
              {[colors.red, colors.amber, colors.green].map((color) => (
                <div
                  key={color}
                  style={{ width: 22, height: 22, borderRadius: 11, background: color, boxShadow: `0 0 18px ${color}` }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', fontSize: 24, letterSpacing: 4, color: colors.muted, textTransform: 'uppercase' }}>
              {eyebrow}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 92,
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: -2,
              }}
            >
              <span>{title}</span>
              <span style={{ color: colors.red }}>{accent}</span>
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 30, fontStyle: 'italic', lineHeight: 1.35, color: colors.muted }}>
            {quote}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Geist', data: regular, weight: 400, style: 'normal' },
        { name: 'Geist', data: bold, weight: 700, style: 'normal' },
        { name: 'Geist', data: italic, weight: 400, style: 'italic' },
      ],
    },
  );
}
