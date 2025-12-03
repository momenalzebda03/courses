import IconsScroll from "./IconsScroll";
import {
  faGraduationCap,
  faComments,
  faCircleQuestion,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const scrollIcons = [
    {
      title: "Curriculm",
      icon: faGraduationCap,
      link: "/",
    },
    {
      title: "Comments",
      icon: faComments,
      link: "/",
    },
    {
      title: "Question",
      icon: faCircleQuestion,
      link: "/",
    },
    {
      title: "Cash Register",
      icon: faCashRegister,
      link: "/",
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="w-full h-[327px] md:h-[527px] overflow-hidden">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/HGNOvyOk0CI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <ul className="flex gap-3">
          {scrollIcons.map((item, index) => (
            <IconsScroll key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hero;
