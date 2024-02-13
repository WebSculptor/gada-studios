import { App } from "layouts";
import { createBrowserRouter } from "react-router-dom";
import { AboutPage, ContactPage, DetailsPage, HomePage, WorkPage } from "pages";

export const ROOT = "/",
  WORK = "work",
  ABOUT = "about",
  CONTACT = "contact",
  ERROR = "/*";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <App />,
    children: [
      {
        path: ROOT,
        element: <HomePage />,
      },
      {
        path: ABOUT,
        element: <AboutPage />,
      },
      {
        path: WORK,
        element: <WorkPage />,
      },
      {
        path: CONTACT,
        element: <ContactPage />,
      },
      {
        path: `${WORK}/:slug`,
        element: <DetailsPage />,
      },
      {
        path: ERROR,
        element: <HomePage />,
      },
    ],
  },
  {
    path: ERROR,
    element: <HomePage />,
  },
]);
