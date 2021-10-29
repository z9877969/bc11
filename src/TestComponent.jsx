import PropTypes from "prop-types";

const TestComponent = ({ title }) => {
  return title && <h1>{title}</h1>;
};

TestComponent.propTypes = {
  title: PropTypes.string,
};

export default TestComponent;
