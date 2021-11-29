export function loadMenu() {
    let content = document.querySelector('#content');
    const blurb = document.createElement('div');
    blurb.setAttribute('class', 'blurb');
    blurb.innerText = `Chicken Sandwich: $5
    Turkey Sandwich: $5
    Spaghetti: $25
    Pizza $4`
    content.appendChild(blurb);
}