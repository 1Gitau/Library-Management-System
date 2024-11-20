
// import './App.css'

// function App() {


//   return (
//     <>
//       hello here is the library system
//     </>
//   )
// }

// export default App





import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Head from "./Components/head/head";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";


// import Footer from "./Components/Footer/Footer"


const client = new QueryClient();
function App() {
  // const user = userStoreDetails((state) => state.user);

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        {
          user ? <Head /> : <Header />
        }
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
