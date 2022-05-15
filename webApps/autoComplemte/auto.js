const FRUITS = ["Banana","Orange","Apple","Mango","Lemon","Berry"]

const getSuggestions = (keyword) => {
    const result = FRUITS.filter(
        (i) => {
           return i.substring(0,keyword.length).toLowerCase() === keyword.toLowerCase()
        }
    )

    return new Promise((res)=>{
        setTimeout(()=>res(result),1000)
    })
}
getSuggestions('ap').then((i)=>{
    console.log(i)
})

const debounce = (fn,delay = 500) =>{
    let timerCtx
    return function (){
        const self = this
        const args = arguments
        clearTimeout(timerCtx)
        timerCtx = setTimeout(()=>fn.apply(self,args),delay)
    }
}

const inputBox = document.getElementById("search-input")
const suggestionBox = document.getElementById('suggestions-wrapper')

const resetState = () =>{
    suggestionBox.classList.remove("suggestions-visible")
}

const renderDropItems = (list = []) => {
    const suggFragments = document.createDocumentFragment()
    list.forEach((item)=>{
        const el = document.createElement("div")
        el.innerHTML = item
        el.classList.add("dropdown-item")
        el.setAttribute('data-key',item)
        suggFragments.appendChild(el)
    })
    suggestionBox.innerHTML = ""
    suggestionBox.appendChild(suggFragments)
}

const handleSearch = async (keyword) =>{
    let result= await getSuggestions(keyword)
    
    if(result.length){
        suggestionBox.classList.add("suggestions-visible")
        renderDropItems(result)
    }
    console.log(result)
}

const handleInputChange = (e) =>{
const value = e.target.value
if(value){
    handleSearch(value)
}else{
    resetState()
   // reset state is not working
}


}

const handleSelect = (event)=>{
    const {key} = event.target.dataset
    if(key){
       
        inputBox.value = key
        resetState()
    }
}

// (()=>{
    inputBox.addEventListener('input',debounce(handleInputChange),500)
// })()

suggestionBox.addEventListener('click',handleSelect)