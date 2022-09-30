<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <form @submit.prevent="postNewImage" class="form-inline mb-5">
        <div class="form-group">
          <label for="imageUrl">Image URL</label>
          <input
            v-model="newImageUrl"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image URL"
            id="imageUrl"
          />
        </div>
        <div class="form-group">
          <label for="imageDescription">Description</label>
          <input
            v-model="newImageDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image description"
            id="imageDescription"
          />
        </div>
        <button type="submit" class="btn btn-primary ml-2">Post image</button>
      </form>

      <instagram-card
        v-for="card in filteredCards"
        :key="card.url"
        :info="card"
      />
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
// <instagram-card v-for="(card, drac) in filteredCards" :key="drac" :info="card" /> moje rjesenje
// @ is an alias to /src
import InstagramCard from "@/components/InstagramCard.vue";
import store from "@/store";
import { db } from "@/firebase";
let cards;

cards = [
  {
    url: "https://picsum.photos/id/1/400/400",
    description: "laptop",
    time: "few minutes ago",
  },
  {
    url: "https://picsum.photos/id/2/400/400",
    description: "laptop 2",
    time: "few minutes ago",
  },
  {
    url: "https://picsum.photos/id/3/400/400",
    description: "laptop 3",
    time: "few minutes ago",
  },
];

export default {
  name: "Home",
  data: function () {
    return {
      cards: cards,
      store: store,
      newImageDescription: "",
      newImageUrl: "",
    };
  },
  methods: {
    postNewImage() {
      console.log("OK");
      const imageUrl = this.newImageUlr;
      const imageDescription = this.newImageDescription;

      db.collection("posts").add({
        url: imageUrl,
        desc: imageDescription,
        email: store.currentUser,
      });
    },
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.cards.filter((card) => card.description.indexOf(termin) >= 0);
    },
  },
  components: {
    InstagramCard,
  },
};
</script>
