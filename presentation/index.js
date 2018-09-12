// Import React
import React from "react";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Image
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import Prism from "prismjs";

Prism.highlightAll();

// Require CSS
// require("normalize.css");

const theme = createTheme({
  primary: "#575fcf",
  secondary: "06f",
  codeBg: "#1e272e"
}, {
  primary: "monospace"
});

const images = {
  customWebpack: require("../assets/images/default-webpack-custom.png"),
  babelLogo: require("../assets/images/babel_logo.png"),
  sassLogo: require("../assets/images/sass_logo.png"),
  facebook_css: require("../assets/images/facebook_css.png"),
  webpackLogo: require("../assets/images/webpack_logo.png"),
  javascriptModules: require("../assets/images/javascript_modules_table.png"),
  javascript_modules_example: require("../assets/images/javascript_modules_example.png"),
  umd_example: require("../assets/images/umd_example.png"),
  webpack_modules_dependencies: require("../assets/images/webpack_modules_dependencies.png"),
  webpack_loaders_plugins_1: require("../assets/images/webpack_loaders_plugins_1.png"),
  loaders_plugins_example: require("../assets/images/loaders_plugin_example.png"),
  loader_code_example: require("../assets/images/loader_code_example.png")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Road to Webpack
          </Heading>
          <Text textSize="162px">
            <p style={{ lineHeight: "100px", transform: "rotateY(180deg)", margin: "0" }}>
              🏎
            </p>
          </Text>
          {/* <Heading textColor="white" size={4}>ro to hero</Heading> */}
        </Slide>
        {/* 2 */}
        <Slide>
          <Text textColor="white" textSize="32px">
            1 año atrás...
            <br />
            <br />
            babel? webpack?
            <br />
          </Text>
          <Text textSize="120px">🤔</Text>
        </Slide>
        {/* 3 What is babel? */}
        <Slide>
          <Image height={200} src={images.babelLogo} />
          <Heading size={5} textColor="white">
            Transpilador
          </Heading>
          <Heading size={6} textColor="white">
            ES6/ES7/ES8 => BABEL => ES5
          </Heading>
        </Slide>
        {/* 4 */}
        <Slide>
          <Image height={200} src={images.sassLogo} />
          <Heading size={5} textColor="white">
            Preprocesador
          </Heading>
          <Heading size={6} textColor="white">
            SASS => CSS
          </Heading>
        </Slide>
        {/* 5 */}
        <Slide>
          <Heading margin="50px auto" textColor="white" size={5}>CSS no es un lenguaje de programación</Heading>
          <Image src={images.facebook_css} />
        </Slide>
        {/* 6 */}
        <Slide>
          <Image height={200} src={images.webpackLogo} />
          <Heading size={5} textColor="white">
            WEBPACK?
          </Heading>
          <Heading size={6} textColor="white">
            Empaquetador de módulos
          </Heading>
          <Text textColor="white" textSize={24}>(bundler)</Text>
        </Slide>
        {/* 7 */}
        <Slide>
          <Image height={200} src={images.webpackLogo} />
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            Pero... qué es un módulo?
          </Heading>
          <Text textColor="white" textSize={24}>
            Pieza de código reutilizable
          </Text>
          <Text textColor="white" textSize={24}>
            Existen 4 tipos de módulos en javascript
          </Text>
        </Slide>
        {/* 8 */}
        <Slide>
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            Javascript modules
          </Heading>
          <Image height={500} src={images.javascriptModules} />
          <Text textColor="white" textSize={16}>
            https://bertrandg.github.io/the-javascript-module-mess/
          </Text>
        </Slide>
        {/* 9 */}
        <Slide>
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            Javascript modules
          </Heading>
          <Image height={600} src={images.javascript_modules_example} />
        </Slide>
        {/* 10 */}
        <Slide>
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            Javascript modules
          </Heading>
          <Image height={600} src={images.umd_example} />
        </Slide>
        {/* 11 */}
        <Slide>
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            Javascript modules
          </Heading>
          <Image src={images.webpack_modules_dependencies} />
        </Slide>
        {/* 12 */}
        <Slide>
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            Webpack: Loaders and Plugins
          </Heading>
          <Image src={images.webpack_loaders_plugins_1} />
        </Slide>
        {/* 13 */}
        <Slide>
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            Webpack: Loaders vs Plugins
          </Heading>
          <Image src={images.loaders_plugins_example} />
        </Slide>
        {/* 14 */}
        <Slide>
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            ¿Cómo crear mis propios loaders y plugins?
          </Heading>
          <Text textSize="120px">🤔</Text>
          {/* <Image src={images.loaders_plugins_example} /> */}
        </Slide>
        {/* 15 */}
        <Slide>
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            Loaders example
          </Heading>
          <Text textSize="24px" textColor="white">Función que recibe el source code</Text>
          <Image src={images.loader_code_example} />
        </Slide>
        {/* 3123123 */}
        <CodeSlide
          transition={[]}
          bgColor="codeBg"
          textSize={24}
          lang="js"
          code={require("raw-loader!../assets/code/app.code")}
          ranges={[
            { loc: [0, 200], title: "Webpack configuration" },
            { loc: [0, 1], note: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] }
          ]}
        />
      </Deck>
    );
  }
}
