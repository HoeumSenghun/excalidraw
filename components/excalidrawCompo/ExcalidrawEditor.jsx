"use client";

import React, { useRef } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

export default function ExcalidrawEditor() {
  const excalidrawRef = useRef(null);

  return (
    <div style={{ height: "100vh" }}>
      <Excalidraw ref={excalidrawRef} />
    </div>
  );
}
