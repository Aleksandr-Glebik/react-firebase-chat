import Chat from "./components/Chat";
import Login from "./components/Login";
import { CHAT_ROUTE, LOGIN_ROUTE, NOT_FOUND } from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: <Login />
    },
    {
        path: NOT_FOUND,
        Element: <Login />
    },
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Element: <Chat />
    },
    {
        path: NOT_FOUND,
        Element: <Chat />
    }
]