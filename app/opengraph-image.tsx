import { ImageResponse } from 'next/og';

export const alt = 'Prem Raj | Full Stack Developer & AI SaaS Architect';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)',
        backgroundSize: '50px 50px',
        padding: '60px 80px',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top Header Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: 'rgba(249, 115, 22, 0.15)',
          border: '1px solid rgba(249, 115, 22, 0.4)',
          borderRadius: '50px',
          padding: '8px 24px',
        }}
      >
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#f97316',
          }}
        />
        <span
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#f97316',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Portfolio & Systems Showcase
        </span>
      </div>

      {/* Hero Title & Subtitle */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 900,
            lineHeight: 1.1,
            margin: 0,
            color: '#ffffff',
            letterSpacing: '-1px',
          }}
        >
          Prem Raj
        </h1>
        <p
          style={{
            fontSize: '32px',
            fontWeight: 700,
            margin: 0,
            color: '#f97316',
          }}
        >
          Full Stack Developer & AI SaaS Architect
        </p>
        <p
          style={{
            fontSize: '22px',
            fontWeight: 400,
            margin: 0,
            color: '#a3a3a3',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          Architecting scalable Next.js & React web applications, microservices, and AI
          integrations.
        </p>
      </div>

      {/* Bottom Tech Badges */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        {['Next.js', 'React', 'TypeScript', 'Microservices', 'MERN Stack', 'Node.js', 'WebRTC'].map(
          (tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '8px 18px',
                fontSize: '18px',
                fontWeight: 600,
                color: '#e5e5e5',
              }}
            >
              {tech}
            </div>
          ),
        )}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
