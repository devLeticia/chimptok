import axios from 'axios'

export default {
  init() {
    axios.interceptors.request.use(
      (config: any) => {
        if (this.isAccessTokenRequired(config.url)) {
          const userToken = localStorage.getItem('access_token')
          config.headers.common.Authorization = `Bearer ${userToken}`
        }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      },
    )
  },
  isAccessTokenRequired(url: string): boolean {
    const pathname = new URL(url).pathname
    return (
      !pathname.endsWith('login') &&
      !pathname.endsWith('signup') &&
      !pathname.endsWith('forgot-password') &&
      !pathname.endsWith('reset-password') &&
      !pathname.includes('account-confirmation')
    )
  },
}
