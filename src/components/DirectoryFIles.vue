<template>
  <div class="row-container">
    目录上传
    <input type="file" @change="onChange($event)" webkitdirectory>
    <el-button @click="onClick"> 上传</el-button>
  </div>

</template>
<script lang='ts' setup>

import {ref} from "vue";
import {uploadDirectory, uploadMultiple} from "@/utils/request";

const file = ref<File | null>(null)

const onChange = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  if (target && target.files) {
    file.value = target.files
    console.log(file.value)
  }
}

const onClick = () => {
  upload()
}

// upload function
const upload = async () => {
  uploadDirectory({
    url: '/upload/directory',
    files: file.value, // 需要使用 value
  }).then(res => console.log(res)).catch(e => console.log(e))
}

</script>
<style scoped>

</style>
