import React from "react";
import { useEffect } from "react";
import Typewriter from "./TypeWriter";

export default function ErrorPage() {
    useEffect(() => {
        const body = document.body
        body.style.backgroundColor = 'white'
    })
  return (
    <div style={{ width: "100%", height: "100%" }}>
      Only a Fool has all the answers... <br />
      <Typewriter text='"So does the wise have very little."' speed={50}></Typewriter>
    </div>
  );
}
