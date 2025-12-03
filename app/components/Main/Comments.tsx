import Title from "../Shared/Title";
import CardComments from "./CardComments";
import Image from "../../public/images/persional.webp";

function Comments() {
  const Comments = [
    {
      image: Image,
      title: "Student Name Goes Here",
      date: "Oct 10, 2021",
      descrption:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit error unde aut officiis suscipit totam itaque quia deserunt sit, quibusdam eaque ullam veritatis, provident repellat culpa praesentium voluptates, dolores reprehenderit.",
    },
    {
      image: Image,
      title: "Student Name Goes Here",
      date: "Oct 10, 2021",
      descrption:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit error unde aut officiis suscipit totam itaque quia deserunt sit, quibusdam eaque ullam veritatis, provident repellat culpa praesentium voluptates, dolores reprehenderit.",
    },
    {
      image: Image,
      title: "Student Name Goes Here",
      date: "Oct 10, 2021",
      descrption:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit error unde aut officiis suscipit totam itaque quia deserunt sit, quibusdam eaque ullam veritatis, provident repellat culpa praesentium voluptates, dolores reprehenderit.",
    },
    {
      image: Image,
      title: "Student Name Goes Here",
      date: "Oct 10, 2021",
      descrption:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit error unde aut officiis suscipit totam itaque quia deserunt sit, quibusdam eaque ullam veritatis, provident repellat culpa praesentium voluptates, dolores reprehenderit.",
    },
  ];

  return (
    <div className="mt-13 flex flex-col gap-8">
      <Title title="Comments" />
      <ul className="flex flex-col gap-5">
        {Comments.map((item, index) => (
          <CardComments key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Comments;
