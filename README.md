# Growing Me

A [Tech For Better](https://www.foundersandcoders.com/tech-for-better/) project by [FAC21](https://www.github.com/fac21).

![Growing Me logo](/public/assets/Logo.svg)

# Table of contents

- [Team](#team)
- [What is Growing Me?](#what-is-growing-me)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Database Schema](#database-schema)
- [Installation](#installation)
- [Key Learnings](#key-learnings)
- [Additional Features](#additional-features)
- [Further information](#further-information)

# Team

- [Safia Ali](https://github.com/fi-ya) :star:
- [Jo Humphrey](https://github.com/jamdelion) :sparkles:

# What is Growing Me?

[(Back to top)](#table-of-contents)

An app and physical toolkit for a key adult to work with a care experienced children to explore their life story. The app is the digital companion to the physical toolkit, and was developed as part of the [Tech For Better programme](https://www.foundersandcoders.com/tech-for-better/), and supported by the [Paul Hamlyn Foundation](https://www.phf.org.uk/).

![image](https://user-images.githubusercontent.com/31373245/129632137-ad80b915-014b-4520-86a3-219f69670474.png)

# Features

[(Back to top)](#table-of-contents)

What can you do?

- Log in with email or magic link ✨
- Set up a profile 🖼️
- Customize the Me Tree's background, location, companions and growing items 🍎
- Save a screenshot of the Me Tree to the gallery 📸
- Navigate through the Growing Me activities 🏋️

![image](https://user-images.githubusercontent.com/31373245/129631666-7f606664-eee2-4903-9cfc-3cd4c814a060.png)

![image](https://user-images.githubusercontent.com/31373245/129631752-5571b168-97c4-45db-ac20-80b9987e740f.png)

![image](https://user-images.githubusercontent.com/31373245/129631860-613b49c2-9445-4074-b8d9-5436e69ff913.png)

![image](https://user-images.githubusercontent.com/31373245/129632014-74e2aca8-28c4-4e5f-9e11-e527c8a8e0d9.png)

# Tech Stack

[(Back to top)](#table-of-contents)

![tech stack: react, node, supabase, postgreSQL, styled-components, vite](https://user-images.githubusercontent.com/31373245/128341773-be90b999-1fd9-4a62-ab7f-02313c29fc6b.png)

### Dependencies

- react
- react-router-dom
- react-dom
- react-dnd
- react-dnd-html5-backend
- react-collapsible
- react-responsive-carousel
- react-burger-menu
- use-react-screenshot
- html2canvas
- @supabase/supabase-js
- styled-components

# Database Schema

[(Back to top)](#table-of-contents)

![schema](https://user-images.githubusercontent.com/31373245/129630367-6fbe1b6d-ff28-41bc-bc39-ee4b56ab4267.png)

# Installation

[(Back to top)](#table-of-contents)

To use this project,

- clone this repo on your device using the command `git clone`
- `cd` into the `growing-me` folder
- Run `npm install` to install dependencies
- Create a `.env` file in the root folder. It should contain the following:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

- To get your Supabase URL, create an account on [https://supabase.io/](https://supabase.io/), create a new project, then go to "Settings", "API" and then the URL field under "Config". The anon key is on the same page, under "Project API keys".
- Run `npm run dev` to run the app

# Key Learnings

[(Back to top)](#table-of-contents)

- Independent debugging, tracing code paths and being OK with imperfection.
- A thorough understanding of state management pitfalls and coping strategies.
- React hooks - useReducer, useRef, useContext and many more! As well as custom hooks.
- Prioritisation and negotiation with a product owner.

# Additional Features

[(Back to top)](#table-of-contents)

There were a few features we were unable to incorporate into the MVP due to time constraints. ⏳ These included:

- Add and delete multiple growing items to the Me Tree.
- Account setting features like change password, delete user account, and adding multiple children to one account.
- Use the Me Tree as an avatar throughout the app.
- "Lock" later content in the activities section until previous activities are complete.
- Move all illustration assets to Supabase.

# Further Information

[(Back to top)](#table-of-contents)

www.growingme.co.uk

info@growingme.co.uk

https://growing-me.netlify.app/

<!-- ![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png) -->

![image](https://user-images.githubusercontent.com/31373245/129634034-107d162f-7853-423a-b769-1912d25555dc.png)
