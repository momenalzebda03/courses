import CardCourses from "./CardCourses";

function Weeks() {
  const Courses = [
    {
      courseTitle: "Week 1-4",
      courseDescrption:
        "Advanced story telling techniques for writes: personas, Characters & plots",
      weeks: [
        {
          title: "introduction",
          isShowItem: false,
        },
        {
          title: "Course Overview",
          isShowItem: false,
        },
        {
          title: "Course Overview",
          isShowItem: true,
          questionsNumber: 0,
          minutesNumber: 10,
        },
        {
          title: "Course Exercise / Reference Files",
          isShowItem: false,
        },
        {
          title: "Code Editor Installation (Optional if you have one)",
          isShowItem: false,
        },
        {
          title: "Embedding PHP in HTML",
          isShowItem: false,
        },
      ],
    },
    {
      courseTitle: "Week 5-8",
      courseDescrption:
        "Advanced story telling techniques for writes: personas, Characters & plots",
      weeks: [
        {
          title: "Defining Functions",
          isShowItem: false,
        },
        {
          title: "Functions Parameters",
          isShowItem: false,
        },
        {
          title: "Return Values From Fucntions",
          isShowItem: true,
          questionsNumber: 0,
          minutesNumber: 10,
        },
        {
          title: "Global Varibale and Scope",
          isShowItem: false,
        },
        {
          title: "Newer Way of Creating a Constant",
          isShowItem: false,
        },
        {
          title: "Constants",
          isShowItem: false,
        },
      ],
    },
    {
      courseTitle: "Week 5-8",
      courseDescrption:
        "Advanced story telling techniques for writes: personas, Characters & plots",
      weeks: [
        {
          title: "Defining Functions",
          isShowItem: false,
        },
        {
          title: "Functions Parameters",
          isShowItem: false,
        },
        {
          title: "Return Values From Fucntions",
          isShowItem: true,
          questionsNumber: 0,
          minutesNumber: 10,
        },
        {
          title: "Global Varibale and Scope",
          isShowItem: false,
        },
        {
          title: "Newer Way of Creating a Constant",
          isShowItem: false,
        },
        {
          title: "Constants",
          isShowItem: false,
        },
      ],
    },
  ];

  return (
    <ul className="flex flex-col gap-15">
      {Courses.map((course, index) => (
        <CardCourses key={index} item={course} />
      ))}
    </ul>
  );
}

export default Weeks;
