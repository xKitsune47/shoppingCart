const listOfPositions = [
    {
        id: 1,
        name: "Espresso",
        price: [
            { size: "S", price: 9 },
            { size: "M", price: 12 },
            { size: "L", price: 15 },
        ],
        type: "coffe",
    },
    {
        id: 2,
        name: "Cappucino",
        price: [
            { size: "S", price: 10 },
            { size: "M", price: 14 },
            { size: "L", price: 18 },
        ],
        type: "coffe",
    },
    {
        id: 3,
        name: "Americano",
        price: [
            { size: "S", price: 8 },
            { size: "M", price: 10 },
            { size: "L", price: 12 },
        ],
        type: "coffe",
    },
    {
        id: 4,
        name: "Cafe creme",
        price: [
            { size: "S", price: 11 },
            { size: "M", price: 15 },
            { size: "L", price: 20 },
        ],
        type: "coffe",
    },
    {
        id: 5,
        name: "Cortado",
        price: [
            { size: "S", price: 10 },
            { size: "M", price: 13 },
            { size: "L", price: 16 },
        ],
        type: "coffe",
    },
    {
        id: 6,
        name: "Espresso Doppio",
        price: [
            { size: "S", price: 12 },
            { size: "M", price: 16 },
            { size: "L", price: 21 },
        ],
        type: "coffe",
    },
    {
        id: 7,
        name: "Flat White",
        price: [
            { size: "S", price: 11 },
            { size: "M", price: 14 },
            { size: "L", price: 19 },
        ],
        type: "coffe",
    },
    {
        id: 8,
        name: "Latte Macchiato",
        price: [
            { size: "S", price: 12 },
            { size: "M", price: 15 },
            { size: "L", price: 20 },
        ],
        type: "coffe",
    },
    {
        id: 9,
        name: "Lungo",
        price: [
            { size: "S", price: 9 },
            { size: "M", price: 12 },
            { size: "L", price: 15 },
        ],
        type: "coffe",
    },
    {
        id: 10,
        name: "Macchiato",
        price: [
            { size: "S", price: 10 },
            { size: "M", price: 13 },
            { size: "L", price: 16 },
        ],
        type: "coffe",
    },
    {
        id: 11,
        name: "Ristretto",
        price: [
            { size: "S", price: 11 },
            { size: "M", price: 14 },
            { size: "L", price: 18 },
        ],
        type: "coffe",
    },
    ///
    {
        id: 12,
        name: "Kanapka z szynką",
        price: [
            { size: "S", price: 8 },
            { size: "L", price: 15 },
        ],
        type: "breakfast",
    },
    {
        id: 13,
        name: "Kanapka z łososiem",
        price: [
            { size: "S", price: 9 },
            { size: "L", price: 16 },
        ],
        type: "breakfast",
    },
    {
        id: 14,
        name: "Kanapka z kurczakiem",
        price: [
            { size: "S", price: 8 },
            { size: "L", price: 15 },
        ],
        type: "breakfast",
    },
    {
        id: 15,
        name: "Kanapka z awokado",
        price: [
            { size: "S", price: 10 },
            { size: "L", price: 18 },
        ],
        type: "breakfast",
    },
    {
        id: 16,
        name: "Kanapka z serem",
        price: [
            { size: "S", price: 9 },
            { size: "L", price: 16 },
        ],
        type: "breakfast",
    },
    {
        id: 17,
        name: "Kanapka wegańska",
        price: [
            { size: "S", price: 10 },
            { size: "L", price: 18 },
        ],
        type: "breakfast",
    },
    {
        id: 18,
        name: "Kanapka z jajkiem",
        price: [
            { size: "S", price: 9 },
            { size: "L", price: 16 },
        ],
        type: "breakfast",
    },
    {
        id: 19,
        name: "Cappuzino",
        price: [
            { size: "S", price: 10 },
            { size: "M", price: 14 },
            { size: "L", price: 18 },
        ],
        type: "sesonal",
    },
    {
        id: 20,
        name: "Christmas flat white",
        price: [
            { size: "S", price: 11 },
            { size: "M", price: 15 },
            { size: "L", price: 20 },
        ],
        type: "sesonal",
    },
    {
        id: 21,
        name: "Colourful coffee dream",
        price: [
            { size: "S", price: 12 },
            { size: "M", price: 16 },
            { size: "L", price: 21 },
        ],
        type: "sesonal",
    },
    {
        id: 22,
        name: "Gingerbread espresso",
        price: [
            { size: "S", price: 11 },
            { size: "M", price: 15 },
            { size: "L", price: 20 },
        ],
        type: "sesonal",
    },
    {
        id: 23,
        name: "Ginger honey surprise",
        price: [
            { size: "S", price: 12 },
            { size: "M", price: 16 },
            { size: "L", price: 21 },
        ],
        type: "sesonal",
    },
    {
        id: 24,
        name: "Liquorice macchiato ",
        price: [
            { size: "S", price: 11 },
            { size: "M", price: 15 },
            { size: "L", price: 20 },
        ],
        type: "sesonal",
    },
    {
        id: 25,
        name: "Biscuit latte",
        price: [
            { size: "S", price: 12 },
            { size: "M", price: 16 },
            { size: "L", price: 21 },
        ],
        type: "sesonal",
    },
    {
        id: 26,
        name: "Cafe santa",
        price: [
            { size: "S", price: 11 },
            { size: "M", price: 15 },
            { size: "L", price: 20 },
        ],
        type: "sesonal",
    },
    {
        id: 27,
        name: "Ciasto z jabłkami",
        price: [
            { size: "S", price: 8 },
            { size: "L", price: 15 },
        ],
        type: "sweet",
    },
    {
        id: 28,
        name: "Ciasto wiśniowe",
        price: [
            { size: "S", price: 9 },
            { size: "L", price: 16 },
        ],
        type: "sweet",
    },
    {
        id: 29,
        name: "Ciasto czekoladowe",
        price: [
            { size: "S", price: 10 },
            { size: "L", price: 18 },
        ],
        type: "sweet",
    },
    {
        id: 30,
        name: "Ciasto z galaretką",
        price: [
            { size: "S", price: 9 },
            { size: "L", price: 16 },
        ],
        type: "sweet",
    },
    {
        id: 31,
        name: "Ciasto kremowe",
        price: [
            { size: "S", price: 10 },
            { size: "L", price: 18 },
        ],
        type: "sweet",
    },
    {
        id: 32,
        name: "Kawa z ciastkiem",
        price: [
            { size: "S", price: 15 },
            { size: "M", price: 25 },
            { size: "L", price: 35 },
        ],
        type: "set",
    },
    {
        id: 33,
        name: "Kawa z kanapką",
        price: [
            { size: "S", price: 16 },
            { size: "M", price: 26 },
            { size: "L", price: 36 },
        ],
        type: "set",
    },
];

let addedProducts = [[listOfPositions[1].id, "M", 1]];
let showProducts = [];
let totalPrice = 0;

function loadCart() {
    const deleteButton = `<button class="deleteItem" onclick="updateItems(0);">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
        >
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
            />
            <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
            />
        </svg>
        </button>`;
    const chooseQuantity = `<input
        type="number"
        class="itemQuantity"
        placeholder="1"
        id="itemQuantity"
        min="1"
        value="1"
        onchange="updateItems(this.value)"
        />`;
    const add1MoreProduct = `
        <button
            class="addRemoveItemQuantity"
            onclick="updateItems(1);"
            >
            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-plus"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                            />
            </svg>
        </button>`;
    const remove1Product = `<button
    class="addRemoveItemQuantity"
    onclick="updateItems(-1);"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-dash"
        viewBox="0 0 16 16"
    >
        <path
            d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"
        />
    </svg>
        </button>`;
    const parentElement = document.querySelector("#main");
    const createProductDiv = document.createElement("div");
    listOfPositions.map((item) => {
        for (const element of addedProducts) {
            if (item.id === element[0]) {
                for (const priceSize of item.price) {
                    if (element[1] === priceSize.size) {
                        createProductDiv.setAttribute("class", "cartItem");
                        createProductDiv.innerHTML = `
                        <span> ${item.name}, ${priceSize.size} </span>
                        <span> Cena za sztukę: ${priceSize.price} zł </span>
                        <span>${add1MoreProduct} <span class="itemQuantity"></span> ${remove1Product} ${deleteButton}</span>
                        `;
                        showProducts.push(createProductDiv);
                        totalPrice += parseInt(priceSize.price);
                        document.querySelector(".totalPrice").innerHTML =
                            totalPrice;
                    }
                }
            }
        }
    });

    showProducts.forEach((element) => parentElement.append(element));
    // document.querySelector(".totalPrice").innerHTML = parseInt(totalPrice);
}

function updateItems(addRemove) {
    const parentElement = document.querySelector(".totalPrice");
    listOfPositions.map((item) => {
        for (const element of addedProducts) {
            if (item.id === element[0]) {
                for (const priceSize of item.price) {
                    if (element[1] === priceSize.size) {
                        parseInt(addRemove);
                        if (
                            parseInt(element[2]) > 0 ||
                            parseInt(element[2]) === 0
                        ) {
                            // wadliwy warunek, jak zejdzie do zera to nie chce wrocic wyzej
                            if (addRemove === 1) {
                                totalPrice -=
                                    element[2] * parseInt(priceSize.price);
                                element[2] = parseInt(element[2] + 1);
                                totalPrice +=
                                    element[2] * parseInt(priceSize.price);
                                document.querySelector(
                                    ".itemQuantity"
                                ).innerHTML = element[2];
                            } else if (addRemove === -1) {
                                totalPrice -=
                                    element[2] * parseInt(priceSize.price);
                                element[2] = parseInt(element[2] - 1);
                                totalPrice +=
                                    element[2] * parseInt(priceSize.price);
                                document.querySelector(
                                    ".itemQuantity"
                                ).innerHTML = element[2];
                            } else if (addRemove === 0) {
                                totalPrice -=
                                    element[2] * parseInt(priceSize.price);
                                element[2] = parseInt(0);
                                document.querySelector(
                                    ".itemQuantity"
                                ).innerHTML = element[2];
                            }
                        }
                        parentElement.innerHTML = totalPrice;
                    }
                }
            }
        }
    });
}
