import React from "react";
import Router from "next/router";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components';


const TabContainer = styled.div`
        border: 2px solid ;
      `;

export default function Tab({}) {
  // const router = useRouter();

  return (
    <TabContainer
      style={{justifyContent: "space-between", textAlign: "center" , padding:10 , border: 2, borderStyle:'solid'}}
    >
      <div style={{ flex: 1 }}>
        <div style={{ flex: 1, display: "inline-block", marginLeft: 10 }}>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </div>
        {/* <div style={{ flex: 1, display: "inline-block", marginLeft: 10 }}>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div> */}
        <div style={{ flex: 1, display: "inline-block", marginLeft: 10 }}>
          <Link href="/dashboard">
            <a>About</a>
          </Link>
        </div>
        <div style={{ flex: 1, display: "inline-block", marginLeft: 10 }}>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </div>
      </div>
    </TabContainer>
  );
}
