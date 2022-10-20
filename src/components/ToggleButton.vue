<script lang="ts" setup>
import { useToggle, useDark } from '@vueuse/core';
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <label :class="{ 'active': isDark }" class="toggle__button" >
    <span class="toggle__label">Dark mode</span>

    <input type="checkbox" :checked="isDark" @click="toggleDark()">
    <span class="toggle__switch"></span>
  </label>
</template>

<style lang="scss" scoped>
.toggle__button {
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.toggle__switch {
  cursor: pointer;
  display:inline-block;
  height:12px;
  border-radius:6px;
  width:36px;
  background: #BFCBD9;
  position:relative;
  margin-left: 12px;
  transition: all .25s;
}

input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
}

.toggle__switch::after, 
.toggle__switch::before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    left: 0;
    top: -3px;
    transform: translateX(0);
    transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
}

.toggle__switch::after {
    background: white;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

.active .toggle__switch::after {
    left: 18px;
    background: #0586FF;
}
</style>