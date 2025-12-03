import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isItemsScroll } from "../../typs/AllTypes";

function IconsScroll({ item }: isItemsScroll) {
  return (
    <li>
      <Link
        href={item.link}
        className="text-[var(--is-color-icon)] hover:text-white p-2 transition duration-300 hover:bg-[var(--is-color-border)] cursor-pointer border-[var(--is-color-border)] border-1 rounded-full w-[35px] h-[35px] flex justify-center items-center"
        title={item.title}
      >
        <FontAwesomeIcon icon={item.icon} className="w-full h-full " />
      </Link>
    </li>
  );
}

export default IconsScroll;
