"use client";
import React from "react";
import "./style.css";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="wrapper">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div className="infor-grid">
          <div>
            <p>
              We’d love to hear from you! Please fill out the form below and
              we’ll get in touch as soon as possible.
            </p>
          </div>
          <div>
            <div>
              <h1>Contact Information </h1>
            </div>
            <div>
              <div>
                <p>
                  <strong> Email: </strong> kampamba111@gmail.com
                </p>
              </div>
              <div>
                <p>
                  <strong> Phone Number: </strong> +260-970-010101
                </p>
              </div>
            </div>
          </div>
          <div>
            <form method="POST">
              <input type="text" placeholder="name" required />
              <input type="email" placeholder="email" required />
              <input type="text" placeholder="Phone Number" />
              <textarea placeholder="message" required />

              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
        <div className="footer">
          <div>
            Designed & Developed by:{" "}
            <span>
              {" "}
              <Link href="https://github.com/mwala-zm/" className="mwala">
                {" "}
                mwala mulenga{" "}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
