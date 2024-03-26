import PropTypes from "prop-types"

function SortButton({ children, handleOnClick, items, title }) {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      disabled={items.length < 2}
      className={items.length < 2 ? "disabled" : ""}
      aria-disabled={items.length < 2 ? "true" : "false"}
      title={title}
    >
      {children}
    </button>
  )
}

SortButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
}

export default SortButton
