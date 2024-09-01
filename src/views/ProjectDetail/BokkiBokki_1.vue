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
                <label>
                    {{ projectDetails.details }}
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
import Bokki_1 from '../../assets/projectDetail/Bokki_1.png';
import Bokki_2 from '../../assets/projectDetail/Bokki_2.png';
import Bokki_3 from '../../assets/projectDetail/Bokki_3.png';
import Bokki_4 from '../../assets/projectDetail/Bokki_4.png';

const goBack = () => {
    window.history.back(); // 이전 페이지로 이동하는 브라우저의 내장 메서드
};

// 프로젝트 상세 내용을 객체로 관리
const projectDetails = {
  projectName: "보끼보끼마을: 떡볶이 판매 사이트 개발",
  duration: "2019.09-2019.12",
  client: "학교 과제 프로젝트",
  mainTasks: "떡볶이 판매 웹사이트 개발 및 관리 총괄, 팀 리더 역할 수행, 프로젝트 결과 발표",
  tools: "메모장, MySQL, PHP",
  results: `
    - PHP로 웹 개발에 입문<br />
    - 웹 개발에 대한 열정을 발견하고 진로 방향을 웹 개발자로 확립함<br />
    - ‘웹 프로그래밍’ 과목에서 A+ 성적을 취득함<br />
  `,
  details: `
    PHP와 MySQL을 활용하여 떡볶이 판매 사이트를 개발했습니다. 또한 개발 결과에 대해 발표했습니다.
    팀의 리더로서 주도적으로 기능을 개발하였으며 팀원들의 능력에 따라 분업을 진행하여 기간 내에 개발 및 발표 준비를 마쳤습니다.
    발표를 통해 성공적인 결과를 공유했습니다. 개발하는 동안 여러 책과 문서를 살펴보며
    어떻게 코드를 작성해야 원하는 화면과 기능이 구현될 것인가에 대한 고민을 했습니다.
    이러한 탐구에 재미를 느끼고 실무에 관심을 가졌으며 진로 방향을 웹 개발자로 확립하게 되었습니다.
  `,
  additionalText: "아래 사진은 발표자료의 일부입니다."
};

const images = ref([
  { src: Bokki_1 },
  { src: Bokki_2 },
  { src: Bokki_3 },
  { src: Bokki_4 }
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
