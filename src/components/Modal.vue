<script setup lang="ts">
import { useInputsStore } from '@/stores/inputTypesStore';

const inputStore = useInputsStore();
</script>

<template>
    <Transition>
        <div v-if="inputStore.showInputs" class="modal-body-backdrop">
            <dialog class="modal-body">
                <header class="header">
                    <slot name="header-slot"></slot>
                </header>
                <main class="main">
                    <slot name="main-slot"></slot>
                </main>
                <footer class="footer">
                    <slot name="footer-slot"></slot>
                </footer>
            </dialog>
        </div>
    </Transition>
</template>