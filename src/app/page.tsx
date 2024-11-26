"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LibraryAccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
      <h1 className="text-4xl font-bold mb-8 text-white">Library Access</h1>
      <div className="space-x-4">
        <Link href="/enter">
          <Button
            className="bg-zinc-300 text-gray-950 hover:bg-zinc-400"
            variant="default"
          >
            Enter the Library
          </Button>
        </Link>
        <Link href="/exit">
          <Button variant="destructive">Exit the Library</Button>
        </Link>
      </div>
    </div>
  );
}
