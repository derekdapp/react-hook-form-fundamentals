import { Button, Sheet, Typography } from "@mui/joy";
import FormInput from "../../../components/FormInput";
import { UserType } from "../../../hooks/useUserAuth";
import { useForm } from "react-hook-form";
import RenderCounter from "../../../components/RenderCounter";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray } from "react-hook-form";

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
    hobbies: yup.array().of(
      yup.object().shape({
        name: yup.string().required("This field is required"),
      })
    ),
  })
  .required();

const Exercise = ({ login }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm<UserType>({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });

  const watchUsername = watch("username");

  const onSubmit = (data: UserType) => {
    login(data);
    reset();
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
            disabled={!watchUsername}
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
          <Sheet sx={{ mb: 2 }}>
            <Typography level="h3">Hobbies</Typography>
            {fields.map((field, index) => (
              <Sheet
                key={field.id}
                sx={{
                  mb: 1,
                }}
              >
                <FormInput
                  type="text"
                  placeholder="hobby name"
                  label={`Hobby ${index + 1}`}
                  {...register(`hobbies.${index}.name` as const)}
                  defaultValue={field.name}
                  error={!!errors?.hobbies?.[index]?.name}
                  helperText={errors?.hobbies?.[index]?.name?.message}
                />
                <Button
                  type="button"
                  variant="solid"
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              </Sheet>
            ))}
            <Button
              type="button"
              variant="solid"
              onClick={() => append({ name: "" })}
            >
              Add Hobby
            </Button>
          </Sheet>
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
