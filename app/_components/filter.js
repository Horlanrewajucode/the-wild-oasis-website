"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-2 hover:bg-primary-700 cursor-pointer"
        onClick={() => handleFilter("all")}
      >
        All Cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700 cursor-pointer"
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 Guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700 cursor-pointer"
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 Guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700 cursor-pointer"
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 Guests
      </button>
    </div>
  );
}

function Button(filter) {
  return (
    <button
      className="px-5 py-2 hover:bg-primary-700 cursor-pointer"
      onClick={() => handleFilter("large")}
    >
      8&mdash;12 Guests
    </button>
  );
}
