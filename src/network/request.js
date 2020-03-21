import axios from "axios";

export function request(url, data = {}, type = "GET") {
  //1.创建instance实例
  const instance = axios.create({
    baseURL: "http://127.0.0.1:3000",
    timeout: 5000
  });

  // //2.axios的拦截器
  // //2.1请求拦截的作用
  // instance.interceptors.request.use((config)=>{
  //     return config
  // },err=>{

  // })

  // instance.interceptors.response.use(res=>{
  //     return res.data
  // },error=>{
  //     return error
  // })

  //3.发送请求
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "GET") {
      let dataStr = "";
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      //发送get请求
      promise = instance.get(url);
    } else {
      promise = instance.post(url, data);
    }
    promise
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
