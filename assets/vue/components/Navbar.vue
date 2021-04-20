<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand :to="{ name: 'Home' }">API Example</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
<!--                    <b-nav-item v-if="!isAuthenticated" :to="{ name: 'login' }"-->
<!--                    >Login</b-nav-item-->
<!--                    >-->
<!--                    <b-nav-item v-if="!isAuthenticated" :to="{ name: 'register' }"-->
<!--                    >Register</b-nav-item-->
<!--                    >-->
<!--                    <b-nav-item v-if="isAuthenticated" :to="{ name: 'dashboard' }"-->
<!--                    >Dashboard</b-nav-item-->
<!--                    >-->
<!--                    <b-nav-item v-if="isAuthenticated" @click="submit">Logout</b-nav-item>-->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
