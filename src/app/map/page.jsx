"use client";
import dynamic from "next/dynamic";
import "./style.module.css";

const WorldMap = dynamic(() => import("@/components/Geo"), { ssr: false });

export default function Arcmap() {
  return (
    <div className="wrapper">
      <WorldMap />
    </div>
  );
}
