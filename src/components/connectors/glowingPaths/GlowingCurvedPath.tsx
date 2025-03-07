"use client";
import { motion } from "framer-motion";
import { useId } from "react";

export default function GlowingCurvedPath({
  path,
  width,
  height,
  viewBox,
  glowColor = "#ffc41b",
  glowWidth = 1,
  baseColor = "#EBEBEB",
  speed = 3,
  id,
}: {
  path: string;
  viewBox?: string;
  width?: string;
  height?: string;
  glowColor?: string;
  glowWidth?: number;
  baseColor?: string;
  speed?: number;
  id?: string;
}) {
  const reactId = useId();
  const componentId = id || reactId;

  const gradientId = `glow-gradient-${componentId}`;
  const filterId = `glow-filter-${componentId}`;

  return (
    <svg
      width={width || "145"}
      height={height || "156"}
      viewBox={viewBox || "0 0 145 156"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId}>
          <stop offset="0%" stopColor={glowColor} stopOpacity="1">
            <animate
              attributeName="offset"
              values="0;0.1"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="20%" stopColor={glowColor} stopOpacity="0.8">
            <animate
              attributeName="offset"
              values="0.2;0.3"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="40%" stopColor={glowColor} stopOpacity="0.4">
            <animate
              attributeName="offset"
              values="0.4;0.5"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor={glowColor} stopOpacity="0">
            <animate
              attributeName="offset"
              values="0.9;1"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path d={path} stroke={baseColor} strokeWidth={"2"} />
      <motion.path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth={glowWidth}
        strokeLinecap="round"
        filter={`url(#${filterId})`}
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{
          pathLength: 0.09,
          pathOffset: [2, 4],
        }}
        transition={{
          pathOffset: {
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          },
          pathLength: {
            duration: 0,
          },
        }}
      />
    </svg>
  );
}
