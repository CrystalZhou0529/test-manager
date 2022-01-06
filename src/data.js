import { editDist } from "./components/common";

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
        transition: 0,
      },
      {
        id: 2,
        page: "Home",
        element: "Add to Cart Button",
        operation: "Clicked",
        transition: 2,
      },
      {
        id: 3,
        page: "Subscription Warning Page",
        element: "Cancel Button",
        operation: "Clicked",
        transition: 0,
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
        operation: "PS Now",
        transition: 0,
      },
      {
        id: 2,
        page: "Home",
        element: "Add to Cart Button",
        operation: "Clicked",
        transition: 2,
      },
      {
        id: 3,
        page: "Subscription Warning Page",
        element: "Accept Button",
        operation: "Clicked",
        transition: 1,
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
        operation: "PS Plus",
        transition: 0,
      },
      {
        id: 2,
        page: "Home",
        element: "Add to Cart Button",
        operation: "Clicked",
        transition: 2,
      },
      {
        id: 3,
        page: "Subscription Warning Page",
        element: "Accept Button",
        operation: "Clicked",
        transition: 0,
      },
      {
        id: 4,
        page: "Purchase Confirmation Page",
        element: "Cancel Button",
        operation: "Clicked",
        transition: 0,
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
        transition: 0,
      },
      {
        id: 2,
        page: "Home",
        element: "Add to Cart Button",
        operation: "Clicked",
        transition: 1,
      },
      {
        id: 3,
        page: "Purchase Confirmation Page",
        element: "Back Button",
        transition: 0,
      },
      {
        id: 4,
        page: "Home",
        element: "Item Selector",
        operation: "PS Plus",
        transition: 0,
      },
      {
        id: 5,
        page: "Home",
        element: "Add to Cart Button",
        operation: "Clicked",
        transition: 2,
      },
      {
        id: 6,
        page: "Subscription Warning Page",
        element: "Accept Button",
        operation: "Clicked",
        transition: 1,
      },
      {
        id: 7,
        page: "Purchase Confirmation Page",
        element: "Accept Button",
        operation: "Clicked",
        transition: 2,
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
        values: ["Product 1", "Product 2", "PS Plus", "PS Now", "EA Play"],
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
  {
    name: "Thank You Page",
    elements: [
      { name: "Continue Button", type: "button", values: ["Clicked"] },
    ],
  },
];

let transitionDB = [
  {
    id: 1,
    page: "Home",
    element: "Item Selector",
    operations: ["Product 1", "Product 2", "PS Plus", "PS Now", "EA Play"],
    transitions: ["Item selected"],
  },
  {
    id: 2,
    page: "Home",
    element: "Add to Cart Button",
    operations: ["Clicked"],
    transitions: [
      "Single purchase confirmation page shown",
      "Multiple purchase confirmation page shown",
      "Subscription warning page shown",
    ],
  },
  {
    id: 3,
    page: "Subscription Warning Page",
    element: "Accept Button",
    operations: ["Clicked"],
    transitions: [
      "Single purchase confirmation page shown",
      "Multiple purchase confirmation page shown",
    ],
  },
  {
    id: 4,
    page: "Subscription Warning Page",
    element: "Cancel Button",
    operations: ["Clicked"],
    transitions: ["Home page shown"],
  },
  {
    id: 5,
    page: "Purchase Confirmation Page",
    element: "Accept Button",
    operations: ["Clicked"],
    transitions: [
      "Single thank you page shown",
      "Multiple thank you page shown",
    ],
  },
  {
    id: 5,
    page: "Purchase Confirmation Page",
    element: "Back Button",
    operations: ["Clicked"],
    transitions: ["Home page shown; item added to cart"],
  },
  {
    id: 6,
    page: "Thank You Page",
    element: "Continue Button",
    operations: ["Clicked"],
    transitions: ["Home page shown; item purchased"],
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

export function searchTrans(step) {
  const { page, element, operation } = step;
  const results = transitionDB.filter((val) => {
    return (
      val.page === page &&
      val.element === element &&
      val.operations.includes(operation)
    );
  });
  if (results.length !== 1) {
    return null;
  }
  return results[0];
}

export function similarityTableRanked(layer) {
  let tests = getTestsFromLayer(layer);
  tests = tests.map((id) => {
    return accurateSearchDB(id);
  });
  let len = tests.length;
  let record = [];
  for (let i = 0; i < len; ++i) {
    for (let j = i + 1; j < len; ++j) {
      record.push({
        test1: tests[i].id,
        test2: tests[j].id,
        result: similarity(tests[i].steps, tests[j].steps),
      });
    }
  }
  record.sort(function (a, b) {
    return b.result - a.result;
  });
  return record;
}

function similarity(a, b) {
  const meanLen = (a.length + b.length) / 2;
  const maxLen = Math.max(a.length, b.length);
  let value = (maxLen - editDist(a, b)) / meanLen;
  value = Math.floor(value * 1000 + 0.5) / 10;
  return value;
}

export function getTestsFromLayer(layer) {
  return collectTest(structure, layer);
}

function toggleStructureHelper(structure, layers) {
  if (!layers || layers.length === 0) {
    structure.collapse = !structure.collapse;
    return;
  }
  toggleStructureHelper(structure.children[layers[0]], layers.slice(1));
}

function addTestToStructure(structure, testId, layers) {
  if (!layers || layers.length === 0) {
    structure.tests.push(testId);
    return;
  }
  addTestToStructure(structure.children[layers[0]], testId, layers.slice(1));
}

function collectTest(structure, layers) {
  if (!layers || layers.length === 0) {
    return getAllTests(structure);
  } else {
    const newLayer = layers.slice(1);
    return collectTest(structure.children[layers[0]], newLayer);
  }
}

function getAllTests(structure) {
  let res = [...structure.tests];
  if (!structure.children) {
    return res;
  }
  for (let i = 0; i < structure.children.length; ++i) {
    res.push(...getAllTests(structure.children[i]));
  }
  return res;
}
