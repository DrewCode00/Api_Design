setTimeout(() => {
    throw new error('ooops')
}, 300)


process.on('uncaughtException', () =>{

})

process.on('unhandledRejection', () =>{
    
})