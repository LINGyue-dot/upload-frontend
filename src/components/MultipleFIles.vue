<template>
  <div class="row-container">
    多文件上传
    <input type="file" @change="onChange($event)" multiple>
    <el-button @click="onClick"> 上传</el-button>
  </div>

</template>
<script lang='ts' setup>

import {ref} from "vue";
import {uploadMultiple} from "@/utils/request";

const file = ref<File | null>(null)

// 1.通过 ref 直接获取 dom 再获取 file
// 2.通过事件来进行获取
const onChange = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  if (target && target.files) {
    file.value = target.files
  }
}

const onClick = () => {
  uploadSingleFile()
}

// upload function
const uploadSingleFile = async () => {
  uploadMultiple({
    url: '/upload/multiple',
    files: file.value, // 需要使用 value
  }).then(res => console.log(res)).catch(e => console.log(e))
}

</script>
<style scoped>

</style>
