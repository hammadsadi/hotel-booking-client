import PropTypes from "prop-types";
const MyContainer = ({ children }) => {
  return (
    <section className="mt-10 md:mt-16">
      <div className="container mx-auto px-2 md:px-0">{children}</div>
    </section>
  );
};

MyContainer.propTypes = {
  children: PropTypes.element,
};
export default MyContainer;
