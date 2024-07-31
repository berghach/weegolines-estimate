
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://plfhsxzvdcvtmouppryb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsZmhzeHp2ZGN2dG1vdXBwcnliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MzE5MTcsImV4cCI6MjAzNzQwNzkxN30.x3CEBSk1WpPuTDzUd5Bd6x3oRDrBMXrZ_1V21a6MYzQ');

export default supabase