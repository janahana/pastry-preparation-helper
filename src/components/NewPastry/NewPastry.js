import { useState } from "react";
import PastryNote from "./PastryNote";
import "./NewPastry.css";

const NewPastry = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  // React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function.

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const savePastryEntryHandler = (enteredPastryEntry) => {
    const pastryEntry = {
      ...enteredPastryEntry,
      id: Math.random().toString()
    };

    console.log(pastryEntry);

    props.onAddPastry(pastryEntry);

    setIsEditing(false);
  };

  return (
    <div>
      {isEditing === true ? (
        <PastryNote
          onSavePastryEntry={savePastryEntryHandler}
          onCancel={stopEditingHandler} /* props in PastryNote */
        />
      ) : (
        <button
          className="start-note-btn"
          type="button"
          onClick={startEditingHandler}
        >
          來寫食譜！
        </button>
      )}
    </div>
  );
};
export default NewPastry;
