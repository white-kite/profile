<template>
  <v-container>
      <v-row>
          <v-col cols="12">
              <v-row class="px-5">
                  <v-col>
                      <v-label class="text-h4">최근 프로젝트</v-label>
                  </v-col>
              </v-row>
          </v-col>
      </v-row>
      <v-row class="px-5" dense>
        <v-col v-for="(project, index) in projects" :key="index" cols="12" md="4">
          <v-card class="mx=auto" outlined>
            <a :href="project.link">
            <img :src="project.image" class="white-text" height="200px" />
            
              <v-card-text>
                {{ project.title }}
              </v-card-text>
            </a>
          </v-card>
        </v-col>  
      </v-row>
  </v-container>
</template>
<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: '2024년, e학습터 서비스 구조개선',
    link: '/projects',
    image: '../assets/logo.png'
  },
  {
    title: '2024년, Three.js를 활용한 크리스마스 프로젝트',
    link: '/projects',
    image: '/assets/설탕이.jpg'
  },
  {
    title: '2024년, 디바이스 위치 표시 기능 시스템 재구축',
    link: '/projects',
    image: '/assets/설탕이.jpg'
  },
])

</script>
<style scoped>
</style>
