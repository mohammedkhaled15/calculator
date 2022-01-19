var result = document.querySelector("input.screen")

document.querySelectorAll("input:not(#del, #reset, #equal, .screen)").forEach(el=>{
    el.addEventListener("mousedown",function(){
        this.style.backgroundColor = "hsl(223, 31%, 20%)"
    })
    el.addEventListener("mouseup",function(){
        this.style.backgroundColor = "#fff"
    })
    el.addEventListener("click",function(){
            
        result.value+=el.value
        
    })
})

document.querySelectorAll("#del, #reset").forEach(el=>{
    el.addEventListener("mousedown",function(){
        this.style.backgroundColor = "hsl(224, 36%, 15%)"
    })
    el.addEventListener("mouseup",function(){
        this.style.backgroundColor = "#666A99"
    })
})

document.querySelectorAll(" #equal").forEach(el=>{
    el.addEventListener("mousedown",function(){
        this.style.backgroundColor = "hsl(6, 70%, 34%)"
    })
    el.addEventListener("mouseup",function(){
        this.style.backgroundColor = "hsl(6, 63%, 50%)"
    })
    el.addEventListener("click", function(){
        result.value = eval(result.value)
    })
})

document.querySelector("#reset").addEventListener("click",function(){
    result.value = "0"
})
document.querySelector("#del").addEventListener("click",function(){
    result.value = result.value.substring(0,result.value.length-1)
})