"use client";

import { Switch } from "@headlessui/react";
import { useState } from "react";

const SwitchComponent = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group flex h-7 w-14 cursor-pointer rounded-full bg-[#4A9ED6] p-0.5 duration-200 ease-in-out z-20"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-6 translate-x-0 rounded-full bg-white shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
      />
    </Switch>
  );
};

export default SwitchComponent;
