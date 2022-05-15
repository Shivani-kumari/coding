const tableData= [
    {
    name: "shivani",
    email:'shivanikumari5@yahoo.com' ,
    phone:'9304631092',
    id :'1' ,
    status:'active'
},
// {
//     name: "shivani",
//     email:'shivanikumari5@yahoo.com' ,
//     phone:'9304631092',
//     id :'2' ,
//     status:'active'
// },
// {
//     name: "shivani",
//     email:'shivanikumari5@yahoo.com' ,
//     phone:'9304631092',
//     id :'3' ,
//     status:'active'
// }
]

const shi = document.getElementById("name")
const number = document.getElementById('number')
const email = document.getElementById('email')
const addButton = document.getElementById('add')
const table = document.getElementById('table')
const search = document.getElementById('search')

let value1 = ""
let value2 = ""
let value3 = ""

let setEdit = false

shi.addEventListener('change',function (e) {
    value1 = e.target.value
})

number.addEventListener('change',function(e){
    value2 = e.target.value
})
email.addEventListener('change',function(e){
    value3 = e.target.value
})

function add() {

    if(setEdit==false){
        let obj = {}
    // needs to call cteateTable 
        obj["name"] = value1
        obj['email'] = value3
        obj['phone']= value2
        obj['id'] = tableData.length + 1
        tableData.push(obj)
      
        const tr = document.createElement('tr')
        tr.setAttribute('id',tableData.length+'tr')
            table.appendChild(tr)
            const edit = document.createElement('button')
            const dele = document.createElement('button')
            edit.innerText="Edit"
            dele.innerText='Delete'
            edit.setAttribute('id',tableData.length)
            dele.setAttribute('id',tableData.length)
            const td1 = document.createElement('td')
            td1.setAttribute('id' ,tableData.length+"name")
            const td2 = document.createElement('td')
            const td3 = document.createElement('td')
            const td4 = document.createElement('td')
            const td5 = document.createElement('td')

            td1.innerText=value1
        td2.innerText=value2
        td3.innerText=value3
        td4.appendChild(edit)
        td5.appendChild(dele)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        shi.value=""
        number.value=""
        email.value=""
        console.log(tableData)
        console.log(table)

        tr.addEventListener('click',function(e){
            console.log(e.target)
        })

        edit.addEventListener('click',function (e){
            const newName = document.getElementById(e.target.id+"name")
           shi.value = newName.innerText
            setEdit = e.target.id
            console.log(newName)
            
            })
            dele.addEventListener('click',function(e){
                const deleteElement = document.getElementById(e.target.id+"tr")
                console.log(deleteElement,e.target)
                deleteElement.remove()
            })
    }
    

     if(setEdit) {
        const editName = document.getElementById(setEdit+"name")
        editName.innerText = value1
        setEdit=false
        shi.value=""
     } 
        

       
}

addButton.addEventListener('click',add)

function createTable(filterSearch) {
    filterSearch.map((el)=>{
        const tr = document.createElement('tr')
        table.appendChild(tr)
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        td1.innerText=el.name
        td2.innerText=el.phone
        td3.innerText=el.email
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        
       
       })
}

search.addEventListener('keyup',function (e){
    let tr =  Array.from(table.getElementsByTagName('tr'))
    console.log(e.target.value)
    let serchValue = e.target.value
    //  let filterSearch =  tr.filter((el,index)=>{
    //      if(index>0)
    //     return serchValue == el.getElementsByTagName('td')[0].innerText
    //     })
    let filterSearch = tableData.filter((data,index)=>data.name.includes(serchValue))
      table.innerHTML=""
      if(serchValue==""){
          createTable(tableData)
      }else{
        createTable(filterSearch)
      }
      
})


//  


