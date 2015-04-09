# VeloCV's theme repository

## Why should I create a VeloCV theme?

* **Credits**: you're allowed to put your credits in the footer of the theme, every user that will select your theme will show your name/link to all his contacts
* **Money** (not available yet): if the VeloCV user buys the premium service (which is also not available yet) credits are removed but we're working with tax consultants to understand if we can pay a fee to the designer (some money for every day or usage of your themes and for every user)

## Overview of the process of creating and submitting a theme

1. Fork this repository
2. create a new folder, it will be the name of your theme
3. create (inside the folder) a js file with the name name of your folder and .js extension
4. create (inside the folder) a css file with the name name of your folder and .css extension
5. tweak the js/css files as you wish (keep reading for guidelines)
6. create a pull request for us to approve the theme

## Is a single js file enough?

The theme's javascript is loaded via requirejs, thus inside your own js file you can use requirejs to load other/external js files. You've no limits in the number of files loaded.

For example, if you want to load jquery in your theme's js file simply start it with the following code:
```javascript
require(["//code.jquery.com/jquery-1.11.2.min.js"], function () {
  // add here all the code you want to execute after jquery is loaded
});
```

## Is a single css file enough?

Simply use imports to load other/external css files. You've no limits in the number of files loaded.

For example, if you want to load font-awesome (which is just a single css file) from bootstrap's CDN:
```css
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
```

## Where should I start?

Be sure to check how the [default theme](https://github.com/fballiano/velocv-themes/tree/master/default) is done, it should be self explanatory, quite easy to follow and it should have all the info you need to process every section of the theme.

You can/should completely change the dom structure of the page to fit the needs of your design.

## How can I quickly write and test my theme?

We've set up a playground with all the things you need to create a theme quickly, it's available at this link:
http://jsfiddle.net/fballiano/nun64s28/

You can fork it, change it, save it and immediately check the results agains a complete sample CV.

Once you're satisfied with the results save the CSS and the javascript file (as explained before in this document), commit them and create the pull request for us to check.

## How do I set my credits in the theme I'm creating?

If you loaded jQuery then you can simply do:
```javascript
$("#designer")
  .attr("href", "http://mywebsite.com")
  .text("My Name");
```
or just use plain javascript for the same purpouse.
