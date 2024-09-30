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
//           <Route
//             path="/"
//             element={
//               <FinancialRecordsProvider>
//                 <Dashboard />
//               </FinancialRecordsProvider>
//             }
//           />
//           <Route path="/auth" element={<Auth />} />
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

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <SignedOut>
            <Link to="/auth">Login/Signup</Link>
          </SignedOut>
          <SignedIn>
            <Link to="/">Dashboard</Link>
            <UserButton />
          </SignedIn>
        </div>

        <Routes>
          {/* Protect the Dashboard route */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              </RequireAuth>
            }
          />
          {/* Auth route for login/signup */}
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

// Component to protect routes
function RequireAuth({ children }) {
  const isAuthenticated = SignedIn; // Use Clerk's SignedIn component to check authentication state

  if (!isAuthenticated) {
    // Redirect to Auth page if not authenticated
    return <Navigate to="/auth" replace />;
  }

  return children;
}

export default App;
