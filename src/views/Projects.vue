<template>
  <v-container>
      <v-row>
          <v-col cols="12">
              <v-row class="px-5">
                  <v-col>
                      <h2>최근 프로젝트</h2>
                  </v-col>
              </v-row>
          </v-col>
          <v-col>
              <v-text-field v-model="searchQuery" label="프로젝트 검색" clearable append-icon="mdi-magnify">
              </v-text-field>
          </v-col>
      </v-row>
      <v-row class="px-5" dense>
        <v-col v-for="(project, index) in filteredProjects" :key="index" cols="12" md="4">
          <v-card class="mx=auto" outlined>
            <routerLink :to="project.link">
              <v-img :src="project.image" :width="300" aspect-ratio="16/9" cover height="200px" >
              </v-img>
              <v-card-text>
                {{ project.sort }} <br/>
                {{ project.title }}
              </v-card-text>
            </routerLink>
          </v-card>
        </v-col>  
      </v-row>
  </v-container>
</template>
<script setup>
import { ref, computed } from 'vue';

const projects = ref([
  {
    sort: '회사',
    title: '2024년, e학습터 서비스 구조개선',
    link: '/projects',
    image: 'src/assets/sugar.jpg'
  },
  {
    sort: '개인',
    title: '2024년, Three.js를 활용한 크리스마스 프로젝트',
    link: '/projects/ChristmasPrj',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
  {
    sort: '회사',
    title: '2024년, 디바이스 위치 표시 기능 시스템 재구축',
    link: '/projects',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
  {
    sort: '회사',
    title: '2023년, 초저지연 네트워크 서비스를 위한 SDN 기반 인공지능 관제 시스템 개발',
    link: '/projects',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
  {
    sort: '회사',
    title: '2023년, 실시간 정보공유를 위한 국방 모바일 환경 신뢰 ',
    link: '/projects',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
  {
    sort: '개인',
    title: '2023년,  Find Candy: 할로윈을 겨냥하여 Unity 로 만든 사탕 찾기 게임',
    link: '/projects',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
  {
    sort: '회사',
    title: '2022~23년,  2022년 K-에듀파인 사립유치원 기능개선',
    link: '/projects',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
  {
    sort: '개인',
    title: '2022년, Homey: 직접 구현한 커뮤니티 웹 애플리케이션 런칭',
    link: '/projects',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
  {
    sort: '회사',
    title: '2021년, EKP 만들기 프로젝트: 신입사원 교육',
    link: '/projects',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
  {
    sort: '학교',
    title: '2021년, 보끼보끼마을: 떡볶이 판매 사이트 기능개선 및 시스템 분석',
    link: '/projects',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
  {
    sort: '학교',
    title: '2019년, 보끼보끼마을: 떡볶이 판매 사이트 개발',
    link: '/projects/BokkiBokki_1',
    image: 'src/assets/projectDetail/sugar.jpg'
  },
])

// 조회
const searchQuery = ref('');

const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    return project.title.includes(searchQuery.value) || project.sort.includes(searchQuery.value);
  });
});

</script>
<style scoped>
h2 {
    font-weight: bold;
    margin-bottom: 10px;
}
</style>
