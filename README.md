# argendev.com

![Screenshot](https://i.imgur.com/ZLJtYHL.png)

## Prerequisites

* Node.js (https://nodejs.org/)
* Yarn (https://yarnpkg.com/)

## Development Tasks

| Command | Description |
|---------|-------------|
| `yarn install` | Fetch dependencies and build binaries for any Node modules |
| `yarn start` | Run the app in development mode with live reload on `http://localhost:6789` |
| `yarn build` | Generate an optimised, production-ready `build` folder |

## CI/CD

* All commits to master trigger a deployment to the production environment (https://argendev.com).

## Slideshow Background

This is pretty straightforward, but there are two JS settings you'll want to be aware of (found under "Slideshow Background" in `assets/js/main.js`):

* `images`

The list of images to cycle through, given in the following format:

```
'url': 'alignment'
```

where 'url' is the image (eg. 'images/foo.jpg', 'http://somewhere.else/foo.jpg'), and 'alignment' is how the image should be vertically aligned ('top', 'center', or 'bottom').

Note: Browsers that don't support CSS transitions (like IE<=9) will only see the first image.

* `delay`

How long to wait between transitions (in ms). Note that this must be at least twice as long as the transition speed itself (currently 3 seconds).

## Forms

I have included some basic code under "Signup Form" in `assets/js/main.js` that will let you interact with the form.

```html
<form id="signup-form" method="post" action="#">
  <input type="email" name="email" id="email" placeholder="Email Address" />
  <input type="submit" value="Sign Up" />
</form>
```

## Packages and Dependencies

*	Font Awesome (http://fontawesome.io/)
* html5shiv.js (https://github.com/aFarkas/html5shiv)
* Respond.js (https://github.com/scottjehl/Respond)
* Skel (http://skel.io)

## Credits

Based off Eventually by [HTML5 UP](html5up.net). Free for personal and commercial use under the CCA 3.0 license (html5up.net/license).
