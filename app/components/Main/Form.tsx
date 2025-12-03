import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Form() {
  return (
    <div className="mt-10">
      <form action="" className="flex flex-col gap-5">
        <textarea
          placeholder="Write a comment"
          className="p-4 rounded-xl w-full h-[200px] shadow-[0_0_15px_rgba(0,0,0,0.2)]"
        />
        <div>
          <button
            type="submit"
            title="Submit Reivew"
            className="cursor-pointer py-3 rounded-lg px-5 text-white bg-[var(--is-color-green)] flex gap-3 items-center"
          >
            <span>Submit Reivew</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-[15px] h-[15px] mt-[3.5px]"
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
