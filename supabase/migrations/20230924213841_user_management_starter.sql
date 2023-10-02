-- Create a table for public profiles
CREATE TABLE users (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  email TEXT NOT NULL,
  verified BOOLEAN,
  firstName TEXT,
  lastName TEXT,
  address TEXT,
  city TEXT,
  province TEXT,
  postalCode TEXT,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Set up Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Define RLS Policy
CREATE POLICY "Public profiles are viewable by everyone." ON users
  FOR SELECT USING (TRUE);

CREATE POLICY "Users can insert their own profile." ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile." ON users
  FOR UPDATE USING (auth.uid() = id);

-- -- This trigger automatically creates a user entry when a new user signs up via Supabase Auth.
CREATE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
