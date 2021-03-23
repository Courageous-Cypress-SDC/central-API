import http from 'k6/http';
import { check, sleep } from 'k6';

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// let productID_Low =  randomNum(1,100);
// let productID_Mid =  randomNum(499000,510000);
// let productID_High =  randomNum(999000,1000000);

export let options = {
  stages: [
    { duration: '10s', target: 1 },
    { duration: '10s', target: 10 },
    { duration: '10s', target: 100 },
    { duration: '10s', target: 1000 }
  ],
};

// export default function () {
//   // http.get(`http://localhost:8394/products/${randomNum(1,100)}`);
//   // http.get(`http://localhost:8394/products/${randomNum(499000,510000)}`);
//   // http.get(`http://localhost:8394/products/${randomNum(999000,1000000)}`);
//   sleep(1);
// }

export default function () {
  // http.get(`http://127.0.0.1:8394/styles/${randomNum(1,100)}`);
  http.get(`http://127.0.0.1:8394/styles/${randomNum(499900,500000)}`);
  // http.get(`http://127.0.0.1:8394/styles/${randomNum(999000,1000000)}`);
  sleep(1);
}