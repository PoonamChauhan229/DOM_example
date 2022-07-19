// var divButton=document.getElementById('divButton')
var divButton=document.querySelector('#divButton')
var count=0;
divButton.addEventListener('click',()=>{
    count++;
    //console.log("Button Clicked")
  console.log(`Button Clicked ${count}`)

    var div=document.createElement('div')
    div.innerHTML=`
    <h2>Hello New Div Created ${count}</h2>
  `
  document.body.append(div)
})


// 2nd 
var paraButton=document.getElementById('paraButton');

paraButton.addEventListener('click',()=>{
    count++;
    //console.log("Button Clicked")
  console.log(`Paragraph Clicked ${count}`)

    var para=document.createElement('p')
    // para.setAttribute('class','parastyle')
    para.classList.add('parastyle')
    para.innerHTML=`
    <h5>New Paragraph Created ${count}</h5>
  `
  document.body.append(para)
})

// 3rd
var alertButton=document.getElementById('alertButton')
alertButton.addEventListener('click',()=>{
    alert("ALert Button Clicked")
})

// 4th

var promptButton=document.getElementById('promptButton')
promptButton.addEventListener('click',()=>{
    var name=prompt("Enter Your Name")
    console.log(name)

    var para=document.createElement('p')
    // para.setAttribute('class','parastyle')
    para.classList.add('parastyle')
    para.innerHTML=`
    <h5>Name is: ${name}</h5>
  `
  document.body.append(para)
})



