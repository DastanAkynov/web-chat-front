import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routing from '../pages/Routing';
import store from './store';
import './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
