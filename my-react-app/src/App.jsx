import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  return(
    // to return two separate imported components, enclose them in empty alligators
    // <Header/> and <Footer/> both can work as well
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App
