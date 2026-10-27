import { store } from "@/config/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import BackendWakeUpBanner from "@/Components/BackendWakeUpBanner";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <BackendWakeUpBanner />
      <Component {...pageProps} />
    </Provider>
  );
}
