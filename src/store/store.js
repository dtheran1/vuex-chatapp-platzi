import { reactive } from "vue";

const store = reactive({
    username: 'Daniel',
    updateUsername(username) {
        this.username = username
    }
});

export default store