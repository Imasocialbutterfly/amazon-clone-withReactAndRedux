import ReactDom from 'react-dom'
import App from './App'
import "./index.css"
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


