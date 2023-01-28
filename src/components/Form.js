import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              {...register("name")}
              type="text"
              placeholder="Sallary, Haouse"
              className="form-input"
            />
          </div>
          <select className="form-input" {...register("type")}>
            <option value="Invesment" defaultValue>
              Invesment
            </option>
            <option value="Expanse">Expanse</option>
            <option value="Saving">Saving</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              placeholder="Amount"
              className="form-input"
              {...register("amount")}
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
