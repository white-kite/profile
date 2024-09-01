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
        </v-row>
        <v-row class="px-5" dense>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" outlined>
                    <v-card-text>
                        2024년, e학습터 서비스 구조개선
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" outlined>
                    <v-card-text>
                        2024년, Three.js를 활용한 크리스마스 프로젝트
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" outlined>
                    <v-card-text>
                        2024년, 디바이스 위치 표시 기능 시스템 재구축
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="text-right">
                <router-link to="/projects">
                    <v-btn variant="tonal">자세히보기</v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>

</script>
<style scoped>
.v-btn {
    font-weight: bold;
}


h2 {
    font-weight: bold;
    margin-bottom: 10px;
}
</style>
