import { isTitle } from "../../typs/AllTypes";

function Title({ title }: isTitle) {
  return <h2 className="text-4xl font-bold">{title}</h2>;
}

export default Title;
