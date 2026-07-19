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
        padding: '60px 80px',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
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
        <span
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#f97316',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Prem Raj • Portfolio
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 900,
            lineHeight: 1.1,
            margin: 0,
            color: '#ffffff',
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
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {['Next.js', 'React', 'TypeScript', 'Microservices', 'MERN Stack'].map((tech) => (
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
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
