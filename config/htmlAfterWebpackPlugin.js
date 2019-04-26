const pluginName = 'HtmlAfterWebpackPlugin';


const assetHelp = (assets) => {
  let scripts = [];
  let styles = [];

  const tools = {
    toScript: js => js === '/scripts/common-layout.bundle.js' ? `<script src="${js}"></script>` : `<script class="pjax-js" src="${js}"></script>`,
    toStyles: css => css === '/styles/common-layout.css' ? `<link rel="stylesheet" href="${css}">` : `<link class="pjax-css" rel="stylesheet" href="${css}">`
  }

  for (const js of assets.js) {
    scripts.push(tools.toScript(js));
  }
  for (const css of assets.css) {
    styles.push(tools.toStyles(css));
  }

  return {
    scripts,
    styles
  }
}

class HtmlAfterWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      //html-webpack-plugin-before-html-processing
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(pluginName, htmlPluginData => {
        let _html = htmlPluginData.html;
        let { scripts, styles } = assetHelp(htmlPluginData.assets);
        console.log("结果", scripts);
        _html = _html.replace("<!--injectjs-->", scripts.join(''));
        _html = _html.replace("<!--injectcss-->", styles.join(''));
        _html = _html.replace(/pages:/g, '../../');
        _html = _html.replace(/components:/g, '../../../components/');
        htmlPluginData.html = _html;
      });
    });
  }
}
module.exports = HtmlAfterWebpackPlugin;