-- Create a table for Public Profiles
create table profiles (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  adult_name text,
  avatar_url text,
  child_name text,

  primary key (id),
--   unique(adult_name),
  constraint username_length check (char_length(adult_name) >= 1)
);

alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Set up Realtime!
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime add table profiles;

-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');

create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );

create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'avatars' );

--   make me tree table

create table me_tree (
  id uuid references auth.users not null,
  background text,
  tree_location text,
  -- growing varchar[],
  -- growing_top integer,
  -- growing_left integer,
  -- who_around varchar[],
  -- who_around_top integer,
  -- who_around_left integer,
  boxes json,
  primary key (id)
);

--- gallery table

insert into storage.buckets (id, name)
values ('wonder-gallery', 'wonder-gallery');

CREATE TABLE gallery (
  id uuid references auth.users not null,
  me_tree_images varchar[],
  wonder_time_images varchar[],
  primary key (id)
);

CREATE TABLE progress (
  id uuid references auth.users not null,
  unlocked varchar[],
  primary key (id)
);

CREATE POLICY "Anyone can upload an images z7mhxc_0" ON storage.objects FOR INSERT WITH CHECK ((bucket_id = 'wonder-gallery':: text));

CREATE POLICY "Images are public z7mhxc_0" ON storage.objects FOR
SELECT
  USING ((bucket_id = 'wonder-gallery':: text));
  
CREATE POLICY "Images are public z7mhxc_0" ON storage.objects FOR
SELECT
  USING ((bucket_id = 'wonder-gallery':: text));
