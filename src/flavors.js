let pic = new Image()

function createFlavorsHeader() {
    const header = document.createElement('div')
    header.classList.add('flavors-header')
    const headerInfoH1 = document.createElement('h1')
    headerInfoH1.classList.add('flavors-header-h1')
    const span1 = document.createElement('span')
    span1.classList.add('title-word', 'title-word-1')
    span1.textContent = 'CHECK '
    const span2 = document.createElement('span')
    span2.classList.add('title-word', 'title-word-2')
    span2.textContent = 'OUT '
    const span3 = document.createElement('span')
    span3.classList.add('title-word', 'title-word-3')
    span3.textContent = 'OUR '
    const span4 = document.createElement('span')
    span4.classList.add('title-word', 'title-word-4')
    span4.textContent = 'FLAVORS'
    headerInfoH1.append(span1, span2, span3, span4)
    const headerInfoP = document.createElement('p')
    headerInfoP.classList.add('flavors-header-p')
    headerInfoP.innerHTML = `How do you like your euphoria? There are so many ways to enjoy 
                               Magic Cones. We cover our bases with good old chocolate and 
                               award-winning vanilla, but then go so much further, 
                               with something for everyone.<br>Go ahead, give it a swirl…`
    header.append(headerInfoH1, headerInfoP)
    return header
}

function createFlavorsGallery() {
    const flavors = ['Vanilla', 'Chocolate', 'Strawberry', 'Raspberry', 'Blackberry', 'Pistachio', 'Oreo']
    const flavorsGallery = document.createElement('div')
    flavorsGallery.classList.add('flavors-gallery-container')
    const listDiv = document.createElement('div')
    listDiv.classList.add('flavors-gallery-item')
    const flavorList = document.createElement('ul')
    flavorList.classList.add('flavors-gallery-list')
    flavors.forEach(flavor => {
        const li = document.createElement('li')
        li.classList.add('flavor')
        li.textContent = flavor
        flavorList.appendChild(li)
        li.addEventListener('mouseover', changeFlavor)
    })
    listDiv.appendChild(flavorList)
    const picsDiv = document.createElement('div')
    picsDiv.classList.add('flavors-gallery-item')
    pic.src = 'images/vanilla.jpg'
    pic.classList.add('flavors-gallery-picture')
    picsDiv.appendChild(pic)
    flavorsGallery.append(listDiv, picsDiv)
    return flavorsGallery
}

function loadFlavors() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    content.append(createFlavorsHeader(), createFlavorsGallery())
}

function changeFlavor() {
    if (this.textContent === 'Vanilla') {
        pic.src = 'images/vanilla.jpg'
    }
    else if (this.textContent === 'Chocolate') {
        pic.src = 'images/chocolate.jpg'
    }
    else if (this.textContent === 'Strawberry') {
        pic.src = 'images/strawberry.jpg'
    }
    else if (this.textContent === 'Raspberry') {
        pic.src = 'images/raspberry.jpg'
    }
    else if (this.textContent === 'Blackberry') {
        pic.src = 'images/blackberry.jpg'
    }
    else if (this.textContent === 'Pistachio') {
        pic.src = 'images/pistachio.jpg'
    }
    else if (this.textContent === 'Oreo') {
        pic.src = 'images/oreo.jpg'
    }
}

export default loadFlavors