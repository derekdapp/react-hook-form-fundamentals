import { Button, Sheet } from "@mui/joy";
import FormInput from "../../../components/FormInput";
import { UserType } from "../../../hooks/useUserAuth";
import { useForm } from "react-hook-form";
import RenderCounter from "../../../components/RenderCounter";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  login: (data: UserType) => void;
}

const schema = yup
  .object({
    username: yup
      .string()
      .required("This field is required")
      .min(3, "Minimum length should be 3")
      .max(20, "Maximum length should be 20"),
    email: yup
      .string()
      .required("This field is required")
      .email("Entered value does not match email format"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Minimum length should be 8"),
  })
  .required();

const Exercise = ({ login }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserType>({
    resolver: yupResolver(schema),
  });

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
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <FormInput
            type="email"
            placeholder="email"
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <FormInput
            type="password"
            placeholder="password"
            label="Password"
            required
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
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
