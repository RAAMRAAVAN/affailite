import './App.css';
import {Provider} from "react-redux"
import store from './redux/store';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { BottomNavigationSection } from './components/BottomNavigationSection';
import { MyEarningsPage } from './components/myEarningsPage/MyEarningsPage';
function App() {
  return (
    <Provider store={store}>  
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<BottomNavigationSection/>}/>
            <Route path="/myearnings" element={<MyEarningsPage/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}
export default App;
