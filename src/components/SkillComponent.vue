<template>
  <v-row>
      <v-col class="pa-3 skill" color="#333">
        Java, JSP, Springboot, MySQL, Vue3.js, Python, MongoDB
      </v-col>
    </v-row>
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


<!-- 아래와 같이 코드를 변경하면 화면에 전체가 채워지지 않음
<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-3" color="#333" dark>
          <v-card-text class="skill">
            Java, JSP, Springboot, MySQL, Vue3.js, Python, MongoDB
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
-->