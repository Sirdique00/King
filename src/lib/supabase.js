import { createClient } from '@supabase/supabase-js';
import { APP_CONFIG } from '../config/app.js';

if (!APP_CONFIG.supabaseUrl || !APP_CONFIG.supabasePublishableKey) {
  throw new Error('Supabase public configuration is missing.');
}

export const supabase = createClient(
  APP_CONFIG.supabaseUrl,
  APP_CONFIG.supabasePublishableKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
);
