import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dffakphxqngbdrnnupzo.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

console.log("supabaseKey: ", supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);

export const saveNote = async (note: string): Promise<void> => {
  try {
    const { data, error } = await supabase
      .from("notes")
      .insert([{ text: note }]);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Error saving note: ", error);
  }
};
