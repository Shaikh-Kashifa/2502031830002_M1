// import Hello from "./Hello"
// import Conditional from "./Conditional"
// import Properties from "./Properties"
// import Counter from "./Counter"
// import ToggleText from "./ToggleText"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Phone from "./Phone";
import Laptop from "./Laptop";

function App() {
  function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h2> User profile for id : {id}</h2>;
  }

  function NotFound() {
    return <h2> 404 - Page not found</h2>;
  }

  return (
    <>
      {/* <Hello/>
     <Conditional/>
     <Properties name="Kashifa" age={18} city="Ahmedabad" />
     <Counter/>
     <ToggleText/> */}

      <BrowserRouter>
        <h1>React Router Example</h1>

        <nav>
          <Link to="/">Home</Link>|<Link to="/about">About</Link>|
          <Link to="/contact">Contact</Link>|<Link to="/user/10">User</Link>|
          <Link to="/products">Products</Link>|
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/products" element={<Products />}>
            <Route path="phone" element={<Phone />} />
            <Route path="laptop" element={<Laptop />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
