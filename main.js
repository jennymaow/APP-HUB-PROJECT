import "./style.css";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as HomeTemplate } from "./pages/Home/Home";
import { printTemplate as HeaderTemplate } from "./components/Header/Header";

export const initContent = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? HomeTemplate() : LoginTemplate();
      break;

    case "Login":
      LoginTemplate();
      break;
    case "Home":
      HomeTemplate();
      break;
  }
};

initContent();
