import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dropdown = ({ btnIcon, items, className }) => {
  const pathname = usePathname();

  return (
    <Menu>
      <MenuButton>{btnIcon}</MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom start"
          className={`z-20 bg-white shadow rounded-lg ${className}`}
        >
          {items.map((item, index) => (
            <MenuItem key={index}>
              <Link href={item.url}>
                <p
                  className={`cursor-pointer hover:text-[#76C1F3] py-2 px-5 rounded ${
                    pathname === item.url ? "text-[#76C1F3]" : ""
                  } ${items.length !== index + 1 && "border-b"}`}
                >
                  {item.name}
                </p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
