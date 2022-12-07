import React from "react";
import {Provider} from "react-redux";
import Routers from "./pages/Routers";
import {store, persistor} from './store/index'
import {BrowserRouter} from "react-router-dom"
import {PersistGate} from "redux-persist/integration/react";
import {CircularProgress} from "@mui/material";
import {AuthProvider} from "./hook/useAuth";

export const MyThemeContext = React.createContext({theme: 'dark'});

const App = () => {
    return (

        <Provider store={store}>
            <AuthProvider>
                {/*<PersistGate persistor={persistor} loading={<CircularProgress />}>*/}
                <Routers/>
                {/*</PersistGate>*/}
            </AuthProvider>
        </Provider>

    )
}
export default App;