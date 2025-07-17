import { createClient } from "@supabase/supabase-js";

const playerDB = createClient(
    process.env.URL, 
    process.env.API_KEY
);

export default playerDB