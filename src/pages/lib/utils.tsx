// Importing createClient from supabase-js to create a new Supabase client
import { createClient } from "@supabase/supabase-js";

// The URL of the Supabase project
const supabaseUrl = "https://dffakphxqngbdrnnupzo.supabase.co";

// The public Supabase key, retrieved from environment variables
// If the key is not found, an empty string is used as a fallback
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

// Creating a new Supabase client using the project URL and the public key
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to save a note to the Supabase database
// The function is asynchronous and returns a Promise that resolves to void
export const saveNote = async (note: string): Promise<void> => {
  try {
    // Attempt to insert the note into the "notes" table in the database
    // The note is wrapped in an object with a "text" property
    const { data, error } = await supabase
      .from("notes")
      .insert([{ text: note }]);

    // If an error occurred during the insert operation, throw the error
    if (error) {
      throw error;
    }
  } catch (error) {
    // If an error was thrown, log it to the console with a descriptive message
    console.error("Error saving note: ", error);
  }
};
