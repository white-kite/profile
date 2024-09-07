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
import picture_1 from '../../assets/projectDetail/Homey_Main.png';
import picture_2 from '../../assets/projectDetail/Homey_LoginMain.png';
import picture_3 from '../../assets/projectDetail/Homey_HomeUpdate.png';
import picture_4 from '../../assets/projectDetail/Homey_Login.png';
import picture_5 from '../../assets/projectDetail/Homey_UserCreate.png';

const goBack = () => {
    window.history.back(); // 이전 페이지로 이동하는 브라우저의 내장 메서드
};

// 프로젝트 상세 내용을 객체로 관리
const projectDetails = {
  projectName: "Homey: 직접 구현한 커뮤니티 웹 애플리케이션 런칭",
  duration: "2022.07-2023.01",
  client: "개인 스터디 프로젝트",
  mainTasks: `데이터 설계, 스프링부트 기반의 홈 목록/홈 데이터 수정 로직 및 화면 구현, 
  스프링시큐리티를 활용한 로그인 로직 구현, 반응형 웹을 위한 CSS 적용`,
  tools: `인프런강의(: ①스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술 ② 스프링부트 시큐리티 & JWT), 
          Eclipse, MySQL, Notion, SpringBoot, SpringBoot Security, Github`,
  results: `
    - 사내 뉴스레터를 통해 스터디 후기와 커뮤니티 사이트 URL을 공유하여 직원 간 소통 강화 및 모범사례 제시로 기여<br />
    - 스프링부트와 스프링 시큐리티 프레임워크 사용에 기반한 웹 애플리케이션 개발<br />
    - 새로운 기술 및 프레임워크에 대한 학습을 통한 개발 역량의 증진<br />
    - PC환경 및 모바일 환경에서도 적용될 수 있도록 반응형 웹 구현
    - 협업을 위한 깃허브, 브랜치 사용법을 익힘
  `,
  details: `
    열정적인 신입사원 셋이 함께 기획한 커뮤니티 웹 사이트를 스프링부트와 스프링 시큐리티를 활용하여 개발했습니다. 
    프로젝트 초기에 인프런 강의를 통해 스프링부트 기초를 다지고 실제 개발 과정에서는 
    첨부파일과 댓글 기능을 AJAX로 구현하여 사용자 인터랙션을 향상시켰습니다. 
    특히, 스프링 시큐리티를 이용한 로그인 기능에서 websecurityconfigureradapter를 사용하는 대신 
    설정을 모두 Bean으로 등록하고 SecurityFilterChain에 HttpSecurity를 빌드한 return값을 
    만드는 최신 방식을 적용하여 구현했습니다. <br />
    또한, 반응형 웹 디자인을 구현하기 위해 HTML5/CSS 교육에서 배운 @media 쿼리를 활용하여 PC환경과 모바일 환경에서도 일관된 사용자 경험을 제공했습니다. 
    깃허브와 노션을 활용한 협업으로 개발 과정의 문서화와 팀 내 커뮤니케이션을 원활하게 진행했습니다.
  `,
  additionalText: `아래 이미지는 제가 구현한 로그인 전/후의 홈 목록 화면, 홈 수정 화면, 로그인/회원가입 
    화면의 PC및 반응형 웹이 적용된 캡처입니다. 
    (검은색 테두리로 되어있는 사진이 PC 개발자 모드에서 가로 360사이즈를 반영한 화면 사진입니다.)`
};

const images = ref([
  { src: picture_1 },
  { src: picture_2 },
  { src: picture_3 },
  { src: picture_4 },
  { src: picture_5 }
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
    color: #1a1818;
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
