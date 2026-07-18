'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * IntegrationEngineeringIllustration
 * A premium, state-driven SVG illustration demonstrating
 * complex integration flows with a reactive "Living System" feel.
 */
const IntegrationEngineeringIllustration = () => {
  const [systemState, setSystemState] = useState('idle'); // idle, auth_req, authed, pay_req, pay_fail, pay_retry, webhook_success
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const BASE_WIDTH = 940;
  const CANVAS_WIDTH = 900;
  const CANVAS_HEIGHT = 500;

  // Responsiveness Logic
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        const newScale = Math.min(parentWidth / BASE_WIDTH, 1);
        setScale(newScale);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Node Positions (Virtual Coordinates)
  const CORE = { x: 450, y: 250 };
  const NODES = {
    auth: { x: 150, y: 150, label: 'OAuth Provider', icon: '🔐' },
    payment: { x: 750, y: 150, label: 'Payment Gateway', icon: '💳' },
    email: { x: 150, y: 350, label: 'Email Service', icon: '✉️' },
    webhook: { x: 750, y: 350, label: 'Webhook Listener', icon: '🪝' },
  };

  // Helper to trigger Scenario 2 (Chaos Sim)
  const handlePaymentFlow = () => {
    setSystemState('pay_req');
    setTimeout(() => {
      setSystemState('pay_fail');
      setTimeout(() => {
        setSystemState('pay_retry');
        setTimeout(() => {
          setSystemState('webhook_success');
        }, 2000);
      }, 1500);
    }, 1200);
  };

  const Colors = {
    bg: '#0A0F1E',
    line: '#334155',
    accent: '#F8FAFC',
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    packet: '#60A5FA',
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        background: Colors.bg,
        overflow: 'hidden',
        borderRadius: '12px',
        position: 'relative',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* UI Overlay Controls */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
          display: 'flex',
          gap: '10px',
        }}
      >
        <button
          onClick={() => setSystemState('auth_req')}
          style={buttonStyle(systemState === 'auth_req')}
        >
          Connect GitHub
        </button>
        <button onClick={handlePaymentFlow} style={buttonStyle(systemState.includes('pay'))}>
          Process Payment
        </button>
        <button
          onClick={() => setSystemState('idle')}
          style={{ ...buttonStyle(false), opacity: 0.5 }}
        >
          Reset
        </button>
      </div>

      {/* State Monitor Label */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          color: Colors.line,
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        System Status: <span style={{ color: Colors.accent }}>{systemState}</span>
      </div>

      {/* Main SVG Canvas */}
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: `${CANVAS_WIDTH}px`,
          height: `${CANVAS_HEIGHT}px`,
          margin: '0 auto',
        }}
      >
        <svg
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
        >
          {/* Connection Lines (Inbound/Outbound pairs) */}
          {Object.entries(NODES).map(([key, node]) => (
            <g key={key}>
              {/* Outbound */}
              <path
                d={`M ${CORE.x} ${CORE.y - 10} Q ${(CORE.x + node.x) / 2} ${(CORE.y + node.y) / 2 - 20} ${node.x} ${node.y}`}
                stroke={Colors.line}
                fill="none"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* Inbound */}
              <path
                d={`M ${node.x} ${node.y + 10} Q ${(CORE.x + node.x) / 2} ${(CORE.y + node.y) / 2 + 20} ${CORE.x} ${CORE.y + 10}`}
                stroke={Colors.line}
                fill="none"
                strokeWidth="1"
              />
            </g>
          ))}

          {/* Animated Packets */}
          <AnimatePresence>
            {systemState === 'auth_req' && (
              <Packet
                path={`M ${CORE.x} ${CORE.y - 10} Q ${(CORE.x + NODES.auth.x) / 2} ${(CORE.y + NODES.auth.y) / 2 - 20} ${NODES.auth.x} ${NODES.auth.y}`}
                onComplete={() => setSystemState('authed')}
              />
            )}
            {systemState === 'authed' && (
              <Packet
                path={`M ${NODES.auth.x} ${NODES.auth.y + 10} Q ${(CORE.x + NODES.auth.x) / 2} ${(CORE.y + NODES.auth.y) / 2 + 20} ${CORE.x} ${CORE.y + 10}`}
                color={Colors.success}
              />
            )}
            {systemState === 'pay_req' && (
              <Packet
                path={`M ${CORE.x} ${CORE.y - 10} Q ${(CORE.x + NODES.payment.x) / 2} ${(CORE.y + NODES.payment.y) / 2 - 20} ${NODES.payment.x} ${NODES.payment.y}`}
              />
            )}
            {systemState === 'webhook_success' && (
              <Packet
                path={`M ${NODES.payment.x} ${NODES.payment.y + 10} Q ${(NODES.payment.x + NODES.webhook.x) / 2} ${(NODES.payment.y + NODES.webhook.y) / 2} ${NODES.webhook.x} ${NODES.webhook.y}`}
                color={Colors.success}
              />
            )}
          </AnimatePresence>

          {/* Outer Nodes */}
          {Object.entries(NODES).map(([key, node]) => {
            const isActive =
              (key === 'auth' && systemState === 'authed') ||
              (key === 'webhook' && systemState === 'webhook_success');
            const isError = key === 'payment' && systemState === 'pay_fail';
            const isWarning = key === 'payment' && systemState === 'pay_retry';

            return (
              <g key={key}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="24"
                  fill={Colors.bg}
                  stroke={
                    isActive
                      ? Colors.success
                      : isError
                        ? Colors.error
                        : isWarning
                          ? Colors.warning
                          : Colors.line
                  }
                  strokeWidth="2"
                  animate={{
                    scale: isActive || isError ? [1, 1.1, 1] : 1,
                    boxShadow: isActive ? `0 0 20px ${Colors.success}` : 'none',
                  }}
                />
                <text x={node.x} y={node.y + 5} textAnchor="middle" fontSize="18">
                  {node.icon}
                </text>
                <text
                  x={node.x}
                  y={node.y + 45}
                  textAnchor="middle"
                  fontSize="10"
                  fill={Colors.accent}
                  fontWeight="600"
                >
                  {node.label}
                </text>

                {/* Status Labels */}
                {key === 'auth' && systemState === 'authed' && (
                  <StatusLabel
                    x={node.x}
                    y={node.y - 40}
                    text="AUTH_TOKEN: ✅"
                    color={Colors.success}
                  />
                )}
                {key === 'payment' && systemState === 'pay_retry' && (
                  <StatusLabel
                    x={node.x}
                    y={node.y - 40}
                    text="TIMEOUT: retrying..."
                    color={Colors.warning}
                  />
                )}
              </g>
            );
          })}

          {/* Core App Server */}
          <motion.rect
            x={CORE.x - 50}
            y={CORE.y - 30}
            width="100"
            height="60"
            rx="4"
            fill={Colors.bg}
            stroke={Colors.accent}
            strokeWidth="2"
          />
          <text
            x={CORE.x}
            y={CORE.y + 5}
            textAnchor="middle"
            fill={Colors.accent}
            fontSize="12"
            fontWeight="bold"
          >
            CORE SERVER
          </text>
        </svg>
      </div>
    </div>
  );
};

// Sub-components for cleaner logic
const Packet = ({
  path,
  color = '#60A5FA',
  onComplete,
}: {
  path: string;
  color?: string;
  onComplete?: () => void;
}) => (
  <motion.circle r="4" fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }}>
    <animateMotion path={path} dur="1.2s" rotate="auto" onEnded={onComplete} calcMode="linear" />
  </motion.circle>
);

const StatusLabel = ({
  x,
  y,
  text,
  color,
}: {
  x: number;
  y: number;
  text: string;
  color: string;
}) => (
  <motion.text
    initial={{ opacity: 0, y: y + 10 }}
    animate={{ opacity: 1, y: y }}
    x={x}
    y={y}
    textAnchor="middle"
    fill={color}
    fontSize="10"
    fontWeight="800"
    style={{ textTransform: 'uppercase' as const }}
  >
    {text}
  </motion.text>
);

const buttonStyle = (active: boolean): React.CSSProperties => ({
  padding: '8px 16px',
  background: active ? '#F8FAFC' : 'transparent',
  color: active ? '#0A0F1E' : '#F8FAFC',
  border: '1px solid #F8FAFC',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export default IntegrationEngineeringIllustration;
