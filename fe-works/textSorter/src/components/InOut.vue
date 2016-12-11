<template>
  <div class="inout">
    <textarea v-model="txt" @keydown="handleChange()" placeholder="Input some text">
    </textarea>
    <input type="checkbox" id="rev" v-model="rev" @change="handleChange()"><label for="rev">reverse</label>
    <output v-html="sortedText"></output>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data() {
    return {
      txt: '',
      sortedText: '',
      rev: false,
    };
  },
  methods: {
    handleChange() {
      let newTxt = this.txt.split('\n').map(t => t.trim());
      newTxt = this.rev ? newTxt.sort().reverse() : newTxt.sort();
      newTxt = newTxt.join('<br/>');
      this.sortedText = newTxt;
    },
  },
};
</script>

<style scoped>
  textarea {
    display: block;
    width: 100%;
    height: 200px;
    resize: none;
  }

  .inout {
    text-align: left;
  }

  output {
    display: block;
    margin: 20px auto;
    text-align: left;
  }
</style>
