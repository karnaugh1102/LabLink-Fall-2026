import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://ytplppvxndtkzgurbubf.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_371dGO32W6f7_SwMPdwc0w_BZEY0CVL';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
