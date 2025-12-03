import Card from "./Card";
import Title from "../Shared/Title";

function Header() {
  const links = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/",
      title: "Courses",
    },
    {
      link: "/",
      title: "Course Details",
    },
  ];

  return (
    <nav className="bg-[var(--is-bg-navbar)] h-[120px]">
      <div className="container h-full flex flex-col justify-between pt-3 pb-5">
        <ul className="flex gap-6">
          {links.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </ul>
        <Title title='Starting SEO as your Home' />
      </div>
    </nav>
  );
}

export default Header;
