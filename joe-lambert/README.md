# conjugator static marketing page

## structure

### The deployed site is in the `/build` directory.

- Images and icons are in the `/build/assets` directory.
- Compiled CSS is in the `/build/css` directory.
- JavaScript is in the `/build/js` directory.

### Styling

You'll need `node` to compile the `/less` directory into normal CSS.

You'll also need to `npm install less lessc less-watch-compiler` or `yarn add less lessc less-watch-compiler`, whichever you prefer, in order to compile the less files into the `/build/css` directory.

Once you've installed less, open the project in your favorite code editor. Also, navigate to the project in the terminal. In your terminal, run `less lessc less-watch-compiler` and edit a less file to confirm the less compiles properly.

### Working Locally

For local editing, I recommend the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for Visual Studio Code. It's nice.

### Deploys

The site is currently [deployed on netlify](https://festive-heyrovsky-3bebb4.netlify.com/index.html), from the `joe-lambert` branch.

When you push changes to this branch, netlify redeploys the site.
