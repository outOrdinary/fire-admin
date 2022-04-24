const global = {
  BASE_URL: 'http://localhost:8080/api_1' // 本地
  // BASE_URL: window.location.href.match(/(http:\/\/|https:\/\/)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62}|(:[0-9]{1,6}))+\.?/)[0] + '/api_1' // 根据主机ip访问服务器
}

export default global
