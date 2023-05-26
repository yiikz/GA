




const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")



//Param 1: type of event,  param2: callback
grandparent.addEventListener('click', e => {     //call back 'e' is event object that gets called back everytime the func 'click' runs 
    console.log("grandparent 1")
    
  }  )


  parent.addEventListener('click', e => {     //call back 'e' is event object that gets called back everytime the func 'click' runs 
    console.log("parent")
    
  }  )


child.addEventListener('click', e => {     //call back 'e' is event object that gets called back everytime the func 'click' runs 
    console.log("child")
    
  }  )


  document.addEventListener('click', e => {     //call back 'e' is event object that gets called back everytime the func 'click' runs 
    console.log("document 1")
    
  }  )

    

  // events work from closest element (surface) to furthest away element (background/document)
  //this is bubbling
  // tree is the other way around, from bacl layer to front   

    