function addAboutHeading(){
    const headingElement = document.createElement('h2');
    headingElement.innerText = 'About the Restaurant';
    headingElement.style.fontWeight = '600';
    headingElement.style.color = 'red';
    headingElement.style.textDecoration = 'underline';
    return headingElement;
}

function addAboutText(){
    const textElement = document.createElement('p');
    textElement.innerText = `The restaurant Contact Info can be found Below!`;
    textElement.style.color = 'red';

    return textElement;
}

export { addAboutHeading, addAboutText }