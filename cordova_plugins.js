cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "monaca-plugin-monaca-core.monaca",
      "file": "plugins/monaca-plugin-monaca-core/www/monaca.js",
      "pluginId": "monaca-plugin-monaca-core",
      "merges": [
        "monaca"
      ]
    },
    {
      "id": "monaca-plugin-share.Share",
      "file": "plugins/monaca-plugin-share/www/share.js",
      "pluginId": "monaca-plugin-share",
      "clobbers": [
        "plugins.share"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-splashscreen": "6.0.0",
    "monaca-plugin-monaca-core": "3.3.1",
    "monaca-plugin-share": "1.0.1"
  };
});