function addMenuHeading(){

    const homeHeading = document.createElement('h2');
    homeHeading.innerText = 'Main Menu';
    homeHeading.style.textAlign = 'center';
    homeHeading.style.textDecoration = 'underline';
    homeHeading.style.fontWeight = '600';
    homeHeading.style.color = 'red';

    return homeHeading;
}

function addMainMenu(){
    const mainMenuContent = document.createElement('div');
    mainMenuContent.classList.add('main-menu');
    const menuItems = {
        'Item 1': '200PKR',
        'Item 2': '200PKR',
        'Item 3': '200PKR',
        'Item 4': '200PKR',
    }
    const unorderedList = document.createElement('ul');
    for(let item in menuItems){
        console.log(item + ' '+ menuItems[item]);
        const listitem = document.createElement('li');
        listitem.innerText = item + ' ' + menuItems[item];
        unorderedList.appendChild(listitem);
    }

    return mainMenuContent;

}

export {addMainMenu, addMenuHeading}