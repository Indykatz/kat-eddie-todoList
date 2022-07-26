import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TodoList from "./pages/todoList";
import Archive from "./pages/archive";
import { TheApp } from "./styles/app.styles";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/navbar";

function App() {
  return (
    <TheApp>
      <div>
        <BrowserRouter>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todoList" element={<TodoList />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </TheApp>
  );
}

export default App;
