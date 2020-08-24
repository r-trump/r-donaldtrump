// Clears Node Module Cache
function requireUncached(module){
  delete require.cache[require.resolve(module)]
  return require(module)
}

// Node Modules
var JsToHtml = require('js-to-html').html;


// FileSys
var rDonaldTrumpWiki = require('../Wiki/Wiki.js');


// Vars Wiki Indexing
var rDonaldTrumpWiki
// Vars Node
var nodeJsToHtml = nodeMethodObject.jstohtml;


// Objects
var wikiObject = {
  wiki: rDonaldTrumpWiki
}

var nodeMethodObject = {
  jstohtml: JsToHtml
}

// Placeholder: const globalVarsObjs = require('../../Objects/GlobalVarsObjects.js');

var globalVarsObject = {
  wikiObject: wikiObject,
  nodeMethodObject: nodeMethodObject
}

var exportobject = {
  globalVarsObject: globalVarsObject,
}

module.exports = exportobject;