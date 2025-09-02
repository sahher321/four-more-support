import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Service,
  About,
  Psyhco,
  Blog,
  SingleBlog,
  Career,
  Contact,
  Support,
  AddBlog,
  Privacy,
  TermCondition,
} from "../screens";
import { Layout } from "../components";
import ScrollToTop from "../components/Scroll/ScrollToTop"; // Import here

const Routing = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* This will reset scroll on every route change */}
      <Routes>
        {appRoutes.map((route, i) => (
          <Route
            path={route?.path}
            element={<Layout>{route?.component}</Layout>}
            key={i}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

export const appRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/specialsupportcordination",
    component: <Service />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/psycho",
    component: <Psyhco />,
  },
  {
    path: "/blog",
    component: <Blog />,
  },
  {
    path: `/singleblog/:id`,
    component: <SingleBlog />,
  },
  {
    path: `/career`,
    component: <Career />,
  },
  {
    path: `/contact`,
    component: <Contact />,
  },
  {
    path: `/support`,
    component: <Support />,
  },
  {
    path: `/admin`,
    component: <AddBlog />,
  },
  {
    path: `/privacy`,
    component: <Privacy />,
  },
  {
    path: `/termcondition`,
    component: <TermCondition />,
  },
];
