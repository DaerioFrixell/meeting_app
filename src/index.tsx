import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './core/App';
import store from './core/store';
import "./index.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

