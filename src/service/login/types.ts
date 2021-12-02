interface LoginAccount {
  name: string
  password: string
}

interface LoginData {
  token: string
  id: number
  name: string
}

interface LoginResult<T = any> {
  code: number
  data: T
}
//
// interface IResult {
//   code: number
//   data: UserInfo
// }
//
// interface UserInfo {
//   id: number
//   name: string
//   realname: string
//   cellphone: number
//   enable: number
//   createAt: Date
//   updateAt: Date
//   role: Role
//   department: Department
// }
//
// interface Role {
//   id: number
//   name: string
//   intro: string
//   createAt: Date
//   updateAt: Date
// }
//
// interface Department {
//   id: number;
//   name: string;
//   createAt: string;
//   updateAt: string;
//   leader: string;
// }

export { LoginAccount, LoginResult, LoginData }
