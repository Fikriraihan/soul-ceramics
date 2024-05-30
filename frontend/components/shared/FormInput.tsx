import React from "react";

const FormInput = ({ title, id }: { title: string; id: string }) => {
  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{title}</span>
        </div>
        <input type="text" placeholder="Type here" className="input bg-white input-bordered w-full max-w-xs" id={id} />
      </label>
    </>
  );
};

export default FormInput;
