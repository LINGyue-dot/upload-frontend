<template>
  <div class="row-container">
    单文件上传
    <input type="file" ref="singleFile" @change="onChange($event)">
    <el-button @click="onClick"> 上传</el-button>
  </div>

</template>
<script lang='ts' setup>

import {ref} from "vue";
import {upload} from "@/utils/request";

const file = ref<File | null>(null)

// 1.通过 ref 直接获取 dom 再获取 file
// 2.通过事件来进行获取
const singleFile = ref(null)
const onChange = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  if (target && target.files) {
    // console.log(target.files === singleFile.value.files) // true
    file.value = target.files[0]
    console.log(target.files[0])
  }
}

const onClick = () => {
  uploadSingleFile()
}

// upload function
const uploadSingleFile = async () => {
  upload({
    url:'/upload/single',
    file: file.value, // 需要使用 value
  }).then(res => console.log(res)).catch(e => console.log(e))
}

</script>
<style scoped>

</style>
