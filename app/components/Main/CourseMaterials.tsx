import Title from "../Shared/Title";
import CardCourses from "./CardCourses";
import {
  faAlarmClock,
  faBook,
  faAddressBook,
  faEarthAmericas
} from "@fortawesome/free-solid-svg-icons";

function CourseMaterials() {
  const courses = [
    {
      icon: faAlarmClock,
      title: "Duration:",
      time: "3 weeks",
    },
    {
      icon: faAlarmClock,
      title: "Duration:",
      time: "3 weeks",
    },
    {
      icon: faBook,
      title: "Lessons:",
      time: "8",
    },
    {
      icon: faBook,
      title: "Lessons:",
      time: "8",
    },
    {
      icon: faAddressBook,
      title: "Enrolled:",
      time: "65 students",
    },
    {
      icon: faAddressBook,
      title: "Enrolled:",
      time: "65 students",
    },
    {
      icon: faEarthAmericas,
      title: "Language:",
      time: "English",
    },
    {
      icon: faEarthAmericas,
      title: "Language:",
      time: "English",
    },
  ];

  return (
    <div className="mt-13 flex flex-col gap-5">
      <Title title="Course Materials" />
      <ul className="gap-y-[23px] gap-[250px] w-full grid grid-cols-1 md:grid-cols-2 justify-between p-7 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">
        {courses.map((item, index) => (
          <CardCourses key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default CourseMaterials;
