// import jwt from "jsonwebtoken";
// import Mock from "./mock";
// const JWT_SECRET = "jwt_secret_key";
// const JWT_VALIDITY = "7 days";
// const userList = [
//   {
//     id: 1,
//     role: "SA",
//     name: "Jason Alexander",
//     username: "jason_alexander",
//     email: "demo@example.com",
//     avatar: "/static/avatar/001-man.svg",
//     age: 25,
//     // password: 'v&)3?2]:'
//   },
// ];
// Mock.onPost("/api/auth/login").reply(async (config) => {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     const { email } = JSON.parse(config.data);
//     const user = userList.find((user) => user.email === email);
//     if (!user) {
//       return [400, { message: "Invalid email or password" }];
//     }
//     const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
//       expiresIn: JWT_VALIDITY,
//     });
//     return [
//       200,
//       {
//         accessToken,
//         user: {
//           id: user.id,
//           avatar: user.avatar,
//           email: user.email,
//           name: user.name,
//           role: user.role,
//         },
//       },
//     ];
//   } catch (error) {
//     console.error(error);
//     return [500, { message: "Internal server error" }];
//   }
// });
// Mock.onPost("/api/auth/register").reply(async (config) => {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     const { email, username } = JSON.parse(config.data);
//     const user = userList.find((user) => user.email === email);
//     if (user) {
//       return [400, { message: "User already exists!" }];
//     }
//     const newUser = {
//       id: 2,
//       role: "GUEST",
//       name: "",
//       username: username,
//       email: email,
//       avatar: "/static/avatar/001-man.svg",
//       age: 25,
//     };
//     userList.push(newUser);
//     const accessToken = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
//       expiresIn: JWT_VALIDITY,
//     });
//     return [
//       200,
//       {
//         accessToken,
//         user: {
//           id: newUser.id,
//           avatar: newUser.avatar,
//           email: newUser.email,
//           name: newUser.name,
//           username: newUser.username,
//           role: newUser.role,
//         },
//       },
//     ];
//   } catch (error) {
//     console.error(error);
//     return [500, { message: "Internal server error" }];
//   }
// });
// Mock.onGet("/api/auth/profile").reply((config) => {
//   try {
//     //@ts-ignore
//     const { Authorization } = config.headers;
//     if (!Authorization) {
//       return [401, { message: "Invalid Authorization token" }];
//     }
//     const accessToken = Authorization.split(" ")[1];
//     const { userId }: any = jwt.verify(accessToken, JWT_SECRET);
//     const user = userList.find((u) => u.id === userId);
//     if (!user) {
//       return [401, { message: "Invalid authorization token" }];
//     }
//     return [
//       200,
//       {
//         user: {
//           id: user.id,
//           avatar: user.avatar,
//           email: user.email,
//           name: user.name,
//           role: user.role,
//         },
//       },
//     ];
//   } catch (err) {
//     console.error(err);
//     return [500, { message: "Internal server error" }];
//   }
// });
// ==================================================
// import jwt from "jsonwebtoken";
import Mock from "./mock";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWdlIjoyNSwicm9sZSI6IkFETUlOIiwibmFtZSI6Ikphc29uIEFsZXhhbmRlciIsImVtYWlsIjoiamFzb25AdWktbGliLmNvbSIsInVzZXJuYW1lIjoiamFzb25fYWxleGFuZGVyIiwiYXZhdGFyIjoiL2Fzc2V0cy9pbWFnZXMvZmFjZS02LmpwZyJ9.BILDCjrPpk2ohysHiWScnVvEoxI6UpH1vBmS59KjiNo";
const userList = [{
  id: 1,
  age: 25,
  role: "ADMIN",
  name: "Jason Alexander",
  email: "jason@ui-lib.com",
  username: "jason_alexander",
  avatar: "/assets/images/face-6.jpg"
}]; // FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com

Mock.onPost("/api/auth/login").reply(async config => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const {
      email
    } = JSON.parse(config.data);
    const user = userList.find(u => u.email === email);

    if (!user) {
      return [400, {
        message: "Invalid email or password"
      }];
    }

    return [200, {
      accessToken: token,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email,
        avatar: user.avatar
      }
    }];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onPost("/api/auth/register").reply(config => {
  try {
    const {
      email,
      username
    } = JSON.parse(config.data);
    const user = userList.find(u => u.email === email);

    if (user) {
      return [400, {
        message: "User already exists!"
      }];
    }

    const newUser = {
      id: 2,
      age: 25,
      email: email,
      role: "GUEST",
      name: "Guest User",
      username: username,
      avatar: "/assets/images/face-6.jpg"
    };
    userList.push(newUser);
    return [200, {
      accessToken: token,
      user: {
        id: newUser.id,
        role: newUser.role,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
        username: newUser.username
      }
    }];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/auth/profile").reply(() => {
  try {
    return [200, {
      user: userList[0]
    }];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});