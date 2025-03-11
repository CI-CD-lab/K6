import http from 'k6/http';
import { sleep } from 'k6';

//테스트 옵션 추가
export const options = {
    stages: [
        {
            duration: '10s',
            target: 10
        },
        {
            duration: '30s',
            target: 10
        },
        {
            duration: '10s',
            target: 0
        }
    ]
}

export default function (){
    http.get('https://test.k6.io'); //테스트 요청 사이트
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}