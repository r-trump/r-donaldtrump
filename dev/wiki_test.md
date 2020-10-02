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
