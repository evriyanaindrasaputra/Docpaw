import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Navbar } from "./components";
import GlobalStyle, { LayoutWrapper, Layout } from "./globalStyles";
import { DetailLiveBooking, Home, LiveBooking } from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <Navbar /> */}
      <LayoutWrapper>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Switch>
            <Route path="/livebooking" exact component={LiveBooking} />
          </Switch>
          <Switch>
            <Route
              path="/livebooking/:id"
              exact
              component={DetailLiveBooking}
            />
          </Switch>
        </Layout>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
