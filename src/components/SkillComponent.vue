<template>
    <div>
        <label>Skill 컴포넌트입니다.</label>
        <label class="skill">Java, JSP, Springboot, MySQL, Vue3.js, Python, MongoDB</label>
    </div>
</template>
<script setup>

</script>
<style scoped>
.skill {
    display: block;
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0; /* 위아래 패딩을 추가하여 높이를 설정 */
    letter-spacing: 3px; /* 자간 설정 */
    font-size: 20px; /* 글씨 크기 설정 */
    box-sizing: border-box; /* 패딩 포함하여 width를 계산 */
}
</style>