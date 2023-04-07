import "./App.css";
import GoalList from "./components/GoalList";

function App() {
  const listItems = ["Apples", "Oranges", "Grapes", "Berries", "Bananas"];

  const popUpMessage = () => {
    alert("Congratulations on completing your shopping run.");
  };

  const n = 3;

  return (
    <div className="course-goals">
      <h2>List Entries</h2>

      <GoalList
        button1OnClick={() => popUpMessage()}
        button1Text={"Complete"}
        button2OnClick={() => popUpMessage()}
        button2Text={"Delete"}
        listContent={listItems[0]}
        objBoolean={false}
        key={0}
      />
      <GoalList
        button1OnClick={() => popUpMessage()}
        button1Text={"Complete"}
        button2OnClick={() => popUpMessage()}
        button2Text={"Delete"}
        listContent={listItems[1]}
        objBoolean={false}
        key={1}
      />

      <h2>------------------------------</h2>

      <GoalList
        button1OnClick={() => popUpMessage()}
        button1Text={"Complete"}
        button2OnClick={() => popUpMessage()}
        button2Text={"Delete"}
        objBoolean={true}
        obj={listItems}
      />
    </div>
  );
}

export default App;
