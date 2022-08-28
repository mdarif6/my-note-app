import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Aside from "../home-page/Aside";
import "./LayoutComponent.css";
import { useLocation } from "react-router-dom";

export default function LayoutComponent({ children }) {
  const location = useLocation();

  return (
    <div>
      <Header />
      <div className="note-aside-main">
        {location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/" ||
        location.key === "default" ? null : (
          <Aside />
        )}

        <div className="note-layoutcomponent">{children}</div>
      </div>

      <Footer />
    </div>
  );
}
