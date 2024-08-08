function FormInput({
  field,
  labelName,
  handleChange,
  value,
  isEditing,
  errors,
}) {
  return (
    <div className="mb-2 flex flex-col gap-1 text-sm sm:mb-4 sm:flex-row sm:items-center sm:gap-2 sm:text-base">
      <label className="sm:basis-40" htmlFor={field}>
        {labelName}
      </label>
      <div className="flex grow flex-col">
        <input
          type="text"
          name={field}
          onChange={(e) => handleChange(e, null)}
          value={value}
          disabled={isEditing}
          className="input grow"
        />
        {errors && (
          <p className="mt-0.5 rounded-sm bg-red-100 px-2 py-1 text-xs text-red-600 sm:text-sm">
            {errors}
          </p>
        )}
      </div>
    </div>
  );
}

export default FormInput;
