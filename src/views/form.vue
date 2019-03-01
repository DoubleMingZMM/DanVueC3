<template>
    <div>
        <dan-form :model="model" :rules="rules">
            <dan-form-item label="姓名" prop="name">
                <dan-input v-model="model.name"/>
            </dan-form-item>
            
            <dan-form-item label="邮箱" prop="email">
                <dan-input v-model="model.email"/>
            </dan-form-item>
        </dan-form>
    </div>
</template>

<script>
import DanForm from '_c/Form/DanForm/index.vue'
import DanFormItem from '_c/Form/DanFormItem/index.vue'
import DanInput from '_c/Input/index.vue'

export default {
    components: {
        DanForm,
        DanFormItem,
        DanInput
    },
    data() {
        return {
            model: {
                name: 'zhangmm',
                email: '1602268076@qq.com'
            },
            rules: {

            }
        }
    },

}
</script>
