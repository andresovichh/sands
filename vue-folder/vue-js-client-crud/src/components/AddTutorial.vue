<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          
          v-model="tutorial.description"
          name="description"
        />
      </div>
            <div class="form-group">
        <label for="url">url</label>
        <input
          class="form-control"
          id="url"
          
          v-model="tutorial.url"
          name="url"
        />
      </div>
        <div class="form-group">
        <label for="published">published</label>
<!--         <input
          class="form-control"
          id="published"
          required
          v-model="tutorial.published"
          name="published"
          
        /> -->
        <td>
    <select name="show" class="form-control country-show" v-model="tutorial.published">
        <option v-bind:value="false">No</option>
        <option v-bind:value="true">Yes</option>
    </select>
</td>
      </div>
      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: 0
      },
      submitted: 0
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        url: this.tutorial.url,
        published: this.tutorial.published
      };
      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>