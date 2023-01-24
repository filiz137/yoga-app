<template>
  <div>
    <h1>Hello0000</h1>
    <div v-for="pose in poses.data" :key="pose.id">
      <nuxt-link :to="{ path: pose.attributes.slug, query: { id: pose.id } }">
        <h2>{{ pose.attributes.name }} - id:{{ pose.id }}</h2>
      </nuxt-link>
      <p>{{ pose.attributes.description }}</p>
    </div>
  </div>
</template>

<script>
import { allPosesQuery } from "~/graphql/queries";

export default {
  name: "IndexPage",
  data() {
    return {
      poses: [],
    };
  },
  apollo: {
    poses: {
      prefetch: true,
      query: allPosesQuery,
    },
  },
};
</script>
