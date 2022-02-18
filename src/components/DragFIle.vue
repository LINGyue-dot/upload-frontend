<template>
  <div id="dropArea"
       class="row-container"
       @dragenter.prevent.stop="dragenter"
       @dragover.prevent.stop="dragover"
       @dragleave.prevent.stop="dragleave"
       @drop.prevent.stop="drop"
       :class="{'highlighted':highlight}"
  >
    <p>拖拽上传文件</p>
    <div id="imagePreview" ref="areaRef"
    ></div>
  </div>
</template>
<script lang='ts' setup>
import {ref} from "vue";
import {testImg} from "@/utils/lodash";
import {uploadSingle} from "@/utils/request";

const areaRef = ref<HTMLDivElement | null>(null)

const fileContent = ref<File | null>(null)

const highlight = ref(false)
const dragenter = (...arg) => {
  highlight.value = true
}

const dragover = (...arg) => {
  highlight.value = true

}

const dragleave = (...arg) => {
  highlight.value = false

}
// 图片预览
const drop = (e: DragEvent) => {
  highlight.value = false
  const dt = e.dataTransfer
  const files = [...dt.files]
  files.forEach((file) => {
    fileContent.value = file
    previewImage(file, areaRef.value)
  })
}

//
const previewImage = (file: File, container: HTMLDivElement) => {
  if (!testImg(file.type)) {
    return
  }
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function (e) {
    const img = document.createElement('img')
    img.src = e.target.result
    container.append(img)
    upload()
  }
}

// upload function
const upload = async () => {
  uploadSingle({
    url: '/upload/single',
    file: fileContent.value, // 需要使用 value
  }).then(res => console.log(res)).catch(e => console.log(e))
}

</script>
<style scoped>


#dropArea p {
  text-align: center;
  color: #999;
}

#dropArea.highlighted {
  background-color: #ddd;
}

#imagePreview {
  max-height: 250px;
}

#imagePreview img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}


</style>

