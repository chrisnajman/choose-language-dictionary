import PropTypes from "prop-types"

function EditButton({ handleOnClick, titleTerm }) {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      title={`Edit ${titleTerm}`}
    >
      Edit
    </button>
  )
}

EditButton.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  titleTerm: PropTypes.string,
}

export default EditButton
