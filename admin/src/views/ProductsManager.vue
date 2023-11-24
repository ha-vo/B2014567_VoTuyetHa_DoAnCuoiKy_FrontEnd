<script>
import navbar from "@/components/Navbar.vue"
import form_product from "@/components/FormProduct.vue"
import productService from "@/services/product.service.js"
import imageService from "@/services/image.service.js"
import item_list from "@/components/ItemList.vue"

export default {

    created() {
        this.product = {
            mshh: "",
            tenhh: "",
            motahh: "",
            gia: "",
            soluonghang: "",
            ghichu: "",
        },
            this.hinhhh = {
                mahinh: "",
                tenHinh: "",
                mssh: ""
            },
            this.GetData()
        this.productUpdate = {
            mshh: "",
            tenhh: "",
            motahh: "",
            gia: "",
            soluonghang: "",
            ghichu: "",
        },
            this.imageUpdate = {
                mahinh: "",
                tenHinh: "",
                mssh: ""
            }
    },
    data() {
        return {
            message: "",
            dataProducts: [],
            messageDelete: "",


        }
    },

    components: {
        navbar,
        form_product,
        item_list
    },

    methods: {
        openModal() {
            document.getElementById('myModal').style.display = 'block';
            document.getElementById('modalOverlay').style.display = 'block';
        },
        closeModal() {
            document.getElementById('myModal').style.display = 'none';
            document.getElementById('modalOverlay').style.display = 'none';
        },
        openModalUpdate() {
            document.getElementById('modalUpdate').style.display = 'block';
            document.getElementById('modalOverlayUpdate').style.display = 'block';
        },
        closeModalUpdate() {
            document.getElementById('modalUpdate').style.display = 'none';
            document.getElementById('modalOverlayUpdate').style.display = 'none';
        },
        async Create(product, hinhhh) {
            try {
                console.log(hinhhh)
                this.hinhhh.mshh = this.product.mshh
                await productService.create(product)
                await imageService.create(hinhhh)
                this.message = "Successfully created"
                this.product = {
                    mshh: "",
                    tenhh: "",
                    motahh: "",
                    gia: "",
                    soluonghang: "",
                    ghichu: "",
                }
                this.hinhhh = {
                    mahinh: "",
                    tenHinh: "",
                    mssh: ""
                }
            } catch (e) {
                console.log(e)
            }
        },
        async GetData() {
            let productsList = []
            try {
                productsList = await productService.getAll()

                for (let i = 0; i < productsList.length; i++) {
                    try {
                        let image = await imageService.get(productsList[i].mshh)
                        productsList[i].image = image
                    }
                    catch (e) {
                        console.log(e)
                    }
                }
            } catch (e) {
                console.log(e)
            }
            console.log("here", productsList)
            this.dataProducts = productsList
        },
        async deleteItem(id1, id2) {
            try {
                await productService.delete(id1)
                await imageService.delete(id2)
                messageDelete = "delete sucessfully"
                this.loadData()
            } catch (e) {
                console.log(e)
            }

        },
        async updateItem(item) {
            this.mshh = item.mshh


            this.openModalUpdate()
        }
    }


};

</script>
<template>
    <div class="Product">
        <navbar />
        <div class="bodyProduct">
            <button class="btnPlus" @click="openModal"><i class="fa-solid fa-plus"></i></button>

            <div class="modal-overlay" id="modalOverlay" @click="closeModal"></div>

            <div class="modal" id="myModal">
                <button @click="closeModal" class="iconModal"><i class="fa-solid fa-xmark"></i></button>
                <div class="modal-content">
                    <form_product :product="product" :hinhhh="hinhhh" @submit:product="Create" />
                </div>

            </div>

        </div>
        <div class="updateModal">
            <div class="modal-overlay" id="modalOverlayUpdate" @click="closeModal"></div>
            <div class="modal" id="modalUpdate">
                <button @click="closeModal" class="iconModal"><i class="fa-solid fa-xmark"></i></button>
                <div class="modal-content">
                    <form_product :product="productUpdate" :hinhhh="imageUpdate" @submit:product="Create" />
                </div>

            </div>
        </div>
        <div class="container" v-for="item in dataProducts">
            <item_list :item="item" @submit:delete="deleteItem" @submit:update="updateItem" />
        </div>
    </div>
</template>

<style>
.bodyProduct {
    font-family: Arial, sans-serif;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

}

.iconModal {
    float: right;
    border: none;
    background: none;
    font-size: 24px;
}



.modal {
    padding: 10px;
    margin: 30px;
    display: none;
    position: fixed;
    width: 1050px;
    height: 550px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    margin-bottom: 20px;
}

.btnPlus {
    border: none;
    background: none;
    font-size: 30px;
}

.btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.bodyProduct {
    display: block;
}
</style>

