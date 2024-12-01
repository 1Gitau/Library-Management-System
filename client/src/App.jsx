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
// import AdminNav from "./components/AdminNav/AdminNav";
// import StudentNav from "./components/StudentNav/StudentNav";
import { Toaster } from "sonner";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import BooksPage from "./pages/BooksPage/BooksPage";
// import Homepage from "./pages/HomePage/Homepage";
import userDetailsStore from "./Store/userStoreDetails";
import AddStudent from "./components/AddStudent/AddStudent";
import AddBook from "./components/AddBook/AddBook";
import Dashboard from "./components/Dashboard/Dashboard";
import Books from "./components/Books/Books";

const client = new QueryClient();
function App() {
  const user = userDetailsStore((state) => state.user);
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Toaster position="top-center" richColors duration={3000} />
        <Header />
        {/* {user?.role === "admin" && <AdminNav />} */}
        {/* {user?.role === "student" && <StudentNav />} */}
        <Routes>
          {/* <Route path="/home" element={<Homepage />} /> */}
          {/* <Route path="/books" element={<BooksPage />} /> */}
          <Route path="/" element={<Hero />} />
          <Route path="/books" element={<Books />} />
          <Route path="/signup" element={<SignupPage />} />
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

// import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";

// function App() {
//   const user = userDetailsStore((state) => state.user);
//   return (
//     <QueryClientProvider client={client}>
//       <BrowserRouter>
//         <Toaster position="top-center" richColors duration={3000} />
//         {user ? <Head /> : <Header />}
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/login" element={<LoginPage />} />

//           {/* Public or common pages */}
//           <Route path="/books" element={<Books />} />

//           {/* Admin-only routes */}
//           <Route
//             path="/addbook"
//             element={<ProtectedRoute roleRequired="admin"><AddBook /></ProtectedRoute>}
//           />
//           <Route
//             path="/addstudent"
//             element={<ProtectedRoute roleRequired="admin"><AddStudent /></ProtectedRoute>}
//           />
//           <Route
//             path="/dashboard"
//             element={<ProtectedRoute roleRequired="admin"><Dashboard /></ProtectedRoute>}
//           />

//           {/* Student-only routes */}
//           <Route
//             path="/mybooks"
//             element={<ProtectedRoute roleRequired="student"><Books /></ProtectedRoute>}
//           />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </QueryClientProvider>
//   );
// }
