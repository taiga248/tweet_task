<template>
  <v-card class="ma-4" height="600">
    <v-card-text>
      <h2 class="text-center my-3">今日やったこと</h2>
      <v-form class="mx-10 my-10">
        <v-select label="タグ"></v-select>
        <v-text-field label="何時間作業した？"></v-text-field>
        <v-textarea outlined label="内容"></v-textarea>

        <div class="text-center">
          <v-btn>キャンセル</v-btn>
          <v-btn color="info" class="ml-2">保存</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
