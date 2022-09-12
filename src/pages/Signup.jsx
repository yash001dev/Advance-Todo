import _ from "lodash";
import { useForm } from "react-hook-form";
import FillButton from "../components/FillButton";
import InputText from "../components/InputText";
import { addUserDetails } from "../reducers/userDetailsSlice";

function Signup() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      fname: "",
      password: "",
    },
    mode: "onSubmit",
    shouldFocusError: true,
  });
  const onSubmit = (data) => {
    localStorage.setItem(
      "NewUserDetails",
      JSON.stringify({ ...data, timeStamp: Date.now() })
    );
    addUserDetails(data);
    alert("User Added Successfully");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          control={control}
          name="fname"
          type="text"
          placeholder="Full Name"
          rules={{
            required: true,
          }}
        />
        <InputText
          control={control}
          name="email"
          type="text"
          placeholder="Email"
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          }}
        />
        <InputText
          control={control}
          name="password"
          type="password"
          placeholder="Password"
          rules={{
            required: true,
          }}
        />
        {_.size(errors) >= 1 && (
          <p className="text11 alert">
            {console.log("EXECURE ICON")}
            <span className="bi bi-exclamation-circle mx-2"></span>
            {errors?.password && "Invalid password"}
            {errors?.email && " Invalid email address"}
            {errors?.fname && " Invalid Full name"}
          </p>
        )}
        <FillButton type="submit" btnText="Sign up" />
        <div className="form-check mt-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            className="form-check-label text-10 grey"
            htmlFor="exampleCheck1"
          >
            Remember me
          </label>
        </div>
      </form>
    </>
  );
}

export default Signup;
