<template>
    <div class="container">
        <div class="left">
            <label>About 컴포넌트입니다.</label><br/>
            <label>안녕하세요?</label><br/>
            <label>개발자입니다.</label><br/>
            <a href="/about">자세히보기</a>
        </div>
        <div class="right">
            <img src="../assets/설탕이.jpg" class="circle-img"/>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left {
    flex: 1;
}
.right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.circle-img {
    width: 150px; 
    height: 150px;
    border-radius: 50%;
    object-fit: cover; /* 이미지를 동그랗게 잘라서 중앙에 맞춤 */
}
</style>
