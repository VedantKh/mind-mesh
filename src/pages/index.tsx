import { useState } from "react"; // Importing useState hook from react for managing local state
import { Textarea } from "@nextui-org/react";

// This is the main component for the home page
export default function Home() {
  // userNote is the state variable which holds the value of the text input
  // setUserNote is the function to update the state variable
  const [userNote, setUserNote] = useState(""); // Initializing userNote with an empty string

  // This function will be called when the save button is clicked
  const saveButtonClicked = () => {
    // Saving the current value of the text input to userNote
    console.log(userNote);
    console.log("Save button clicked");
  };

  return (
    <div>
      {/* !!!!!!!!! Replace this with nicer text component */}
      <Textarea
        label="Description"
        placeholder="Enter your description"
        className="max-w-xs"
        value={userNote} // bind userNote state variable to the value of Textarea
        onChange={(e) => setUserNote(e.target.value)} // update userNote state variable when Textarea value changes
        //make text black
        style={{ color: "black" }}
      />
      {/* !!!!!!!!! Replace this with nicer button component */}
      {/* Text input for the user to enter a note */}
      <button onClick={saveButtonClicked}>Save</button>{" "}
      {/* Save button to save the note */}
    </div>
  );
}
