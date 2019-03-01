// webAgentLib for JavaScript
// (c) speedyplane2247 2017-2019
var webAgentLib = new Object();
var webAgentStrings = new Object();
var webAgentSplice = new Object();
var webAgentInfo = new Object();
// DEFINE BASE VARS
webAgentLib.ver = "v0.9"
webAgentLib.currentAgent = navigator.userAgent
// DEFINE INFO VARS (BLANK)
webAgentInfo.isStandard = 0
webAgentInfo.Mozilla = 0
webAgentInfo.MozillaVer = 0
webAgentInfo.OS = ""
webAgentInfo.OSver = ""
webAgentInfo.arch = "x86"
webAgentInfo.appleWebKit = 0
webAgentInfo.appleWebKitVer = "0"
webAgentInfo.supportsKHTML = 0
webAgentInfo.browserMain = ""
webAgentInfo.Safari = 0
webAgentInfo.SafariVer = ""
webAgentInfo.isOSX = 0 // not is it macOS, is it OSX-like
webAgentInfo.isiOSMobile = 0
webAgentInfo.iOSMobileBuild = ""
// DEFINE STRING PARSE FUNCTIONS
webAgentInfo.stringParse = function () {
if (webAgentLib.currentAgent.includes("Mozilla/")) {
webAgentInfo.isStandard = 1
}
}
// DEFINE STRING CHECKER FUNCTIONS
// EXAMPLE USER AGENTS
/*

Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1

*/
