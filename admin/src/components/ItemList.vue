<template>
    <div class="row mt-2 item">
        <div class="col-2 img">
            <img :src="item.image[0].linkhh" alt="" class="img_product">
        </div>
        <div class="col-8">
            <div class="row">
                {{ item.tenhh }}
            </div>
            <div class="row mt-2 subtitle">
                {{ item.motahh }}
            </div>
        </div>
        <div class="col-2">
            <button class="icon" @click="deleteItem"><i class="fa-solid fa-trash"></i></button>
            <button class="icon" @click="updateItem"><i class="fa-solid fa-pen"></i></button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        item: { type: Object, required: true },
    },
    methods: {
        updateItem() {
            this.$emit("submit:update", this.item)
        },
        deleteItem() {
            this.$emit("submit:delete", this.item.mshh, this.item.image[0].mshh)
        }
    },
    emits: ["submit:delete", "submit:update"],

}
</script>

<style>
.img_product {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.subtitle {
    font-weight: lighter;
    font-style: italic;
}

.item {
    background-color: rgb(239, 236, 231);
    padding: 10px 0;
    border-radius: 15px;
}

.icon {
    border: none;
    background: none;
}
</style>