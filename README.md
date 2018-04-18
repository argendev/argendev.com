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

There are two settings you can tweak, both found under "Slideshow Background" in `assets/js/main.js`:

* `images`

The list of images to cycle through, given in the following format:

```
'url': 'alignment'
```

where 'url' is the image (eg. 'images/foo.jpg', 'http://somewhere.else/foo.jpg'), and 'alignment' is how the image should be vertically aligned ('top', 'center', or 'bottom').

* `delay`

How long to wait between transitions (in ms). Note that this must be at least twice as long as the transition speed itself (currently 3 seconds).
