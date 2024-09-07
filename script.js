const checks = document.querySelectorAll(".customCheck")
const inputs = document.querySelectorAll(".addGoal")

checks.forEach((check) => {
    check.addEventListener("click", (e)=>{
        console.log(e)
        check.classList.toggle("completed")
        let input = check.nextElementSibling;
        if(check.classList.contains("completed")){
            input.style.textDecoration = "line-through";
            input.style.color = "green";
        }else{
            input.style.textDecoration = "none";
            input.style.color = "black";
        }
    })
})