import { create } from 'zustand';
import { supabase } from '../utils/supabase';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loadSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,

  loadSession: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      set({
        user: {
          id: session.user.id,
          email: session.user.email!,
          name: profile?.name || '',
          avatar: profile?.avatar_url || undefined,
        },
        isAuthenticated: true,
        loading: false,
      });
    } else {
      set({ user: null, isAuthenticated: false, loading: false });
    }
  },

  signUp: async (email, password, name) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error) throw error;
  },

  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();
    set({
      user: {
        id: data.user.id,
        email: data.user.email!,
        name: profile?.name || '',
        avatar: profile?.avatar_url || undefined,
      },
      isAuthenticated: true,
      loading: false,
    });
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, isAuthenticated: false, loading: false });
  },
}));
