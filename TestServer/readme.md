ES6에서 추가된 import/ export 방식을 사용하기 위해서는
pakage.json파일에 "type":"module" 속성을 추가해줘야한다.
CommonJS에서는 **dirname나 **filename으로 경로 조회가 가능하지만
ESM에서는 지원되지 않아 직접 만들어야한다.
import { dirname } from 'path';
import { fileURLToPath} from 'url';

const **dirname = dirname(fileURLToPath(import.meta.url));
const **filename = fileURLToPath(import.meta.url)

MVC패턴
분리하기
디자인 패턴 그대로 하나의 파일에서 작성하지 않고 특징 패턴 그대로 파일 및 폴더를 분리하여 작성한다.

View : 클라이언트, 사용자가 보여지는 유저 인터페이스
Models: 어플리케이션 정보, 데이터를 나타냄, 주로 DB와 CRUD를
위한 로직을 구현하고, Controller에게 전달.
Controller: 사용자의 요청을 받아 로직을 처리하는 부분. 주로
Service와 Model과 소통
Routes: 같은 주제 내의 엔드포인트를 여러가지로 나눈다.
app.js: express를 실행하기 위한 최상위 루트
