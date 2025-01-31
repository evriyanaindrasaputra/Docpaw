import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Navbar } from "./components";
import GlobalStyle, { LayoutWrapper, Layout } from "./globalStyles";
import {
  DetailLiveBooking,
  Home,
  LiveBooking,
  ChatDokter,
  DetailDokter,
  Connecting,
  ChooseDay,
  AntrianAnda,
  Pembayaran,
  Rating,
} from "./pages";

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
            <Route path="/chatdokter" exact component={ChatDokter} />
          </Switch>
          <Switch>
            <Route path="/pilihhari" exact component={ChooseDay} />
          </Switch>
          <Switch>
            <Route path="/antrian" exact component={AntrianAnda} />
          </Switch>
          <Switch>
            <Route path="/pembayaran" exact component={Pembayaran} />
          </Switch>
          <Switch>
            <Route path="/connecting/:id" exact component={Connecting} />
          </Switch>
          <Switch>
            <Route path="/rating/:id" exact component={Rating} />
          </Switch>
          <Switch>
            <Route
              path="/livebooking/:id"
              exact
              component={DetailLiveBooking}
            />
          </Switch>
          <Switch>
            <Route path="/detaildokter/:id" exact component={DetailDokter} />
          </Switch>
        </Layout>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
