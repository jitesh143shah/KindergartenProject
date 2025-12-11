// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./Pages/Home";
// import AuthForm from "./Pages/Auth/AuthForm";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} >
//         <Route path="/signup" element={<AuthForm type="signup"/>}/>
//         <Route path="/signin" element={<AuthForm type="signin"/>}/>

//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;

// App.jsx
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import AuthForm from "./Pages/Auth/AuthForm";
import Loader from "./components/Loader/Loader";
import useRouteLoader from "./hooks/useRouteLoader";
import { Blog, Classes, PageNotFound } from "./Pages/imports";
import Footer from "./components/Footer/Footer";

function App() {
  // set waitForImages: true if you want loader to wait until images load on each page
  const loading = useRouteLoader({ delay: 900, waitForImages: false });

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/signup" element={<AuthForm type="signup" />} />
        <Route path="/signin" element={<AuthForm type="signin" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
