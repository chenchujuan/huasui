
import axios from 'axios'

const url = 'https://huasui668.com/huasui/index.php/Home/Topic/report'
export function post(data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
