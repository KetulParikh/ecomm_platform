import PropTypes from "prop-types";

import Header from "./Header";
import { GlobalStyles, InnerStyles } from "./styles/GlobalStyles";

const Page = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
};

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};

export default Page;
