const addBtn$ = $("#add");
const deleteBtn$ = $("#del");
const textbox$=$("#text");
const message$=$("#message")

addBtn$.click(()=>{
  const value$={}
  value$.text=textbox$.val()
  const text$=$("<h5></h5>")
  text$.text(value$.text)
  message$.append(text$)
  console.log(value$)

deleteBtn$.click(()=>{
  $(text$).remove();
 

})
})

