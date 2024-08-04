<template>
    <div class="hi">
        <label>안녕하세요</label><br/>
        <label>학교에서 웹 개발에 눈을 뜨고 더 큰 세상을 보기 위해 IT 기업 개발자가 된!</label><br/>
        <label>IT의료데이터과학 전공, IT융합 전공으로 이학사, IT융합학사 취득</label><br/>
        <label>할 수 있을 때 많이 경험 해보고 공부해서 시스템 분석가를 목표로 하는!</label><br/>
        <label>부지런히 노력하여 기회를 잡을 수 있게 준비 된 사람이 되도록!</label><br/>
        <label>동료와 상사와의 대화 또는 회의를 통해 개선점을 찾고 반영하는! </label><br/>
    </div>
    <div>
        <h2>학력&경력</h2>
        <v-slider v-model="sliderValue" :max="careers.length - 1" show-ticks="always" step="1" tick-size="6"></v-slider>
        <div class="d-flex justify-space-between">
            <span v-for="(career, index) in careers" :key="index" 
                :style="{ color: index === sliderValue ? 'blue' : 'black', cursor: 'pointer' }"
                @click="selectedIndex = index">
                {{ career.title }} <br/>
                <template v-if="selectedIndex === index">
                    {{ career.date }} <br />
                    <span v-for="line in career.inst" :key="line">{{ line }}<br /></span>
                </template>
            </span>
        </div>
    </div>
    <div>  
        <h2>취득자격</h2>
        <v-row>
            <v-col cols="3">
                <label>자격증명</label>
            </v-col>
            <v-col cols="3">
                <label>자격등록번호</label>
            </v-col>
            <v-col cols="3">
                <label>발급기관</label>
            </v-col>
            <v-col cols="3">
                <label>취득일자</label>
            </v-col>
        </v-row>
        <v-row v-for="(cert, index) in certificates" :key="index" class="my-2">
            <v-col cols="3">
                <v-card color="indigo" variant="flat">
                <v-card-text>{{ cert.name }}</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card outlined>
                <v-card-text>{{ cert.number }}</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card outlined>
                <v-card-text>{{ cert.issuer }}</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card outlined>
                <v-card-text>{{ cert.date }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';

const careers = ref([
  {
    title: '동명여자고등학교 졸업',
    date: '2015.03~2018.02',
    inst: ['인문계 이과']
  },
  {
    title: '생활관 행정실 근무',
    date: '2019.12-2021.06',
    inst: ['행정실 근로학생']
  },
  {
    title: '포위즈시스템 입사',
    date: '2021.07-2022.02',
    inst: ['SI사업본부 인턴']
  },
  {
    title: '대구한의대학교 졸업',
    date: '2018.03-2022.02',
    inst: [
      'IT의료데이터과학전공(이학사)', 
      'IT융합전공(IT융합학사)'
    ]
  },
  {
    title: '포위즈시스템 근무중',
    date: '2022.03~',
    inst: [
      'SI사업본부 사원(2022.03~2023.06)', 
      '부설연구소 연구원(2023.07~2024.06)', 
      'SI사업본부 주임(2024.07~)'
    ] // 배열로 만들어서 여러줄 표시 할 수 있도록
  }
]);

const sliderValue = ref(0);
const selectedIndex = ref(0);

// 슬라이더 값이 변경될 때 selectedIndex를 업데이트
watch(sliderValue, (newValue) => {
  selectedIndex.value = newValue;
});        

const certificates = ref([
  {
    name: '정보처리기사',
    number: '21203020480K',
    issuer: '한국산업인력공단',
    date: '2021-11-26'
  },
  {
    name: 'SQL 개발자',
    number: 'SQLD-043008120',
    issuer: '한국데이터산업진흥원장',
    date: '2021-12-17'
  },
  {
    name: 'SW 개발_L5_20V1',
    number: '22161040032B',
    issuer: '한국산업인력공단',
    date: '2022-02-24'
  },
  {
    name: 'E-Test Professionals 1 급',
    number: 'EP40000392626',
    issuer: '한국창의인성교육연구원',
    date: '2018-11-10'
  }
]);
</script>
<style scoped>

</style>