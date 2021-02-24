import { sleep, check } from "k6";
import http from "k6/http";

export let options = {
    stages: [
        { duration: "15s", vus:"20" ,target: 200 ,"rps": 10},
    ],
};

export default function () {
  let res = http.get('http://localhost:5000/api/v1/employees');
    check(res, {
      'Status is 200': r=>r.status == 200,
      'Status is 419': r=>r.status == 419
    });
  sleep(1);
}
