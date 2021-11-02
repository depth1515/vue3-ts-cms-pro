import { request } from '@/service/index'

// axios 的 实例
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

// promise本身是可以有类型

// new Promise<string>((resolve, reject) => {
// resolve(123213)  // type err
//   resolve('123213')
// }).then((res) => {
//   console.log(res)
// })

// 1. 人为手动修改

// 2. 根据 process.env.NODE_ENV
// process.env.NODE_ENV = 'development'
// process.env.NODE_ENV = 'production'
// process.env.NODE_ENV = 'test'

// let a = ''
//
// if() {
//   a = ''
// }else if () {
//   a = ''
// }else {
//   a = ''
// }

// export {
//   a
// }

// 3. 根据不同配置文件

// VClI 支持

// .env.development
// .env.production
// .env

// console.log(process.env.VUE_APP_BASE_URL)
//
// console.log(process.env['VUE_APP_BASE_URL'])

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

request
  .request<DataType>({
    url: '/home/multidata',
    method: 'get'
  })
  .then((res) => {
    console.log(res)
  })
