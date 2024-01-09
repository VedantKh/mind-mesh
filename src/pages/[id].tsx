// This file is responsible for fetching and displaying a specific note from the database using its ID.
// It uses the useRouter hook from Next.js to get the ID from the URL, and the useEffect hook to fetch the note when the ID changes.
// The note is then displayed in a simple HTML structure.

import { useRouter } from "next/router"; // Importing useRouter hook from Next.js for routing
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { supabase } from "./lib/utils"; // Importing supabase client for database operations
import { Textarea } from "@nextui-org/react";
import { saveNote } from "./lib/utils";

// Functional component for the Note page
const NotePage = () => {
  const router = useRouter(); // Using useRouter hook to get the router object
  const { id } = router.query; // Destructuring to get the ID from the router query
  const [note, setNote] = useState(""); // Using useState hook to manage the note state

  // Using useEffect hook to fetch the note when the ID changes
  useEffect(() => {
    if (id) {
      fetchNote(typeof id === "string" ? id : id[0]); // Fetching the note if ID is present
    }
  }, [id]);

  // Function to fetch a note from the database using its ID
  const fetchNote = async (id: string) => {
    const { data, error } = await supabase // Using supabase client to fetch the note
      .from("notes") // Selecting the "notes" table
      .select("note") // Selecting the "note" column
      .eq("id", id) // Where the ID equals the provided ID
      .single(); // Expecting a single result

    // Error handling
    if (error) {
      console.error("Error fetching note: ", error); // Logging the error if there is one
    } else {
      setNote(data.note); // Setting the note state if the fetch was successful
    }
  };

  // Rendering the note
  return (
    <div>
      {/* Displaying the note ID */}
      <h1>Note {id}</h1>
      {/* Displaying the note text */}
      <Textarea
        placeholder="Enter a note"
        className="max-w-xs"
        value={note || "Loading..."} // bind note state variable to the value of Textarea, if note is not available yet, display "Loading..."
        readOnly
        //make text black
        style={{ color: "black" }}
      />
      {/* !!!!!!!!! Replace this with nicer button component */}
      {/* <button onClick={saveButtonClicked}>Save</button>{" "} */}
    </div>
  );
};

// Exporting the NotePage component as the default export
export default NotePage;
