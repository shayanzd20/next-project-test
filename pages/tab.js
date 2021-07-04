import React from "react";
import Router from "next/router";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Tab() {
  // const router = useRouter();

  return (
    <div
      className="boxed"
      style={{justifyContent: "space-between", textAlign: "center" }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ flex: 1, display: "inline-block", marginLeft: 10 }}>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </div>
        <div style={{ flex: 1, display: "inline-block", marginLeft: 10 }}>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
        <div style={{ flex: 1, display: "inline-block", marginLeft: 10 }}>
          <Link href="/dashboard">
            <a>About</a>
          </Link>
        </div>
        <div style={{ flex: 1, display: "inline-block", marginLeft: 10 }}>
          <Link href="/home">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
