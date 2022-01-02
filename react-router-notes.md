# React Router Tutorial Notes

URL: https://reactrouter.com/docs/en/v6/getting-started/tutorial

Installation:

```sh
npm install react-router-dom
```

In `index.js`:

```javascript
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("root");
);
```

## Add link

In `App.js`:

```javascript
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Link to="/add">Add</Link>
      <Link to="/delete">Delete</Link>
    </div>
  );
}
```

This changes the URL without causing a full page reload.

## Router

In `index.js`:

```javascript
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
```

## Concepts

- **Location** - object representation of the URL
- **Location State** - Value of location including those are / aren't encoded in the URL. e.g. search params or hash

```javascript
// Location object format
// URL = pathname + search + hash
{
  pathname: "/bbq/pig-pickins",
  // search: a serialized version of URLSearchParams
  search: "?campaign=instagram&popular=true",
  hash: "#menu",
  // info not shown in URL
  state: null,
  key: "aefz24ie"
}

// Get search params
let params = new URLSearchParams(location.search);
params.get("campaign"); // "instagram"
params.get("popular");  // "true"
params.toString();      // "campaign=instagram&popular=true"

// Get state
let location = useLocation();
location.state;
```

- **History Stack**
- **History** - object allow React Router to manipulate browser history stack
- **History Action** - one of POP, PUSH, REPLACE
- **Segment**: parts of URL between `/` characters
- **Dynamic Segment** - A segment of a path pattern that is dynamic, meaning it can match any values in the segment. For example the pattern `/users/:userId` will match URLs like `/users/123`
- **URL Params** - The parsed values from the URL that matched a dynamic segment.
- **Parent Route** - A route with child routes.
- **Index Route** - A child route with no path that renders in the parent's outlet at the parent's URL.
- **Layout Route** - A parent route without a path, used exclusively for grouping child routes inside a specific layout.

```javascript
// Route matches
// Structure of match object:
{
  pathname: "/teams/firebirds",
  // params: parsed values from any dynamic segments matched
  params: {
    teamId: "firebirds"
  },
  route: {
    element: <Team />,
    path: ":teamId"
  }
}
```

## Navigation

### Link

```javascript
<Link to="next" />
```

### Navigate Function

```javascript
<li onclick={() => navigate("somewhere")}></li>
```

## Route Hooks

```javascript
let location = useLocation();
let urlParams = useParams();
let [urlSearchParams] = useSearchParams();
```

## Summary

1. Add `<BrowserRouter>` to `index.js`
2. Design Route config using `<Routes>` and `<Route>`
3. Render an `<Outlet />` in each parent route
4. Create link that calls `navigate()`
