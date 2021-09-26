<style lang="scss" src="./multi-my-select.component.scss"></style>
<script lang="ts" src="./multi-my-select.component.ts"></script>

<template>
  <section class="dropdown">
    <div class="dropdown__selected" @click="isVisible = !isVisible">
      <span>Select Items</span>
      <img v-if="isVisible" :src="require('../../assets/chevron-up-solid.svg')" alt="">
      <img v-else :src="require('../../assets/chevron-down-solid.svg')" alt="">
    </div>
    <div class="dropdown__popover" v-if="isVisible">
      <div class="dropdown__popover-multiuser" v-if="multiUsers && multiUsers.length">
          <span v-for="(item,index) in multiUsers" :key="index">
            {{item}}
            <img :src="require('../../assets/delete-icon.svg')" alt="" @click="removeItem(index)">
          </span>
      </div>
      <input type="text" v-model="searchItem" placeholder="Search"/>
      <span v-if="filteredUser.length === 0">No data available</span>
      <div class="dropdown__options">
        <ul>
          <li v-for="(item,index) in filteredUser" :key="index">
            <input class="dropdown__options-checked" :value="item.name" v-model="multiUsers" type="checkbox"/>
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
