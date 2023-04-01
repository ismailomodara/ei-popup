<template>
  <div class="element-image">
    <div
      class="element-image-preview"
      v-loading
      :style="styles"
    >
      <img
        v-if="value"
        :src="value"
        :alt="'Image'"
      />
      <img
        v-else-if="thumbnail"
        :src="thumbnail"
        :alt="'Image'"
      />
    </div>
    <el-upload
      v-if="setValue === '' || editing"
      action=""
      :on-change="setImage"
      :show-file-list="false"
      :auto-upload="false"
      accept="image/*"
    >
      <div class='element-image-trigger'>
        <i class='ei-icon--image' />
        <span>Click to {{ editing ? 'change' : 'select' }}</span>
      </div>
    </el-upload>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "PopupElementImage",
	props: {
		editing: {
			type: Boolean,
			default: false
		},
		value: {
			type: String,
			default: ""
		},
    settings: {
      type: Object,
      default() {
        return {}
      }
    }
	},
	data() {
		return {
      thumbnail: "",
			file: null,
      uploading: false
		}
	},
	computed: {
		setValue: {
			get() {
				return this.value
			},
			set(value) {
				this.$emit("update", value)
			}
		},
    styles() {
      const { height } = this.settings.styles;
      return {
        ...this.settings.styles,
        height: height + "px"
      }
    }
	},
  methods: {
    setImage(event) {
      if (event.raw) {
        if (event.size / 1024 / 1024 < 0.5) {
          this.uploading = true;

          const reader = new FileReader();
          reader.onload = e => {
            this.thumbnail = e.target.result;
            this.setValue = this.thumbnail;
          };
          reader.readAsDataURL(event.raw);

          setTimeout(() => {
            this.uploading = false;
          }, 1000);
        } else {
          this.$notify({
            type: "info",
            message: "Image size cannot be more than 500KB"
          });
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.element-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: auto;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &-trigger {
    display: flex;
    align-items: center;

    i {
      color: #ffffff;
      font-size: 1rem;
      margin-right: 5px;
    }

    span {
      font-size: 12px;
      color: #ffffff;
      font-weight: 600;
    }
  }
}
</style>
