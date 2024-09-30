// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Dashboard } from "./pages/dashboard";
// import { Auth } from "./pages/auth";
// import { FinancialRecordsProvider } from "./contexts/financial-record-context";
// import { SignedIn, UserButton } from "@clerk/clerk-react";
// // import { dark } from "@clerk/themes";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <div className="navbar">
//           <Link to="/"> Dashboard</Link>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </div>
//         <Routes>
//         <Route path="/" element={<Auth />} />
//           <Route
//             path="/dashboard"
//             element={
//               <FinancialRecordsProvider>
//                 <Dashboard />
//               </FinancialRecordsProvider>
//             }

//           />
          
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
// import { dark } from "@clerk/themes";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <SignedIn>
            <Link to="/dashboard">Dashboard</Link>
            <UserButton />
          </SignedIn>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <SignedOut>
                <Auth />
              </SignedOut>
            }
          />
          <Route
            path="/dashboard"
            element={
              <SignedIn>
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              </SignedIn>
            }
          />
          {/* Redirect unauthenticated users to the Auth page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
