import http from 'k6/http';
import { sleep } from 'k6';

//테스트 옵션 추가
export const options = {
    stages: [
        {
            duration: '2m',
            target: 10000
        },
        {
            duration: '1m',
            target: 0
        }
    ]
}

export default function (){
    http.get('https://test.k6.io'); //테스트 요청 사이트
    sleep(1);
}