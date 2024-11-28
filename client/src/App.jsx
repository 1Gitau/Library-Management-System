import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Head from "./components/head/head";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/HeroPage/HeroPage";
import "./App.css";
import { Toaster } from "sonner";
// import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/HomePage/Homepage";
import userDetailsStore from "./Store/userStoreDetails";
import AddStudent from "./components/AddStudent/AddStudent";
import AddBook from "./components/AddBook/AddBook";
import Dashboard from "./components/Dashboard/Dashboard";

const client = new QueryClient();
function App() {
  const user = userDetailsStore((state) => state.user);
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Toaster position="top-center" richColors duration={3000} />
        {user ? <Head /> : <Header />}
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Hero />} />
          {/* <Route path="/signup" element={<SignupPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </QueryClientProvider>
  );
}
export default App;
