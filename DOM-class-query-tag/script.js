var para=document.getElementsByClassName('para')
console.log(para)
var count=0;

// para.addEventListener('click',()=>{
//     console.log("hello")
// })

// var para1=document.querySelectorAll('.para')
// para1.addEventListener('click',()=>{
//     console.log("hello")

// })

var para2=document.querySelector('.para')
para2.addEventListener('click',()=>{
    console.log("hello")

})

var para1=document.querySelectorAll('.para')
console.log(para1)
para1.forEach((element)=>{
    console.log(element)
    element.addEventListener('click',()=>{
    console.log("added eventlistner")
})
})

// for loop

var para4=document.querySelectorAll('.para')
console.log(para4)
for(i=0;i<para4.length;i++){
console.log(para4[i])

para4[i].addEventListener('click',()=>{
    console.log(`Button Clicked`)

    var div=document.createElement('div')
    div.innerHTML=`
    <h2>Hello New Div Created-query seelctor</h2>
    `
    document.body.append(div)
})

}


var para5=document.getElementsByClassName('.para')
console.log(para5)
for(i=0;i<para5.length;i++){
console.log(para5[i])

para5[i].addEventListener('click',()=>{
console.log(`Button Clicked`)

var div=document.createElement('div')
div.innerHTML=`
<h2>Hello New Div Created--------</h2>
`
document.body.append(div)
})

}



var paraTag=document.getElementsByTagName('p')
console.log(paraTag)
for(i=0;i<paraTag.length;i++){
console.log(paraTag[i])

paraTag[i].addEventListener('click',()=>{
console.log(`Button Clicked`)

var div=document.createElement('div')
div.innerHTML=`
<h2>Hello New Div Created+++++++++</h2>
`
document.body.append(div)
})

}
