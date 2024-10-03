// src/App.js
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const App = () => {
    return (
        <Router>
            <div className="App">
            <Navbar />
            <div className="content">
                <Routes>
                <Switch>
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="*" element={<NotFound />} />
                    </Switch>
                </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;


// 
// import Home from './Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Create from './Create';
// import BlogDetails from './BlogDetails';
// import NotFound from './NotFound';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Navbar />
//     <div className="content">
//       <Switch>
//         <Route exact path="/">
//             <Home />
//         </Route>
//         <Route path="/create">
//             <Create />
//         </Route>
//         <Route path="/blogs/:id">
//             <BlogDetails />
//         </Route>
//         <Route path="/blogs/:id">
//             <BlogDetails />
//         </Route>
//         <Route path="*">
//             <NotFound />
//         </Route>
//       </Switch>
//     </div>
//     </div>
//     </Router>
//   );
// }

// export default App;
