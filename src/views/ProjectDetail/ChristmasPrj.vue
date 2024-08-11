<template>
    <label>ChristmasPrj 입니다.</label>

    <v-btn variant="tonal" @click="goBack">되돌아가기</v-btn>
</template>
<script setup>
const goBack = () => {
    window.history.back(); // 이전 페이지로 이동하는 브라우저의 내장 메서드
};
</script>
<style scoped></style>
