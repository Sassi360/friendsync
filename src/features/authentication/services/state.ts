import { supabaseClient } from "@/config/supabase-config";
import { Session } from "@supabase/supabase-js";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface Credentials {
  email: string;
  password: string;
}

export const sessionAtom = atomWithStorage<Session | null>("session", null);
export const userAtom = atom((get) => get(sessionAtom)?.user);

export const signInAtom = atom(
  null,
  // @ts-ignore
  async (get, set, credentials: Credentials) => {
    const { data, error } =
      await supabaseClient.auth.signInWithPassword(credentials);

    if (error) {
      throw error;
    }

    set(sessionAtom, data.session);
  },
);

export const signUpAtom = atom(
  null,
  // @ts-ignore
  async (get, set, credentials: Credentials) => {
    const { data, error } = await supabaseClient.auth.signUp(credentials);

    if (error) {
      throw error;
    }

    set(sessionAtom, data.session);
  },
);

// @ts-ignore
export const signOutAtom = atom(null, async (get, set) => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    throw error;
  }

  set(sessionAtom, null);
});
