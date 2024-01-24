import "./index.scss"
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './core/App';
import { BrowserRouter } from "react-router-dom";
import store from "./core/store";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

