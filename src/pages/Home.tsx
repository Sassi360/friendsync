import { Button } from "@/components/ui/button";
import { supabase } from "@/config/supabase-config";
import { FC, useEffect, useState } from "react";

interface Country {
  name: string;
}

export const Home: FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data as any);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <Button onClick={() => alert("Hello World")}>Welcome</Button>

      <ul>
        {countries?.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};
