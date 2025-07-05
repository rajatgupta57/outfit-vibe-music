// supabase-config.js
const SUPABASE_URL = 'https://your-project-id.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6cnNidWF1bHZhZW15anp2dmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MTcyMTUsImV4cCI6MjA2NzI5MzIxNX0.xJUze093BDXLjvneI3f8CIlpt6O_RCIG10r2psbrNiA'; // Replace with your actual anon key

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other files
window.supabaseClient = supabase;
