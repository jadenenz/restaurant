export function loadContact() {
    let content = document.querySelector('#content');
    const blurb = document.createElement('div');
    blurb.setAttribute('class', 'blurb');
    blurb.innerText = `Email us at fakerestaurantemail@restaurant.biz
    Call us at 555-555-5555`
    content.appendChild(blurb);
}