<template>
    <div class="container">
        <div class="px-5">
            <label class="title">Project 컴포넌트입니다.</label><br/>
            <label class="subtitle">최근 프로젝트</label>
        </div>
        <div class="grid px-5">
            <div class="card">
                <label>2024년, e학습터 서비스 구조개선</label>
            </div>
            <div class="card">
                <label>2024년, Three.js를 활용한 크리스마스 프로젝트</label>
            </div>
            <div class="card">
                <label>2024년, 디바이스 위치 표시 기능 시스템 재구축</label>
            </div>
        </div>
        <a href="/projects" class="more-link">자세히보기</a>
    </div>
</template>
<script setup>

</script>
<style scoped>
.container {
    width: 100%;
    padding: 20px 0;
}
.title {
    font-size: 1.5em;
    margin-bottom: 10px;
}
.subtitle {
    font-size: 1.2em;
    margin-bottom: 20px;
}
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
.card {
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
}
.more-link {
    display: block;
    margin-top: 20px;
    text-align: center;
    color: #007bff;
    text-decoration: none;
}
.more-link:hover {
    text-decoration: underline;
}
</style>
