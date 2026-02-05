"use client";

import { cn } from "@/utils/cn";
import { Plus } from "lucide-react";
import { AnimatePresence, motion, Transition } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

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
  type: "spring",
  stiffness: 100,
  damping: 20,
};

// --- SCREENS ---
// Note: These screens are designed to look good at a specific "Base Resolution" (approx 800-1000px wide).
// The Wrapper component will handle scaling them down for mobile.

const LaptopScreen = () => (
  <motion.div
    key="laptop"
    className="w-full h-full bg-[#0f0f0f] text-white flex flex-col font-sans overflow-hidden rounded-[inherit]"
  >
    <div className="h-[13.5%] w-full flex items-center justify-between px-[3%] border-b border-white/5 shrink-0 z-20 bg-[#0f0f0f]">
      <div className="flex items-center gap-3">
        <motion.div
          layoutId="menu-icon"
          className="size-4 rounded-sm bg-white/20"
        />
        <div className="flex items-center gap-1">
          <motion.div
            layoutId="logo-icon"
            className="w-6 h-4 rounded-sm bg-red-600"
          />
          <motion.div
            layoutId="logo-text"
            className="w-12 h-3 rounded-sm bg-white/20"
          />
        </div>
      </div>
      <motion.div
        layoutId="search-container"
        className="flex w-1/3 items-center gap-1"
      >
        <div className="w-[90%] h-5 bg-[#222] rounded-full border border-white/10 flex items-center px-2">
          <div className="w-full h-2 rounded-full bg-white/10" />
        </div>
        <div className="w-5 h-5 rounded-full bg-white/10" />
      </motion.div>
      <div className="flex items-center gap-3">
        <motion.div
          layoutId="header-action-1"
          className="w-5 h-5 rounded-full bg-white/10"
        />
        <motion.div
          layoutId="user-avatar"
          className="w-6 h-6 rounded-full bg-purple-500"
        />
      </div>
    </div>

    <div className="flex flex-1 overflow-hidden">
      <div className="w-12 hidden sm:flex flex-col border-r border-white/5 items-center gap-6 py-4 shrink-0 bg-[#0f0f0f] z-10">
        {NAV_ITEMS.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-1">
            <motion.div
              layoutId={`nav-icon-${item.id}`}
              className="size-4 rounded-md bg-white/10"
              transition={transition}
            />
            <motion.div
              layoutId={`nav-text-${item.id}`}
              className="w-6 h-1.5 rounded-sm bg-white/5"
            />
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex gap-2 px-4 pb-3 pt-2 overflow-hidden mask-linear shrink-0">
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
            "grid grid-cols-3 gap-x-3 gap-y-4 px-4 pb-4 overflow-y-auto h-full scroll-smooth",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:bg-white/20 dark:[&::-webkit-scrollbar-track]:bg-neutral-700/20 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600/30",
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
                className="w-full aspect-video bg-zinc-800 rounded-lg relative group overflow-hidden"
              >
                <div className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/80 text-[8px] rounded font-mono">
                  10:24
                </div>
              </motion.div>
              <div className="flex gap-2">
                <motion.div
                  layoutId={`channel-avatar-${video.id}`}
                  className="w-7 h-7 rounded-full bg-zinc-700 shrink-0"
                />
                <div className="flex flex-col gap-1.5 w-full pt-0.5">
                  <motion.div
                    layoutId={`meta-title-${video.id}`}
                    className="w-[90%] h-3 bg-zinc-700 rounded-sm"
                  />
                  <motion.div
                    layoutId={`meta-sub-${video.id}`}
                    className="w-[60%] h-2 bg-zinc-800 rounded-sm"
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
    className="w-full h-full bg-[#0f0f0f] text-white flex flex-col font-sans overflow-hidden rounded-[inherit]"
  >
    <div className="h-10 w-full flex items-center justify-between px-3 border-b border-white/5 shrink-0 z-20 bg-[#0f0f0f]">
      <div className="flex items-center gap-2">
        <motion.div
          layoutId="logo-icon"
          className="w-5 h-4 rounded-md bg-red-600"
        />
        <motion.div
          layoutId="logo-text"
          className="w-8 h-3 rounded-sm bg-white/20"
        />
      </div>
      <div className="flex items-center gap-3">
        <motion.div
          layoutId="search-container"
          className="w-4 h-4 rounded-full bg-white/10"
        />
        <motion.div
          layoutId="header-action-1"
          className="w-4 h-4 rounded-full bg-white/10"
        />
        <motion.div
          layoutId="user-avatar"
          className="w-5 h-5 rounded-full bg-purple-500"
        />
      </div>
    </div>
    <div className="flex flex-1 overflow-hidden">
      <div className="w-10 flex flex-col items-center gap-5 py-3 border-r border-white/5 shrink-0 bg-[#0f0f0f] z-10">
        {NAV_ITEMS.slice(0, 4).map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-0.5">
            <motion.div
              layoutId={`nav-icon-${item.id}`}
              className="w-4 h-4 rounded bg-white/10"
              transition={transition}
            />
            <motion.div
              layoutId={`nav-text-${item.id}`}
              className="w-3 h-1 rounded-full bg-white/5"
            />
          </div>
        ))}
      </div>
      <div className="flex-1 w-full h-full overflow-hidden flex flex-col">
        <div className="flex gap-1.5 px-3 py-2 overflow-hidden shrink-0">
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
            "grid grid-cols-2 gap-x-2 gap-y-3 px-3 pb-3 h-full overflow-auto scroll-smooth",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:bg-white/20 dark:[&::-webkit-scrollbar-track]:bg-neutral-700/20 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600/30",
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
                className="w-full aspect-[16/10] bg-zinc-800 rounded-lg relative overflow-hidden"
              >
                <div className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/80 text-[6px] rounded font-mono">
                  04:20
                </div>
              </motion.div>
              <div className="flex gap-1.5">
                <motion.div
                  layoutId={`channel-avatar-${video.id}`}
                  className="w-6 h-6 rounded-full bg-zinc-700 shrink-0"
                />
                <div className="flex flex-col gap-1 w-full pt-0.5">
                  <motion.div
                    layoutId={`meta-title-${video.id}`}
                    className="w-[85%] h-2.5 bg-zinc-700 rounded-sm"
                  />
                  <motion.div
                    layoutId={`meta-sub-${video.id}`}
                    className="w-[50%] h-1.5 bg-zinc-800 rounded-sm"
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
    className="w-full h-full bg-[#0f0f0f] text-white flex flex-col font-sans overflow-hidden rounded-[inherit]"
  >
    <div className="h-10 w-full flex items-center justify-between px-3 border-b border-white/5 shrink-0 bg-[#0f0f0f] z-20">
      <div className="flex items-center gap-1.5">
        <motion.div
          layoutId="logo-icon"
          className="w-5 h-4 rounded bg-red-600"
        />
        <motion.div
          layoutId="logo-text"
          className="w-8 h-3 rounded-sm bg-white/20"
        />
      </div>
      <div className="flex items-center gap-2.5">
        <motion.div
          layoutId="search-container"
          className="w-3.5 h-3.5 rounded-full bg-white/10"
        />
        <motion.div
          layoutId="header-action-1"
          className="w-3.5 h-3.5 rounded-full bg-white/10"
        />
        <motion.div
          layoutId="user-avatar"
          className="w-4 h-4 rounded-full bg-purple-500"
        />
      </div>
    </div>
    <div className="flex-1 overflow-hidden flex flex-col relative">
      <div className="flex gap-1.5 px-3 py-2 border-b border-white/5 shrink-0">
        <motion.div
          layoutId="cat-active"
          className="h-5 w-8 rounded-md bg-white/60 opacity-90 shrink-0"
        />
        {CATEGORY_DATA.slice(0, 3).map((cat) => (
          <motion.div
            key={cat.id}
            layoutId={`cat-${cat.id}`}
            className="h-5 w-12 rounded-md bg-white/10 shrink-0"
          />
        ))}
      </div>
      <div
        className={cn(
          "flex flex-col overflow-auto gap-4 p-3 scroll-smooth",
          "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:bg-white/20 dark:[&::-webkit-scrollbar-track]:bg-neutral-700/20 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600/30",
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
              className="w-full aspect-video bg-zinc-800 rounded-lg relative overflow-hidden"
            >
              <div className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/80 text-[6px] rounded font-mono">
                08:15
              </div>
            </motion.div>
            <div className="flex gap-2 px-1">
              <motion.div
                layoutId={`channel-avatar-${video.id}`}
                className="w-7 h-7 rounded-full bg-zinc-700 shrink-0"
              />
              <div className="flex flex-col gap-1 w-full pt-0.5">
                <motion.div
                  layoutId={`meta-title-${video.id}`}
                  className="w-[95%] h-2.5 bg-zinc-700 rounded-sm"
                />
                <div className="flex gap-1">
                  <motion.div
                    layoutId={`meta-sub-${video.id}`}
                    className="w-[30%] h-1.5 bg-zinc-800 rounded-sm"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="h-10 w-full border-t border-white/10 bg-[#0f0f0f] grid grid-cols-5 items-center justify-items-center shrink-0 z-20">
      <div className="flex flex-col items-center gap-1">
        <motion.div
          layoutId="nav-icon-0"
          className="w-4 h-4 rounded-sm bg-white/60"
          transition={transition}
        />
        <motion.div
          layoutId="nav-text-0"
          className="w-3 h-0.5 rounded-sm bg-white/20"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <motion.div
          layoutId="nav-icon-1"
          className="w-4 h-4 rounded-sm border border-white/20"
          transition={transition}
        />
        <motion.div
          layoutId="nav-text-1"
          className="w-3 h-0.5 rounded-sm bg-white/20"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
          <Plus className="w-4 h-4 text-white/30" strokeWidth={2} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <motion.div
          layoutId="nav-icon-2"
          className="w-4 h-4 rounded-sm border border-white/20"
          transition={transition}
        />
        <motion.div
          layoutId="nav-text-2"
          className="w-3 h-0.5 rounded-sm bg-white/20"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <motion.div
          layoutId="nav-icon-3"
          className="w-4 h-4 rounded-sm border border-white/20"
          transition={transition}
        />
        <motion.div
          layoutId="nav-text-3"
          className="w-3 h-0.5 rounded-sm bg-white/20"
        />
      </div>
    </div>
  </motion.div>
);

// --- Wrappers (Frames) ---
// These add the "Hardware" look (notches, bezels)
const LaptopScreenWrapper = () => (
  <div className="w-full h-full relative p-2 bg-black rounded-[10px] overflow-hidden">
    {/* Camera Notch Area */}
    <div className="absolute left-1/2 z-40 -translate-x-1/2 top-2 w-16 h-2 rounded-xs bg-black flex items-center justify-center gap-1 pointer-events-none">
      <div className="size-0.5 bg-white/20 rounded-full"></div>
      <div className="size-0.5 bg-white/20 rounded-full"></div>
      <div className="size-0.5 bg-white/20 rounded-full"></div>
    </div>
    <LaptopScreen />
  </div>
);

const TabletScreenWrapper = () => (
  <div className="w-full h-full relative py-5 px-2 bg-black rounded-[14px] overflow-hidden">
    <div className="absolute left-1/2 -translate-x-1/2 top-2 size-2 rounded-full bg-white/10 flex items-center justify-center gap-1 pointer-events-none"></div>
    <div className="absolute left-1/2 bg-white/10 -translate-x-1/2 bottom-2 w-12 h-1.5 rounded-full border border-white/5 flex items-center justify-center gap-1 pointer-events-none"></div>
    <TabletScreen />
  </div>
);

const MobileScreenWrapper = () => (
  <div className="w-full h-full relative p-2 bg-black rounded-[20px] overflow-hidden">
    <div className="absolute z-40 left-1/2 -translate-x-1/2 top-3 border border-white/40 size-2 rounded-full bg-black flex items-center justify-center gap-1 pointer-events-none"></div>
    <MobileScreen />
  </div>
);

// --- Device Configs ---
// Note: Widths are relative to the "Virtual Canvas" which is 900px wide.
// This ensures that "72%" is always calculated against 900px, not the phone screen width.
const deviceVariants = {
  laptop: { width: "72%", height: "98%", borderRadius: "8px" },
  tablet: { width: "48%", height: "98%", borderRadius: "12px" },
  mobile: { width: "26.4%", height: "98%", borderRadius: "18px" },
};

type DeviceType = "laptop" | "tablet" | "mobile";

const devices: { type: DeviceType; svg: React.FC; screen: React.ReactNode }[] =
  [
    { type: "laptop", svg: LaptopSVG, screen: <LaptopScreenWrapper /> },
    { type: "tablet", svg: TabletSVG, screen: <TabletScreenWrapper /> },
    { type: "mobile", svg: MobileSVG, screen: <MobileScreenWrapper /> },
  ];

export default function FrontendEngineeringIllustration() {
  const [device, setDevice] = useState<DeviceType>("laptop");
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full aspect-square flex flex-col items-center justify-center p-4 relative"
    >
      {/* Controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 items-center z-50">
        {devices.map((d) => (
          <button
            key={d.type}
            className={cn(
              "p-1 size-10 flex items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md cursor-pointer hover:bg-white/10 transition-colors duration-200",
              device === d.type && "bg-white/20 border-white/30 text-white",
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
          transformOrigin: "center center",
        }}
        className="flex items-center justify-center"
      >
        <motion.div
          className="shadow-2xl shadow-black/50 rounded-lg overflow-hidden bg-transparent relative"
          variants={deviceVariants}
          animate={device}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <AnimatePresence mode="wait">
            <motion.div key={device} className="w-full h-full">
              {devices.find((d) => d.type === device)?.screen}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
