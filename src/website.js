function createNav() {
    const nav = document.createElement('nav')
    const headerLogo = document.createElement('p')
    headerLogo.textContent = "MAGIC CONES"
    headerLogo.classList.add('header-logo')
    const ul = document.createElement('ul')
    ul.classList.add('nav-ul')
    const tabs = ['HOME', 'FLAVORS', 'CONTACT']
    tabs.forEach(tab => {
        const li = document.createElement('li')
        li.classList.add('btn', tab.toLowerCase())
        li.textContent = tab
        ul.appendChild(li)
    })
    nav.append(headerLogo, ul)
    return nav
}

function createFooter() {
    const footer = document.createElement('footer')
    const footerLogo = document.createElement('p')
    footerLogo.textContent = "MAGIC CONES"
    footerLogo.classList.add('footer-logo')
    const footerText = document.createElement('p')
    footerText.innerHTML = `Copyright © 2021 ivane-k<i class="fab fa-github"></i>`
    footer.append(footerLogo, footerText)
    return footer
}

function initialize() {
    const content = document.createElement('div')
    content.id = "content"
    document.body.append(createNav(), content, createFooter())
}

export default initialize