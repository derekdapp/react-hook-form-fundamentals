import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy";
import Base from "./routes/Base";
import Solution0 from "./work/ex0/solution";
import Exercise1 from "./work/ex1/exercise";
import Solution1 from "./work/ex1/solution";
import Exercise2 from "./work/ex2/exercise";
import Solution2 from "./work/ex2/solution";
import Exercise3 from "./work/ex3/exercise";
import Solution3 from "./work/ex3/solution";
import Exercise4 from "./work/ex4/exercise";
import Solution4 from "./work/ex4/solution";
import Exercise5 from "./work/ex5/exercise";
import Solution5 from "./work/ex5/solution";
import Exercise6 from "./work/ex6/exercise";
import Solution6 from "./work/ex6/solution";
import Exercise7 from "./work/ex7/exercise";
import Solution7 from "./work/ex7/solution";

const pages = [
  {
    path: "/",
    title: "React Hook Form Intro",
    body: `
      Welcome to an interactive React Hook Form demo made especially for
      you!

      This repo is designed to help you to get started with some of the
      features of React Hook Form. It is organized for you to follow along
      and complete exercises.

      There's no need to worry about styling, that is already taken care
      of with Joy UI from MUI. However, RHF can be used with any component
      library! The main components are already created for you, but you
      will need to implement React Hook Form.

      The form below is created using plain React useState. Take a look at
      the render counter on the bottom of the screen to see how every
      keystroke causes a render.

      You may also submit the form, there's a hook to show the user's
      state. (but it's not actually saving anything)
  `,
    content: Solution0,
    docsLink: "https://react-hook-form.com/",
  },
  {
    path: "/exercise-1",
    title: "Ex 1 - useForm",
    body: "Convert the form to use React Hook Form. Everything you need is imported already. Edit src/work/ex1/exercise.",
    content: Exercise1,
    docsLink: "https://react-hook-form.com/api/useform",
  },
  {
    path: "/solution-1",
    title: "Ex 1 - useForm - Solution",
    body: "",
    content: Solution1,
  },
  {
    path: "/exercise-2",
    title: "Ex 2 - Devtools",
    body: "Import DevTool and add it to the return statement. Check out what happens as you interact with the form. Edit src/work/ex2/exercise.",
    content: Exercise2,
    docsLink: "https://react-hook-form.com/dev-tools",
  },
  {
    path: "/solution-2",
    title: "Ex 2 - Devtools - Solution",
    body: "",
    content: Solution2,
  },
  {
    path: "/exercise-3",
    title: "Ex 3 - RHF Validations",
    body: `Add validations to the register function. No need to render the
    error yet, use the DevTool to see the errors. All fields are
    required, email should be correct format, password must be at least
    8 characters. Username must be more than 2 characters, but less than
    20. Edit src/work/ex3/exercise.`,
    content: Exercise3,
    docsLink: "https://react-hook-form.com/docs/useform/register",
  },
  {
    path: "/solution-3",
    title: "Ex 3 - RHF Validations - Solution",
    body: "",
    content: Solution3,
  },
  {
    path: "/exercise-4",
    title: "Ex 4 - Yup Validations",
    body: "Rewrite the validations using Yup. Render the errors this time using the error prop. Edit src/work/ex4/exercise.",
    content: Exercise4,
    docsLink: "https://react-hook-form.com/get-started#SchemaValidation",
  },
  {
    path: "/solution-4",
    title: "Ex 4 - Yup Validations - Solution",
    body: "",
    content: Solution4,
  },
  {
    path: "/exercise-5",
    title: "Ex 5 - useFieldArray",
    body: "Add a new field to the form, a list of hobbies. Use the useFieldArray hook to add and remove hobbies. Edit src/work/ex5/exercise.",
    content: Exercise5,
    docsLink: "https://react-hook-form.com/api/usefieldarray",
  },
  {
    path: "/solution-5",
    title: "Ex 5 - useFieldArray - Solution",
    body: "",
    content: Solution5,
  },
  {
    path: "/exercise-6",
    title: "Ex 6 - watch()",
    body: "Use the watch function to watch the username value. Disable the email field when the username is empty. Edit src/work/ex6/exercise.",
    content: Exercise6,
    docsLink: "https://react-hook-form.com/api/useform/watch",
  },
  {
    path: "/solution-6",
    title: "Ex 6 - watch() - Solution",
    body: "",
    content: Solution6,
  },
  {
    path: "/exercise-7",
    title: "Ex 7 - formState and reset",
    body: "Use the formState to disable the submit button based on isSubmitting. Add a reset button to clear the form. Edit src/work/ex7/exercise.",
    content: Exercise7,
    docsLink: "https://react-hook-form.com/api/useform/formstate",
  },
  {
    path: "/solution-7",
    title: "Ex 7 - formState and reset - Solution",
    body: "",
    content: Solution7,
  },
];

const router = createBrowserRouter(
  pages.map((page, i) => ({
    path: page.path,
    element: (
      <Base
        title={page.title}
        body={page.body}
        backLink={i > 0 ? pages[i - 1].path : undefined}
        nextLink={i < pages.length - 1 ? pages[i + 1].path : undefined}
        Content={page.content}
        docsLink={page.docsLink}
      />
    ),
  }))
);

function App() {
  return (
    <CssVarsProvider>
      <RouterProvider router={router} />
    </CssVarsProvider>
  );
}

export default App;
