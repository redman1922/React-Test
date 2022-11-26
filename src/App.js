import React from "react";
import { Provider } from "react-redux";
import Routers from "./pages/Routers";
import { store } from './store/index'

export const MyThemeContext = React.createContext({ theme: 'dark' });

const App = () => {
    return (
        <Provider store={store}>
            <Routers />
        </Provider>
    )
}
export default App;
