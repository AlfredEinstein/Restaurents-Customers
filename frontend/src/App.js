import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthPage from "./component/Pages/AuthPage";
import { UserManagement } from "./component/Auth/UserManagement";

function App() {
  return (
    <UserManagement>
      <div className="App">
      <AuthPage />
    </div>
    </UserManagement>
    
  );
}

export default App;
