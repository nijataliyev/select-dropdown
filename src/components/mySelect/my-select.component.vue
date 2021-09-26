<style lang="scss" src="./my-select.component.scss"></style>
<script lang="ts" src="./my-select.component.ts"></script>

<template>
    <section class="dropdown">
        <div class="dropdown__selected" @click="isVisible = !isVisible">
            <span>Select Items</span>
            <img v-if="isVisible" :src="require('../../assets/chevron-up-solid.svg')" alt="">
            <img v-else :src="require('../../assets/chevron-down-solid.svg')" alt="">
        </div>
        <div class="dropdown__popover" v-if="isVisible">
            <input type="text" v-model="searchItem" placeholder="Search"/>
            <span v-if="filteredUser.length === 0">No data available</span>
            <div class="dropdown__options">
                <ul>
                    <li v-for="(item,index) in filteredUser" :key="index">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </section>
</template>
