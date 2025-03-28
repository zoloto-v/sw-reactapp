import { Route, Routes } from "react-router";
import { HomePage } from "../pages/home";
import { CharactersPage } from "../pages/characters";
import { Page404 } from "../pages/page-404";
import { Provider } from "react-redux";
import { store } from "./model";
import { SkeletonTechPage } from "../pages/skeleton";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/skeleton-techpage" element={<SkeletonTechPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Provider>
  );
};

export default App;
