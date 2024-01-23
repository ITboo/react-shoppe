import "./App.css";
import Banner from "./components/Banner/Banner";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />

        <CardList/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
