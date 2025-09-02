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
  TermCondition
} from "../screens";

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
    path: `/singleblog`,
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
    path: `/addblog`,
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
