import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faLock } from "@fortawesome/free-solid-svg-icons";
import NumberQuestionAndMinutes from "./NumberQuestionAndMinutes";
import { isItems } from "../../typs/AllTypes";

function CardWeeks({ item }: isItems) {
  return (
    <li
      title={item.title}
      className="cursor-pointer pb-4 border-b-1 border-[var(--is-color-border)]"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faFile} className="w-[15px] h-[15px]" />
          <span>{item.title}</span>
        </div>
        {item.isShowItem ? (
          <ul className="flex flex-wrap justify-end gap-2 text-[13px]">
           <NumberQuestionAndMinutes item={item} />
          </ul>
        ) : (
          <FontAwesomeIcon icon={faLock} className="w-[15px] h-[15px]" />
        )}
      </div>
    </li>
  );
}

export default CardWeeks;
