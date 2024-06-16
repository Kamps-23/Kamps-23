import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import "./style.css";

export default function navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <Link href="/">Home</Link>
        </div>

        {navLinks.map((link, index) => (
          <ul key={index}>
            <li>
              <Link href={link.id}>{link.title}</Link>
            </li>
          </ul>
        ))}
      </nav>
    </>
  );
}
