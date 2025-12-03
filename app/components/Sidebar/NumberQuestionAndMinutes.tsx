import { isItems } from "../../typs/AllTypes";

function NumberQuestionAndMinutes({item}: isItems) {
  return (
    <>
      <li className="rounded-lg bg-[var(--is-color-success)] py-[2px] px-2">
        <span className="text-[var(--is-color-green)]">
          {item.questionsNumber} QUESTION
        </span>
      </li>
      <li className="rounded-lg bg-[var(--is-color-error)] py-[2px] px-2">
        <span className="text-red-500">{item.minutesNumber} MINUTES</span>
      </li>
    </>
  );
}

export default NumberQuestionAndMinutes;
