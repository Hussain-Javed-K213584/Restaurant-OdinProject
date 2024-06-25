function addHomeHeading(){
    // Create a heading with underline, make it bold as well
    // Return the node

    const homeHeading = document.createElement('h2');
    homeHeading.innerText = 'A Random Restaurant';
    homeHeading.style.textAlign = 'center';
    homeHeading.style.textDecoration = 'underline';
    homeHeading.style.fontWeight = '600';
    homeHeading.style.color = 'red';


    return homeHeading;
}

function addHomeText(){
    // This function will add some home text
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.innerText = `  Welcome to our restaurant. 
                                    You can start by viewing our Menu or you may order online through call.
                                    Our number can be seen from the About page.
                                    `;
    welcomeParagraph.style.color = 'lightblue';
    welcomeParagraph.style.textAlign = 'center';

    return welcomeParagraph;
    
}
export { addHomeText, addHomeHeading }