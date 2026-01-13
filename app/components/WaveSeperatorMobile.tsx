// WaveSeparator.jsx
import React from "react";

const WaveSeparatorMobile = ({
  topColor = "#ffffff",
  bottomColor = "#000000",
  strokeColor = "#e5e5e5",
  strokeWidth = 2,
  height = 100,
  overlap = 120, // 👈 how much it overflows into sections
  flipX = false,
  width = "120%"
}) => {
  const hasTop = topColor && topColor !== "transparent";
  const hasBottom = bottomColor && bottomColor !== "transparent";

  return (
    <div
      style={{
        position: "relative",
        height,
        marginTop: -overlap,
        marginBottom: -overlap,
        pointerEvents: "none",
        zIndex: 1
      }}
    >
      <svg
        viewBox="0 0 1440 160"
        width={width}
        height={height}
        preserveAspectRatio="none"
        style={{
          display: "block",
          transform: flipX ? "scaleX(-1)" : "none",
        }}
      >
        {hasBottom && (
          <path
            d="
              M0,80
              C200,20 420,140 680,100
              C920,60 1140,20 1440,80
              L1440,160
              L0,160
              Z
            "
            fill={bottomColor}
          />
        )}

        {hasTop && (
          <path
            d="
              M0,80
              C200,20 420,140 680,100
              C920,60 1140,20 1440,80
              L1440,0
              L0,0
              Z
            "
            fill={topColor}
          />
        )}

        {strokeColor && strokeColor !== "transparent" && (
          <path
            d="
              M0,80
              C200,20 420,140 680,100
              C920,60 1140,20 1440,80
            "
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        )}
      </svg>
    </div>
  );
};

export default WaveSeparatorMobile;
