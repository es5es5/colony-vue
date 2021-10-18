const ENV = process.env.NODE_ENV
// const ENV = 'production'
console.log(process.env.NODE_ENV)

// api
const API = {
  development: 'http://localhost:9991/api',
  testing: 'http://api.sample.kr/api',
  production: 'http://api.sample.kr/api'
}

export const NODE_ENV = ENV
export const ENV_API = API[ENV]
