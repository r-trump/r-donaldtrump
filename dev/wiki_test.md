// Wiki_Test.md
// For testing of Wiki Link-Inline integrations w/JS



// Vars

// Actual link to "trump_wink"

[1]: https://raw.githubusercontent.com/r-trump/bin/master/Media%20Storage/trump_wink_icon.png

// Base Call Use Case

  // without display inline func called

  ["trump_wink = inline"][1]

  // display inline func called

  !["trump_wink = called][1]

-----

<script src="bower_components/showdown/1.0.1/showdown.min.js"></script>
<script src="js/script.js"></script>

<script src="src/showdown.js"></script>
<script src="src/extensions/twitter.js"></script>
<script>
var converter = new showdown.Converter({ extensions: ['twitter'] });
</script>

<img id="hsts_pixel" src="//reddit.com/static/pixel.png">

<img id="" src=//reddit.com/static/pixel.png">

<img id= "trump_wink" src= "//raw.githubusercontent.com/r-trump/bin/master/Media%20Storage/trump_wink_icon.png">

// Base lvl ![markdown image display function call]()

  ![trump wink](https://raw.githubusercontent.com/r-trump/bin/master/Media%20Storage/trump_wink_icon.png)


// Bookmarklets // modify the location example
  // https://en.wikipedia.org/wiki/Bookmarklet#Usage

  javascript:location.href='https://web.archive.org/save/'+document.location.href;


<src= "![trump /wink](https://raw.githubusercontent.com/r-trump/bin/master/Media%20Storage/trump_wink_icon.png)">

<!-- my-page.html --> 
<script src="https://rawcdn.githack.com/oscarmorrison/md-page/master/md-page.js"></script><noscript>

# Header
Welcome to md-page, the easiest way to make a webpage from just markdown...

## header two
  aa

### header three
  
#### header four
  
##### header five

*this will be italic*

**this will be bold**
