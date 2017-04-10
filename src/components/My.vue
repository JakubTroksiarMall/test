<template>
  <div class="my">
    <h1>Hello world</h1>

    <div class="field-group" style="width: 200px;">
      <md-input-container>
        <label for="movie">Movie</label>
        <md-select name="movie" id="movie" v-model="movie">
          <md-option value="fight_club">Fight Club</md-option>
          <md-option value="godfather">Godfather</md-option>
          <md-option value="godfather_ii">Godfather II</md-option>
          <md-option value="godfather_iii">Godfather III</md-option>
          <md-option value="godfellas">Godfellas</md-option>
          <md-option value="pulp_fiction">Pulp Fiction</md-option>
          <md-option value="scarface">Scarface</md-option>
        </md-select>
      </md-input-container>

    </div>

    <md-button id="confirm-button" class="md-raised md-primary" @click.native="sayHi">Set Pulp Fiction</md-button>
  </div>
</template>

<script>
  export default {
    name: 'my',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      sayHi: function () {
        alert('some')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
