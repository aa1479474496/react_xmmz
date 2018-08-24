const path = require('path');

export default {
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es", "style": "css" }]
  ],
  "proxy": {
    "/api": {
      "target": "https://passport.lrlz.com/mobile/index.php",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/')
  }
}
