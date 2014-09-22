# Библиотека шрифтов Мануфактуры для BEM-TOOLS

## Используемые форматы ##
* WOFF
* WOFF2 (New WebKit)
* TrueType (Android Browser 2.2-4.3)
* EOT Compressed (IE<9)

Формат SVG не используем, в связи с окончанием поддержки WebKit и общим положением дел:
[http://www.chromestatus.com/feature/5930075908210688](http://www.chromestatus.com/feature/5930075908210688)
[http://caniuse.com/#feat=svg-fonts](http://caniuse.com/#feat=svg-fonts)

## Добавление новой гарнитуры ##
* Если в качества генератора используем вэб-сервис Font Squirrel, то выставляем правильный конфиг
* Для правильного парсинга Stylus оборачиваем base64-код кавычками