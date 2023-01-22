import {ContextProvider} from './context';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';

function App() {
   return (
      <>
         <Header />
         <ContextProvider>
            <Main />
         </ContextProvider>
         <Footer />
      </>
   );
}

export default App;
