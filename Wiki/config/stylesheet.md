[//]:# 'Dev'

[//]:# '### **Links:**'
[//]:# ''
[//]:# '// Reddit Writing Automod Rules Guide'
[//]:# ''
[//]:# '// https://www.reddit.com/wiki/automoderator/writing-basic-rules'
[//]:# '// Reddit Full Automoderator Docs'
[//]:# ''
[//]:# '// https://www.reddit.com/wiki/automoderator/full-documentation'

[//]:# 'Dev'

[//]:# '[config/automoderator](https://www.reddit.com/r/donaldtrump/wiki/revisions/config/automoderator)'

-----

# Versioning

### History

- The [/r/donaldtrump](reddit.com/r/donaldtrump), stylesheet. Has a long history of development.

Initial Commit 

[2015-06-07_155857 GMT-0500](https://raw.githubusercontent.com/r-trump/bin/master/Media%20Storage/2020-10-12%20stylesheet-historic-reference.png)

-----

### start
**>>>> stylesheet Start <<<<**

```JavaScript
/***********
           MISC.
              **********/


.md a:hover {
    text-decoration: underline;
}

body {
    background-color: #f0f0f0;
}

body > .content {
    margin-top: 50px;
    margin-left: 12px;
}

button {
    background: #eaeaea;
    border: 1px solid #ccc;
    padding: 4px 10px;
    border-radius: 2px;
}

button:hover {
    background: #f0f0f0;
    border: 1px solid #b6b6b6;
}

#stylesheet_contents {
    width: 95%;
    margin-left: 2%;
}

::selection {
    background-color: #5ea6ed;
    color: #fff;
}



/***********
         USERBAR
              **********/



#header-bottom-right a:hover {
    text-decoration: underline;
}

#header-bottom-right,
.res #header-bottom-right {
    position: absolute;
    right: 0px;
    top: 213px;
    background-color: white;
    border: 0;
    border-radius: 0px;
    padding: 5px 12px;
    line-height: 22px;
    height: 22px;
    padding: 5px 10px;
    text-align: center;
}

#header-bottom-right a,
#header-bottom-right .user,
#header-bottom-right .separator {
    color: #666;
    font-size: 14px;
    font-family: "Segoe UI", sans-serif;
    font-weight: normal;
    line-height: 17px;
}

#header-bottom-right a:hover {
    text-decoration: none;
    color: black;
}

#header-bottom-right .separator {
    color: #777;
}

#header-bottom-right .user .userkarma {
    display: none;
}

#header-bottom-right .user {
    font-size: 0px!important;
}

#header-bottom-right #RESAccountSwitcherIcon  {
    position: relative;
    bottom: 3px;
}



/***********
       TOP NAVBAR
              **********/



#sr-header-area {
    background: #f0f0f0;
    border-bottom: none;
}

#sr-header-area a {
    color: #373737;
}



/***********
 COMMENTS PAGE AUTHOR TAG
              **********/



.res .thing .tagline .author.submitter {
    background-color: transparent!important;
    color: blue!important;
}

.res .thing .tagline .author.moderator {
    background-color: transparent!important;
    color: green!important;
}

.res .thing .tagline .author.submitter:hover,
.res .thing .tagline .author.moderator:hover {
    background-color: transparent!important;
}



/***********
      POSTS (LINKS)
              **********/

.content .listingsignupbar
{
	display: none;
}

.link {
    margin: 0px 335px -1px 0px;
    background-color: #fff;
    border: 1px solid #c0c0c0;
    display: flex;
	padding-left: 0px
}

.link:first-of-type
{
    border-radius: 3.5px 3.5px 0px 0px;
}


span.rank
{
     display: none;
}
.link .midcol {
    padding: 8px;
    margin: 0px;
    margin-right: 8px;
    background:#f9f9f9;
    align-items: stretch;
    flex-grow: 0;
    flex-shrink: 0; 
    width: 30px !important;
}
.link .midcol:first-of-type
{
    border-radius: 3.5px 0px 0px 0px;
}


.link .thumbnail 
{
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 3.5px 3.5px 3.5px 3.5px;
    flex-grow: 0;
    flex-shrink: 0; 
    width: 70px !important;
    height: 60px !important;
}


.link .thumbnail.self
{
    display: block;
    width: 70px;
    height: 60px;
    background-image: url(%%trump-t-default%%);
    background-position: 0px 0px;
    background-repeat: no-repeat;
	content: "";
    /*This is to make sure the seal is above all else.*/
}

.link .thumbnail.default
{
    display: block;
    width: 70px;
    height: 60px;
    background-image: url(%%trump-t-default%%);
    background-position: 0px 0px;
    background-repeat: no-repeat;
	content: "";
    /*This is to make sure the seal is above all else.*/
}

.link .thumbnail[href*="gop.com"]
{
    display: block;
    width: 70px;
    height: 60px;
    background: url(%%gop-thumb%%);
	content: "";
}




.link .flat-list
{
	display: inline !important;
}

.link .entry 
{
        float:left;
	padding-top: 5px;
	padding-bottom: 5px;
}

.title a.title 
{
     	color:#213875;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
		font-weight:600;
}

.title a.title:visited
{
	color:#213875;
}


.title .domain a
{
	color: #bc0000;
}


.nav-buttons 
{
    margin-top: 5px;
}

.thing.stickied.link a.title
{
	color:#213875;
}



/***********
        PAGENAME
              **********/

#header .pagename ::before
{
    /*display: block;*/
    position:absolute;
    top: -15px;
    left: -70px;
    width:60px;
    height: 60px;
    background: url(%%trump-snoo%%);
    content: "";
}

#header .pagename
{
    color: white;
    font-size:20px;
    position: absolute;
    top:96px; color:white;
    display: flex;
    left: 100px;
    font: normal x-small verdana,arial,helvetica,sans-serif;

    color: white;
    /*This is to make sure the seal is above all else.*/
    z-index: 999;
}


#header .pagename a
{
	color: white;
    font-size:0!important;
    font: normal x-small verdana,arial,helvetica,sans-serif;
}

#header .pagename a::before
{
	color: white;
    font-size:0!important;
}
#header .pagename a::after
{
	color: white;
    font-size:20px;
    font-weight:bold;
    content:"r/DonaldTrump";
}



/***********
      HEADER
              **********/

#header-bottom-left
{
    height: 192px;
    background: url(%%Trump-Banner%%)50% 50% / cover no-repeat;
}
#header-img
{
    display:none;
}


#header {
    height: 192px;
    background-color: #2b325f;
    border-bottom: 57px solid #fff;
  margin-bottom: 30px;
}


a[href="/r/DonaldTrump#trump-seal-banner"]
{
    display: block;
  content: url(%%trump-seal-banner%%);
    position: absolute;
    top: 45px;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
}

a[href="/r/DonaldTrump#trump-seal-banner"]:hover
{
    display: block;
	content: url(%%trump-seal-banner-wink%%);
    position: absolute;
    top: 45px;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
}




.search-page a[href="/r/DonaldTrump#trump-seal-banner"]:after
{
	/*display: none;*/
}

.search-page .search-result-group
{
	padding-left: 0px;
	padding-right: 0px;
}

.search-result-footer
{
	white-space: normal;
}

.search-result
{
	border-bottom: 1px;
	border-color: #000000;
}



.search-page .search-result-group
{
	margin: 0px 335px 1px 0px;
background-color: #fff;
border: 0px;
max-width: 100%;
min-width: 100%;
}

/***********
      TABMENU
              **********/


#header .tabmenu a:hover {
    text-decoration: underline;
}

#header .tabmenu,
.res #header .tabmenu {
    position: absolute;
    top: 255px;
	left: 12px;
    background-color: #fff;
    border: 1px solid #c0c0c0;
    display: flex;
	padding-left: 0px;
    border-radius: 3.5px;
    padding: 6px 6px;
    line-height: 15px;
    height: 15px;
    text-align: center;
	text-transform: capitalize;
}

#header .tabmenu li a {
    background-color: #fff;
	padding: 0px 5px 0px 5px!important;
	margin: 0px 2px 0px 2px!important;
}

#header .tabmenu a,
#header .tabmenu .separator {
    color: #666;
    font-family: "Segoe UI", sans-serif;
    line-height: 15px;
}

#header .tabmenu a:hover {
    text-decoration: none;
    color: black;
}

#header .tabmenu .separator {
    color: #777;
}


.tabmenu li.selected a {
    color: #bc0000!important;
	border: 0px!important;
	background-color: #f0f0f0!important;
	line-height: 15px;
	border-radius: 3.5px;
}

/***********
     SIDEBAR BUTTONS
              **********/


.linkinfo
{
    text-align: center;
}

.morelink {
    background: none;
    border: none;
    margin-bottom: 15px;
	    border-radius: 3.5px;
}

.nub {
    display: none;
}

.morelink a {
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-family: "Segoe UI", "Arial", sans-serif;
    letter-spacing: 0.2px;
    background-color: #bc0000;
    border: 0;
    border-radius: 3.5px;
    display: block;
    width: 300px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    margin: 0;
}

.morelink a:hover {
    background-color: #ffffff;
    color: #bc0000;
    border: 1px;
    border-color: #bc0000;
}


.subButtons {
    text-align: center;
}


.RESshortcutside,
.RESDashboardToggle,
.RESshortcutside.remove,
.RESDashboardToggle.remove {
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: #808080;
    letter-spacing: 0.5px;
    font-weight: normal;
    border: 0;
    border-radius: 2px;
    background-image: none;
    background-color: #f0f0f0;
    display: inline-block;
    width: 120px;
    height: 17px;
    line-height: 17px;
    margin: 5px 0 0 0;
}

.RESshortcutside {
    float: left;
    margin-left: 10px!important;
}

.RESDashboardToggle {
    float: right;
    margin-right: 10px!important;
}

.RESshortcutside:hover,
.RESDashboardToggle:hover,
.RESshortcutside.remove:hover,
.RESDashboardToggle.remove:hover {
    background: #d9d9d9;
}

.fancy-toggle-button .active {
    display: block!important;
    width: 100px;
    height: 24px;
    line-height: 24px;
	padding: 0;
    margin: 10px 0px -5px 0px;
    background-image: none;
    background-color: #bc0000;
    border: 0;
    font-family: Arial, sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.5px;
    border-radius: 3.5px;
}

.users-online,
.subscribers {
    display: block;
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: #666;
}

.subscribers {
    padding-top: 5px;
}

.subscribers::after
{
    Content: "Patriots";
}

.subscribers .word
{
    display: none;
}

.users-online::after
{
    Content: "Online";
}

.users-online .word
{
    display: none;
}




body.res .subscribers {
    margin-top: 10px;
}

.users-online {
    padding-bottom: 5px;
}


body.subscriber .fancy-toggle-button .active {
    background-color: #b6b6b6;
    color: #ffffff;
    text-transform: lowercase;
    font-weight: normal;
}



.fancy-toggle-button .active:hover {
    background-color: #ffffff;
    color: #bc0000;
    border: 1px;
    border-color: #bc0000;
}

.users-online:before {
    display: none;
}

/***********
      SIDEBAR
             **********/

.titlebox .redditname
{
padding-left: 5px
}

.titlebox .redditname a::before
{
    display: block;
    width:60px;
    height: 60px;
    background: url(%%trump-snoo%%);
    float: left;
    content: "";
}


.titlebox .redditname a {
    color: #000000;
    font-size: 0px;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    border: 0;
    padding-left: 0px;
    width: 300px;
    height: 38px;
    line-height: 55px;
    margin: 0;
}
.titlebox .redditname a:after {
    color: #000000;
    font-size: 14px;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    border: 0;
    padding-left: 10px;
    width: 300px;
    height: 38px;
    line-height: 55px;
    margin: 0;
    content: "r/DonaldTrump";
}


.titlebox .redditname a:hover {
}

.titlebox
{
    padding-top:8px;
}



.titlebox::before
{
    display: block;
    background-color: #2b325f;
    height: 30px;
    color: #fff;
	font: normal x-small verdana,arial,helvetica,sans-serif;
    padding-left: 10px;
    font-size: 1.1em;
	line-height: 2em;
    text-align: left;
    margin-bottom: 5px;
    border-radius: 3.5px 3.5px 3.5px 3.5px;    
    content:"About Community";
}

.side {
    background: #f0f0f0;
    padding: 10px;
    margin: 8px;
    padding-top: 0px;
}

.flairselector h2 {
    background-color: #bc0000;
    color: #fff;
    font-weight: 500;
}

/* sidebar formatting */

.md h1 {
    color: #262626;
    font-size: large;
    font-family: "Segoe UI", "Arial", sans-serif;
    letter-spacing: 0.2px;
}

.md h2 {
    color: #404040;
    font-size: large;
    font-family: "Segoe UI", "Arial", sans-serif;
    letter-spacing: 0.2px;
}

.side .titlebox .md h1,
.side .titlebox .md h2 {
    text-align: center;
}

.side .titlebox .md h1,
.side .titlebox .md h2 {
    display: block;
    color: #333;
    font-size: 14px;
}

.md h3 {
    color: #595959;
    font-size: medium;
    font-family: "Segoe UI", "Arial", sans-serif;
    letter-spacing: 0px;
}


.md pre {
    margin: 10px;
    padding: 10px;
    background-color: #f0f0f0!important;
    border: 1px solid #e1e1e1;
}

.md hr {
    background-color: #bfbfbf;
    margin: 7px 0px;
    height: 1px;
}

.md h6,
.md h6 a {
    text-decoration: none!important;
}

.side .titlebox .md h6 a {
    display: block;
    margin-left: 30px;
    margin-right: 30px;
    padding: 6px 0px;
    background-color: #8cb3d9;
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-family: "Segoe UI", "Arial", sans-serif;
    font-size: 1em;
    border-radius: 2px;
}

.side .md h6
{
	    font-size: 1.1em;
		line-height: 2em;
}

.side .titlebox .md h6 a:hover {
    background-color: #79a6d2;
}

.side .usertext .md ol
{
	padding-left: 10px;
}

/* end sidebar formatting */

.sidecontentbox {
    border: 0px;
    border-left: 1px solid #c0c0c0;
    border-right: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
	border-radius: 3.5px 3.5px 3.5px 3.5px;
} 


.sidecontentbox .title h1 {
    color: #fff;
    font-weight: normal;
    display: block;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    background-color: #2b325f;
    text-transform: lowercase;
    border-radius: 3.5px 3.5px 0 0;
}

.sidecontentbox .collapse-button {
    position: absolute;
    margin-left: 280px;
}

.sidecontentbox a.helplink {
    color: #333;
    background-color: #fff;
    border: 1px solid #e1e1e1;
    padding: 4px 12px;
    margin-right: 4px;
    border-radius: 2px;
}

.sidecontentbox a.helplink:hover {
    border: 1px solid #808080;
}
    
.side .content {
    background: #fff;
    border: 1px solid #fff;
    border-radius: 0 0 3.5px 3.5px;
}

/*
.side .content:hover {
    border: 1px solid #e1e1e1;
    border-top: 1px solid #fff;
}
*/

.side .titlebox .md {
    background: transparent;
    border-bottom: 1px solid #bfbfbf;
    padding-bottom: 0px;
    margin-bottom: 0px;
}

.side .titlebox .bottom {
    border: none;
    margin: 0px;
}

.sidebox.create,
.leavemoderator,
.leavecontributor-button {
    display: none;
}



.titlebox .tagline {
    margin: 0px;
    padding: 0px 0px 10px 0px;
    text-align: center;
    font-size: 100%;
    border-top: none;
    background: #f0f0f0;
    border-radius: 0 0 3.5px 3.5px;
}

#search input[type=text] {
    padding: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 3.5px;
    font-family: Arial, sans-serif;
    letter-spacing: 0.2px;
    z-index: 9999;
}

#search input[type=text]:hover {
    border: 1px solid #bfbfbf;
}

#searchexpando {
    background-color: white;
    border-radius: 2px;
    border: none;
    padding: 20px;
    margin: 10px 10px 0 10px;
}



/***********
      FLAIRS
            **********/


/*.flair,
.linkflair .linkflairlabel {
    color: #ffffff;
    background-color: #2b325f;
	height: 12px;
    max-width: none;
    border: 0px;
    border-radius: 3.5px;
    margin-right: .5em;
    padding: 2px;
white-space: nowrap;
text-align: left !important;
font: normal x-small verdana,arial,helvetica,sans-serif;
font-weight: 600;
    font-size: 10px;
line-height: 10px;
}

.linkflairlabel {
    color: #ffffff;
    background-color: #2b325f;
		height: 12px;
    max-width: none;
    border: 0px;
    border-radius: 3.5px;
    margin-right: .5em;
    padding: 2px;
white-space: nowrap;
text-align: left !important;
font: normal x-small verdana,arial,helvetica,sans-serif;
font-weight: 600;
    font-size: 10px;
line-height: 10x;
}

.flair {
    font-size: 10px!important;
line-height: 10px;
}

.res .flair {
    margin-left: 5px;
}

.tagline .flair
{
	color: #000000!important;
	background-color: #bc0000;
}

.content li .flair
{
	color: #000000!important;
}
*/


/***********
      COMMENTS PAGE
                    **********/


.comments-page .comment,
.comment .comment, /*targets child comments*/
.res-commentBoxes .thing.comment .thing.comment /*overrides RES CSS*/ {
    padding: 5px!important;
    border: 1px solid #eee!important;
    border-radius: 2px!important;
}

.res-commentBoxes.res-commentBoxes-rounded .comment {
    background: #fff;
    margin-bottom: 10px!important;
    margin-left: 5px!important;
    border: 1px solid #d9d9d9!important;
    border-radius: 2px!important;
}

.comment {
    background: #fff!important;
    margin-bottom: 10px!important;
    margin-left: 5px!important;
    border: 1px solid #d9d9d9!important;
    border-radius: 2px!important;
}

.comment .child
{
	border-left: 1px dotted #bc0000;
}

.commentarea .comment .comment,
.commentarea .comment .comment .comment .comment,
.commentarea .comment .comment .comment .comment .comment .comment,
.commentarea .comment .comment .comment .comment .comment .comment .comment .comment,
.commentarea .comment .comment .comment .comment .comment .comment .comment .comment .comment .comment {
    background: #f8f8f8!important;
}
.commentarea .comment .comment .comment,
.commentarea .comment .comment .comment .comment .comment,
.commentarea .comment .comment .comment .comment .comment .comment .comment,
.commentarea .comment .comment .comment .comment .comment .comment .comment .comment .comment,
.commentarea .comment .comment .comment .comment .comment .comment .comment .comment .comment .comment .comment {
    background: #fff!important;
}

.comment-visits-box,
.linkinfo,
.login-form-side {
    background: #f8f8f8;
    border: none;
}

.linkinfo {
    padding: 20px 0;
    border-top: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
    margin: 20px 0;
}

.comment-visits-box .title {
    color: #369;
}

.linklisting .md, .commentarea .md {
    padding: 5px;
}


/***********
      FOOTER
            **********/


.debuginfo {
    width: calc(100% - 10px);
    background: #f0f0f0;
}

.debuginfo:before {
    float: left;
    content: "";
    display: block;
    position: relative;
    top: 2px;
    color: #808080;
    font-size: 9px;
}

.footer {
    background: #fff;
    border: 1px solid #fff;
    border-radius: 3.5px;
}

.footer:hover {
    border: 1px solid #e1e1e1;
    border-top: 1px solid #fff;
}

.footer-parent {
    background: #f0f0f0;
    margin-bottom: -12px;
    padding-bottom: 20px;
}

.flat-vert.title {
    background: #2b325f;
    color: #fff;
    padding: 10px;
    margin: -20px -20px 10px -20px;
    border-radius: 3.5px 3.5px 0 0;
}



/***********
      COMMENTS BOX
                  **********/


.commentarea .menuarea .toggle a {
    font-weight: normal;
}

.menuarea {
    background-color: transparent;
    margin-left: 15px;
    margin-right: 335px;
    margin-bottom: 0px;
    border-bottom: none;
}

.drop-choices {
    border: 0;
}

.dropdown.lightdrop .selected {
    text-decoration: none;
    font-weight: bold;
    font-family: "Segoe UI", "Arial", sans-serif;
    text-transform: uppercase;
    font-size: 120%;
}

.drop-choices a.choice {
    padding: 4px 12px;
    margin: 6px;
    background-color: #fff;
}

.panestack-title {
    background-color: #eaeaea;
    border-bottom: 0;
    padding: 10px;
    margin-left: 10px;
    margin-right: 335px;
    border-bottom: none;
    margin-top: 15px;
    border-radius: 3.5px 3.5px 0 0;
}

.commentarea .menuarea {
    background-color: #eaeaea;
    border-bottom: 1px solid #d9d9d9;
    border-top: 0;
    padding: 10px;
    margin-left: 10px;
    margin-right: 335px;
}

.commentarea > .usertext {
    background-color: #fff;
    border-top: 0;
    padding: 10px;
    margin-left: 10px;
    margin-right: 335px;
    margin-top: -10px;
    margin-bottom: 15px;
    border-radius: 0 0 3.5px 3.5px;
}

.gold-accent.comment-visits-box {
    background-color: transparent;
    border: 0;
    border-radius: 0px;
    padding: 10px;
    margin-left: 15px;
    margin-bottom: 8px;
}

.comment-visits-box .title {
     color: #373737;
     font-weight: normal;
}


/* search page */

.search-page #search
{
	display: none;
}

.search-page
{
	width: 100%;
}



/***********
      SUBMIT PAGE
              **********/


.submit-page #header-img.default-header {
    display: none!important;
}

ul.tabmenu.formtab,
.formtabs-content .infobar,
#reddit-field,
.submit-page h1 {
    display: none;
}

.submit .formtabs-content {
    border-top: none;
}

.submit .roundfield {
    background: transparent;
    border-radius: 0px;
}

.submit-page .sidecontentbox,
.submit-page #moderation-tools,
.submit-page .footer-parent {
    display: none!important;	
}

.submit-page .content {
    width: 500px;
    position: absolute;
    left: calc(50% - 250px);
}

.formtabs-content .infobar {
    margin-bottom: 10px;
}

.submit_text .content {
    position: static;
}

.submit_text .content .md {
    padding: 20px 0;
}

.submit-page .debuginfo {
    display: none;
}

.formtabs-content .infobar,
.content.submit .info-notice {
    background: #fff;
    border: 1px solid #e1e1e1;
    padding: 10px;
    border-radius: 2px;
}

#items-required {
    display: none;
}

.submit.content button[name="submit"] {
    background-color: #bc0000;
    border: 1px solid #bc0000;
    font-size: 16px;
    color: #fff;
    display: block;
    width: 200px;
    position: relative;
    top: 10px;
    left: calc(50% - 100px);
    padding: 6px 0;
}

.submit.content button[name="submit"]:hover
{
    background-color: #ffffff;
    color: #bc0000;
    border: 1px;
    border-color: #bc0000;
}




/**********

  /*
  
  // Customization Options //
  
  >>>Start<<<
            */

  Remove the /* symbols
  - Before blocks of code to -> active
    AND
  - After blocks of code to -> active

  If you DONT want to display:
    Either,
      header "image" OR sidebar "image"
    Then,
      Leave inplace

  If you DO want to display:
    1. Upload an image onto your stylesheet
      For "header":
        Name image: "header"
      For "sidebar":
        Name image: "sidebar image"

              **********/

/*
#header {
    background-image: url(%%header%%);
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
}
*/

/*
.side:before {
    content: "";
    display: block;
    width: 280px;
    height: 200px;
    background-image: url(%%sidebar%%);
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: transparent;
    margin-left: 10px;
    margin-bottom: -10px;
    z-index: -1;
    border-radius: 3.5px;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.1);
}
*/

  /*
  
  // Customization Options //
  
  >>>End<<<
            */

.md a
{
	color: #2b325f;
}

.md blockquote h1,
.md blockquote h2
{
	font-size: 14px;
}

.md blockquote h1 a,
.md blockquote h2 a
{
	color: #2b325f;
}

.titlebox .md blockquote {
    display: block!important;
    width: 300px;
    margin: 20px 0px 0px 0px;
    padding: 0px 0px 6px 0px;
    text-align: left;
    border: 0px;
    border-left: 1px solid #c0c0c0;
    border-right: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    background-color: #fff;
	border-radius: 3.5px 3.5px 3.5px 3.5px;
}

.entry .md blockquote {
    display: block!important;
    margin: 20px 0px 0px 0px;
    padding: 0px 0px 6px 6px;
    text-align: left;
    border-bottom: none;
    background-color: #fff;
	border-radius: 3.5px 3.5px 3.5px 3.5px;
}

.md blockquote h6 {
    display: block;
    background-color: #2b325f;
    height: 30px;
    line-height: 30px;
    color: #fff;
	font: normal x-small verdana,arial,helvetica,sans-serif;
    font-weight: normal;
	padding: 0;
    padding-left: 10px;
	margin-bottom:5px;
    text-transform: capitalize;
    text-align: left;
    border-radius: 3.5px 3.5px 0 0;
}

.md hr
{
	background-color:#f0f0f0;
}


.md blockquote table 
{
    margin: 0 auto;
	width: 300px;
}

/* This is the header elements used for Official Trump Campaign Links <h4> or #### in reddit */
.side .md h4 a
{
	color: #fff!important;;
    font-size: 12px;
	line-height: 24px;
	font-family: IBMPlexSans, Arial, sans-serif;
	font-weight: 700;
    letter-spacing: 0.5px;
    background-color: #bc0000;
    border: 0;
    border-radius: 3.5px;
    display: block;
    width: 244px;
	padding: 3px 16px;
	margin-left: 12px;
	margin-right: 5px;
	text-align: center;
}
.side .md h4 a {
	text-decoration: none;
}


/* This is the header elements used for News Source/Topics <h5> or ##### in reddit */
.side .md h5 a
{
	border-radius:3px;
	border: 0px;
	padding: 1px;
	padding-right: 4px;
	padding-left: 4px;
    text-align: center;
    background: #092644;
    color: #ffffff!important;
	font-size: 12px;
	font-family: Arial;
	margin: 0px;
	margin-bottom: 7px;
	margin-left: 5px;
	float: left;
}
.side .md h5 a {
	text-decoration: none;
}

/* This is the header elements used for News Source/Topics <h5> or #### in reddit */
.side .md h3
{
	border: 0px;
	padding: 0px;
    text-align: center;
    background: #f0f0f0;
    color: #f0f0f0;
	line-height: 1px;
	font-family: Arial;
	text-decoration: none;
	margin-left: 0px;
	margin-right: 0px;
	clear: left;
}


a[href="https://www.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 300px;
    content: url(%%donald-trump-president-sidebar%%);
}

a[href="https://www.donaldjtrump.com#reddittrumpflag"]:after
{
	display: block;
	width: 300px;
    content: url(%%usa-flag%%);
}


a[href="https://secure.winred.com/team/facfd710-reddit-trump#reddittrump1"]:after
{
	display: block;
	width: 300px;
    content: url(%%donald-trump-donate-1%%);
}

a[href="https://secure.winred.com/team/facfd710-reddit-trump#reddittrump2"]:after
{
	display: block;
	width: 300px;
    content: url(%%donald-trump-donate-2%%);
}

a[href="https://share.djt.app/dfIGmNVEV5#reddittrump"]:after
{
	display: block;
	width: 300px;
    content: url(%%donald-trump-mobile%%);
}

.md blockquote p a[href="https://women.donaldjtrump.com#reddittrump"]
{
    font-size: 0px;
    line-height: 0px;
     float: left;
}

.md blockquote p a[href="https://women.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 288px;
    margin-left: 6px;
    margin-top: 6px;
    content: url(%%womenbutton%%);
}

.md blockquote p a[href="https://blackvoices.donaldjtrump.com#reddittrump"]
{
    font-size: 0px;
    line-height: 0px;
    float: left;
}

.md blockquote p a[href="https://blackvoices.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 288px;
    margin-left: 6px;
    margin-top: 6px;
    content: url(%%blackbutton%%);
}

.md blockquote p a[href="https://latinos.donaldjtrump.com#reddittrump"]
{
    font-size: 0px;
    line-height: 0px;
    float: left;
}

.md blockquote p a[href="https://latinos.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 288px;
    margin-left: 6px;
    margin-top: 6px;
    content: url(%%latinobutton%%);
}

.md blockquote p a[href="https://evangelicals.donaldjtrump.com#reddittrump"]
{
    font-size: 0px;
    line-height: 0px;
    float: left;
}

.md blockquote p a[href="https://evangelicals.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 288px;
    margin-left: 6px;
    margin-top: 6px;
    content: url(%%evangelicalsbutton%%);
}

.md blockquote p a[href="https://prolifevoices.donaldjtrump.com#reddittrump"]
{
    font-size: 0px;
    line-height: 0px;
    float: left;
}

.md blockquote p a[href="https://prolifevoices.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 288px;
    margin-left: 6px;
    margin-top: 6px;
margin-bottom: 6px;
    content: url(%%prolifebutton%%);
}

.md blockquote p a[href="https://veterans.donaldjtrump.com#reddittrump"]
{
    font-size: 0px;
    line-height: 0px;
    float: left;
}

.md blockquote p a[href="https://veterans.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 288px;
    margin-left: 6px;
    margin-top: 6px;
    content: url(%%veteransbutton%%);
}

.md blockquote p a[href="https://cops.donaldjtrump.com#reddittrump"]
{
    font-size: 0px;
    line-height: 0px;
    float: left;
}

.md blockquote p a[href="https://cops.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 288px;
    margin-left: 6px;
    margin-top: 6px;
    content: url(%%copsbutton%%);
}

.md blockquote p a[href="https://democrats.donaldjtrump.com#reddittrump"]
{
    font-size: 0px;
    line-height: 0px;
    float: left;
}

.md blockquote p a[href="https://democrats.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 288px;
    margin-left: 6px;
    margin-top: 6px;
margin-bottom: 6px;
    content: url(%%democratsbutton%%);
}

.md blockquote p a[href="https://workers.donaldjtrump.com#reddittrump"]
{
    font-size: 0px;
    line-height: 0px;
}

.md blockquote p a[href="https://workers.donaldjtrump.com#reddittrump"]:after
{
	display: block;
	width: 288px;
    margin-left: 6px;
    margin-top: 6px;
    content: url(%%workerbutton%%);
}

a.premium-banner-outer
{
    border-radius: 3.5px;
}

.premium-banner
{
    background: #f0f0f0;
}

.premium-banner__button
{
    border: 4px solid #bc0000;
    background: #bc0000;
}

.premium-banner__logo
{
  display: none;
}

.premium-banner__title
{
   color:#000000!important;
}

.premium-banner__title::before
{
  content: url(%%premium-title-trump%%);
}



/** Menu test **/

/* Top Trumpire Menu */
.side .usertext .md > ul:nth-of-type(1){position:absolute;top:210px;left:10px;z-index:1001;margin:0;min-width:350px;height:39px;padding:0;background:#fff;white-space:nowrap;font-size:12px;color:#666}
.side .usertext .md > ul:nth-of-type(1) a{color:#666}
.side .usertext .md > ul:nth-of-type(1) li a:hover{text-decoration:none}
.side .usertext .md > ul:nth-of-type(1) li ul{background-color:#b6b6b6!important}
.side .usertext .md > ul:nth-of-type(1) li ul:hover{background-color:#b6b6b6!important}
.side .usertext .md > ul:nth-of-type(1) li{position:relative;display:inline-block;margin:0;margin-right:-4px;height:39px;padding:0 10px;line-height:39px}
.side .usertext .md > ul:nth-of-type(1) li p{margin:0;height:39px;line-height:39px}
.side .usertext .md > ul:nth-of-type(1) li ul{position:absolute;top:100%;left:0;overflow:hidden;margin:0;min-width:100%;height:auto;max-height:0;padding:0;}
.side .usertext .md > ul:nth-of-type(1) li ul li{display:block;position:relative;height:20px;line-height:20px;white-space:nowrap;}
.side .usertext .md > ul:nth-of-type(1) li:hover,.side .usertext .md > ul:nth-of-type(1) li ul,#sr-header-area .selected.title:hover,#sr-header-area a:hover,#sr-header-area .selected a,.res #srList tr:hover,.res #RESSubredditGroupDropdown li:hover,.res #RESSubredditGroupDropdown .RESShortcutsCurrentSub{background:#f0f0f0;color:#b6b6b6;}
.side .usertext .md > ul:nth-of-type(1) li:hover ul{max-height:840px}
.side .usertext .md > ul:nth-of-type(1) li:hover ul li{height:40px;line-height:40px}
.side .usertext .md > ul:nth-of-type(1) li ul li ul{display:none}


#search{position:absolute;z-index:2147483647;top:261px; line-height:15px;}
#search input[type=text]{padding:5px; background-color:#ffffff;}

/* Remove Recently Viewed Links */
/*
.side > div.spacer:nth-child(9) {
    display: none;
}
.side > div.spacer:nth-child(10) {
    display: none;
}
*/


.footer-parent {
    background: url(%%donald-trump-footer%%) no-repeat top center scroll;
    margin: 0 auto;
    padding: 423px 0 0 0;
}

.arrow.up {
    background:url(%%uparrow%%);
	background-repeat: no-repeat;
    width:24px;
	height:24px;
}

.arrow.upmod {
    background:url(%%highenergy%%);
	background-repeat: no-repeat;
	width:24px;
    height:24px;
}

.arrow.down {
    background:url(%%downarrow%%);
	background-repeat: no-repeat;
	width:24px;
	height:24px;
}

.arrow.downmod {
    background:url(%%lowenergy%%);
	background-repeat: no-repeat;
	width:24px;
	height:24px;
}

.link .score {
	color:#5e5e5e;
}

.comment .midcol {
	margin-right: 0px;
	width: 30px;
}

.md a {
    color: #bc0000;
}

.gadget .midcol {
    width: 30px;
    margin: 0;
padding-left: -3px
}

.awarding-icon {
    max-width: 18px;
    max-height: 18px;
    vertical-align: -2px;
}

.awarding-icon-container {
    margin-right: 6px;
}

form.flairtoggle
{
display:none;
}
```

**>>>> stylesheet End <<<<**