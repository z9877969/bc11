import PropTypes from "prop-types";

const CategoriesList = ({ title }) => {
  console.log("CategoriesList");
  return <h1>{title}</h1>;
};

CategoriesList.propTypes = {
  title: PropTypes.string,
};

export default CategoriesList;
