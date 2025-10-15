"use client";
import Script from "next/script";

export default function VantaBackground() {
  return (
    <>
      {/* Fullscreen animated background */}
      <div
        id="homepage-background"
        className="fixed inset-0 -z-10 w-full h-full"
      ></div>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
        strategy="beforeInteractive"
      />
      <Script id="vanta-script">
        {`VANTA.WAVES({
          el: "#homepage-background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xa0c0c
        });`}
      </Script>
    </>
  );
}
// color: 0x9ba4af
