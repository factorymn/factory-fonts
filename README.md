bem-font
========

## Использование в bem проектах

Подключить в сборку проекта в make файле.

Подключение в deps.js
На примере подключения шрифтов для всего проекта в блоке `page`
```js
({
    mustDeps : [
        { block : 'font', elem : 'grands' },
        { block : 'font', elem : 'reformagrotesk', mods : { face : ['medium']} },
        { block : 'font', elem : 'futurafuturis', mods : { face : ['regular', 'bold', 'light']} }
    ],
    shouldDeps : []
})
```


## Fonts

- [Grands](http://grawl.github.io/Grands/) (social icons)
