const eventEmitter=require('events')
const event=new eventEmitter()

event.on('greet',(name:string)=>{
    console.log(`heloo ${name},welcome to the node`);
    
})
event.emit('greet','anu')