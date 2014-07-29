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
        { block : 'font', elem : 'futurafuturis', mods : { face : 'light'} },
        { block : 'font', elem : 'pt-sans', mods : { face : ['regular', 'bold', 'italic']} }
    ],
    shouldDeps : []
})
```


## Fonts

- [Grands](http://grawl.github.io/Grands/) (social icons)
- PT Sans [Альтернатива](http://www.google.com/fonts)
