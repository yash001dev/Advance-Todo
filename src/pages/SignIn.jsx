import { useForm } from "react-hook-form";
import FillButton from "../components/FillButton";
import InputText from "../components/InputText";
import { useGetUsersQuery } from "../service/apiSlice";

function SignIn() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
  });
  const onSubmit = (data) => {
    let foundUser = allUserDetails.filter(
      (user) => user.email === data.email && user.password === data.password
    );
    if (foundUser.length > 0) {
      localStorage.setItem("user", JSON.stringify(foundUser[0]));
      window.location.reload();
    }
  };
  const { data: allUserDetails } = useGetUsersQuery({
    refetchOnMountOrArgChange: true,
  });

  console.log("ALL USER DETAILS", allUserDetails);

  return (
    <>
      <p style={{ marginBottom: "0.3rem" }} className="text-21">
        To Continue
      </p>
      <p className="text-10 grey mb-4">We need your Name & Email</p>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {errors?.email && (
          <p className="text11 alert">
            <span className="bi bi-exclamation-circle mx-2"></span>
            {errors?.email?.message || "Invalid email address"}
          </p>
        )}
        {errors?.password && (
          <p className="text11 alert">
            <span className="bi bi-exclamation-circle mx-2"></span>
            {errors?.password?.message || "Invalid password"}
          </p>
        )}
        <FillButton type="submit" btnText="Login" />
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

export default SignIn;
