"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://www.material-tailwind.com" target="_blank">
      <Button
       variant="gradient"
       color="white"
       onClick={() => console.log('Button clicked!')}
       placeholder={undefined}
       onPointerEnterCapture={() => {}}
       onPointerLeaveCapture={() => {}}
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="https://www.material-tailwind.com/favicon.png"
          quality={100}
        />{" "}
        Made With Material Tailwind
      </Button>
    </a>
  );
}
