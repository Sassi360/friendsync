import { supabaseClient } from "@/config/supabase-config";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { sessionAtom } from "../../authentication/services/state";
import { Settings } from "../types";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  province: string;
  postalcode: string;
}

const formatUser = (user: User) => {
  const {
    firstname: firstName,
    lastname: lastName,
    email,
    address,
    city,
    province,
    postalcode: postalCode,
  } = user;

  return {
    firstName,
    lastName,
    email,
    address,
    city,
    province,
    postalCode,
  };
};

// Create an atom to store the user data
export const userAtom = atomWithStorage<Settings | null>("user", null);

// Create an async atom to fetch user data
export const fetchUserAtom = atom(
  (get) => get(userAtom),
  async (get, set) => {
    try {
      const session = get(sessionAtom);

      if (!session) {
        throw new Error("No session available");
      }

      const { data: user, error } = await supabaseClient
        .from("users")
        .select(
          `
        firstname,
        lastname,
        email,
        address,
        city,
        province,
        postalcode
        `,
        )
        .eq("id", session.user.id)
        .single();

      if (error) throw error;
      if (user) {
        set(userAtom, formatUser(user));
      } else {
        set(userAtom, null);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  },
);

// Create an async atom to update user data
export const updateUserAtom = atom(null, async (get, set, values: Settings) => {
  try {
    const { firstName, lastName, email, address, city, postalCode, province } =
      values;

    const updates = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      address: address,
      city: city,
      province: province,
      postalcode: postalCode,
    };

    const session = get(sessionAtom);

    if (!session) {
      throw new Error("No session available");
    }

    const { data: user, error } = await supabaseClient
      .from("users")
      .update(updates)
      .match({ id: session.user.id });

    if (error) throw error;
    if (user) {
      set(userAtom, formatUser(user));
    } else {
      set(userAtom, null);
    }
  } catch (error) {
    console.error("Failed to update user:", error);
  }
});
