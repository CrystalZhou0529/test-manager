let db = [
  {
    id: "1",
    steps: [
      {
        id: 1,
        page: "Home",
        element: "Item Selector",
        operation: "Product 1",
      },
      {
        id: 2,
        page: "Home",
        element: "Add to Cart Button",
        operation: "Clicked",
      },
      {
        id: 3,
        page: "Subscription Warning Page",
        element: "Cancel Button",
        operation: "Clicked",
      },
    ],
  },
  {
    id: "2",
    steps: [
      {
        id: 1,
        page: "Home",
        element: "Item Selector",
        operation: "Product 1",
      },
      {
        id: 2,
        page: "Home",
        element: "Add to Cart Button",
        operation: "Clicked",
      },
      {
        id: 3,
        page: "Subscription Warning Page",
        element: "Accept Button",
        operation: "Clicked",
      },
    ],
  },
];

let dropdownInfo = [
  {
    name: "",
    elements: [],
  },
  {
    name: "Home",
    elements: [
      {
        name: "Item Selector",
        type: "dropdown",
        values: ["Product 1", "Product 2"],
      },
      {
        name: "Add to Cart Button",
        type: "button",
        values: ["Clicked"],
      },
    ],
  },
  {
    name: "Subscription Warning Page",
    elements: [
      {
        name: "Accept Button",
        type: "button",
        values: ["Clicked"],
      },
      {
        name: "Cancel Button",
        type: "button",
        values: ["Clicked"],
      },
    ],
  },
  {
    name: "Purchase Confirmation Page",
    elements: [
      {
        name: "Confirm Purchase Button",
        type: "button",
        values: ["Clicked"],
      },
      {
        name: "Back Button",
        type: "button",
        values: ["Clicked"],
      },
    ],
  },
];

export function getDropdown() {
  return dropdownInfo;
}

export function searchDB(id) {
  if (id === "" || id === "all") {
    return db;
  } else {
    return db.filter((test) => {
      return test.id.startsWith(id);
    });
  }
}

export function addDB(test) {
  if (searchDB(test.id).length > 0) {
    return false;
  }
  db.push(test);
}
