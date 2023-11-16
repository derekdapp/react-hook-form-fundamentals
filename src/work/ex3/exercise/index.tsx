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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            placeholder="username"
            label="Username"
            required
            {...register("username")}
          />
          <FormInput
            type="email"
            placeholder="email"
            label="Email"
            required
            {...register("email")}
          />
          <FormInput
            type="password"
            placeholder="password"
            label="Password"
            required
            {...register("password")}
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
