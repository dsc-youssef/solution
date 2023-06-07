// Dependencies
import { FC, lazy, Suspense } from "react";

// Redux
import { store } from "@/redux/store";
import { Provider as ReduxProvider } from 'react-redux';

// Auth
import AuthProvider from "@/auth/AuthProvider";

// Theme
import ThemeProvider from "@/components/ThemeProvider";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Assets
import "@/assets/librarys/fontawesome/css/all.min.css";
import "@/assets/styles/bootstrap.scss";
import "@/assets/styles/style.scss";

// Layout
const Layout = lazy(() => import("@/layout"));

const App: FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <ReduxProvider store={store}>
            <Suspense fallback="loading" >
              <Layout />
            </Suspense>
          </ReduxProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App;
