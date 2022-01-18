function createContactPage() {
    const contactPage = document.createElement('div')
    contactPage.classList.add('contact-div')
    const titles = ['CONTACT US', 'GENERAL', 'ADDRESS', 'WHOLESALE', 'PHONE', 'ONLINE ORDERS', 'INSTAGRAM']
    const text = ['We like sweet talk', 'info@magiccones.com', '123 Smith Street<br>Brooklyn, NY 123',
                  'wholesale@magiccones.com', '123 123 1234', 'orders@magiccones.com', '@magic_cones']
    for (let i = 0; i < 7; i++) {
        const contactGridItem = document.createElement('div')
        contactGridItem.classList.add(`${'div' + (i + 1)}`)
        const contactTitle = document.createElement('h4')
        contactTitle.classList.add('contact-h4')
        contactTitle.textContent = titles[i]
        const contactParagraph = document.createElement('p')
        contactParagraph.classList.add('contact-p')
        contactParagraph.innerHTML = text[i]
        contactGridItem.append(contactTitle, contactParagraph)
        contactPage.appendChild(contactGridItem)
    }
    return contactPage
}

function loadContact() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    content.append(createContactPage())
}


export default loadContact