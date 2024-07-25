import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const Dropdown = ({ btnIcon, items, className }) => {
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
              <p
                className={`cursor-pointer hover:text-[#76C1F3] py-2 px-5 rounded ${
                  items.length !== index + 1 && "border-b"
                }`}
              >
                {item.name}
              </p>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
