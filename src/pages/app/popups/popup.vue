<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <ul>
        <li v-for="component in components" :key="component.id" class="list-group-item" @click="add(component)">
          <p>{{ component.name }}</p>
        </li>
      </ul>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable
        class="list-group"
        v-model="selected"
        v-bind="dragOptions"
        handle=".handle"
        item-key="order"
      >
        <template #item="{ element }">
          <div class="border">
            <span class="dragger handle">DD</span>
            <div class="list-group-item" :key="element.id">
              <p v-if="editing !== element.id" @click="edit(element.id)">{{ element.name }}</p>
              <div v-else>
                <input v-model="element.name" type="text" />
                <span @click="editing = null">Done</span>
              </div>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";


export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      enabled: true,
      components: [
        {
          id: 'input',
          name: 'Input'
        },
        {
          id: 'text',
          name: 'Text'
        },
        {
          id: 'image',
          name: 'Image'
        },
        {
          id: 'button',
          name: 'Button'
        }
      ],
      selected: [],
      drag: false,
      editing: null
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 250,
        group: "people",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    add(component) {
      const obj = {
        ...component,
        id: component.id + '-' + this.selected.length
      }
      this.selected.push(obj)
    },
    edit(element) {
      this.editing = element
    }
  }

};
</script>

<style scoped lang="scss">
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background-color: #4dcd8450;
}
.not-draggable {
  cursor: no-drop;
}

.row {
  display: flex;
  justify-content: space-around;
  padding: 40px;
}

.list-group-item {
  color: #111111;
}


.col-3,
.col-6 {
  position: relative;
}

.list-group {
  min-height: 20px;
  display: -webkit-box;
  display: flex;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  border: 1px dashed red;
  padding: 40px;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.border {
  padding: 10px;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 40px;

  &:hover {
    border-color: #111111;
  }

  .dragger {
    cursor: move;
    display: inline-block;
    margin-right: 10px;
    color: black;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
}
</style>
