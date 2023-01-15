const fileUpload = () => import('@/views/file-upload-download/file-upload/index.vue')

export default [
  {
    path: '/fileUpload',
    name: 'FileUpload',
    component: fileUpload
  }
]
