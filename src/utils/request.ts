import axios from "axios";
import {TypeOf} from "@/utils/lodash";


const request = axios.create({
  baseURL: 'http://localhost:3100',
  timeout: 1000 * 60
})


export function uploadSingle({url, file, fieldName = 'file'}) {
  const formData = new FormData()
  formData.set(fieldName, file)
  return request.post(url, formData, {
    onUploadProgress: function (progressEvent) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(percentCompleted);
    }
  })
}

// 多文件
export function uploadMultiple({url, files, fieldName = 'file'}) {
  const formData = new FormData()
  // console.log(TypeOf(files)) FileList
  // 将类数组对象或者可遍历对象转换为数组
  Array.from(files).forEach(file => {
    formData.append(fieldName, file)
  })
  return request.post(url, formData, {
    // 进度条
    onUploadProgress: function (progressEvent) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(percentCompleted);
    }
  })
}


export default request
