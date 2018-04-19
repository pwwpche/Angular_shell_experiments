# Lazy load an Angular component from an external Webpack bundle 

## Configurations:
* Install NPM dependencies in `ng-main` and `ng-repo1`
`npm i`

### ng-repo1
* Go to ng-repo1, run
`npm run build`
to build a webpack bundle. There would be several js files generated, including a `NUM-chunk.js`
containing the module for the module to be lazy loaded.

* Open `NUM-chunk.js`, in the last line, change `});` to `}, ["ENTRY_MODULE.ts"]);`
eg. `}, ["app/heroes2/heroes.module.ts"]);`

* Run `python -m SimpleHTTPServer 2333` to host this chunk file.

### ng-main
* Go to `node_modules/angular-router-loader/src/utils.js`

* Change `return inline ? result.join('') : result.join('\n');` to
```
var result2 = [
    'loadChildren: function() { ',
    '  return new Promise(function (resolve, reject){',
    '    var script = document.createElement(\'script\');',
    '    script.src = "http://localhost:2333/0-chunk.js";',
    '    var head = document.getElementsByTagName(\'head\')[0];',
    '    head.appendChild(script);',
    '    script.onload = function() {eval("resolve(__webpack_require__(\'app/heroes2/heroes.module.ts\')[\'HeroesModule\'])");}',
    '  });',
    '}'
  ];
  return inline ? result2.join('') : result2.join('\n');
```
  in which 
  * `app/heroes2/heroes.module.ts` is the `ENTRY_MODULE` file, `HeroesModule` is its name
  * `http://localhost:2333/0-chunk.js` is the place we are hosting the chunk file.

* Run `npm start`

* Goto `http://localhost:8080/`

* When clicking "Heroes22", "HeroesComponent 2 bundle" will be shown on the page. This is loaded from the 
  external bundle `NUM-chunk.js`

