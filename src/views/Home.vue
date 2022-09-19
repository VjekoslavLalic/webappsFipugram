<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
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
    };
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
