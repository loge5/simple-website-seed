# Simple Website Seed

Need a Simple Website? Here is the seed for it.

Includes: 

- [jQuery](https://jquery.com/) - Javascript Library
- [Bootstrap](http://getbootstrap.com/) - Responsive CSS Framework
- [Sass](sass-lang.com) - CSS preprocessor (extends css with variables and more)
- [Font Awesome](http://fontawesome.io/) - Nice and free Font-Icons
- [Gulp](http://gulpjs.com/) - Build-Tool (minify, sass compiler, ...)

## install
first clone this project

```
git clone https://github.com/loge5/simple-website-seed.git
```

as administrator/super user

```
npm install -g gulp
```

in project
```
npm install
```

## build

A folder "dist" will be created with all nessassary files.

```
gulp
```

for automatic rebuild on changes
```
gulp watch
```

## start editing
1. Edit
```javascript
src/js/main.js //here goes your javascript, you can create/rename files as your wish
src/sass/main.scss //here goes your sass (or css), you can create/rename files as your wish
src/index.html //here goes your html
src/favicon.ico //the little icon in browser, replace it.
```
2. Don't forget to rebuild with the command `gulp`
3. Copy the folder "dist" on your webspace
