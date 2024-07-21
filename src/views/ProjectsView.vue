<template>
    <div>
        <v-text-field class="w50" hide-details="auto" label="검색어를 입력하세요" v-model="searchString"></v-text-field>
        <!-- <v-text-field :rules="rules" label="Another input"></v-text-field> -->
    </div>

<!--여기서부터-->
    <v-card
        title="Nutrition"
        flat
    >
        <template v-slot:text>
        <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
        ></v-text-field>
        </template>

        <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        >
        <template v-slot:[`item.calories`]="{ item }">
            <v-img :src="item.caloriesImage" max-height="50px" max-width="50px"></v-img>
        </template>
        </v-data-table>
    </v-card>
<!--여기까지-->

    <!--content에 작성 하지 않고-->
    <v-container>
        <v-row>
        <v-col cols="12">
            <v-text-field
            class="w50"
            hide-details="auto"
            label="검색어를 입력하세요"
            v-model="searchQuery"
            ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
        <v-col cols="12">
            <v-expansion-panels>
            <v-expansion-panel
                v-for="panel in filteredPanels"
                :key="panel.title"
                :title="panel.title"
                :text="panel.text"
            ></v-expansion-panel>
            </v-expansion-panels>
        </v-col>
        </v-row>
    </v-container>

    <!--content에 작성-->
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
            <v-col cols="12" md="12">
                <v-expansion-panels>
                    <v-expansion-panel
                        title="2024년, e학습터 서비스 구조개선"
                        text="MSA 구조 도입에 의한 JSP 구조를 스프링부트, vue.js를 사용하도록 변경하는 사업"
                    >
                    </v-expansion-panel>
                    <v-expansion-panel
                        title="2024년, Three.js를 활용한 크리스마스 프로젝트"
                        text="다양한 개발 경험을 위해 Three.js를 학습하고 크리스마스를 겨냥하여 게임을 만드는 스터디 프로젝트"
                    >
                    </v-expansion-panel>
                    <v-expansion-panel
                        title="2024년, 디바이스 위치 표시 기능 시스템 재구축"
                        text="디바이스 위치 표시 기능 시스템을 기존 echo-e 시스템에 어울리도록 다시 설계하고 재구축한 프로젝트"
                    >
                    </v-expansion-panel>  
                </v-expansion-panels>
                
            </v-col>
        </v-row>
    </v-container>
</template>
<!-- <script setup>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  }
</script> -->

<script setup>
import { ref, computed } from 'vue'
import { VCard, VImg, VCardTitle, VCardText, VTextField, VDataTable } from 'vuetify/components'

const search = ref('')
const headers = ref([
  {
    align: 'start',
    key: 'name',
    sortable: false,
    title: 'Dessert (100g serving)',
  },
  { key: 'calories', title: 'Calories' },
  { key: 'fat', title: 'Fat (g)' },
  { key: 'carbs', title: 'Carbs (g)' },
  { key: 'protein', title: 'Protein (g)' },
  { key: 'iron', title: 'Iron (%)' },
])

const desserts = ref([
  { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: 1 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: 1 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: 7 },
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: 8 },
  { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: 16 },
  { name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: 0 },
  { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: 2 },
  { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: 45 },
  { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: 22 },
  { name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: 6 },
])

const filteredDesserts = computed(() => {
  const term = search.value.toLowerCase()
  return desserts.value.filter(dessert =>
    dessert.name.toLowerCase().includes(term)
  )
})

//조회를 위해 시작
const searchQuery = ref('')

const panels = ref([
  {
    title: '2024년, e학습터 서비스 구조개선',
    text: 'MSA 구조 도입에 의한 JSP 구조를 스프링부트, vue.js를 사용하도록 변경하는 사업'
  },
  {
    title: '2024년, Three.js를 활용한 크리스마스 프로젝트',
    text: '다양한 개발 경험을 위해 Three.js를 학습하고 크리스마스를 겨냥하여 게임을 만드는 스터디 프로젝트'
  },
  {
    title: '2024년, 디바이스 위치 표시 기능 시스템 재구축',
    text: '디바이스 위치 표시 기능 시스템을 기존 echo-e 시스템에 어울리도록 다시 설계하고 재구축한 프로젝트'
  }
])

const filteredPanels = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return panels.value.filter(panel => {
    return panel.text.toLowerCase().includes(query) || panel.title.toLowerCase().includes(query)
  })
})

// 조회를 위해 끝

// 반응형 상태 정의
const mainInput = ref('')
const anotherInput = ref('')
const rules = [
  value => !!value || 'Required.',
  value => (value && value.length >= 3) || 'Min 3 characters',
]
</script>
<style scoped>
</style>
