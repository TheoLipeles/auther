![Badge of Honor](https://img.shields.io/badge/Built%20at-Fullstack-green.svg?style=flat-square)

# auther

After cloning or downloading, don't forget to install with `npm install` as well as `bower install`.

Once you've ensured that `mongod` is running (e.g. by trying to start a `mongo` shell), you can execute `npm run seed` to seed the database with fake data.

Finally, fire it up with `npm start` and go to `http://localhost:8080/`.

## File Structure

> Files edited are marked with **.

```
.
├── **README.md**
├── bower.json
├── browser
│   ├── app
│   │   ├── auth
│   │   │   ├── **auth.factory.js**
│   │   │   ├── **signin.directive.js**
│   │   │   └── **signin.html**
│   │   ├── home
│   │   │   ├── home.css
│   │   │   ├── home.html
│   │   │   ├── home.scss
│   │   │   └── home.state.js
│   │   ├── login
│   │   │   ├── **login.controller.js**
│   │   │   ├── **login.html**
│   │   │   └── **login.state.js**
│   │   ├── main.css
│   │   ├── main.js
│   │   ├── main.scss
│   │   ├── signup
│   │   │   ├── **signup.controller.js**
│   │   │   ├── **signup.html**
│   │   │   └── **signup.state.js**
│   │   ├── story
│   │   │   ├── detail
│   │   │   │   ├── story.detail.controller.js
│   │   │   │   ├── story.detail.css
│   │   │   │   ├── story.detail.html
│   │   │   │   ├── story.detail.scss
│   │   │   │   └── story.detail.state.js
│   │   │   ├── list
│   │   │   │   ├── story.list.controller.js
│   │   │   │   ├── story.list.css
│   │   │   │   ├── story.list.html
│   │   │   │   ├── story.list.scss
│   │   │   │   └── story.list.state.js
│   │   │   └── story.factory.js
│   │   └── user
│   │       ├── detail
│   │       │   ├── user.detail.controller.js
│   │       │   ├── user.detail.css
│   │       │   ├── user.detail.html
│   │       │   ├── user.detail.scss
│   │       │   └── user.detail.state.js
│   │       ├── item
│   │       │   ├── user.item.controller.js
│   │       │   ├── user.item.css
│   │       │   ├── user.item.directive.js
│   │       │   ├── user.item.html
│   │       │   └── user.item.scss
│   │       ├── list
│   │       │   ├── user.list.controller.js
│   │       │   ├── user.list.css
│   │       │   ├── user.list.html
│   │       │   ├── user.list.scss
│   │       │   └── user.list.state.js
│   │       └── user.factory.js
│   ├── components
│   │   ├── contenteditable
│   │   │   ├── contenteditable.css
│   │   │   ├── contenteditable.directive.js
│   │   │   └── contenteditable.scss
│   │   ├── footer
│   │   │   ├── footer.css
│   │   │   ├── footer.directive.js
│   │   │   ├── footer.html
│   │   │   └── footer.scss
│   │   ├── navbar
│   │   │   ├── navbar.css
│   │   │   ├── navbar.directive.js
│   │   │   ├── navbar.html
│   │   │   └── navbar.scss
│   │   ├── oauth-button
│   │   │   ├── oauth-button.directive.js
│   │   │   └── oauth-button.html
│   │   └── signin
│   │       ├── signin.css
│   │       └── signin.scss
│   └── utils
│       └── eatClick.directive.js
├── **package.json**
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── stock-footage-old-man.jpg
│   │   └── stock-footage-old-typewriter.jpg
│   ├── **index.html**
│   └── logo.png
├── seed.js
└── server
    ├── api
    │   ├── index.js
    │   ├── stories
    │   │   ├── story.model.js
    │   │   └── story.router.js
    │   └── users
    │       ├── user.model.js
    │       └── **user.router.js**
    ├── app
    │   ├── error.middleware.js
    │   ├── index.js
    │   ├── logging.middleware.js
    │   ├── requestState.middleware.js
    │   ├── sass.middleware.js
    │   └── statics.middleware.js
    ├── db.js
    ├── index.js
    └── utils
        └── HttpError.js
```

---

> 🔧 with ❤️ by <a href="http://fvcproductions.com" target="_blank">FVCproductions</a> and <a href="https://github.com/TheoLipeles" target="_blank">Theo Lipeles</a> at <a href="http://fullstackacademy.com" target="_blank">Fullstack Academy of Code</a>.
