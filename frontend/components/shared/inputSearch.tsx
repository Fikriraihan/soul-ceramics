"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import React from "react";
import { useDebouncedCallback } from "use-debounce";

const InputSearch = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      params.set("search", e);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div>
      <label className="input w-[240px] !border-none bg-white flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
        <input type="text" defaultValue={search?.toString()} className="grow text-xs" placeholder="SEARCH..." onChange={(e) => handleSearch(e.target.value)} />
      </label>
    </div>
  );
};

export default InputSearch;
