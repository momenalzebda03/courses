import Hero from "./components/Main/Hero";
import SideBar from "./components/Sidebar/SideBar";
import CourseMaterials from "./components/Main/CourseMaterials";
import Comments from "./components/Main/Comments";
import Form from "./components/Main/Form";

function Page() {
  return (
    <>
      <title>COURSES PLAYER PAGE</title>
      <div className="py-5">
        <div className="container">
          <div className="grid lg:grid-cols-[8fr_4fr] gap-10 lg:gap-20">
            <div className="flex flex-col">
              <Hero />
              <div className="lg:hidden">
                <SideBar />
              </div>
              <CourseMaterials />
              <Comments />
              <Form />
            </div>
            <div className="hidden lg:block">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
