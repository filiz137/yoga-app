<template>
  <div>
    <h1>Hello {{ pose.data.attributes.name }}</h1>
    <img :src="'http://localhost:1337' + pose.data.attributes.image.data.attributes.url" :alt="pose.data.attributes.name">
    <nuxt-link to="/">back!!! </nuxt-link>
  </div>
</template>

<script>
import { singlePoseQuery } from "~/graphql/queries";

export default {
  name: "IndexPage",
  data() {
    return {
      pose: [],
    };
  },
  apollo: {
    pose: {
      prefetch: true,
      query: singlePoseQuery,
      variables() {
        return {
          id: this.$route.query.id,
        };
      },
    },
  },
};
</script>
