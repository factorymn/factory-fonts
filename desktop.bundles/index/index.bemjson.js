({
    block : 'page',
    title : 'BEM-FONT Lib',
    head : [
        { elem : 'css', url : '_index.css' }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }],
    content : [
       {
           block : 'text',
           attrs : { style : 'font-family: PT Sans' },
           content : 'PT Sans Regular'
       },
       {
           block : 'text',
           attrs : { style : 'font-family: PT Sans; font-style: italic' },
           content : 'PT Sans Italic'
       },
       {
           block : 'text',
           attrs : { style : 'font-family: PT Sans; font-weight: bold' },
           content : 'PT Sans Bold'
       },
       {
           block : 'text',
           attrs : { style : 'font-family: PT Sans; font-weight: bold; font-style: italic' },
           content : 'PT Sans Bold Italic'
       }
    ]
})
