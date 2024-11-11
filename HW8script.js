// List of items to be displayed
const items = ["Apple", "Banana", "Cherry", "Fig", "Grape", "Honeydew", "Orange", "Pineapple", "Strawberry", "Truffle", "Zucchini"];

// Function to display items in the list
function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear the list
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// Function to search items
function searchItems() {
    const searchBox = document.getElementById('searchBox');
    const searchText = searchBox.value.toLowerCase();
    const itemList = document.getElementById('itemList');
    const listItems = itemList.getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++) {
        const itemText = listItems[i].textContent.toLowerCase();
        if (itemText.includes(searchText)) {
            listItems[i].classList.remove('hidden');
        } else {
            listItems[i].classList.add('hidden');
        }
    }
}

// Initial display of items
window.onload = displayItems;
