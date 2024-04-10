import loader from "https://esm.sh/@monaco-editor/loader@1.4.0"

const nojafPlugin = {
  components: {
    SyntaxHighlighter: (props) => {
      const React = props.React;
      const myRef = React.createRef();
      React.useEffect(() => {
        let editor = null;

        const cancelable = loader.init();
        cancelable.then(monaco => {
          if (myRef.current) {
            editor = monaco.editor.create(myRef.current, {
              value: props.children,
              language: props.language
            })
          }
        }).catch(
          (error) =>
            error?.type !== 'cancelation' && console.error('Monaco initialization: error:', error),
        );

        return () => {
          if (cancelable && !myRef.current) {
            cancelable.cancel();
          }

          if (editor) {
            console.log(editor);
            editor.dispose();
          }
        }

      }, [myRef, props.children]);


      // The container needs a height.
      const maxHeight = 450;
      const newLineCount = !props.children ? 0 : (props.children.match(/\n/g)).length
      const proposedHeight = (newLineCount * 14)
      const minHeight = Math.max(100, Math.min(proposedHeight, maxHeight));

      return React.createElement("div", { ref: myRef, style: { minHeight: `${minHeight}px` } }, null);
    }
  }
}

/* eslint-disable no-undef */
window.onload = function() {
  window["SwaggerUIBundle"] = window["swagger-ui-bundle"]
  window["SwaggerUIStandalonePreset"] = window["swagger-ui-standalone-preset"]
  // Build a system
  const ui = SwaggerUIBundle({
    url: "https://petstore.swagger.io/v2/swagger.json",
    dom_id: "#swagger-ui",
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      nojafPlugin
    ],
    // requestSnippetsEnabled: true,
    layout: "StandaloneLayout"
  })

  window.ui = ui

  ui.initOAuth({
    clientId: "your-client-id",
    clientSecret: "your-client-secret-if-required",
    realm: "your-realms",
    appName: "your-app-name",
    scopeSeparator: " ",
    scopes: "openid profile email phone address",
    additionalQueryStringParams: {},
    useBasicAuthenticationWithAccessCodeGrant: false,
    usePkceWithAuthorizationCodeGrant: false
  })
}
