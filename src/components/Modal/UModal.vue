<template>
  <TransitionRoot appear :show="props.isOpen">
    <Dialog as="div" @close="emits('closeModal')" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              :class="dialogClass"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                <slot name="header" />
              </DialogTitle>
              <slot name="body" />
              <slot name="footer" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import {
  Dialog,
  TransitionChild,
  TransitionRoot,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  dialogClass: {
    type: [String, Object, Array],
    default() {
      return "max-w-xl";
    },
  },
});
const emits = defineEmits(["closeModal"]);
</script>
