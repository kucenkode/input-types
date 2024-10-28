<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';
import { useInputsStore } from '@/stores/inputTypesStore';

const inputTypesStore = useInputsStore();
const typeIndex = ref(0);

const nextType = () => {
    typeIndex.value++;

    if (typeIndex.value === inputTypesStore.types.length) {
        inputTypesStore.showInputs = false;
        typeIndex.value = 0;
    }
}

const prevType = () => {
    if (typeIndex.value > 0) typeIndex.value--;
}
</script>

<template>
    <Modal open>
        <template #header-slot>
            <dt class="input-type"> {{ inputTypesStore.types[typeIndex].name }} </dt>
        </template>
        <template #main-slot>
            <dd class="input-type-description"> {{ inputTypesStore.types[typeIndex].description }} </dd>

            <section class="example-container">
                <section class="code-container">
                    <h3> Запись: </h3>
                    <pre class="code-example"><code> {{ inputTypesStore.types[typeIndex].ex }} </code></pre>
                </section>
                
                <section class="test-it">
                    <h3> Попробуй сейчас </h3>
                    <form v-if="inputTypesStore.types[typeIndex].name === 'reset'">
                        <input type="password">
                        <input type='reset' class="reset-form-btn all-btns">
                    </form>
                    <input v-else :type='inputTypesStore.types[typeIndex].name'> тип {{ inputTypesStore.types[typeIndex].name }}
                </section>
            </section>
        </template>
        <template #footer-slot>
            <button class="leave-btn all-btns" @click.prevent="inputTypesStore.showInputs = false"> Выйти </button>
            <button class="main-modal-btns all-btns" @click.prevent="prevType"> Назад </button>
            <button class="main-modal-btns all-btns" @click.prevent="nextType"> Дальше </button>
        </template>
    </Modal>
</template>