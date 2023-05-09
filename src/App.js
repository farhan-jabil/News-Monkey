import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const country = "us";
  const apiKey = process.env.REACT_APP_NEWS_API;

  // state = {
  //   progress: 0,
  // }

  let [progress, setProgress] = useState(0);

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route
              path='/'
              element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category={"general"} />} />
            <Route
              path='/business'
              element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category={"business"} />} />
            <Route
              path='/entertainment'
              element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category={"entertainment"} />} />
            <Route
              path='/general'
              element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category={"general"} />} />
            <Route
              path='/health'
              element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category={"health"} />} />
            <Route
              path='/science'
              element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category={"science"} />} />
            <Route
              path='/sports'
              element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category={"sports"} />} />
            <Route
              path='/technology'
              element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category={"technology"} />} />
          </Routes>

        </Router>

      </>
    )
}

export default App;


// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   pageSize = 5;
//   country = "us";
//   apiKey = process.env.REACT_APP_NEWS_API;

//   state = {
//     progress: 0,
//   }

//   setProgress = (progress) => {
//     this.setState({
//       progress: progress
//     })
//   }


//   render() {
//     return (
//       <>
//         <Router>
//           <Navbar />
//           <LoadingBar
//             color='#f11946'
//             progress={this.state.progress}
//           />
//           <Routes>
//             <Route
//               path='/'
//               element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={this.country} category={"general"} />} />
//             <Route
//               path='/business'
//               element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={this.country} category={"business"} />} />
//             <Route
//               path='/entertainment'
//               element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={this.country} category={"entertainment"} />} />
//             <Route
//               path='/general'
//               element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={this.country} category={"general"} />} />
//             <Route
//               path='/health'
//               element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={this.country} category={"health"} />} />
//             <Route
//               path='/science'
//               element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={this.country} category={"science"} />} />
//             <Route
//               path='/sports'
//               element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={this.country} category={"sports"} />} />
//             <Route
//               path='/technology'
//               element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.country} category={"technology"} />} />
//           </Routes>

//         </Router>

//       </>
//     )
//   }
// }





