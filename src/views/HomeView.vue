<script>
  import { RouterView, RouterLink } from 'vue-router';
  import InputSearch from '@/components/InputSearch.vue';
  import ProfileCard from '@/components/ProfileCard.vue';
  import ChatItem from '@/components/ChatItem.vue';
  // import store from '../store/store'
  import { mapState ,mapGetters } from 'vuex';

  export default {
    components: {
      RouterView,
      RouterLink,
      InputSearch,
      ProfileCard,
      ChatItem,
    },
    data() {
      return {
        // store,
        search: '',
        profile: {
          username: 'Diana Nerd',
          avatar: '/avatars/avatar.jpg',
        },
        channels: [
          { id: 1, name: 'General', messages: 27 },
          { id: 2, name: 'Emergencias', messages: null },
          { id: 3, name: 'Anuncios', messages: 2 },
          { id: 4, name: 'Proyecto 1', messages: 24 },
          { id: 5, name: 'Non-work', messages: null },
          { id: 6, name: 'Atención a clientes', messages: 120 },
        ],
      };
    },
    computed: {
      ...mapState(['status']),
      ...mapGetters('profile', ['firstName']),
      ...mapGetters('channels', ['getChannels']),
    },
  };
</script>

<template>
  <div class="home">
    <aside>
      <InputSearch v-model="search" />
      <ProfileCard
        avatar="https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/118572605_10216687337992247_4409357028681710099_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBxeLVhyUCRFRmUdwujMRO8t9El4Ms8Jzy30SXgyzwnPBMv22ms9i6FdAiZbVwjes&_nc_ohc=qYg6WwrU9CUAX9o8aFX&_nc_ht=scontent.fbaq1-1.fna&oh=00_AfAhx_hbbaSZCcy8PsH8wO6aJeToOPPPZhug9Bqb3oSvXQ&oe=646F7637"
        username="Daniel"
        :status="status"
      />
      <RouterLink to="/" class="channels-title"
        >Canales <Icon icon="carbon:hashtag"
      /></RouterLink>
      <div class="channels">
        <ChatItem
          v-for="channel in getChannels(search)"
          :key="channel.id"
          :id="channel.id"
          :name="channel.name"
          :messages="channel.messages"
        />
      </div>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    @apply flex h-screen;
    aside {
      @apply flex flex-col w-80 min-w-max px-6 py-5 gap-4 bg-zinc-800;
      .channels-title {
        @apply flex items-center gap-2 mt-2 ml-3 text-xl font-bold text-neutral-200;
      }
      .channels {
        @apply flex flex-col gap-2 overflow-y-auto;
      }
    }
    main {
      @apply w-full;
    }
  }
</style>
