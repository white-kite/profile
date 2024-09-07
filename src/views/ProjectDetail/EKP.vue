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
import picture_1 from '../../assets/projectDetail/Certification_InformationProcessingEngineer.png';
import picture_2 from '../../assets/projectDetail/Certification_SW_L5.png';

const goBack = () => {
    window.history.back(); // 이전 페이지로 이동하는 브라우저의 내장 메서드
};

// 프로젝트 상세 내용을 객체로 관리
const projectDetails = {
  projectName: "EKP 만들기 프로젝트: IPP 일학습병행제 및 신입사원 교육",
  duration: "2021.07-2022.02",
  client: "포위즈시스템",
  mainTasks: "부서 관리 기능 설계 및 구현",
  tools: "EgovFramework, Eclipse, Java, MySQL, SVN",
  results: `
    - 회사의 스타일에 맞는 정의서 및 설계서 작성법 학습<br />
    - JSP와 MVC 패턴을 활용한 개발 역량 향상 및 SVN을 통한 효율적인 팀 협업 경험 습득<br />
    - 정보처리기사와 SW개발_L5_20V1 자격 취득<br />
  `,
  details: `
    일학습병행제를 통해 부장님의 지도하에 회사의 문서 작성 양식과 정의서의 기본을 배웠습니다.
    이 초기 단계에서 프로젝트의 범위와 목표를 정의하는 데 필요한 기술적 문서의 구성과 작성 방법을 익혔습니다. 
    전자정부프레임워크(EgovFramework) 샘플을 분석하면서 JavaServer Pages(JSP)에 대한 실질적인 학습을 진행했습니다. 
    이후 신입 사원 분들이 합류하여 본격적으로 구현할 기능을 분담했고 저는 부서관리 기능을 중심으로 분석, 
    설계 및 개발 과정을 효과적으로 수행하였습니다. <br />
    또한, 프로젝트를 진행하는 동안 정보처리기사 실기와 SW개발_L5_20V1 자격증을 준비하여 성공적으로 취득했습니다.
    이 과정에서 습득한 기술 지식에 대한 이해를 바탕으로 프로젝트를 보다 효과적으로 수행할 수 있었습니다.
  `,
  additionalText: "프로젝트 자료는 보안상의 이유로 직접 제공할 수 없습니다. 대신, 정보처리기사와 SW 개발_L5_20V1 취득사항 확인서를 입증할 수 있습니다."
};

const images = ref([
  { src: picture_1 },
  { src: picture_2 }
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
