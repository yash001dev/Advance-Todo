import _ from "lodash";
import { useForm } from "react-hook-form";
import FillButton from "../components/FillButton";
import InputText from "../components/InputText";
import { useAddNewUserMutation } from "../service/apiSlice";

function Signup() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    mode: "onSubmit",
    shouldFocusError: true,
  });

  const [addNewUser] = useAddNewUserMutation();

  const onSubmit = (data) => {
    addNewUser(data)
      .unwrap()
      .then((res) => {
        if (res) {
          reset();
          alert("User added successfully");
          window.location.assign("/");
        }
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          control={control}
          name="name"
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
            <span className="bi bi-exclamation-circle mx-2"></span>
            {errors?.password && "Invalid password"}
            {errors?.email && " Invalid email address"}
            {errors?.name && " Invalid Full name"}
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
