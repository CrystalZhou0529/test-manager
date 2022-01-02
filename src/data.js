let db = [
  {
    id: "1",
    name: "Subscription cancel flow",
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
    name: "Subscription accept flow",
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
  {
    id: "20",
    name: "Purchase confirmation cancel flow",
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
      {
        id: 4,
        page: "Purchase Confirmation Page",
        element: "Cancel Button",
      },
    ],
  },
  {
    id: "10",
    name: "Home page select item flow",
    steps: [
      {
        id: 1,
        page: "Home",
        element: "Item Selector",
        operation: "Product 2",
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

let structure = {
  name: "Project",
  tests: ["10"],
  children: [
    { name: "Legal string", tests: ["1", "20"], children: [], collapse: true },
    { name: "Pricing", tests: ["2"], children: [], collapse: true },
  ],
  collapse: false,
};

// getDropdown() returns the dropdown object
export function getDropdown() {
  return dropdownInfo;
}

// searchDB(id) provides the search result starting with id
export function searchDB(id) {
  if (id === "" || id === "all") {
    return db;
  } else {
    return db.filter((test) => {
      return test.id.startsWith(id);
    });
  }
}

// accurateSearchDB(id)
export function accurateSearchDB(id) {
  let result = db.filter((test) => test.id === id);
  if (result && result.length === 1) {
    return result[0];
  } else {
    return null;
  }
}

// addDB(test, layer) add test case to certain test folder (layer)
export function addDB(test, layer) {
  if (searchDB(test.id).length > 0) {
    return false;
  }
  db.push(test);
  addTestToStructure(test.id, layer);
}

// getStructure() returns the updated structure value
export function getStructure() {
  return structure;
}

// toggleStructureCollapse(layers) toggle the test folder on the sidebar
export function toggleStructureCollapse(layers) {
  toggleStructureHelper(structure, layers);
}

function toggleStructureHelper(structure, layers) {
  if (!layers || layers.length === 0) {
    structure.collapse = !structure.collapse;
    return;
  }
  toggleStructureHelper(structure.children[layers[0]], layers.slice(1));
}

function addTestToStructure(testId, layers) {
  if (!layers || layers.length === 0) {
    structure.tests.push(testId);
    return;
  }
  addTestToStructure(structure.children[layers[0]], layers.slice(1));
}
