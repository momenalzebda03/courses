import Image from "next/image";
import { isItemsComments } from "../../typs/AllTypes";

function CardComments({ item }: isItemsComments) {
  return (
    <li className="last:border-b-0 pb-4 flex gap-5 border-b-1 border-[var(--is-color-border)]">
      <div className="relative w-[170px] h-[20px]">
        <Image
          src={item.image}
          alt="Course thumbnail"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <span>{item.title}</span>
          <span className="text-[var(--is-color-icon)]">{item.date}</span>
        </div>
        <span className="text-[var(--is-color-icon)]">{item.descrption}</span>
      </div>
    </li>
  );
}

export default CardComments;
