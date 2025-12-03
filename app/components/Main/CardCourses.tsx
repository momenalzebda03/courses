import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isItem } from "../../typs/AllTypes";

function CardCourses({ item }: isItem) {
  return (
    <li className="[&:nth-last-child(-n+2)]:border-b-0 border-b-1 pb-4 border-[var(--is-color-border)]">
      <div className="flex justify-between text-[var(--is-color-icon)]">
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon icon={item.icon} className="w-[20px] h-[20px]" />
          <span>{item.title}</span>
        </div>
        <span>{item.time}</span>
      </div>
    </li>
  );
}

export default CardCourses;
