
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Selects tab content item. 
function selectItem(e){
    removeBorder();
    removeShow();
    // Adds a border to the current tab. 
    this.classList.add('tab-border');
    // Grabs content item from the DOM dynamically. 
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // Adds show class. 
    tabContentItem.classList.add('show');

}


// Event lsitener for when a tab item is clicked.
tabItems.forEach(item => item.addEventListener('click', selectItem));

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}