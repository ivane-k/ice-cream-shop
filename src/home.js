import loadFlavors from './flavors'
import loadContact from './contact'

function createHeading() {
    const heading = document.createElement('div')
    heading.classList.add('main')
    const border = document.createElement('div')
    border.classList.add('border')
    const inner = document.createElement('div')
    inner.classList.add('inner-cutout')
    const h1 = document.createElement('h1')
    h1.classList.add('knockout')
    h1.innerHTML = `Welcome to<br>Magic Cones`
    inner.appendChild(h1)
    border.appendChild(inner)
    heading.appendChild(border)
    return heading
}

function createHomeGallery() {
    const homeGallery = document.createElement('div')
    homeGallery.classList.add('homepage-gallery')

    const galleryHeader = [`A decadent blend of cream and culture`,
                            `Visit Our Shop`,
                            `Desserts Make People Happy`]
    const galleryPText = [`"Magic Cones" is an ice cream company that draws inspiration from 
                        globally-sourced whole ingredients, aromatic spices and unexpected twists 
                        on old classics. Our ice cream is all eggless, handcrafted, and churned 
                        with very little air, resulting in purer, more robust flavors, as well as 
                        the creamiest textures you can find.`,
                        `Monday - Thursday: 1pm - 10pm<br>Friday - Sunday: 12pm - 10pm
                        <br>123 Smith Street<br>Brooklyn, NY 123<br>123 123 1234`,
                        `We have pints waiting for you in all your favorite stores. 
                        Check out our locations and even request your favorite flavors at your 
                        local store.<br><br>We have three beautifully designed Magic Cones Ice Cream carts 
                        available for events from weddings, corporate parties, fairs and markets.`]
    const galleryButtonText = [`OUR FLAVORS`, `GET IN TOUCH`, `BACK TO TOP`]
    const galleryPictures = ['/images/home-pic1.jpg',
                             '/images/home-pic2.jpg', 
                             '/images/home-pic3.jpg']

    galleryPictures.forEach(picture => {
        const galleryPic = document.createElement('div')
        galleryPic.classList.add('homepage-gallery-item')
        let pic = document.createElement('img')
        pic.src = picture
        pic.classList.add('homepage-gallery-picture')
        galleryPic.appendChild(pic)
        homeGallery.appendChild(galleryPic)
    })

    for (let i = 0; i < 3; i++) {
        const galleryText = document.createElement('div')
        galleryText.classList.add('homepage-gallery-item')
        const galleryH1 = document.createElement('h1')
        galleryH1.classList.add('homepage-gallery-header')
        galleryH1.textContent = galleryHeader[i]
        const galleryP = document.createElement('p')
        galleryP.classList.add('homepage-gallery-p')
        galleryP.innerHTML = galleryPText[i]
        const galleryButton = document.createElement('button')
        galleryButton.type = 'submit'
        galleryButton.classList.add('homepage-gallery-button')
        galleryButton.textContent = galleryButtonText[i]
        galleryText.append(galleryH1, galleryP, galleryButton)
        homeGallery.appendChild(galleryText)

        if (i === 0) {
            galleryButton.addEventListener('click', loadNewFlavors)
        }
        else if (i === 1) {
            galleryButton.addEventListener('click', loadNewContact)
        }
        else if (i === 2) {
            galleryButton.addEventListener('click', scroll)
        }
    }

    return homeGallery
}

function loadHome() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    content.append(createHeading(), createHomeGallery())
}

function loadNewContact() {
    loadContact()
    scroll()
}

function loadNewFlavors() {
    loadFlavors()
    scroll()
}

function scroll() {
    window.scroll(0, 0)
}

export default loadHome