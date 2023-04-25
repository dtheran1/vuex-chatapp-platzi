<script>
  // import store from '../store/store';
  import { mapState, mapActions } from 'vuex';
  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState({
        username: (state) => state.profile.username,
      }),
    },
    methods: {
      ...mapActions('profile', ['updateUsername']),
    },
  };
</script>

<template>
  <div class="profile">
    <div class="box">
      <img src="https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/118572605_10216687337992247_4409357028681710099_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBxeLVhyUCRFRmUdwujMRO8t9El4Ms8Jzy30SXgyzwnPBMv22ms9i6FdAiZbVwjes&_nc_ohc=qYg6WwrU9CUAX9o8aFX&_nc_ht=scontent.fbaq1-1.fna&oh=00_AfAhx_hbbaSZCcy8PsH8wO6aJeToOPPPZhug9Bqb3oSvXQ&oe=646F7637" alt="avatar" />
      <label for="username">Nombre de usuario</label>
      <input
        type="text"
        placeholder="Jane Smith"
        :value="username"
        @input="updateUsername($event.target.value)"
      />
      <button @click="$router.push('/')">Acceder</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .profile {
    @apply flex justify-center items-center h-screen;
    .box {
      @apply flex flex-col items-center gap-2 p-6 rounded-xl bg-zinc-800;
      img {
        @apply w-32 rounded-full border-8 border-zinc-600;
      }
      label {
        @apply w-full;
      }
      input {
        @apply px-3 py-2 rounded-md bg-zinc-900;
      }
      button {
        @apply w-full px-3 py-2 mt-2 rounded-md bg-zinc-600;
      }
    }
  }
</style>
