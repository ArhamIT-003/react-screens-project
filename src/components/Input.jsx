import PropTypes from "prop-types";

const Input = ({ id, Label }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-semibold text-sm text-gray-800">
        {Label}
      </label>
      <input
        id={id}
        type="text"
        className="w-1/2 px-4 py-2 text-sm border-2 border-gray-400 outline-none rounded-md"
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  Label: PropTypes.string.isRequired,
};
