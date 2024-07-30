"use client";

import ArrowBottom from "@/public/icons/arrowdown.svg";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";

const ListBoxCompo = ({ className, items, value, onChangeHandler }) => {
  return (
    <Listbox value={value} onChange={onChangeHandler}>
      <ListboxButton
        className={`relative w-full bg-white rounded-3xl lg:rounded-l-3xl lg:rounded-r-none p-5 flex items-center justify-between gap-2 mt-2 ${className}`}
      >
        <p className="font-medium text-nowrap overflow-x-hidden">{value}</p>
        <Image src={ArrowBottom} alt="" className="size-4" />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className={
          "rounded-lg p-1 bg-[#F4F6F9] shadow w-[var(--button-width)] z-20"
        }
      >
        {items?.map((li) => (
          <ListboxOption
            key={li}
            value={li}
            className={`group gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-slate-200 data-[focus]:dark:bg-slate-700 cursor-pointer`}
          >
            {li}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default ListBoxCompo;
