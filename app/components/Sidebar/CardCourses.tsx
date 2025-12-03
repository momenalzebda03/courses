import CardWeeks from "./CardWeeks";
import { Course } from "../../typs/AllTypes";

function CardCourses({ item }: { item: Course }) {
  return (
    <li className="flex flex-col gap-4 border-1 border-[var(--is-color-border)] py-5 px-4">
      <h2>{item.courseTitle}</h2>
      <span className="pb-4 text-[var(--is-color-icon)] border-b-1 border-[var(--is-color-border)]">
        {item.courseDescrption}
      </span>
      <ul className="flex flex-col gap-5">
        {item.weeks.map((week, index) => (
          <CardWeeks key={index} item={week} />
        ))}
      </ul>
    </li>
  );
}

export default CardCourses;
