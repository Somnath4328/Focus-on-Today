const checkBoxList = document.querySelectorAll(".customCheck");
const inputFields = document.querySelectorAll(".addGoal");
const line = document.querySelector(".line");
const progress = document.querySelector(".progress");

checkBoxList.forEach((checkBox) => {
    checkBox.addEventListener("click", (e) => {
        let inputField = [...inputFields].every((input) => {
            return input.value
        })

        if (inputField) {
            checkBox.parentElement.classList.toggle("completed")
        }else{
            line.classList.add("showError")
        }

    })
})

inputFields.forEach((input) => {
    input.addEventListener("focus", () => {
        line.classList.remove("showError")
    })
})

const allGoals = {}

inputFields.forEach((inputs) => {
    inputs.addEventListener('input', (e) => {
        allGoals[inputs.id] = {
            name : inputs.value,
            completed : false
        }
        localStorage.setItem("allGoals", JSON.stringify(allGoals))
    })
})