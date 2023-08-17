import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RemoteApp from "remoteApp/App";
import Home from "./pages";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/apps/*", element: <RemoteApp /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
