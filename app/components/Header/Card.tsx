import Link from "next/link";
import { integrationItems } from "../../typs/AllTypes";

function Card({item}: integrationItems) {
  return (
    <li title={item.title} className="last:font-bold relative before:absolute before:content-['>'] before:right-[-15px] last:before:content-none">
      <Link href={item.link}>{item.title}</Link>
    </li>
  );
}

export default Card;
