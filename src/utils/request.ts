import axios from "axios";


const request = axios.create({
  baseURL: 'http://localhost:3100',
  timeout: 1000 * 60
})


export function upload({url, file, fieldName = 'file'}) {
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


export default request
