// CustomProvider.jsx
import { Provider as CustomProvider } from "react-redux";
import store from "./store";

export default function CustomProviderComponent({ children }) {
    return (
        <CustomProvider store={store}>
            {children}
        </CustomProvider>
    )
}
