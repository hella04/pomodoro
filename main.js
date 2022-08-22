
let tbody = document.getElementById("tbody")
let filterInput = document.getElementById("filter")
let sortInput = document.getElementById("sort")

const increaseButton = document.getElementById('increasebttn');
const decreaseButton = document.getElementById('decreasebttn');

let items = []
let filteredItems = []
let sortedItems = []


fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => {
        items = json
        console.log(items)

    })

function td_fun({ profile, name, location, email, phonenumber }) {
    let td = document.createElement('tr');
    td.innerHTML = `
    <td>
      <div>
        <img src="${profile}">
      </div>
      <span>
         ${name}
      </span>
     </td>
    <td> 
      <span>          
         ${location} 
      </span>
    </td>
                           
    
    <td>
        <span>
           ${email}
        </span>
    </td>
    <td>
        <span>${phonenumber}</span>
    </td>
    `;

    return td;

}

const elements = [
    { name: "Logan Henderson", location: "Chicago, IL", email: "logan@company.com", phonenumber: "938-283-9277" },
    { name: "Susie Carlson", location: "New York, NY", email: "susie@company.com", phonenumber: "394-938-9223" },
    { name: "Markus Benes", location: "San Francisco, CA", email: "markus@company.com", phonenumber: "872-993-1029" },
    { name: "Marie Stephensen", location: "Boston, MA", email: "marie@company.com", phonenumber: "928-938-5523" },
    { name: "Jacob Gibson", location: "Denver, CO", email: "jacob@company.com", phonenumber: "192-617-4895" },
    { name: "Eliza Figueroa", location: "Burlington, VT", email: "eliza@company.com", phonenumber: "717-029-2273" }
];

// for(let i= 2; i<elements.length; i++){
//     console.log(elements[i]);
// }

// function filter(){
//     if(elements[i]<0){

//     }
// }

function filterElements(event) {
    tbody.innerHTML = ""
    const filterValue = filterInput.value
    filteredItems = items.filter(function (item) {
        if (item.name.includes(filterValue) || item.phonenumber.includes(filterValue)) {
            return true
        } else {
            return false
        }


    })
    console.log(filteredItems)

    filteredItems.forEach(function (item) {
        const row = td_fun(item)
        tbody.append(row)
    })

}

function sortElements(event) {
    tbody.innerHTML = ""
    elements.sort((a, b) => a.name.localeCompare(b.name))
    console.log(sortedItems)

    sortedItems.forEach(function (item) {
        const row = td_fun(item)
        tbody.append(row)
    })

}

const array1 = [
    1, 2, 3, 4, 5, 6
]


function increaseOrder() {
    const sortId = array1.sort((a, b) => a - b)
    console.log(sortId)
}
function decreaseOrder() {
    const sortId = array1.sort((a, b) => b - a)
    console.log(sortId)

}



filterInput.addEventListener('keyup', filterElements)
sortInput.addEventListener('keyup', sortElements)
increaseButton.addEventListener('click', increaseOrder)
decreaseButton.addEventListener('click', decreaseOrder)