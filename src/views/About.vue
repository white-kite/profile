<template>
    <v-container>
        <div class="hi">
        <label>안녕하세요</label><br />
        <label>학교에서 웹 개발에 눈을 뜨고 더 큰 세상을 보기 위해 IT 기업 개발자가 된!</label><br />
        <label>IT의료데이터과학 전공, IT융합 전공으로 이학사, IT융합학사 취득</label><br />
        <label>할 수 있을 때 많이 경험 해보고 공부해서 시스템 분석가를 목표로 하는!</label><br />
        <label>부지런히 노력하여 기회를 잡을 수 있게 준비 된 사람이 되도록!</label><br />
        <label>동료와 상사와의 대화 또는 회의를 통해 개선점을 찾고 반영하는! </label><br />
        <label>함께 열심으로 일할 동료와 회사를 찾고 있는! </label><br />
    </div>
    <div>
        <h2>학력&경력</h2>
        <div style="text-align: right">
            <!-- 멈추기/재생 버튼 -->
            <v-btn variant="tonal" @click="toggleAutoSlide">
                {{ isAutoSliding ? "효과멈추기" : "효과재생" }}
            </v-btn>
        </div>
        <v-slider v-model="sliderValue" :max="careers.length - 1" show-ticks="always" step="1" tick-size="6"></v-slider>
        <div class="careers d-flex justify-space-between">
            <span
                v-for="(career, index) in careers"
                :key="index"
                :style="{
                    color: index === sliderValue ? 'blue' : 'black',
                    cursor: 'pointer'
                }"
                @click="selectedIndex = index">
                {{ career.title }} <br />
                <span class="text-subtitle-1">{{ career.date }}</span><br />
                <template v-for="institute in career.institutes" :key="line" v-if="selectedIndex === index">
                    <span class="text-subtitle-1">- {{ institute }}</span><br />
                </template>
            </span>
        </div>
    </div>
    <div>
        <h2>취득자격</h2>
        <v-row>
            <v-col cols="3">
                <label class="th">자격증명</label>
            </v-col>
            <v-col cols="3">
                <label class="th">자격등록번호</label>
            </v-col>
            <v-col cols="3">
                <label class="th">발급기관</label>
            </v-col>
            <v-col cols="3">
                <label class="th">취득일자</label>
            </v-col>
        </v-row>
        <v-row v-for="(cert, index) in certificates" :key="index" class="my-2">
            <v-col cols="3">
                <v-card class="certname" color="indigo" variant="flat">
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
    </v-container>
</template>
<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const careers = ref([
    {
        title: "동명여자고등학교 졸업",
        date: "2015.03. ~ 2018.02.",
        institutes: ["인문계 이과"]
    },
    {
        title: "생활관 행정실 근무",
        date: "2019.12. ~ 2021.06.",
        institutes: ["행정실 근로학생"]
    },
    {
        title: "포위즈시스템 입사",
        date: "2021.07. ~ 2022.02.",
        institutes: ["SI사업본부 인턴"]
    },
    {
        title: "대구한의대학교 졸업",
        date: "2018.03. ~ 2022.02.",
        institutes: ["IT의료데이터과학전공(이학사)", "IT융합전공(IT융합학사)"]
    },
    {
        title: "포위즈시스템 근무중",
        date: "2022.03 ~ 현재",
        institutes: ["SI사업본부 사원(2022.03~2023.06)", "부설연구소 연구원(2023.07~2024.06)", "SI사업본부 주임(2024.07~)"] // 배열로 만들어서 여러줄 표시 할 수 있도록
    }
]);

// 슬라이더의 현재 값과 선택된 인덱스를 저장하는 반응형 변수
const sliderValue = ref(0);
const selectedIndex = ref(0);
// 자동 슬라이딩 상태를 나타내는 변수
const isAutoSliding = ref(true);
// setInterval 타이머를 저장할 변수
let interval = null;

// 슬라이더 값이 변경될 때 selectedIndex를 업데이트
watch(sliderValue, (newValue) => {
    selectedIndex.value = newValue;
});

const certificates = ref([
    {
        name: "정보처리기사",
        number: "21203020480K",
        issuer: "한국산업인력공단",
        date: "2021-11-26"
    },
    {
        name: "SQL 개발자",
        number: "SQLD-043008120",
        issuer: "한국데이터산업진흥원장",
        date: "2021-12-17"
    },
    {
        name: "SW 개발_L5_20V1",
        number: "22161040032B",
        issuer: "한국산업인력공단",
        date: "2022-02-24"
    },
    {
        name: "E-Test Professionals 1 급",
        number: "EP40000392626",
        issuer: "한국창의인성교육연구원",
        date: "2018-11-10"
    }
]);

// 슬라이더 값을 다음으로 이동시키는 함수
const nextSlide = () => {
    if (sliderValue.value < careers.value.length - 1) {
        sliderValue.value++;
    } else {
        // 슬라이더가 마지막에 도달하면 처음으로 돌아감
        sliderValue.value = 0;
    }
    // 선택된 인덱스도 슬라이더 값과 동기화
    selectedIndex.value = sliderValue.value;
};

// 사용자가 수동으로 슬라이드를 선택했을 때 호출되는 함수
const selectSlide = (index) => {
    sliderValue.value = index;
    selectedIndex.value = index;
};

// 자동 슬라이딩을 시작하는 함수
const startAutoSlide = () => {
    interval = setInterval(nextSlide, 3000);
};

// 자동 슬라이딩을 멈추는 함수
const stopAutoSlide = () => {
    clearInterval(interval);
};

// 멈추기/재생 버튼 클릭 시 호출되는 함수
const toggleAutoSlide = () => {
    if (isAutoSliding.value) {
        stopAutoSlide();
    } else {
        startAutoSlide();
    }
    isAutoSliding.value = !isAutoSliding.value;
};

// 컴포넌트가 마운트되었을 때 실행되는 코드
onMounted(() => {
    // 3초마다 nextSlide 함수를 호출하는 인터벌 설정
    interval = setInterval(() => {
        nextSlide();
    }, 3000);
});

// 컴포넌트가 파괴되기 전에 실행되는 코드
onBeforeUnmount(() => {
    // setInterval을 해제하여 메모리 누수를 방지
    clearInterval(interval);
});
</script>
<style scoped>
body {
    padding: 20px; /* 상하좌우 모두 20px의 패딩을 추가 */
}

.hi label {
    font-size: 18px; /* 크기 증가 */
    color: #333; /* 진한 회색으로 가독성 향상 */
    font-weight: bold; /* 굵게 */
    margin-bottom: 10px; /* 각 라벨 사이의 간격 */
}

div {
    margin-bottom: 10px;
    padding: 10px; /* 내용과 경계 사이의 패딩 */
}

h2 {
    color: #0D47A1; /* 더 진한 파란색 */
    font-weight: bold;
    margin-bottom: 10px;
}

.v-btn {
    background-color: #2196F3; /* 밝은 파란색 */
    color: white;
    font-weight: bold;
}

.v-slider .v-slider__thumb {
    background-color: #0D47A1; /* 더 진한 파란색 */
}

/* 테이블 헤더 스타일 */
.th {
    text-align: center; /* 중앙 정렬 */
    font-weight: bold; /* 볼드체 */
    font-size: 20px; /* 글자 크기 20px */
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
}

.v-card {
    background-color: #ffffff; /* 흰색 배경 */
    border-radius: 8px; /* 둥근 모서리 */
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* 그림자 효과 */
    transition: transform 0.3s; /* 호버 효과를 위한 변환 */
}

.v-card .v-card-text {
    background-color: #ffffff; /* 흰색 배경 */
    color: black; /* 글자색 변경 */
    font-size: 20px; /* 글자 크기 증가 */
    text-align: center; /* 중앙 정렬 */
}

/* 자격증명 카드 스타일 */
.certname .v-card-text {
    background-color: #3F51B5;
    color: white; /* 글자색 하얀색으로 변경 */
    font-size: 20px; /* 글자 크기 증가 */
    font-weight: 700;
    text-align: center; /* 가운데 정렬 */
}

.my-2:hover {
    transform: translateY(-5px); /* 마우스 오버 시 행 전체가 위로 움직임 */
    transition: transform 0.3s; /* 부드러운 움직임 효과 */
}

</style>

