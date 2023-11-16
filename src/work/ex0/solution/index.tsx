import { Button, Sheet } from "@mui/joy";
import FormInput from "../../../components/FormInput";
import React from "react";
import { UserType } from "../../../hooks/useUserAuth";
import RenderCounter from "../../../components/RenderCounter";

interface SolutionProps {
  login: (data: UserType) => void;
}

const Solution0 = ({ login }: SolutionProps) => {
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      username,
      email,
      password,
    });
  };

  return (
    <Sheet
      variant="outlined"
      sx={{
        padding: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormInput
          name="username"
          type="text"
          placeholder="username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <FormInput
          name="email"
          type="email"
          placeholder="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          name="password"
          type="password"
          placeholder="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="solid">
          Submit
        </Button>
      </form>
      <RenderCounter />
    </Sheet>
  );
};

export default Solution0;
