import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dffakphxqngbdrnnupzo.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

// Creating a new Supabase client using the project URL and the public key
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to save a note to the Supabase database
// The function is asynchronous and returns a Promise that resolves to void
export const saveNote = async (note: string, id: number): Promise<number> => {
  try {
    // Attempt to insert the note into the "notes" table in the database
    // The note is wrapped in an object with a "text" property
    const id = Number(
      BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
    );
    const { data, error } = await supabase
      .from("notes")
      .insert([{ id: id, note: note, link: window.location.origin + "/" + id }])
      .select();

    // If an error occurred during the insert operation, throw the error
    if (error) {
      throw error;
    } else {
      console.log("Note saved successfully");
      console.log(`Link to note: ${window.location.origin}/${id}`);
      return id;
    }
  } catch (error) {
    // If an error was thrown, log it to the console with a descriptive message
    console.error("Error saving note: ", error);
  }
};
