<template>
    <Form @submit="submitproduct" :validation-schema="productFormSchema">
        <div class="container bodyModal">
            <div class="row">
                <div class="form-group col-3">
                    <label for="mshh">Mã số sản phẩm</label>
                    <Field name="mshh" type="text" class="form-control border border-dark" v-model="product.mshh" />
                    <ErrorMessage name="mshh" class="error-feedback" />
                </div>
                <div class="form-group col-9">
                    <label for="name">Tên sản phẩm</label>
                    <Field name="name" type="text" class="form-control border border-dark" v-model="product.tenhh" />
                    <ErrorMessage name="name" class="error-feedback" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <label for="motahh">Mô tả sản phẩm</label>
                    <Field name="motahh" type="text" class="form-control border border-dark" v-model="product.motahh" />
                    <ErrorMessage name="motahh" class="error-feedback" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col-8">
                    <label for="note">Ghi chú</label>
                    <Field name="note" type="text" class="form-control border border-dark" v-model="product.ghichu" />
                    <ErrorMessage name="note" class="error-feedback" />
                </div>
                <div class="form-group col-2">
                    <label for="gia">Giá</label>
                    <Field name="gia" type="text" class="form-control border border-dark" v-model="product.gia" />
                    <ErrorMessage name="gia" class="error-feedback" />
                </div>
                <div class="form-group col-2">
                    <label for="soluonghang">Số lượng hàng hoá</label>
                    <Field name="soluonghang" type="text" class="form-control border border-dark"
                        v-model="product.soluonghang" />
                    <ErrorMessage name="soluonghang" class="error-feedback" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col-4">
                    <label for="mahinh">Mã số hình ảnh</label>
                    <Field name="mahinh" type="text" class="form-control border border-dark" v-model="hinhhh.mahinh" />
                    <ErrorMessage name="mahinh" class="error-feedback" />
                </div>
                <div class="form-group col-4">
                    <label for="tenhinh">Tên Hình</label>
                    <Field name="tenhinh" type="text" class="form-control border border-dark" v-model="hinhhh.tenhinh" />
                    <ErrorMessage name="tenhinh" class="error-feedback" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <label for="linkhh">Link hình ảnh</label>
                    <Field name="linkhh" type="text" class="form-control border border-dark" v-model="hinhhh.linkhh" />
                    <ErrorMessage name="linkhh" class="error-feedback" />
                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-primary" @click="submitProduct">Lưu</button>
            </div>
        </div>
    </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:product"],
    props: {
        product: { type: Object, required: true },
        hinhhh: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            product: this.product,
            contactFormSchema,
        };
    },
    methods: {
        submitProduct() {
            this.$emit("submit:product", this.product, this.hinhhh);
        },
    },
};
</script>
<style scoped>
.bodyModal {}
</style>