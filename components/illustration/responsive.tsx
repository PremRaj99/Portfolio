'use client';

import { cn } from '@/utils/cn';
import { Plus } from 'lucide-react';
import { AnimatePresence, motion, Transition } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

// --- Icons / Visual Assets ---
const MobileSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14" />
    <path d="M11 4h2" />
    <path d="M12 17v.01" />
  </svg>
);

const TabletSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16" />
    <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  </svg>
);

const LaptopSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10" />
    <path d="M7 20h10" />
    <path d="M9 16v4" />
    <path d="M15 16v4" />
  </svg>
);

// --- Shared Data ---
const VIDEO_DATA = Array.from({ length: 12 }).map((_, i) => ({ id: i }));
const CATEGORY_DATA = Array.from({ length: 6 }).map((_, i) => ({ id: i }));
const NAV_ITEMS = Array.from({ length: 5 }).map((_, i) => ({ id: i }));

// --- Animation Config ---
const transition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

// --- SCREENS ---
// Note: These screens are designed to look good at a specific "Base Resolution" (approx 800-1000px wide).
// The Wrapper component will handle scaling them down for mobile.

const LaptopScreen = () => (
  <motion.div
    key="laptop"
    className="flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-[#0f0f0f] font-sans text-white"
  >
    <div className="z-20 flex h-[13.5%] w-full shrink-0 items-center justify-between border-b border-white/5 bg-[#0f0f0f] px-[3%]">
      <div className="flex items-center gap-3">
        <motion.div layoutId="menu-icon" className="size-4 rounded-sm bg-white/20" />
        <div className="flex items-center gap-1">
          <motion.div layoutId="logo-icon" className="h-4 w-6 rounded-sm bg-red-600" />
          <motion.div layoutId="logo-text" className="h-3 w-12 rounded-sm bg-white/20" />
        </div>
      </div>
      <motion.div layoutId="search-container" className="flex w-1/3 items-center gap-1">
        <div className="flex h-5 w-[90%] items-center rounded-full border border-white/10 bg-[#222] px-2">
          <div className="h-2 w-full rounded-full bg-white/10" />
        </div>
        <div className="h-5 w-5 rounded-full bg-white/10" />
      </motion.div>
      <div className="flex items-center gap-3">
        <motion.div layoutId="header-action-1" className="h-5 w-5 rounded-full bg-white/10" />
        <motion.div layoutId="user-avatar" className="h-6 w-6 rounded-full bg-purple-500" />
      </div>
    </div>

    <div className="flex flex-1 overflow-hidden">
      <div className="z-10 hidden w-12 shrink-0 flex-col items-center gap-6 border-r border-white/5 bg-[#0f0f0f] py-4 sm:flex">
        {NAV_ITEMS.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-1">
            <motion.div
              layoutId={`nav-icon-${item.id}`}
              className="size-4 rounded-md bg-white/10"
              transition={transition}
            />
            <motion.div
              layoutId={`nav-text-${item.id}`}
              className="h-1.5 w-6 rounded-sm bg-white/5"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="mask-linear flex shrink-0 gap-2 overflow-hidden px-4 pt-2 pb-3">
          <motion.div
            layoutId="cat-active"
            className="h-4 w-12 rounded-md bg-white/60 text-black opacity-90"
          />
          {CATEGORY_DATA.map((cat) => (
            <motion.div
              key={cat.id}
              layoutId={`cat-${cat.id}`}
              className="h-4 w-16 rounded-md bg-white/10"
            />
          ))}
        </div>
        <div
          className={cn(
            'grid h-full grid-cols-3 gap-x-3 gap-y-4 overflow-y-auto scroll-smooth px-4 pb-4',
            '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/20 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600/30 [&::-webkit-scrollbar-track]:bg-white/10 dark:[&::-webkit-scrollbar-track]:bg-neutral-700/20',
          )}
        >
          {VIDEO_DATA.map((video) => (
            <motion.div
              key={video.id}
              layoutId={`video-card-${video.id}`}
              className="flex flex-col gap-2"
            >
              <motion.div
                layoutId={`thumbnail-${video.id}`}
                className="group relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-800"
              >
                <div className="absolute right-1 bottom-1 rounded bg-black/80 px-1 py-0.5 font-mono text-[8px]">
                  10:24
                </div>
              </motion.div>
              <div className="flex gap-2">
                <motion.div
                  layoutId={`channel-avatar-${video.id}`}
                  className="h-7 w-7 shrink-0 rounded-full bg-zinc-700"
                />
                <div className="flex w-full flex-col gap-1.5 pt-0.5">
                  <motion.div
                    layoutId={`meta-title-${video.id}`}
                    className="h-3 w-[90%] rounded-sm bg-zinc-700"
                  />
                  <motion.div
                    layoutId={`meta-sub-${video.id}`}
                    className="h-2 w-[60%] rounded-sm bg-zinc-800"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const TabletScreen = () => (
  <motion.div
    key="tablet"
    className="flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-[#0f0f0f] font-sans text-white"
  >
    <div className="z-20 flex h-10 w-full shrink-0 items-center justify-between border-b border-white/5 bg-[#0f0f0f] px-3">
      <div className="flex items-center gap-2">
        <motion.div layoutId="logo-icon" className="h-4 w-5 rounded-md bg-red-600" />
        <motion.div layoutId="logo-text" className="h-3 w-8 rounded-sm bg-white/20" />
      </div>
      <div className="flex items-center gap-3">
        <motion.div layoutId="search-container" className="h-4 w-4 rounded-full bg-white/10" />
        <motion.div layoutId="header-action-1" className="h-4 w-4 rounded-full bg-white/10" />
        <motion.div layoutId="user-avatar" className="h-5 w-5 rounded-full bg-purple-500" />
      </div>
    </div>
    <div className="flex flex-1 overflow-hidden">
      <div className="z-10 flex w-10 shrink-0 flex-col items-center gap-5 border-r border-white/5 bg-[#0f0f0f] py-3">
        {NAV_ITEMS.slice(0, 4).map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-0.5">
            <motion.div
              layoutId={`nav-icon-${item.id}`}
              className="h-4 w-4 rounded bg-white/10"
              transition={transition}
            />
            <motion.div
              layoutId={`nav-text-${item.id}`}
              className="h-1 w-3 rounded-full bg-white/5"
            />
          </div>
        ))}
      </div>
      <div className="flex h-full w-full flex-1 flex-col overflow-hidden">
        <div className="flex shrink-0 gap-1.5 overflow-hidden px-3 py-2">
          <motion.div
            layoutId="cat-active"
            className="h-4 w-10 rounded-md bg-white/60 opacity-90"
          />
          {CATEGORY_DATA.slice(0, 5).map((cat) => (
            <motion.div
              key={cat.id}
              layoutId={`cat-${cat.id}`}
              className="h-4 w-12 rounded-md bg-white/10"
            />
          ))}
        </div>
        <div
          className={cn(
            'grid h-full grid-cols-2 gap-x-2 gap-y-3 overflow-auto scroll-smooth px-3 pb-3',
            '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/20 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600/30 [&::-webkit-scrollbar-track]:bg-white/10 dark:[&::-webkit-scrollbar-track]:bg-neutral-700/20',
          )}
        >
          {VIDEO_DATA.slice(0, 8).map((video) => (
            <motion.div
              key={video.id}
              layoutId={`video-card-${video.id}`}
              className="flex flex-col gap-1.5"
            >
              <motion.div
                layoutId={`thumbnail-${video.id}`}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-800"
              >
                <div className="absolute right-1 bottom-1 rounded bg-black/80 px-1 py-0.5 font-mono text-[6px]">
                  04:20
                </div>
              </motion.div>
              <div className="flex gap-1.5">
                <motion.div
                  layoutId={`channel-avatar-${video.id}`}
                  className="h-6 w-6 shrink-0 rounded-full bg-zinc-700"
                />
                <div className="flex w-full flex-col gap-1 pt-0.5">
                  <motion.div
                    layoutId={`meta-title-${video.id}`}
                    className="h-2.5 w-[85%] rounded-sm bg-zinc-700"
                  />
                  <motion.div
                    layoutId={`meta-sub-${video.id}`}
                    className="h-1.5 w-[50%] rounded-sm bg-zinc-800"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const MobileScreen = () => (
  <motion.div
    key="mobile"
    className="flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-[#0f0f0f] font-sans text-white"
  >
    <div className="z-20 flex h-10 w-full shrink-0 items-center justify-between border-b border-white/5 bg-[#0f0f0f] px-3">
      <div className="flex items-center gap-1.5">
        <motion.div layoutId="logo-icon" className="h-4 w-5 rounded bg-red-600" />
        <motion.div layoutId="logo-text" className="h-3 w-8 rounded-sm bg-white/20" />
      </div>
      <div className="flex items-center gap-2.5">
        <motion.div layoutId="search-container" className="h-3.5 w-3.5 rounded-full bg-white/10" />
        <motion.div layoutId="header-action-1" className="h-3.5 w-3.5 rounded-full bg-white/10" />
        <motion.div layoutId="user-avatar" className="h-4 w-4 rounded-full bg-purple-500" />
      </div>
    </div>
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div className="flex shrink-0 gap-1.5 border-b border-white/5 px-3 py-2">
        <motion.div
          layoutId="cat-active"
          className="h-5 w-8 shrink-0 rounded-md bg-white/60 opacity-90"
        />
        {CATEGORY_DATA.slice(0, 3).map((cat) => (
          <motion.div
            key={cat.id}
            layoutId={`cat-${cat.id}`}
            className="h-5 w-12 shrink-0 rounded-md bg-white/10"
          />
        ))}
      </div>
      <div
        className={cn(
          'flex flex-col gap-4 overflow-auto scroll-smooth p-3',
          '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/20 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600/30 [&::-webkit-scrollbar-track]:bg-white/10 dark:[&::-webkit-scrollbar-track]:bg-neutral-700/20',
        )}
      >
        {VIDEO_DATA.slice(0, 5).map((video) => (
          <motion.div
            key={video.id}
            layoutId={`video-card-${video.id}`}
            className="flex flex-col gap-2"
          >
            <motion.div
              layoutId={`thumbnail-${video.id}`}
              className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-800"
            >
              <div className="absolute right-1 bottom-1 rounded bg-black/80 px-1 py-0.5 font-mono text-[6px]">
                08:15
              </div>
            </motion.div>
            <div className="flex gap-2 px-1">
              <motion.div
                layoutId={`channel-avatar-${video.id}`}
                className="h-7 w-7 shrink-0 rounded-full bg-zinc-700"
              />
              <div className="flex w-full flex-col gap-1 pt-0.5">
                <motion.div
                  layoutId={`meta-title-${video.id}`}
                  className="h-2.5 w-[95%] rounded-sm bg-zinc-700"
                />
                <div className="flex gap-1">
                  <motion.div
                    layoutId={`meta-sub-${video.id}`}
                    className="h-1.5 w-[30%] rounded-sm bg-zinc-800"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="z-20 grid h-10 w-full shrink-0 grid-cols-5 items-center justify-items-center border-t border-white/10 bg-[#0f0f0f]">
      <div className="flex flex-col items-center gap-1">
        <motion.div
          layoutId="nav-icon-0"
          className="h-4 w-4 rounded-sm bg-white/60"
          transition={transition}
        />
        <motion.div layoutId="nav-text-0" className="h-0.5 w-3 rounded-sm bg-white/20" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <motion.div
          layoutId="nav-icon-1"
          className="h-4 w-4 rounded-sm border border-white/20"
          transition={transition}
        />
        <motion.div layoutId="nav-text-1" className="h-0.5 w-3 rounded-sm bg-white/20" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20">
          <Plus className="h-4 w-4 text-white/30" strokeWidth={2} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <motion.div
          layoutId="nav-icon-2"
          className="h-4 w-4 rounded-sm border border-white/20"
          transition={transition}
        />
        <motion.div layoutId="nav-text-2" className="h-0.5 w-3 rounded-sm bg-white/20" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <motion.div
          layoutId="nav-icon-3"
          className="h-4 w-4 rounded-sm border border-white/20"
          transition={transition}
        />
        <motion.div layoutId="nav-text-3" className="h-0.5 w-3 rounded-sm bg-white/20" />
      </div>
    </div>
  </motion.div>
);

// --- Wrappers (Frames) ---
// These add the "Hardware" look (notches, bezels)
const LaptopScreenWrapper = () => (
  <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-black p-2">
    {/* Camera Notch Area */}
    <div className="pointer-events-none absolute top-2 left-1/2 z-40 flex h-2 w-16 -translate-x-1/2 items-center justify-center gap-1 rounded-xs bg-black">
      <div className="size-0.5 rounded-full bg-white/20"></div>
      <div className="size-0.5 rounded-full bg-white/20"></div>
      <div className="size-0.5 rounded-full bg-white/20"></div>
    </div>
    <LaptopScreen />
  </div>
);

const TabletScreenWrapper = () => (
  <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-black px-2 py-5">
    <div className="pointer-events-none absolute top-2 left-1/2 flex size-2 -translate-x-1/2 items-center justify-center gap-1 rounded-full bg-white/10"></div>
    <div className="pointer-events-none absolute bottom-2 left-1/2 flex h-1.5 w-12 -translate-x-1/2 items-center justify-center gap-1 rounded-full border border-white/5 bg-white/10"></div>
    <TabletScreen />
  </div>
);

const MobileScreenWrapper = () => (
  <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-black p-2">
    <div className="pointer-events-none absolute top-3 left-1/2 z-40 flex size-2 -translate-x-1/2 items-center justify-center gap-1 rounded-full border border-white/40 bg-black"></div>
    <MobileScreen />
  </div>
);

// --- Device Configs ---
// Note: Widths are relative to the "Virtual Canvas" which is 900px wide.
// This ensures that "72%" is always calculated against 900px, not the phone screen width.
const deviceVariants = {
  laptop: { width: '72%', height: '98%', borderRadius: '8px' },
  tablet: { width: '48%', height: '98%', borderRadius: '12px' },
  mobile: { width: '26.4%', height: '98%', borderRadius: '18px' },
};

type DeviceType = 'laptop' | 'tablet' | 'mobile';

const devices: { type: DeviceType; svg: React.FC; screen: React.ReactNode }[] = [
  { type: 'laptop', svg: LaptopSVG, screen: <LaptopScreenWrapper /> },
  { type: 'tablet', svg: TabletSVG, screen: <TabletScreenWrapper /> },
  { type: 'mobile', svg: MobileSVG, screen: <MobileScreenWrapper /> },
];

export default function FrontendEngineeringIllustration() {
  const [device, setDevice] = useState<DeviceType>('laptop');
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // --- RESPONSIVE SCALING LOGIC ---
  // The illustration is designed to look perfect at ~900px width.
  // If the container is smaller than 900px, we scale the whole thing down.
  const BASE_WIDTH = 940;

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.offsetWidth;
      // Calculate scale. Limit max scale to 1 (don't zoom in on huge screens)
      const newScale = Math.min(parentWidth / BASE_WIDTH, 1);
      setScale(newScale);
    };

    // Initial calc
    handleResize();

    // Listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex aspect-square h-full w-full flex-col items-center justify-center p-4"
    >
      {/* Controls */}
      <div className="absolute top-4 left-4 z-50 flex flex-col items-center gap-2">
        {devices.map((d) => (
          <button
            key={d.type}
            className={cn(
              'flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 p-1 backdrop-blur-md transition-colors duration-200 hover:bg-white/10',
              device === d.type && 'border-white/30 bg-white/20 text-white',
            )}
            onClick={() => setDevice(d.type)}
          >
            <d.svg />
          </button>
        ))}
      </div>

      {/* SCALED STAGE 
        This div is fixed at 900px width, but scaled via CSS transform to fit the screen.
      */}
      <div
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_WIDTH * 0.5625}px`, // 16:9 Aspect Ratio
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className="flex items-center justify-center"
      >
        <motion.div
          className="relative overflow-hidden rounded-lg bg-transparent shadow-2xl shadow-black/50"
          variants={deviceVariants}
          animate={device}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <AnimatePresence mode="wait">
            <motion.div key={device} className="h-full w-full">
              {devices.find((d) => d.type === device)?.screen}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
