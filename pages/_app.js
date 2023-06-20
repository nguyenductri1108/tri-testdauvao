import AppLayout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    );
}

export default MyApp;
