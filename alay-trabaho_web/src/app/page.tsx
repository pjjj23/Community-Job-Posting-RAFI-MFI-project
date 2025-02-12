"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const handleSubmit = () => {
  console.log("Button clicked");
};

const Page = () => (
  <div className="flex flex-col items-center justify-center h-[100vh]">
    <Button onClick={handleSubmit}>Save</Button>
  </div>
);

export default Page;
