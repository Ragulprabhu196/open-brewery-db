const Templateuser = document.querySelector("[data-user-template]")
const usercardcontainer = document.querySelector("[data-user-cards-container]")
const searchinput = document.querySelector("[data-search]")

let users = []

searchinput.addEventListener("input",(e)=>{
    const value =e.target.value.toLowercase()
    users.forEach(user=>{
        const isvisible =user.name.toLowercase().includes(value)||user.email.toLowercase().includes(value)
        user.element.classList.toggle('hide',!isvisible)

    })
})


fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data =>{
    users=data.map(user => {
        
    
    const card = Templateuser.content.cloneNode(true).children[0]
    const header=card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textcontent = user.name
    body.textcontent = user.email
    usercardcontainer.append(card)

    return{
        name:user.name, email:user.email, element:card
    }
  
    })
})
