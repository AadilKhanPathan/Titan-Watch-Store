"use client";

import { Spinner } from "@/components/ui/spinner";
import { useLinkStatus } from "next/link";


export default function LinkLoader() {
    const {pending} = useLinkStatus();

    if(!pending) return ;

  return (
    <div className="absolute inset-0 z-20 flex justify-center items-center bg-black/10">
      <Spinner className={"size-12 text-white"}/>
    </div>
  )
}
