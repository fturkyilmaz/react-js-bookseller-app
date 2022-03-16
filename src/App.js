import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Books from "./pages/Books";
import BooksCreate from "./pages/BooksCreate";
import BooksEdit from "./pages/BooksEdit";
import Carts from "./pages/Carts";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm-1 ms-xl1">
            <Header />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 50 }}>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/new" element={<BooksCreate />} />
          <Route path="/books/edit/:id" element={<BooksEdit />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
      </div>
    </Router>
  );
}
