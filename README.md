# How to use

1. Install yarn

```
npm i -g yarn
```

2. Install dependencies

```
yarn
```

3. Spin up the dev server

```
yarn dev
```

# QnA

1. How did you tackle the assignment?

   > Within the time frame given there was no time for planning so I just jumped in and wrote some code. The second day I googled stuff that bothered me and refined some implementations but that's it.

2. Thought Process

   > - Write something as proof of concept
   > - Refactor it to be more readable and enable less repetition.
   > - Break it up into some smaller isolated parts.
   > - Move on to the next part.

3. Any issues you encountered?

   > Time frame was too small for anything more than a proof of concept.

4. Things you enjoyed or didn't enjoy?
   > I don't enjoy MUI's API, I have come to like more of a less opinionated approach to CSS like Tailwind + HeadlessUI or ChakraUI. It feels like you're building components from the ground up, giving you full freedom and control over what's being built. MUI makes you mash material design concepts together until it works. On the bright side, I really liked building that query params mechanism and optimizing the favourites and recently viewed services up to a point.

# Docs

## <MovieFinder \/>

Self-explanatory name, is meant to utilize useFetchMovies which is the core logic of this whole component/page.

What you should know about this is that MovieFinder and useFetchMovies listens to query param changes and refetches according to that, every component trying to search something new must try to change/listen to query param changes. Query params are used like a global state and the reason for that is that I wanted the user to have the choice of using the back/forward buttons, refresh and send fully functional links to their friends.

## Recently Viewed and Favourites Services

Obviously there were limitations. LocalStorage was used for saving the user data. The code and the idea behind it are ok, they're just meant to be written/run on the backend so that there's online sync across user devices.
