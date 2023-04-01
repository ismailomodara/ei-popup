<template>
  <div class='popup-settings'>

    <app-section-heading
      title='Settings'
      description='Easily control popup and popup elements settings here'
    />

    <section>
      <h6>Popup</h6>
      <popup-settings-property title='Background Color'>
        <template #control>
          <el-color-picker
            v-model="popupSettings.backgroundColor" />
        </template>
      </popup-settings-property>
      <popup-settings-property title='Spacing'>
        <template #control>
          <el-input-number v-model="popupSettings.spacing" :min="4" :max="16" size='small' />
        </template>
      </popup-settings-property>
      <popup-settings-property title='Alignment'>
        <template #control>
          <el-radio-group v-model="popupSettings.alignment">
            <el-radio-button label="flex-start">To</el-radio-button>
            <el-radio-button label="center">Mi</el-radio-button>
            <el-radio-button label="flex-end">Bo</el-radio-button>
          </el-radio-group>
        </template>
      </popup-settings-property>
    </section>

    <section>
      <h6>Element</h6>

      <template v-if='elementType'>
        <template v-if="elementType.includes('input')">
          <popup-settings-property title='Placeholder'>
            <template #control>
              <el-input type='text' v-model='basic.placeholder' />
            </template>
          </popup-settings-property>
          <popup-settings-property title='Label'>
            <template #label>
              <el-switch v-model="basic.label" />
            </template>
            <template #control>
              <el-input v-if='basic.label' type='text' v-model='basic.labelText' />
            </template>
          </popup-settings-property>
        </template>

        <template v-if="elementType.includes('container')">
          <popup-settings-property title='Background color'>
            <template #label>
              <el-switch v-model="styles.background" />
            </template>
            <template #control>
              <el-color-picker v-model="styles.backgroundColor" />
            </template>
          </popup-settings-property>
          <popup-settings-property title='Border radius'>
            <template #control>
              <el-input-number v-model="styles.borderRadius" :min="0" :max="8" size='small' />
            </template>
          </popup-settings-property>
        </template>

        <template v-if="elementType.includes('button')">
          <popup-settings-property title='Padding'>
            <template #control>
              <el-input-number v-model="styles.padding" :min="12" :max="25" size='small' />
            </template>
          </popup-settings-property>
        </template>

        <template v-if="elementType.includes('text')">
          <popup-settings-property title='Font size'>
            <template #control>
              <el-input-number v-model="styles.fontSize" :min="12" :max="24" size='small' />
            </template>
          </popup-settings-property>
          <popup-settings-property title='Font color'>
            <template #control>
              <el-color-picker v-model="styles.color" />
            </template>
          </popup-settings-property>
          <popup-settings-property title='Font weight'>
            <template #control>
              <el-radio-group v-model="styles.fontWeight">
                <el-radio-button label="normal">Re</el-radio-button>
                <el-radio-button label="bold">Me</el-radio-button>
                <el-radio-button label="bolder">Bo</el-radio-button>
              </el-radio-group>
            </template>
          </popup-settings-property>
          <popup-settings-property title='Text align'>
            <template #control>
              <el-radio-group v-model="styles.textAlign">
                <el-radio-button label="left">
                  <i class='ei-icon--align-left' />
                </el-radio-button>
                <el-radio-button label="center">
                  <i class='ei-icon--align-center' />
                </el-radio-button>
                <el-radio-button label="right">
                  <i class='ei-icon--align-right' />
                </el-radio-button>
              </el-radio-group>
            </template>
          </popup-settings-property>
        </template>

        <template v-if="elementType.includes('image')">
          <popup-settings-property title='Height'>
            <template #control>
              <el-input-number v-model="styles.height" :min="32" :max="64" size='small' />
            </template>
          </popup-settings-property>
          <popup-settings-property title='Object fit'>
            <template #control>
              <el-radio-group v-model="styles.objectFit">
                <el-radio-button label="contain">Contain</el-radio-button>
                <el-radio-button label="cover">Cover</el-radio-button>
              </el-radio-group>
            </template>
          </popup-settings-property>
        </template>
      </template>

      <div v-else class="empty">
        <img src='../../../assets/images/empty.svg' alt="Empty" />
        <p>No selected element</p>
      </div>
    </section>
  </div>
</template>
<script>
import { useAppStore } from "@/store";
import AppSectionHeading from '@/components/App/AppSectionHeading.vue'
import PopupSettingsProperty from '@/components/Popups/Popup/PopupSettingsProperty.vue'

export default {
	name: "PopupSettings",
  components: { PopupSettingsProperty, AppSectionHeading },
	computed: {
		store() {
			return useAppStore()
		},
    popupSettings() {
      return this.store.popup.settings;
    },
    popupElements() {
      return this.store.popup.elements;
    },
		element() {
			const element = this.popupElements.find(element => element.id === this.store.editing)
			return element ? element : null
		},
    elementType() {
      return this.element && this.element.type;
    },
    elementSettings() {
      return this.element && this.element.settings ? { ...this.element.settings } : null
    },
    basic() {
      return this.elementSettings ? this.elementSettings.basic : null
    },
    styles() {
      return this.elementSettings ? this.elementSettings.styles : null
    }
	}
};
</script>

<style lang='scss' scoped>
.popup-settings {
  width: 100%;
  height: auto;
  padding-bottom: 80px;
  background-color: var(--app-white);

  section {
    margin-bottom: 20px;

    h6 {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.875rem;
      color: var(--app-primary);
    }
  }

  .empty {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    opacity: 0.74;

    img {
      margin: 40px 0 10px;
      height: 80px;
      width: auto;
    }

    p {
      color: var(--text-tertiary);
      font-size: 0.875rem;
    }
  }
}
</style>
