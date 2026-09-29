// Konfigurasi Supabase Project
const SUPABASE_URL = "https://cdqcdiykygxxjiflojbp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcWNkaXlreWd4eGppZmxvamJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyMjE1NjYsImV4cCI6MjEwNTc5NzU2Nn0.hSMKpRMmyNGNxajxO68Fj7JyDiwEH1IFFuFnEjmiyrE";

// Inisialisasi client Supabase
const sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const supabaseClient = sbClient;
const supabase = sbClient;