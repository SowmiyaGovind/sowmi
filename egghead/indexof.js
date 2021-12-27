// import path from('path')
const path=require('path')
const whiteList=['.css','.js'];
const events=[
    {
        file:'css/core.css'
    },
    {
        file:'js/app.js'
    },
    {
        file:'index.html'
    }
];

const filteres=events.filter(event=>{
    const ext=path.extname(event.file);
    return whiteList.indexOf(ext)>-1;
})
console.log(filteres)

