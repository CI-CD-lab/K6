import http from 'k6/http';
import { sleep } from 'k6';

//테스트 옵션 추가
export const options = {
    vus: 1, //가상 사용자
    duration: '30s' //테스트 시간
}

export default function (){
    http.get('https://test.k6.io'); //테스트 요청 사이트
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}