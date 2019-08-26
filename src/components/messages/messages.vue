<template>
    <ul class="messages">
        <li class="message" v-for="message in messages" :key="message.id"
        :class="{ error: message.isError }">
            <div class="background">
                <div class="title-bar">
                    {{ message.status }} {{ message.isError ? 'Error' : '' }}
                    <button class="close" @click="dismissMessage(message.id)">
                        <font-awesome-icon icon="times" />
                    </button>
                </div>
                <div class="message-text">
                    {{ message.data ? message.data : message.message }}
                </div>
                <!-- <div class="message-text">
                    {{ message.config ? message.config.url : message.stack }}
                </div> -->
                <div class="progress" />
            </div>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'messages',
    computed: {
        messages () {
            return this.$store.getters['messages/messages'];
        },
    },
    methods: {
        dismissMessage (messageId) {
            this.$store.dispatch('messages/dismissMessage', messageId);
        },
    },
    created () {
    },
};

</script>
<style lang="scss" scoped>
@import '@/scss/index.scss';

@keyframes dropIn {

    from {
        opactiy: 0;
        transform: translateY(-50%);
    }

    to {
        transform: translateY(0);
        opacity: 0.7;
    }
}

.messages {
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    z-index: 99999;
    .message {
        min-width: 200px;
        animation: dropIn 0.5s;
        animation-fill-mode: backwards;
        border-radius: 2px;
        margin: 1rem;
        background: #ffffff;
        color: #ffffff;
        max-width: 300px;
        height: auto;
        overflow: hidden;
        transition: opacity 0.5s;
        opacity: 0.9;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 10px;
        border-left: 10px solid $aqua;

        &.error {
            border-left: 10px solid $cherry;

            .background {

                @include linedBackground($cherry);
            }
        }

        &:hover {
            opacity: 1;
        }

        .background {

            @include linedBackground($aqua);
        }

        .message-text {
            padding: 0.5rem;
            color: white;
        }

        .title-bar {
            padding: 0.5rem;
            background: rgba(0, 0, 0, 0.1);
        }

        .close {
            position: absolute;
            top: 0.4rem;
            right: 0.5rem;
            padding: 0;
            color: white;
        }
    }
}
</style>
