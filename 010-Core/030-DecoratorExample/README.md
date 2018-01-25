
**tsconfig.json**
In order to support annotation in TypeScript, it requires to add '"experimentalDecorators": true' to tsconfig.json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "target",
        "experimentalDecorators": true        
    },
    "include": [
        "src/**/*"
    ]
}

# Reference
* https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
