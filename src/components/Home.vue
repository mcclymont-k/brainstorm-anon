<template>
  <div class="app">
    <div class='mainContainer'>
      <div class='modal' v-bind:class="{'modalVisible': showAlert}">
        <div class='modalContent'>
          <button class='close' v-on:click='modalClose'>X</button>
          <form class='basicForm' @submit.prevent=''>
            Add an idea:</br>
            <textarea cols='42' rows='1' name='ideaTitle' placeholder='Got an idea...' class='ideaTitle' v-model="newData.title" lazy/></br></br>
            Add a short paragraph with basic details:</br>
            <textarea rows='10' cols='42' name='ideaDetail' placeholder='Add some details' class='ideaDetail' v-model='newData.sub' lazy/>
          </br></br>
            <input type='submit' value='Submit' v-on:click='updateData'>
          </form>
        </div>
      </div>
      <div class='ideaContainer centreIdea'>
        <button class='simpleButton' v-on:click='modalOpen'>+</button>
        <button class='simpleButton editButton' v-on:click='editModalOpen'>*</button>
        <div class='ideaCloud'>
          <h1>{{this.centreIdea.title}}</h1>
        </div>
      </div>
      <div v-for="(data, index) in this.centreIdea.subIdeas" class='ideaCloud'>
          <h2 v-on:click='selectNewIdea(data, index)'>{{data.title}}</h2>
      </div>
      <button v-on:click='goBack' class='backwardsButton'><</button>
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
      nestingNumber: 0,
      indexWatch: 0,
      newData: {
        title: '',
        sub: '',
        subIdeas: []
      },
      centreIdea: {
        title: 'Brainstorm-anon',
        sub: 'sdfgsdfg',
        index: 0,
        subIdeas: [
          ]
      },
      fakeData: {}
    };
  },
  methods: {

    modalOpen() {

      if (this.centreIdea.subIdeas.length === 8) {
        console.log("Too many arguments")
      } else {
      this.showAlert = true}
    },

    modalClose() {
      this.showAlert = false
    },

    updateData() {
      let subIdeas = this.centreIdea.subIdeas
      subIdeas.push(this.newData)
      this.newData = {
        title: '',
        sub: '',
        subIdeas: []
      }
      if (this.nestingNumber === 0) {
        this.fakeData = this.centreIdea
      }
      this.modalClose();
    },

    editModalOpen() {

    },

    selectNewIdea(data, index) {
      this.nestingNumber +=1
      if (this.nestingNumber === 1) {
        this.indexWatch = index
        this.centreIdea = {}
        this.centreIdea = data
      } else if (this.nestingNumber === 2) {
        this.centreIdea = {}
        this.centreIdea = data
      } else {this.nestingNumber -=1}

    },

    goBack() {
      this.nestingNumber -= 1
      console.log(this.fakeData.subIdeas)
      if (this.nestingNumber < 0) {
        this.nestingNumber += 1
      } else if (this.nestingNumber === 0) {
        this.centreIdea = this.fakeData
      } else if (this.nestingNumber === 1) {
        this.centreIdea = this.fakeData.subIdeas[this.indexWatch]
      }
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
  }

  .backwardsButton {
    position: absolute;
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

  }

  .ideaCloud h1{
    border: 1px solid black;
    padding: 10px;
    font-size: 1.5vw;
    max-height: 200px;
    overflow: auto;

  }

  .ideaCloud h2{
    border: 1px solid black;
    padding: 5px;
    margin: 20px;
    font-size: 1vw;
    max-height: 250px;
    overflow: auto;
  }

  .simpleButton {
    position: absolute;
    right: 0;
    margin: 50px;
    cursor: grab;
  }

  .editButton {
    left: 0;

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
    cursor: grabbing;
  }

  .centreIdea {
    grid-column-start: 2;
    grid-row-start: 2;
  }

  .ideaCloudMed{
    color: red;
  }

  @media screen and (max-width: 1000px){
    .mainContainer {
      grid-template-columns: 100vw;
      grid-template-rows: 25vh 25vh 25vh 25vh 25vh 25vh 25vh 25vh 25vh 25vh;
      grid-auto-flow: column;
    }

    .ideaCloud {
      border-bottom: 1px solid black;
      margin: 20px;
    }

    .ideaCloud h2 {
      font-size: 2.5vw;
    }

    .ideaCloud h1 {
      font-size: 3vw;
    }
    .centreIdea {
      grid-column-start: 1;
      grid-row-start: 1;
    }
  }

</style>
