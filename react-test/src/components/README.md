components 정의
참고 : https://medium.com/@FourwingsY/react-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%98-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0-bb183c0a426e

- components -> containers -> pages 의 첫번째 구성단계
- components는 하나의 container를 생성하기 위한 구성품이다.

components 제작시 주의사항

1. 구성방향의 단일화 : components는 containers, pages의 파일을 참고하지 않는다.
2. 독립성 유지 : 재사용될 일이 많기 때문에 최대한 container와 독립적으로 행동할 수 있도록 actions/store와 관련없는 로직으로 구성되어야 한다.
(해당 레벨에 존재하는 대부분의 로직의 propTypes에는 onChange/onClick 함수가 포함됨)