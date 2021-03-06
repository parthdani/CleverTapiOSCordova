cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "clevertap-cordova.CleverTap",
      "file": "plugins/clevertap-cordova/www/CleverTap.js",
      "pluginId": "clevertap-cordova",
      "clobbers": [
        "CleverTap"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-androidx": "2.0.0",
    "cordova-plugin-androidx-adapter": "1.1.1",
    "cordova-plugin-firebasex": "9.1.2-cli",
    "clevertap-cordova": "2.2.1"
  };
});