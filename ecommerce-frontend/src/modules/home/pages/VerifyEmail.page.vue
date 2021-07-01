<template>
    <div>
        <h1>Hola</h1>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "vue-router";

import { AuthService } from "../../../core/services/auth/auth.service";

@Component
export default class VerifyEmailPage extends Vue {
    async mounted(): Promise<void> {
        const { token } = this.$route.query;
        if (token) {
            try {
                const data = await new AuthService().verifySignUp(token as string);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
