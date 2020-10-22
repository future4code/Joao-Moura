### Comandos para inicializar um projeto TypeScript
- `$ mkdir build src`
- `$ tsc -init`
- `$ npm init -y`
- `$ npm i express`
- `$ npm install @types/express -D`
- `$ npm install cors`
- `$ npm install @types/cors -D`
- `$ npm install ts-node-dev -D`

package.json
> `"start": "clear && echo \"Starting application...\n\" && tsc && node ./build/index.js"`

if(name && capital && continent){
              return country.name === name && country.capital === capital && country.continent === continent
          }else if(name && capital){
              return country.name === name && country.capital === capital
          }else if(name){
            return country.name === name
          }