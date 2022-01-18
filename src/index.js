import initialize from './website'
import loadHome from './home'
import loadFlavors from './flavors'
import loadContact from './contact'

init()

function checkEvents() {
    const home = document.querySelector('.home')
    const flavors = document.querySelector('.flavors')
    const contact = document.querySelector('.contact')
    const loog = document.querySelector('.header-logo')

    home.addEventListener('click', loadHome)
    flavors.addEventListener('click', loadFlavors)
    contact.addEventListener('click', loadContact)
    loog.addEventListener('click', loadHome)
}

function init() {
    initialize()
    loadHome()
    checkEvents()
}


