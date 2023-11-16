import { Button, Sheet } from "@mui/joy";
import FormInput from "../../../components/FormInput";
import { UserType } from "../../../hooks/useUserAuth";
import { useForm } from "react-hook-form";
import RenderCounter from "../../../components/RenderCounter";
import { DevTool } from "@hookform/devtools";

interface Props {
  login: (data: UserType) => void;
}

const Exercise = ({ login }: Props) => {
  const { register, handleSubmit, control } = useForm<UserType>();

  const onSubmit = (data: UserType) => {
    login(data);
  };

  return (
    <>
      <Sheet
        variant="outlined"
        sx={{
          padding: 2,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormInput
            type="text"
            placeholder="username"
            label="Username"
            {...register("username", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Minimum length should be 3",
              },
              maxLength: {
                value: 20,
                message: "Maximum length should be 20",
              },
            })}
          />
          <FormInput
            type="email"
            placeholder="email"
            label="Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <FormInput
            type="password"
            placeholder="password"
            label="Password"
            required
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Minimum length should be 8",
              },
            })}
          />
          <Button type="submit" variant="solid">
            Submit
          </Button>
        </form>
        <RenderCounter />
      </Sheet>
      <DevTool control={control} />
    </>
  );
};

export default Exercise;
