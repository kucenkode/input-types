<script setup lang="ts">
import inputTypesModal from '@/components/inputTypesModal.vue';
import { useInputsStore } from './stores/inputTypesStore';

const inputStore = useInputsStore();
</script>

<template>
    <div class="wrapper">
        <inputTypesModal />
        <button class="show-input-types-btn all-btns" @click.prevent="inputStore.showInputs = true"> Показать </button>
    </div>
</template>

<style scoped>

</style>
