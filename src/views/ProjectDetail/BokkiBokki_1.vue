<template>
    <h1>보끼보끼마을: 떡볶이 판매 사이트 개발</h1>
    <div>
        <v-row>
            <v-col cols="3" align-self="center">
                <p class="text-center">프로젝트명</p>
            </v-col>
            <v-col cols="9">
                <label>보끼보끼마을: 떡볶이 판매 사이트 개발</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <p class="text-center">수행기간</p>
            </v-col>
            <v-col cols="3">
                <label>2019.09-2019.12</label>
            </v-col>
            <v-col cols="3">
                <p class="text-center">발주처</p>
            </v-col>
            <v-col cols="3">
                <label>학교 과제 프로젝트</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" align-self="center">
                <p class="text-center">주요업무</p>
            </v-col>
            <v-col cols="3">
                <label>떡볶이 판매 웹사이트 개발 및 관리 총괄, 팀 리더 역할 수행, 프로젝트 결과 발표</label>
            </v-col>
            <v-col cols="3">
                <p class="text-center">사용도구, 언어 및 기술</p>
            </v-col>
            <v-col cols="3">
                <label>메모장, MySQL, PHP</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" align-self="center">
                <p class="text-center">업무성과</p>
            </v-col>
            <v-col cols="9">
                <label>
                    - PHP로 웹 개발에 입문<br />
                    - 웹 개발에 대한 열정을 발견하고 진로 방향을 웹 개발자로 확립함<br />
                    - ‘웹 프로그래밍’ 과목에서 A+ 성적을 취득함<br />
                </label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" align-self="center">
                <p class="text-center">업무상세</p>
            </v-col>
            <v-col cols="9">
                <label>
                    PHP와 MySQL을 활용하여 떡볶이 판매 사이트를 개발했습니다. 또한 개발 결과에 대해 발표했습니다. 팀의
                    리더로서 주도적으로 기능을 개발하였으며 팀원들의 능력에 따라 분업을 진행하여 기간 내에 개발 및
                    발표준비를 마치고 성공적인 결과를 발표했습니다. 분업을 한 덕분에 버튼이나 색감, 헤더(header)와
                    푸터(footer)가 다른 팀에 비해 차별화된 디자인의 결과물이 나왔습니다. 개발하는 동안 여러 책과 문서를
                    살펴보며 어떻게 코드를 작성해야 원하는 화면과 기능이 구현될 것인가에 대한 고민을 하였습니다. 그리고
                    이러한 탐구에 재미를 느끼고 실무에 관심을 가졌으며 진로 방향을 웹 개발자로 확립하게 되었습니다.
                </label>
            </v-col>
        </v-row>
        <v-row>
            <v-col> 아래 사진은 발표자료의 일부입니다. </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <img src="../../assets/projectDetail/Bokki_1.png" class="responsive-img" />
            </v-col>
            <v-col cols="6">
                <img src="../../assets/projectDetail/Bokki_2.png" class="responsive-img" />
            </v-col>
            <v-col cols="6">
                <img src="../../assets/projectDetail/Bokki_3.png" class="responsive-img" />
            </v-col>
            <v-col cols="6">
                <img src="../../assets/projectDetail/Bokki_4.png" class="responsive-img" />
            </v-col>
        </v-row>
    </div>

    <v-btn variant="tonal" @click="goBack">되돌아가기</v-btn>
</template>
<script setup>
const goBack = () => {
    window.history.back(); // 이전 페이지로 이동하는 브라우저의 내장 메서드
};
</script>
<style scoped>
.responsive-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


body {
    background-color: #ffffff; /* 밝은 배경 */
    color: #333; /* 짙은 회색 텍스트 */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 가독성 좋은 폰트 */
}

h1 {
    text-align: center; /* 중앙 정렬 */
    margin-bottom: 20px; /* 여백 */
}

p, label {
    color: #555; /* 중간 회색 */
    font-size: 16px; /* 적절한 텍스트 크기 */
}

.v-col {
    padding: 10px; /* 컬럼 내부 패딩 */
}

.v-btn {
    font-size: 18px; /* 버튼 글자 크기 */
    padding: 10px 20px; /* 버튼 패딩 */
}

.v-btn:hover {
    background-color: #1E88E5; /* 버튼 호버 색상 */
    cursor: pointer; /* 포인터 커서 */
}

.responsive-img {
    width: 100%;
    height: auto; /* 이미지 자연스러운 비율로 조정 */
    object-fit: contain; /* 이미지 잘림 방지 */
    border-radius: 5px; /* 이미지 둥근 모서리 */
    margin-bottom: 20px; /* 이미지 간 간격 */
}

</style>
