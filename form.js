const formJSON = [
    {
        type: "email",
        pattern: "",
    },
    {
        type: "number",
        minValue: 10,
        maxValue: 20,
    },
    {
        type: "string",
        minLength: 10,
        maxLength: 20,
    }
]

const createForm =()=>{
    const body = document.body

    const form = document.createElement('form')

    const number = document.createElement('input')
    number.setAttribute('type',formJSON[1].type)
    number.setAttribute("min",formJSON[1].minValue)
    number.setAttribute("max",formJSON[1].maxValue)

    const name = document.createElement('input')
    name.setAttribute('type',formJSON[2].type)

    form.appendChild(number)
    form.appendChild(name)
    body.append(form)
}

createForm()