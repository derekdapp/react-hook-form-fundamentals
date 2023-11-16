interface RegisterParams {
  username: string;
  email: string;
  password: string;
}

class Server {
  static register(params: RegisterParams) {
    if (params.username === "taken" || params.email === "taken@example.com") {
      return {
        status: 400,
        data: {
          error: "Username or email already taken",
        },
      };
    }
    return {
      status: 200,
      data: {
        username: params.username,
        email: params.email,
        password: params.password,
      },
    };
  }
}

export default Server;
