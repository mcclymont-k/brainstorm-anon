<template>
  <div class="app">
    <div class='mainContainer'>
      <div class='ideaContainer'>
        <button class='plusButton' v-on:click='modalOpen'>+</button>
        <!--Popup modal  -->
        <div class='modal' v-bind:class="{'modalVisible': showAlert}">
          <div class='modalContent'>
            <button class='close' v-on:click='modalClose'>X</button>
            <form class='basicForm'>
              Add an idea:</br>
              <textarea cols='42' rows='1' name='ideaTitle' placeholder='Got an idea...' class='ideaTitle' /></br></br>
              Add a short paragraph with basic details:</br>
              <textarea rows='10' cols='42' name='ideaDetail' placeholder='Add some details' class='ideaDetail' />
            </br></br>
              <input type='submit' value='Submit' v-onclick='updateData'>
            </form>
          </div>
        </div>
        <div class='ideaCloud'>
          <h1>Brainstorm</h1>
        </div>
      </div>
      <div v-for="(data, index) in fakeData">{{data.title}}</div>
      <div v-bind:class="{'tripod': showAlert, 'rimple': showClass}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      showAlert: false,
      showClass: true,
      fakeData: [
        {
          title: 'Banking',
          sub: 'ideas'
        },
        {
          title: 'Accounts',
          sub: 'ideas'
        },
        {
          title: 'Clients',
          sub: 'ideas'
        }]
    };
  },
  methods: {
    modalOpen() {
      this.showAlert = true
    },

    modalClose() {
      this.showAlert = false
    },

    updateDate() {
      
    }
  }
};
</script>

<style scoped>
  .mainContainer {
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: 33vh 33vh 33vh;
    cursor: grab;
  }

  .mainContainer:active {
    cursor: grabbing;
  }
  .ideaContainer {
    position: relative;
    display: flex;
  }

  .ideaCloud {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }

  .plusButton {
    position: absolute;
    right: 0;
    margin: 10px;
  }

  .modal {
    display: none;
  }

  .modalVisible {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    align-items: center;
    justify-content: center;
  }

  .modalContent {
    background-color: gold;
  }

  .ideaDetail {
    word-break: break-word;
    resize: none;
  }

  .ideaTitle {
    word-break: break-word;
    resize: none;
  }

  .basicForm {
    height: 400px;
    width: 300px;
    margin: 30px;
    background-color: gold;
  }

  .close{
    margin: 10px;
  }

</style>
