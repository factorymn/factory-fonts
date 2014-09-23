# Библиотека шрифтов Мануфактуры для БЭМ проектов #


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

## Используемые форматы ##
* WOFF
* WOFF2 (New WebKit)
* TrueType (Android Browser 2.2-4.3)
* EOT Compressed (IE<9)

Ранее поддерживаемый формат SVG (iOS Safari (3.2-4.1)) не используем, в связи с окончанием поддержки WebKit и общим положением дел:
[http://www.chromestatus.com/feature/5930075908210688](http://www.chromestatus.com/feature/5930075908210688)
[http://caniuse.com/#feat=svg-fonts](http://caniuse.com/#feat=svg-fonts)

## Добавление новой гарнитуры ##
* Если в качества генератора используем вэб-сервис Font Squirrel, то выставляем правильный конфиг
* Для правильного парсинга Stylus оборачиваем base64-код кавычками