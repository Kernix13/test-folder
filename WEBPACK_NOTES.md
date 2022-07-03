# From Udemy Git Course

COOL NOTE: next use node to download an image

- in order to send out a request onto the internet we’ll require another package - `https` if your url has the `s` otherwise `http`
- use the method `get` which gets 2 parms - `get(a,b)` where `a` = the url you want to work with and `b` = a fx you want to do with that location
- the get with will pass along the data that lives in the url to our Fx - give the Fx a parm
- we want to pipe it or send it somewhere - inside `pipe( )` use `fs.createWriteStream` method

## GitHub Webpack templates and boilerplates

- [Webpack 5 Boilerplate Template](https://github.com/WeAreAthlon/frontend-webpack-boilerplate)
- [Minimal Electron, React and Webpack boilerplate](https://github.com/alexdevero/electron-react-webpack-boilerplate)
- [Webpack Boilerplate](https://github.com/chuntington/webpack-boilerplate)
- [React Webpack Starter](https://github.com/asnordstrand/react-webpack-starter)
- [Webpack Demo](https://github.com/Colt/webpack-demo-app)

Useful Chrome extensions for web developers: https://twitter.com/MentorWebDev/status/1536648260080877569

## Section 3

lesson 11: NPM Introduction

- install npm with `npm init -y` to create `package.json`
- then `npm install normalize.css`
- as a test delete node_modules then do `npm install`
- create `.gitignore` and add node_modules to it

## Section 4 lesson 13 Webpack Introduction

- his folder structure is 1) app > assets & index.html > (images > icons), (scripts > modules), (styles > base, modules) - 2) docs > assets & index.html & bundled js and cssfiles > (images > icons)
- so change the following
  - app to src
  - add assets folder in src
  - add scripts folder in src
    - create App.js in scripts
  - add styles folder in src
    - create styles.css, need base and modules folders with files
  - create index.html in src
  - create either docs or dist folder, but if dist make changes

Out of the box Webpack only understands JS files so create app > assets > scripts > App.js

- create an alert or console.log in App.js to test our webpack
- then `npm install webpack webpack-cli --save-dev`
- then create `webpack.config.js` in the root folder

### Setting up Webpack config file

- in webpack.config.js first create an object
- you only need to define 1 property: `entry`
  - in there you add a string which is a path that points towards the JS file that you want Webpack to watch & bundle
  - then add `module.exports = ` before the opening object curly bracket - that sets the js object as what Webpack will use
- then go into `package.json` to create npm scripts to run, add:

```json
"dev": "webpack",
"build": "webpack",
```

- dev is so we don't have to install webpack globally
- to run that script use `npm run dev`
  - that will create a dist folder and inside main.js -

But what if you don't want the dist to be named that or main

- he created an `output` prop in the config file set to an object and with props of `filename` and `path`, and `path` requires the node.js path package
- skip that since I won't be changing the folder name or location of the file name:

```js
const path = require("path");

module.exports = {
  entry: "./src/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  mode: "development"
};
```

- there is a warning in the terminal warning the the 'mode' option has not been set - to fix that add the mode prop (see code block above)
- then do npm run dev again and then load your main.js into index.html in the src folder
- PROBLEM: HIS JS FILE AND FOLDER STRUCTURE IS WAY DIFFERENT THAN MINE - fix that later
- but any changes don't show - we need to tell webpack to generate the bundle again - so again do npm run dev to fix that go into webpack.config and add `watch: true` - that will keep webpack running:

```js
const path = require("path");

module.exports = {
  entry: "./src/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  mode: "development",
  watch: true
};
```

## Section 4 lesson 15 CSS with Webpack

CSS Workflow:

- CSS Autoprefixer - vendor prefixes
- SASS Varables
- SASS Nesting
- Get all that using PostCSS which is a post-processor (the fatest compiler)

We need a CSS file to bundle

- create styles.css in src\assets\styles, add a style but don't load a link tag in your html file but that wouldn't allow for an automated workflow
- we want to load that CSS file into your main JS file
- go into App.js and add `import "../styles/styles.css";` but webpack won't load it - it's by default only setup for JS - need a new package:
- `npm install css-loader style-loader --save-dev` -
- then to use them go into webpack.config.js, we can tell webpack what to do when it runs into certain files by ading a prop called `modules`
- give it an object with a prop called `rules` which is an array which tkes an object
- NOTES: you can have multiple objects in that array where you tell webpack to do something different depending on the filetype
- this object at this time gets 2 props: `test` and `use`
- `test`: it gets a RegEx for what you are testing for -
- `use`: gets an array for the npm packages add 'css-loader' and test it
- then run npm run dev which bundles the css into main.js but the text color did not change - it's not being used in the browser -> style-loader
- you need to add 'style-loader' before css-loader in the `use` prop
  - css-loader lets webpack understand and bundle css, style-loader actually applies the css in he browser
- save and stop the cmd and run npm run dev again

Now add PostCSS support

- `npm install postcss-loader --save-dev` - then in webpack.config:
- add postcss-loader at the end of the `use` array but it's different - we need to add an object:
  - it gets 2 props: loader and options, loader is easy but options takes an object itself:
  - that obj gets 1 prop, `postcssOptions` which itself gets an object which gets a prop of `plugins` which also takes an object
  - gives the `plugins` prop a var name which will be an array: postCSSPlugins
  - then install the plugins: `npm install postcss-simple-vars postcss-nested autoprefixer --save-dev`
  - then in config file require them into the var ayyar created above
- test a variable in the styles.css file

NOTE: change to css-loader (see code). By default, the css-loader will attempt to handle any images we reference in our CSS. Usually this is great, but we want to disable this and we will manage our image files manually.

Why are we loading the CSS into the JS file?

> not sure or I missed it

## Section 5 lesson 17 CSS file architecture

- create a folder in t he styles folder called `modules` - create a file for the hero section called `_hero-section.css`
- the underscore indicates that it is a "partial" file that will need to be imported into another file
- use @import to import that file into the main file without the .css extension
- we want Webpack and PostCSS to see the import line and replace it the contents of the file - need a package
- `npm install postcss-import --save-dev` - then in webpack config, require it in in the postCSSPlugins variable
- NOTE: this `?url=false` added to css-loader gave me an error when trying to use the @import and postcss-import - had to remove it
- create another folder called base and then `_global.css`
- MAKE SURE `_global` is the first thing imported into the main file -

NEXT: Normalize.css

- in main style file `@import "normalize.css";` and now I don't need the resets for `*` and th `body` tag

### Identify patterns in design

- look into `transform: translateY` or translateX - they allow tou to position an element relative to itself
- nesting: use the ampersand symbol (`&`) plus the element or modifier values when nested inside the parent block: for `.hero-section__title` use `&__title`

## Webpack dev server

- `npm install webpack-dev-server --save-dev`
- then in webpack.config, in module.exports add a new property: `devServer`
- give it an object - then a prop of `contentBase` which will point to a directory that we want webpack to serve up: the `src` folder
- had to import path, create the output object - also add 2 more props of hot and port - also, remove the watch prop
- then go into package.json - add `serve` to the dev script
- finally, go into main js file and have it accept hot module replacement - then `npm run dev` to test it out - problem with contentBase, found answer on Udemy, had to change the src for my js file in index.html -
- but now full reloads are unnecessary with changes to CSS
- to do the same for the HTML, in webpack.config it's the before prop w\ the Fx but I got a replacement for that from contentBase so skip -
- postcss-dart-sass does not work with .css extensions so @use does not work
- then something to view out site on any device using webpack.config - add the host prop so other devices on the same network can view it - but you need to find the local ip address of the pc you are working on, you type your ip address into your other device and just add :3000 - SKIP
- finally, delete the bundled.js file - refresh the page and all is okay - webpack keeps the bundled file in memory - also need to remove it from index.html

## Section 7 lesson 17 mobile first meaning

- `npm install postcss-mixins --save-dev` - then go into webpack.config file in the postCSSPlugins array, after import add `require('postcss-mixins')`
- need this for media queries, create `_mixins.css` in the `base` folder - add a media query inside `&__title` to decrease the font size - I need to also do flex-direction: column for the hero section but skip that for now -
- mixin name `@define-mixin atSmall` - no lose `define-` and just use `@mixin` -and `@mixin-content` should just be `@content` - nope, that is correct - see [@mixin and @include](https://sass-lang.com/documentation/at-rules/mixin)
- import `_mixins` into main stylesheet -

## Section 8 lesson 24 Creating Reusable Blocks

- think in terms of padding, margin, margin 0 auto, row, col, container - all of those things are reusable
- create new blocks and files as needed

## Section 12 lesson 39 styling header pt 2

- mobile menu HTML & CSS - hide `menu-content` for small sccreens - add `atMedium`, `row--header-nav` - add mobile menu icon in html file,
- add a few lines above `site-header__menu-content` –
- add `div.site-header__menu-icon` – leave the `div` empty
- add a new rule in `site-header.css`, build the functionality & 3 bars later
- mobile menu icon at 6:00 -

## Section 13 lesson 42 OOP

- storing Functions in objects - use the dot notation to access that fx
- OOP is the mindset where you stop thinking in terms of individual variables and functions and begin thinking in terms of cohesive, self-sufficient objects
- Object = data + behavior, nouns (the keys) & verbs (methods / actions)
- `Constructor` function: start the constructor function name with a capital letter - you use the keyword `new` to create a new instance
- the `this` keyword: changes depending on how, when, and where the Fx is when it is called
- the this keyword refers to whichever object is currently being created

### lesson 43 the JS module pattern and "webpack"

- create a new js folder called `modules` - each new feature should have it's own new separate file in the `modules` folder
- `export default` each function at the bottom of each file - then in App.js use `import Name "./modules/Person"`
- 1. create a modules folder, 2) create a file in that folder with the name of the Fx you will be putting in it, 3) export that function at the bottom of the file, 4) import that file / Fx into your main file so it has access to it
- EXAMPLE: `class Person { ... }` - in the curly brackets provide it a constructor using `constructor() { ... }`
- also keyword `extends` for additional methods for some of the objects

## Section 14 lesson 44 avoid spahetti code

> WATCH FROM HERE UNTIL lesson 59

- in the modules folder create `MobileMenu.js` - then a class `MobileMenu`
- respond to the click event - see file code
- NOTE: Aroow Fx's do NOT manipulate the value of the `this` kw
- the `toggle` method will add the class in it if it is not there, or remove it if it is there

### lesson 45 adjusting mobile menu

- fuck this code is too fucked up just for a mobile menu

```scss
.menu-icon--close-x {
  &::before {
    transform: rotate(45deg) scaleX(1.25) translateY(-1px);
  }
  .site-header__menu-icon__middle {
    opacity: 0;
    transform: scaleX(0);
  }
  &::after {
    transform: rotate(-45deg) scaleX(1.25) translateY(1px);
  }
}
```

### lesson 46 animating hamburger menu icon into `X`

- SKIP

## Section 18 lesson 57 code splitting with webpack

- when they first visit the site they have no need for the js that powers the modal – as a result, there is no need to include that code in the main js bundle that the user d\l's right away
- webpack bundles up everything you are importing – delete the modal import line - and the new modal() instance line
- then set things up in that main file so that when you click on one of the btns, then on demand you load in the modal js – that way they only d\l it if they need it
- REALLY LONG SECTION -
- STOPPED - STOPPED - STOPPED - STOPPED -

### lesson 58 lazy loading images for faster page loads

- `npm install lazysizes`, don't need `--save-dev` because it's not a workflow package

## Section 19 lesson 59 preparing to go live pt 1

- setting up a web ready version - the BUILD process
- his `git` commands around 3:30 are good
- create `npm run build` in package.json to build our site for the public
- the build script only needs to run once to generate, not watch like dev
- then jump into webpack.config - we know which task just ran: ev or build - so create a new var at the top called `currentTask` - that var ill = either dev or build
  - create a var called `config` set to {} - then set up 2 if statements to check for dev or build
  - but we no longer want the file to export the module.exports object - so at the bottom add `module.exports = config;`
  - and configuration that can be shared between dev and build goes into that var - things in common:
  - `entry`and `module` for now same for both so in config
  - for both but with changes: `output` but with folder changes for both, `mode` but with changes,
  - only dev: `devServer`,
  - only build:
- now test out both scripts - works - but we need to copy our html and splits the css out of the js file, also copy the photos

NOTE: he is bundling the js for the mobile menu

## Section 19 lesson 60 preparing to go live pt 2

- first, enable a webpack feature for the build task which helps users d\l less data: chunk files
- go to the if build task in webpack.config - add `config.optimization`
- that is supposed to created another bundled.js file for vendor codeL azy loading, debounce, but I did not do any of that for my project here - regardless, that code is not updated often so it does not need to be redownloaded when we update our code -
- for our code we need a different file name to replace cached versions - see code - delete the bundled js files then `npm run build` -
- **I deleted dist/main.js and dist/bundled.js and commented out the script tag in the html file - no styles**
- we need to d\l a plugin to delete the old files: `npm install clean-webpack-plugin --save-dev` - then in config file, requie it in
- use in the build if statement: add `config.plugins`
- nest extract css out of the js bundle - use `npm install mini-css-extract-plugin --save-dev` - we need to use that plugin in 2 different areas in webpack.config: 1) in the shared `config`, 2) for the build process
- in `config`, we want to use a loader from that plugin, but we only want to use it for our build task
  - also, we only want to use `style-loader` for `dev` and not for `build` -
- the `rules` property is an array with only 1 object - so turn it into a varible and modify it in the if statements -

> SHIT! how do I handle `css-loader?url=false`? Take it out again?

- add the rules object into `cssConfig` variable but delete `style-loader`
- then modify the if statement for `dev` to add back in `style-loader` and the mini extract plugin for `build`
- what is `use` in `cssConfig.use`? Repeat for `build` but `unshift(MiniCssExtractPlugin.loader)`
- now we need to add the as a plugin - do it in `config.plugins` - but pass it an object - then test it out with `npm run build`
- you should see a CSS file in dist - but it will not be minimized
- so do `npm install css-minimizer-webpack-plugin` - require it in - then go to config.optimization in `build` -

> Lesson 61: note about vendor js files and adding `splitChunks: {chunks: 'all', minSize: 1000}` - read read of note in that lesson!!!

## Section 19 lesson 62 preparing to go live pt 3

- copy the html from the `src` folder - but the html file needs to know the names of the js and css files it wants to load - delete the `script` tag in the html file - there is a plugin that can fix this
- `npm install html-webpack-plugin --save-dev` - in webpack.config, require it in - in config add a plugins prop but that will change to pages later - then we'll need to push the `build` plugins array into this shared array -
- new htmlwebpackplugin and it gets an obj with filename for the name we want to generate, and another prop called template to point to the file we want to use - then in `build` change to push()
- then `npm run build` - all but images

## Section 19 lesson 63 preparing to go live pt 4

NOTE: if you have 10 or more pages you should be using a static site generator - we need to make a couple of more html files

- we need node to create an array of the html files - the pacakge `fs-extra` is better than node's `fs` - `npm install fs-extra --save-dev`
- then a lot of code in webpack.config - 3:00
- filter() gets the html files, them map() applies a new HtmlWebpackPlugin instance for each one - save and test
- now to copy over our images - see code referencing `RunAfterCompile` which is a class but he is adding it as a plugin - no clue on the class code for this
- test wih npm run build -
- finally, make our js backwards-compatible for older browsers - need to install a few packages:
- `npm install @babel/core @babel/preset-env babel-loader --save-dev`
- in the `build` if statement, HERE IS A DEVIATION FROM THE FINISHED WEBPACK.CONFIG FILE
  - `config.module.rules.push({})` - see config after cssConfig
- dist is now ready to upload to a webhost! -

NOTE: Github requires the dist file to be called docs - skip that or maybe that is needed for Netlify coming from GitHub but this video is old

## Section 20 lesson 65 Netlify intro

- ddd

> PostCSS plugin to parse styles with Dart Sass. Latest version: 1.0.0, last published: a year ago. Start using postcss-dart-sass in your project by running `npm i postcss-dart-sass`. There are no other projects in the npm registry using postcss-dart-sass . Tried changing .css t o .scss but postcss-loader throwing errors

- `npm install postcss-dart-sass --save-dev` then in `webpack.config.js` add `require('postcss-dart-sass'),` to the `postCSSPlugins` variable - gave me errors - probably need .scss file extensions - FUCK

---

travels-site webpack.config.js file:

```js
const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fse = require("fs-extra");

const postCSSPlugins = [require("postcss-import"), require("postcss-mixins"), require("postcss-simple-vars"), require("postcss-nested"), require("autoprefixer")];

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy images", function () {
      fse.copySync("./app/assets/images", "./docs/assets/images");
    });
  }
}

let cssConfig = {
  test: /\.css$/i,
  use: ["css-loader?url=false", { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
};

let pages = fse
  .readdirSync("./app")
  .filter(function (file) {
    return file.endsWith(".html");
  })
  .map(function (page) {
    return new HtmlWebpackPlugin({
      filename: page,
      template: `./app/${page}`
    });
  });

let config = {
  entry: "./app/assets/scripts/App.js",
  plugins: pages,
  module: {
    rules: [
      cssConfig,
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      }
    ]
  }
};

if (currentTask == "dev") {
  cssConfig.use.unshift("style-loader");
  config.output = {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  };
  config.devServer = {
    before: function (app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: "0.0.0.0"
  };
  config.mode = "development";
}

if (currentTask == "build") {
  cssConfig.use.unshift(MiniCssExtractPlugin.loader);
  config.output = {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "docs")
  };
  config.mode = "production";
  config.optimization = {
    splitChunks: { chunks: "all" },
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()]
  };
  config.plugins.push(new CleanWebpackPlugin(), new MiniCssExtractPlugin({ filename: "styles.[chunkhash].css" }), new RunAfterCompile());
}

module.exports = config;
```

Webpack config from udemy react:

```js
const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fse = require("fs-extra");

/*
  Because I didn't bother making CSS part of our
  webpack workflow for this project I'm just
  manually copying our CSS file to the DIST folder. 
*/
class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy files", function () {
      fse.copySync("./app/main.css", "./dist/main.css");

      /*
        If you needed to copy another file or folder
        such as your "images" folder, you could just
        call fse.copySync() as many times as you need
        to here to cover all of your files/folders.
      */
    });
  }
}

config = {
  entry: "./app/Main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "app/index-template.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
};

if (currentTask == "webpackDev" || currentTask == "dev") {
  config.devtool = "source-map";
  config.devServer = {
    port: 3000,
    static: {
      directory: path.join(__dirname, "app")
    },
    hot: true,
    liveReload: false,
    historyApiFallback: { index: "index.html" }
  };
}

if (currentTask == "webpackBuild") {
  config.plugins.push(new CleanWebpackPlugin(), new RunAfterCompile());
  config.mode = "production";
  config.output = {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  };
}

module.exports = config;
```
