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
