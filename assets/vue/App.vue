<template>
    <div>
        <b-overlay :show="isLoading">
            <Navbar/>
            <b-container>
                <router-view />
            </b-container>
        </b-overlay>
    </div>
</template>
<script>
import Navbar from "./components/Navbar";
import { mapGetters } from "vuex";

export default {
    name: "App",
    components: {
        Navbar
    },
    computed: {
        ...mapGetters({
            isLoading: "getLoading",
        }),
    },
}
</script>
<style></style>
