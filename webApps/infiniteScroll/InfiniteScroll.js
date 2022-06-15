const API_BASE_URL = 'https://www.algoexpert.io/api/testimonials'
PAGE_SIZE =5;

let afterID = null

const testimonialContainer = document.getElementById('testimonial-container')

function handleScroll() {
    const bottomSpaceLeftToScroll = (
        this.scrollHeight - this.scrollTop - this.clientHeight
    )
    if(bottomSpaceLeftToScroll>0) return

    fetchAndAppendTestimonials()
}

testimonialContainer.addEventListener('scroll',handleScroll)
fetchAndAppendTestimonials()



function fetchAndAppendTestimonials() {
    const url = createTestimonialsUrl()
    fetch(url)
        .then(res => res.json())
        .then(({testimonials,hasNext})=>{
            const fragment = document.createDocumentFragment()
            testimonials.forEach(({message}) => {
                fragment.appendChild(createTestimonialElement(message))
            });
            testimonialContainer.appendChild(fragment)
            if(hasNext){
                afterID = testimonials[testimonials.length-1].id
            }else{
                testimonialContainer.removeEventListener('scroll',handleScroll)
            }
        })
}

function createTestimonialElement(message) {
    const testimonialElement = document.createElement('p')
    testimonialElement.classList.add('testimonial')
    testimonialElement.textContent = message
    return testimonialElement
}

function createTestimonialsUrl() {
    const url = new URL(API_BASE_URL)
    url.searchParams.set('limit',PAGE_SIZE)

    if(afterID != null){
        url.searchParams.set('after',afterID)
    }

    return url
}

// https://codesandbox.io/s/1fmmt?file=/src/setupTests.ts