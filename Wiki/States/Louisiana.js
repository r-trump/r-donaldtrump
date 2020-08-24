var html = require('js-to-html').html;


// Hopefully output toHtmlText? As string?
function htmlBodyText() {
  return(
    html.div(
      {'class':'the_class', id:},
        [
          html.p('Paragraph 1'),
          html.p('Paragraph 2')
        ]
      ).toHtmlText({pretty:true})
  )
}

// Hopefully output toHtmlDoc? As a full encapsulated HtmlDocType?
function htmlBodyText2DocTest() {
  return(
    html.div(
      {'class':'the_class', id:},
        [
          html.p('Paragraph 1'),
          html.p('Paragraph 2')
        ]
      ).toHtmlDoc({pretty:true})
  )
}


/* Placeholder/Example from js-to-html's docs.
console.log(
  html.div(
      {'class':'the_class', id:'47'},
      [
          html.p('First paragraph'),
          html.p('Second paragraph'),
      ]
  ).toHtmlText({pretty:true})
)
*/



var exportobject = {
  LA: htmlBodyText(),
  LATest: htmlBodyText2DocTest(),
}

module.exports = exportobject;