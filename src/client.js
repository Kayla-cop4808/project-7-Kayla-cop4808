import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fxmhjiiemhywzoshmdqy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4bWhqaWllbWh5d3pvc2htZHF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NjE2OTcsImV4cCI6MjA2MDAzNzY5N30.g55yAApEofgHDgtmD-gwk7D8fe7uDXLVX2tYlZTOkRY';

export const supabase = createClient(supabaseUrl, supabaseKey);