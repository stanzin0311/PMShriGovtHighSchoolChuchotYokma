// src/component/PageTitle.jsx
import { useEffect } from "react";

const PageTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title
      ? `${title} | PM Shri Govt. High School Chuchot Yokma`
      : "PM Shri Govt. High School Chuchot, Yokma";
  }, [title]);

  return children;
};

export default PageTitle;
