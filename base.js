function dates (){
        let myDate=new Date()
        const law=document.querySelector("#samay")
        law.innerHTML=myDate.toLocaleString()
        console.log(law)
 }
 window.onload=dates


