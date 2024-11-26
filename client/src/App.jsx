import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import { Toaster } from "sonner";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/HomePage/Homepage";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Toaster position="top-center" richColors duration={3000} />
        <Header />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </QueryClientProvider>
  );
}
export default App;
