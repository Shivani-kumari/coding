window.onload = () =>{
    let search_results = []
    let filtered_results = []

    // FETCH API DATA
    // const get_data = ()=>{
    //     fetch('./seed.js')
    //     .then(resp => resp.json())// the .json() method parses the JSON response into a JS object literal
    //     .then((responce)=>{
    //         console.log(responce)
    //     })
    // }
    const get_data = () => {
		fetch ('./seed.js')

		.then(resp => resp.json())

		.then((response) => {
			generate_view(response.restaurants)
            search_restaurants()
            sort_restaurants()
            filter_by_type()
		})
	}

    // CREATES /GETS INDIVIDAL CARD
    const generate_view = (data) =>{
        // Hide all the cards individal
        const cards_wrapper = Array.prototype.slice.call(document.getElementById('cards_wrapper').children)
        // the code convert return array
        cards_wrapper.forEach(el => el.style.display="none");

        // Clear our filtered results
        filtered_results = []

        //create cards
        data.forEach((el,idx)=>{
            if(el.id){
                create_card(el)
            }
// If html elements
                else {
                    document.getElementById('cards_wrapper').append(el)
                   
                    el.style.display = 'initial'
                }
            }
        )
    }
    // Creates the html for each individual card
    const create_card = (rest) =>{
        const card = document.createElement('aside')
        const rest_name = document.createElement('p')
        const rest_add = document.createElement('p')
        const rest_type = document.createElement('p')
        const rest_rev_count = document.createElement('p')

        // create data
        rest_name.append(rest.name)
        rest_add.append(rest.address)
        rest_type.append(rest.cuisine_type)
        rest_rev_count.append(rest.reviews.length)

        // append text node to card
        card.append(rest_name)
        card.append(rest_add)
        card.append("Number of reviews",rest_rev_count)
        card.append(rest_type)

        // append card to dom
        card.classList.add('card')
        card.setAttribute('data-type',rest.cuisine_type.toLowerCase()) // Add data Atrubute
        card.setAttribute('data-name',rest.name.toLowerCase())
        cards_wrapper.append(card)
    }
    //SEARCH RESTRUANT BY NAME
    const search_restaurants = () =>{
        const search_rests = document.getElementById('search_rests')
        const search_submit = document.getElementById('search_submit')
        let search_term
        search_rests.addEventListener('change',function(events){
            search_term = events.target.value
            
        })
        search_submit.addEventListener('click',function(event){
            event.preventDefault()
            // clear previous search results
            search_results =[]
            const cards_wrapper = Array.prototype.slice.call(document.getElementById('cards_wrapper').children)
           
            // search by name and type
            cards_wrapper.map((el,idx)=>{
                
                if(el.dataset.name.includes(search_term.toLowerCase())){
                    search_results.push(el)
                }else if(el.dataset.type.includes(search_term.toLowerCase())){
                        search_results.push(el)
                }
            })
            
            generate_view(search_results)
        })
    }
    //SORT RESTURANTS
    const sort_restaurants = () =>{
        const sort_btn = document.getElementById('sort_rests')
        sort_btn.addEventListener('click',function(event){
            event.preventDefault()

            const cards_wrapper = Array.prototype.slice.call(document.getElementById('cards_wrapper').children)
            // SORTS BY NAME ALPHAETICALLY ON ALL CARDS
            let sorted = cards_wrapper.sort((a,b)=>(a.dataset.name>b.dataset.name)?1:-1)
            generate_view(sorted)
        })
    }
    //FILTER BY TPYE
    const filter_by_type = () =>{
        const type_dd = document.getElementById('filter_by_type')
        const cards_wrapper = Array.prototype.slice.call(document.getElementById('cards_wrapper').children)

        type_dd.addEventListener('change',function(e){
            let selected_type = e.target.value
            
            cards_wrapper.forEach((el)=>{
                console.log(selected_type,el.dataset.type.toLowerCase())
                if(selected_type.toLowerCase().localeCompare(el.dataset.type.toLowerCase()) === 0){
                    filtered_results.push(el)
                }
            })
            generate_view(filtered_results)
        })
    }
    get_data()
}