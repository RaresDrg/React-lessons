import "./App.css";
import Button from "./Button";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import TutorsList from "./TutorsList";
import Books from "./books/Books";

function App() {
  const isVisible = true;

  const menuItems = [
    {
      id: 0,
      name: "Acasa",
    },
    {
      id: 1,
      name: "Despre mine",
    },
    {
      id: 2,
      name: "Contact",
    },
  ];

  const data = {
    name: "MIT",
    description:
      "Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge. ",
    tutors: [
      {
        firstName: "John",
        lastName: "Smith",
        phone: "+1 302-865-7394",
        email: "johnsmith@goit.global",
        city: "New York",
        options: "Group creation",
      },
      {
        firstName: "Antonio",
        lastName: "García",
        phone: "+34 456 890 302",
        email: "antonio.garcia@goit.global",
        city: "Madrid",
        options: "Group creation, editing teacher profiles",
      },
    ],
    cities: ["Kyiv", "London", "Berlin"],
    department: [
      { name: "Faculty of Computer Science" },
      { name: "Faculty of Automation" },
      { name: "Faculty of Neural Networks" },
    ],
  };

  return (
    <div>
      <h1>Aplicatia mea REACT</h1>
      <Menu items={menuItems} />
      <Button
        text="Click me"
        icon="&"
        handleClick={() => console.log("Button clicked")}
      />
      <SearchBar text="search bar" isVisible={isVisible} price={23} />
      <TutorsList tutors={data.tutors} />
      <Books />
    </div>
  );
}

export default App;
