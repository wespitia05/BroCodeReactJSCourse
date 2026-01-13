import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {
  return(
    // to return two separate imported components, enclose them in empty alligators
    // <Header/> and <Footer/> both can work as well
    <>
      <Header></Header>
      <Food></Food>
      <Footer></Footer>
    </>
  );
}

export default App
