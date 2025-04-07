"use client";
import * as React from "react";
import { Header } from "./header";
import { ReviewSection } from "./section";

export default function ReviewPage() {
  return (
    <main className="box-border p-0 m-0 mx-auto w-full max-w-none min-h-screen max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Header />
      <ReviewSection />
    </main>
  );
}
