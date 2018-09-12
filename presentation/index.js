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
  loader_code_example: require("../assets/images/loader_code_example.png"),
  plugin_code_example: require("../assets/images/plugin_code_example.png"),
  plugin_code_example_2: require("../assets/images/plugin_code_example_2.png"),
  ast_babel_example: require("../assets/images/ast_babel_example.png"),
  ast_example2: require("../assets/images/ast_code_example2.png"),
  django_logo: require("../assets/images/django_logo.png"),
  webpack_cors_errors: require("../assets/images/webpack_cors_errors.png"),
  static_tag_code: require("../assets/images/static_tag_code.png"),
  modulos_repetidos: require("../assets/images/modulos_repetidos.png"),
  bundle_analyzer_example: require("../assets/images/bundle_analyzer_example.png")
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
            Webpack
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
          <Heading margin="0 auto 32px auto" size={5} textColor="white">
            Loaders example
          </Heading>
          <Text textSize="24px" textColor="white">Función que recibe el source code</Text>
          <Image src={images.loader_code_example} />
          {/* <Text textColor="white" textSize={16}>https://medium.com/netscape/my-first-time-writing-a-webpack-loader-bf92d42fff57</Text> */}
        </Slide>
        {/* 16 */}
        <Slide>
          <Heading margin="0 auto 24px auto" size={5} textColor="white">
            Plugin example
          </Heading>
          <Text textSize="24px" textColor="white">Apply recibe una instancia del compilador de webpack</Text>
          <Image height={600} src={images.plugin_code_example} />
          {/* <Text textColor="white" textSize={16}>https://medium.com/netscape/my-first-time-writing-a-webpack-loader-bf92d42fff57</Text> */}
        </Slide>
        {/* 16.5 */}
        <Slide>
          <Heading margin="0 auto 24px auto" size={5} textColor="white">
            Plugin example: Notifier
          </Heading>
          <Image height={600} src={images.plugin_code_example_2} />
          {/* <Text textColor="white" textSize={16}>https://medium.com/netscape/my-first-time-writing-a-webpack-loader-bf92d42fff57</Text> */}
        </Slide>
        {/* 17 */}
        <Slide>
          <Heading margin="0 auto 24px auto" size={5} textColor="white">
            AST && BABEL plugins
          </Heading>
          <Text textSize="24px" textColor="white">
            AST: Estructura de datos que usan los compiladores.
          </Text>
          <Text textSize="24px" textColor="white">
            AST: Le informan al interpreter que es lo que está pasando en el código.
          </Text>
          {/* <Text textSize="24px" textColor="white">Apply que recibe una instancia del compilador de webpack</Text> */}
          <Image height={500} src={images.ast_babel_example} />
          {/* <Text textColor="white" textSize={16}>https://medium.com/netscape/my-first-time-writing-a-webpack-loader-bf92d42fff57</Text> */}
        </Slide>
        {/* 18 */}
        <Slide bgColor="white">
          <CodePane
            textSize={28}
            source={`                     var a = 3;
                     a + 5`
            }
            lang="javascript"
          />
          <Image height={500} src={images.ast_example2} />
        </Slide>
        {/* 18.3 */}
        <Slide>
          <Heading margin="0 auto 50px auto" size={5} textColor="white">
            En resumen...
          </Heading>
          <Image src={images.webpack_modules_dependencies} />
        </Slide>
        {/* 18.5 */}
        <Slide>
          {/* <Image height={200} src={images.webpackLogo} /> */}
          <Text textSize="120px">🏃</Text>
          <Heading size={5} textColor="white">
            Regresemos a crehana
          </Heading>
        </Slide>
        {/* 19 */}
        <Slide>
          <Heading margin="0 auto 24px auto" size={5} textColor="white">
            1º Meta
          </Heading>
          <Text textSize={32} textColor="white" margin="0 auto 24px auto">HOT MODULE REPLACEMENT</Text>
          <div style={{ display: "flex" }}>
            <Image height={100} src={images.django_logo} />
            <Image height={100} src={images.webpackLogo} />
          </div>
        </Slide>
        {/* 20 */}
        <Slide>
          <Heading margin="0 auto 24px auto" size={5} textColor="white">
            1º Error:
          </Heading>
          <Text textSize={32} textColor="white" margin="0 auto 24px auto">CORS 😟</Text>
          <CodePane
            textSize={22}
            source={`
<script src="http://localhost:9000/js/CourseDetail.min.js"></script>
            `}
            lang="javascript"
          />
          <Image height={400} src={images.webpack_cors_errors} />
        </Slide>
        {/* 21 */}
        <CodeSlide
          code={require("raw-loader!../assets/code/devServer.code")}
          lang="js"
          textSize={24}
          ranges={[
            { loc: [0, 22], title: " webpack-dev-server configuration" },
            { loc: [9, 15], note: "Habilitar los cors en el dev server" },
            { loc: [1, 3], note: "Especificar un public path" }
          ]}
        />
        {/* 22 */}
        <Slide>
          <Heading textSize={30} margin="0 auto 32px auto">Automatizar el cambio de urls con un template tag</Heading>
          <Image src={images.static_tag_code} />
        </Slide>
        {/* 23 */}
        <Slide>
          <Heading margin="0 auto 24px auto" size={5} textColor="white">
            2º Meta
          </Heading>
          <Text textSize={28} textColor="white" margin="0 auto 24px auto">Acelerar el tiempo de compilación/re-compilación</Text>
          <Text textSize={32} textColor="white" margin="0 auto 24px auto">Dll plugin vs Commons chunk plugin</Text>
          <Text textSize="120px">🤔</Text>
        </Slide>
        {/* 24 */}
        <Slide>
          <Image src={images.modulos_repetidos} />
        </Slide>
        {/* 25 */}
        <Slide>
          <Image src={images.bundle_analyzer_example} />
        </Slide>
        {/* 26 */}
        <CodeSlide
          code={`new webpack.optimize.CommonsChunkPlugin({
  // async: true,
  children: true,
  minChunks: 6,
  // minChunks: infinity
})`}
          ranges={[
            { loc: [0, 6], title: "CommonsChunkPlugin Config" }
          ]}
          lang="js"
        />
        {/* 27 */}
        <Slide>
          <Heading textSize={50} margin="0 auto 32px auto">Common chunk plugin</Heading>
          <Text textAlign="left" textSize={40} textColor="white">Desventajas:</Text>
          <List textColor="white">
            <ListItem margin="10px auto" textSize={28}>No acelera el tiempo de compilación.</ListItem>
            <ListItem margin="10px auto" textSize={28}>Dificil de manejar en proyectos grandes.</ListItem>
            <ListItem margin="10px auto" textSize={28}>En un futuro será deprecado por webpack</ListItem>
          </List>
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
