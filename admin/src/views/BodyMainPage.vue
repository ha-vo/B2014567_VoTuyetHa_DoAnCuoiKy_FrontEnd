<script>
import navbar from "@/components/Navbar.vue"
export default {
    methods: {
        navigateToProducts() {
            // Sử dụng router.push để chuyển đến route 'new-component'
            this.$router.push({ name: 'productsmanager' });
        },
    },
    components: {
        navbar
    }
}
</script>

<template>
    <div class="mainpage">
        <navbar />
        <div class="body">
            <div class="container">
                <div class="row">
                    <button @click="navigateToProducts" class="col contain_nav">
                        <i class="fa-solid fa-layer-group"></i> <span class="text_nav">Quản lý sản phẩm</span>
                    </button>
                    <button class="col contain_nav">
                        <i class="fa-solid fa-user"></i> <span class="text_nav">Quản lý nhân viên và khách hàng</span>
                    </button>
                    <button class="col contain_nav">
                        <i class="fa-solid fa-envelope-open-text"></i> <span class="text_nav">Quản lý đơn hàng</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.contain_nav {
    height: 200px;
    border: none;
    margin: 100px 30px;
    border-radius: 20px;
    text-align: center;
    background-color: #3498db;
    color: white;
}

.badge {
    position: absolute;
    top: -4px;
    right: -12px;
    background-color: #f39c12;
    color: #fff;
    padding: 5px 8px;
    border-radius: 50%;
    font-size: 8px;
}
</style>