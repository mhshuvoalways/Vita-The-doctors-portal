import Link from "next/link";
import { usePathname } from "next/navigation";

const Tab = ({ items }) => {
  const pathname = usePathname();

  return (
    <div className="bg-[#F1F3F6] p-1 inline-flex items-center justify-center rounded-full mt-8">
      {items.map((el) => (
        <Link href={el.url} key={el.url}>
          <p
            className={`cursor-pointer rounded-full py-2 px-3 ${
              el.url === pathname ||
              (el.url === "/signup" && pathname === "/confirm-signup")
                ? "bg-[#FFFFFF] shadow font-semibold text-[#1993E4]"
                : "text-[#747474]"
            }`}
          >
            {el.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Tab;
