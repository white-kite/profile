<template>
    <v-container>
        <v-row>
            <v-col class="py-10" cols="12" md="6">
                <p class="text-h4 mb-3">About 컴포넌트입니다.</p>
                <p class="text-h3 mb-3">안녕하세요?</p>
                <p class="text-h4 mb-3">개발자입니다.</p>
                <v-btn variant="outlined" class="text-right" href="/about">자세히보기</v-btn>
            </v-col>
        <v-col>
            <v-sheet class="text-center" cols="12" md="6">
                <img src="../assets/sugar.jpg" class="profile-image rounded-circle"/>
            </v-sheet>
        </v-col>
        </v-row>
    </v-container>
</template>
<script setup>

</script>
<style scoped>
.profile-image {
    width: 150px; 
    height: 150px;
    object-fit: cover; /* 이미지를 동그랗게 잘라서 중앙에 맞춤 */
}
</style>
