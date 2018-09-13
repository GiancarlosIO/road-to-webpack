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
  bundle_analyzer_example: require("../assets/images/bundle_analyzer_example.png"),
  common_chunk_final: require("../assets/images/common_chunk_final.jpg"),
  crehana_vendor_dll: require("../assets/images/crehana_vendor_dll.png"),
  dll_json: require("../assets/images/dll_json.png"),
  css_modules: require("../assets/images/css_modules.png"),
  css_modules_config: require("../assets/images/css_modules_config.png")
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
        {/* 25.5 */}
        <Slide>
          <Image src={images.common_chunk_final} />
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
            <ListItem margin="10px auto" textSize={28}>Difícil de manejar en proyectos grandes.</ListItem>
            <ListItem margin="10px auto" textSize={28}>En un futuro será deprecado por webpack</ListItem>
          </List>
        </Slide>
        {/* 28 */}
        <Slide>
          <Heading margin="0 auto 24px auto" size={5} textColor="white">
            Dll plugin
          </Heading>
          <Text textAlign="left" textSize={40} textColor="white">Ventajas:</Text>
          <List textColor="white">
            <ListItem margin="10px auto" textSize={28}>Acelera de forma drástica tiempo de compilación.</ListItem>
            <ListItem margin="10px auto" textSize={28}>Ayuda tener un mejor manejo del cache</ListItem>
          </List>
          <Text textAlign="left" textSize={40} margin="80px auto 0 auto" textColor="white">Desventajas:</Text>
          <List textColor="white">
            <ListItem margin="10px auto" textSize={28}>Necesita una configuración extra.</ListItem>
          </List>
        </Slide>
        {/* 29 */}
        <CodeSlide
          code={require("raw-loader!../assets/code/dll.code")}
          ranges={[
            { loc: [0, 32], title: "Dll plugin configuration" },
            { loc: [1, 10], note: "Entries" },
            { loc: [10, 18] },
            { loc: [21, 28] }
          ]}
          lang="js"
        />
        {/* 30 */}
        <Slide>
          <Image height={600} src={images.dll_json} />
        </Slide>
        {/* 30.5 */}
        <CodeSlide
          code={require("raw-loader!../assets/code/dll_reference.code")}
          textSize={24}
          ranges={[
            { loc: [0, 55], title: "Dll Reference plugin configuration" },
            { loc: [44, 48] }
          ]}
          lang="js"
        />
        {/* 31 */}
        <Slide>
          <Image src={images.crehana_vendor_dll} />
        </Slide>
        {/* 32 */}
        <Slide>
          <Heading margin="0 auto 24px auto" size={5} textColor="white">
            3º Meta
          </Heading>
          <Text textSize={28} textColor="white" margin="0 auto 0 auto">Implementar css modules junto al extract-text-plugin</Text>
          <div style={{ display: "flex" }}>
            <Image height={500} src={images.css_modules} />
          </div>
        </Slide>
        {/* 33 */}
        <Slide>
          <Image height={600} src={images.css_modules_config} />
        </Slide>
        {/* 34 */}
        <CodeSlide
          textSize={24}
          code={require("raw-loader!../assets/code/style_base.code")}
          ranges={[
            { loc: [0, 30], title: "Style loader, base configuration" },
            { loc: [3, 21] },
            { loc: [22, 30] }
          ]}
          lang="js"
        />
        {/* 35 */}
        <CodeSlide
          textSize={24}
          code={require("raw-loader!../assets/code/style_dll.code")}
          ranges={[
            { loc: [0, 30], title: "Style loader, dll configuration" },
            { loc: [4, 21] }
          ]}
          lang="js"
        />
        {/* 36 */}
        <CodeSlide
          textSize={24}
          code={require("raw-loader!../assets/code/style_shared.code")}
          ranges={[
            { loc: [0, 31], title: "Style loader, prod/dev configuration" },
            { loc: [13, 30] }
          ]}
          lang="js"
        />
        {/* 37 */}
        <CodeSlide
          textSize={19}
          lang="js"
          code="import '!style-loader!css-loader!sass-loader!react-select/dist/react-select.css';"
          ranges={[
            { loc: [0, 1], title: "Corregir los imports directos de los css/sass" }
          ]}
        />
        {/* 38 */}
        <Slide>
          <Text textAlign="left" textSize={40} textColor="white">Metas cumplidas:</Text>
          <List textColor="white">
            <ListItem margin="10px auto" textSize={24}>Hot module replacement</ListItem>
            <ListItem margin="10px auto" textSize={24}>Rebuilds rápidos gracias al dll plugin</ListItem>
            <ListItem margin="10px auto" textSize={24}>Una mejor estructura de los archivos/carpetas de webpack</ListItem>
          </List>
          <Text textSize="162px">
            <p style={{ lineHeight: "100px", transform: "rotateY(180deg)", margin: "0" }}>
              🏎
            </p>
          </Text>
        </Slide>
        {/* 39*/}
        <Slide>
          <Text textAlign="left" textSize={40} textColor="white">Cosas por mejorar</Text>
          <List textColor="white">
            <ListItem margin="10px auto" textSize={24}>No más memory leaks</ListItem>
            <ListItem margin="10px auto" textSize={24}>HMRL funcional</ListItem>
            <ListItem margin="10px auto" textSize={24}>Abstraer la lógica de archivos/folders que tiene webpack</ListItem>
            <ListItem margin="10px auto" textSize={24}>Rehacer/Refactorizar los loaders(css loaders)</ListItem>
            <ListItem margin="10px auto" textSize={24}>Acelerar aún más el tiempo de construcción de webpack</ListItem>
          </List>
        </Slide>
        {/* 40 */}
        <Slide>
          <Text textColor="white" textSize="32px">
            ¿Qué sigue?
          </Text>
          <Text textSize="120px">🤔</Text>
          <List textColor="white">
            <ListItem margin="10px auto" textSize={24}>crehana-scripts</ListItem>
            <ListItem margin="10px auto" textSize={24}>Hacer que los loaders procesen los archivos de forma paralela</ListItem>
            <ListItem margin="10px auto" textSize={24}>SUPER-MEGA-HYPER AGRESSIVE CACHE (DB?)</ListItem>
            <ListItem margin="10px auto" textSize={24}>Encontrar una forma de compartir los dlls en las diferentes apps de crehana</ListItem>
            <ListItem margin="10px auto" textSize={24}>Crear un bot de slack qué nos avise cuando la construcción ha terminado y nos diga cuantos kb +/- los archivos (custom plugin?)</ListItem>
          </List>
        </Slide>
        {/* 3123123 */}
        {/* <CodeSlide
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
        /> */}
      </Deck>
    );
  }
}
