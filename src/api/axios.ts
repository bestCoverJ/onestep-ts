/* 
  网络请求配置 
*/
import axios from 'axios'
import { useMessage } from 'naive-ui'

axios.defaults.timeout = 30000

/* 
  请求拦截器
*/
axios.interceptors.request.use(
  (config) => {
    // config.data = JSON.stringify(config.data)

    config.headers['Content-Type'] = 'application/json'
    const token =
      sessionStorage.getItem('token') || localStorage.getItem('token') || ''
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

/* 
  响应拦截器
*/
axios.interceptors.response.use(
  (response) => {
    if (response.data.code === '401') {
      sessionStorage.removeItem('token')
      localStorage.removeItem('token')
    }
    return response
  },
  (err) => {
    const NMessage = useMessage()
    if (err && err.response) {
      switch (err.response.status) {
        case 400: {
          NMessage.error('错误请求')
          break
        }
        case 401: {
          // 401 权限认证失败
          sessionStorage.removeItem('token')
          localStorage.removeItem('token')
          break
        }
        case 403: {
          NMessage.error('拒绝访问')
          break
        }
        case 404: {
          NMessage.error('请求错误，未找到资源')
          break
        }
        case 408: {
          NMessage.error('请求超时')
          break
        }
        case 500: {
          NMessage.error('服务器错误')
          break
        }
        case 502: {
          NMessage.error('网络错误')
          break
        }
        case 503: {
          NMessage.error('服务不可用')
          break
        }
        case 504: {
          NMessage.error('网络超时')
          break
        }
        default: {
          NMessage.error(`请求错误${err.response.status}`)
        }
      }
    }
    return Promise.reject(err)
  },
)

/** 
  封装get方法
  @param url 请求url
  @param params 请求参数
  @returns { Promise }
*/
export function get(url: string, params = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url: string, data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        //关闭进度条
        resolve(response.data)
      },
      (err) => {
        reject(err)
      },
    )
  })
}

interface sug {
  q: string
  p: boolean
  s: Array<string>
}
export function jsonp(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script')
      script.src = `${url}&cb=window.baidu`
      document.body.appendChild(script)
      window.baidu = (data: sug) => {
        resolve(data)
        document.body.removeChild(script)
        delete window.baidu
      }
    } catch (err) {
      reject(err)
    }
  })
}
