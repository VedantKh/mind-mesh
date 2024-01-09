import { useState } from "react"; // Importing useState hook from react for managing local state
import { Textarea } from "@nextui-org/react";
import { saveNote } from "./lib/utils";
import { useRouter } from "next/router";

// This is the main component for the home page
export default function Home() {
  // userNote is the state variable which holds the value of the text input
  // setUserNote is the function to update the state variable
  const [userNote, setUserNote] = useState(""); // Initializing userNote with an empty string
  const router = useRouter();

  // This function will be called when the save button is clicked
  const saveButtonClicked = async () => {
    // Saving the current value of the text input to userNote
    const id = await saveNote(userNote);
    console.log(id);
    router.push(`/${id}`);
  };

  return (
    <div>
      {/* !!!!!!!!! Replace this with nicer text component */}
      <Textarea
        placeholder="Enter a note"
        className="max-w-xs"
        value={userNote} // bind userNote state variable to the value of Textarea
        onChange={(e) => setUserNote(e.target.value)} // update userNote state variable when Textarea value changes
        //make text black
        style={{ color: "black" }}
      />
      {/* !!!!!!!!! Replace this with nicer button component */}
      <button onClick={saveButtonClicked}>Save</button>{" "}
    </div>
  );
}
