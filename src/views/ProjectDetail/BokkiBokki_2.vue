<template>
    <v-container>
        <h1>{{projectDetails.projectName}}</h1>
    <div>
        <v-row>
            <v-col cols="2" align-self="center">
                <p class="text-center font-weight-black">프로젝트명</p>
            </v-col>
            <v-col cols="10">
                <label>{{projectDetails.projectName}}</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2">
                <p class="text-center font-weight-black">수행기간</p>
            </v-col>
            <v-col cols="10">
                <label>{{projectDetails.duration}}</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2">
                <p class="text-center font-weight-black">발주처</p>
            </v-col>
            <v-col cols="10">
                <label>{{ projectDetails.client }}</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2" align-self="center">
                <p class="text-center font-weight-black">주요업무</p>
            </v-col>
            <v-col cols="10">
                <label>{{ projectDetails.mainTasks }}</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2">
                <p class="text-center font-weight-black">사용도구, <br/> 언어 및 기술</p>
            </v-col>
            <v-col cols="10" align-self="center">
                <label>{{ projectDetails.tools }}</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2" align-self="center">
                <p class="text-center font-weight-black">업무성과</p>
            </v-col>
            <v-col cols="10">
                <label v-html="projectDetails.results">
                    
                </label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2" align-self="center">
                <p class="text-center font-weight-black">업무상세</p>
            </v-col>
            <v-col cols="10" class="text-justify">
                <label v-html="projectDetails.details">
                </label>
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <v-col> {{ projectDetails.additionalText }} </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(image, index) in images" :key="index" cols="12" md="6">
                <img :src="image.src" class="responsive-img" @click="showDialog(index)" />
            </v-col>
        </v-row>

        <!-- 다이얼로그 -->
        <v-dialog v-model="dialog" :style="{ width: '90vw' }">>
        <v-card>
            <v-card-text class="d-flex justify-center">
            <v-img :src="selectedImage" class="expanded-img" aspect-ratio="1.6"></v-img>
            </v-card-text>
            <v-card-actions class="justify-center">
            <v-btn color="primary" text @click="dialog = false">닫기</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

    </div>

    <v-btn variant="tonal" @click="goBack">되돌아가기</v-btn>
    </v-container>
</template>
<script setup>
import { ref } from "vue";
import picture_1 from '../../assets/projectDetail/Bokki2_1.png';
import picture_2 from '../../assets/projectDetail/Bokki2_2.png';
import picture_3 from '../../assets/projectDetail/Bokki2_3.png';
import picture_4 from '../../assets/projectDetail/Bokki2_4.png';

const goBack = () => {
    window.history.back(); // 이전 페이지로 이동하는 브라우저의 내장 메서드
};

// 프로젝트 상세 내용을 객체로 관리
const projectDetails = {
  projectName: "보끼보끼마을: 떡볶이 판매 사이트 기능개선 및 시스템 분석",
  duration: "2021.03-2021.06",
  client: "학교 과제 프로젝트",
  mainTasks: "웹 기능개선, 시스템 분석, 발표",
  tools: "Gliffy, PPT, 메모장 Xampp(Apache, MySQL), VSCode, PHP",
  results: `
    - 교수님의 극찬을 받고 ‘시스템 분석 및 설계’ 과목에서 A+ 성적을 취득함<br />
    - 시스템 기능 개선 경험<br />
    - 시스템 분석 능력 향상<br />
  `,
  details: `
    시스템 분석 및 설계 수업을 듣고 Hypertext Preprocessor(PHP)로 시스템을 개발한 후 수업 내용을 기반으로 분석한 내용을 발표했습니다. 
    요구분석과 모델링, 아키텍처/데이터/UI 설계 등의 분류로 시스템을 분석했습니다. 
    이 과정에서 2019년 팀 프로젝트로 개발했던 떡볶이 판매 사이트 소스코드를 한 번 더 활용하여 삭제 기능 실행 시 확인용 alert를 추가하는 등 이전 보다 기능이 잘 작동되도록 구현하였습니다.
  `,
  additionalText: "아래 사진은 발표자료의 일부입니다."
};

const images = ref([
  { src: picture_1 },
  { src: picture_2 },
  { src: picture_3 },
  { src: picture_4 }
]);

const dialog = ref(false);
const selectedImage = ref('');

function showDialog(index) {
  if (images.value[index] && images.value[index].src) {
    selectedImage.value = images.value[index].src;
    dialog.value = true;
  } else {
    console.error('Image source is undefined or not found for index:', index);
  }
}

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
    padding: 50px 0 /* 여백 */
}

p, label {
    color: #1a1818; /* 중간 회색 */
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
    border: 1px solid #0000000f;
}

/* 다이얼로그 내 이미지를 크게 표시 */
.expanded-img {
  width: 100%;
  height: auto;
  max-width: 100%; /* 이미지를 다이얼로그 크기에 맞게 최대화 */
  max-height: 90vh; /* 화면 높이의 90%까지 이미지 확장 */
  object-fit: contain;
}

</style>
