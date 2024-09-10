import Nav from "./Nav";
import Footer from "./Footer";

function App({ children }) {
  return (
    <div>
      <Nav></Nav>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
