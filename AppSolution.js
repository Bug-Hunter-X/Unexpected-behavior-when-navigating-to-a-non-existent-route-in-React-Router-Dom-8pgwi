//AppSolution.js
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 

//Home.js
function Home(){
    return(
        <h1>Home</h1>
    );
}

//About.js
function About(){
    return(
        <h1>About</h1>
    );
}

//NotFound.js
function NotFound(){
    let location = useLocation();
    return(
        <div>
            <h1>404</h1>
            <p>No match for <code>{location.pathname}</code></p>
        </div>
    );
}