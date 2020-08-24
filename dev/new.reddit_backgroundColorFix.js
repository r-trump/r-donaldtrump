// backgroundColorFix
// New Reddit's Background => Old Reddit's Background


// Regards New Reddit's Following Property:
  --newCommunityTheme-body: #ffffff;

// Replace property's value (ie key/value pair schema):
  #ffffff

// With Old Reddit's (css stripped) color value: 
   rgb(255 255 255)

// Resulting:
--newCommunityTheme-body: rgb(255 255 255);

// If new.reddit overrides =>
--newRedditTheme-body: rgba(255,255,255,1);

