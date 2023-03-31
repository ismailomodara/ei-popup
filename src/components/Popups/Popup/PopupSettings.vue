<template>
  <div class='popup-settings'>
    <div class='page-heading'>
      <h5>Settings</h5>
    </div>
    <template v-if='elementType'>
      <div v-if="elementType.includes('container')">
        <p>Background color</p>
        <el-switch v-model="settings.styles.background" />
        <el-color-picker
          v-if="settings.styles.background"
          v-model="settings.styles.backgroundColor" size="large" />
        <p>Border radius</p>
        <el-input-number
          v-if="settings"
          v-model="settings.styles.borderRadius"
          :min="0" :max="8" />
      </div>
      <div v-if="elementType.includes('button')">
        <p>Padding</p>
        <el-input-number
          v-if="settings"
          v-model="settings.styles.padding"
          :min="12" :max="25" />
      </div>
      <div v-if="elementType.includes('input')">
        <p>Input Label</p>
        <el-switch v-model="settings.basic.label" />
        <el-input type='text' v-model='settings.basic.labelText' />
        <p>Input Placeholder</p>
        <el-input type='text' v-model='settings.basic.placeholder' />
      </div>
      <div v-if="elementType.includes('text')">
        <p>Font size</p>
        <el-input-number
          v-if="settings"
          v-model="settings.styles.fontSize"
          :min="12" :max="28" />
        <p>Font color</p>
        <el-color-picker
          v-model="settings.styles.color" size="large" />
        <p>Text align</p>
        <el-radio-group v-model="settings.styles.textAlign">
          <el-radio-button label="left" />
          <el-radio-button label="center" />
          <el-radio-button label="right" />
        </el-radio-group>
        <p>Font weight</p>
        <el-radio-group v-model="settings.styles.fontWeight">
          <el-radio-button label="normal">Regular</el-radio-button>
          <el-radio-button label="bold">Medium</el-radio-button>
          <el-radio-button label="bolder">Bold</el-radio-button>
        </el-radio-group>
      </div>
    </template>
  </div>
</template>
<script>
import { useAppStore } from "@/store";

export default {
	name: "PopupSettings",
	data() {
		return {
			tab: 'basic',
		};
	},
	computed: {
		store() {
			return useAppStore()
		},
		element() {
			const element = this.store.elements.find(element => element.id === this.store.editing)
			return element ? element : null
		},
    settings() {
      return this.element && this.element.settings ? { ...this.element.settings } : null
    },
    elementType() {
      return this.element && this.element.type;
    }
	}
};
</script>

<style lang='scss' scoped>
.popup-settings {
  height: 100%;
  background-color: var(--brand-white);
}

p {
  color:#111111;
}
</style>
