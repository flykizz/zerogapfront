<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">
      <div class="createPost-main-container">
        <el-form-item style="margin-bottom: 40px;" label-width="110px" label="团队名:">
          <el-input
            v-model="postForm.name"
            :rows="1"
            type="input"
            autosize
            placeholder="请输入团队名称"
          />
        </el-form-item>
        <el-form-item style="margin-bottom: 40px;" label-width="110px" label="团队logo:">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :limit="1"
            :file-list="postForm.logoList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item style="margin-bottom: 40px;" label-width="110px" label="描述:">
          <el-input
            v-model="postForm.descript"
            :rows="1"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="请输入团队描述"
          />
        </el-form-item>
        <el-form-item style="margin-bottom: 40px;" label-width="110px" label="团队状态:">
          <el-select v-model="postForm.status" filterable placeholder="请选择">
            <el-option
              v-for="item in postForm.statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item style="padding-left: 110px;">
          <el-button type="primary" @click="submitForm">立即创建</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>

import { fetchOrganization, addOrganization } from '@/api/organization'

import mixins from '@/mixins/index'
import formData from '@/formdatas/organization'

const defaultForm = formData

export default {
  name: 'Detail',
  mixins: [mixins],
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      postForm: Object.assign({}, defaultForm),
      loading: false,
      rules: defaultForm.rules,
      tempRoute: {}
    }
  },
  computed: {
    lang() {
      return this.$store.getters.language
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    } else {
      this.postForm = Object.assign({}, defaultForm)
    }
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    fetchData(id) {
      fetchOrganization(id)
        .then(response => {
          this.postForm = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    postData() {
      this.loading = true
      addOrganization(this.postForm)
        .then(response => {
          this.$notify({
            title: '成功',
            message: '创建组织成功',
            type: 'success',
            duration: 2000
          })
          this.loading = false
        })
        .catch(err => {
          console.log(err)
          this.loading = false
        })
    },
    submitForm() {
      this.postForm.display_time = parseInt(this.display_time / 1000)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.postData()
        } else {
          return false
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

