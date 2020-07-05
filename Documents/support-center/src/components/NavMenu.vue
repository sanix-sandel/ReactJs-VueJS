<template>
    <nav class="menu">
        <router-link :to="{name:'home'}" exact>Home</router-link>
        <router-link :to="{name:'faq'}" exact>FAQ</router-link>
       
    </nav>
</template>

<style lang="stylus" scoped>
@import '../style/imports';

.router-link-active {
border-bottom-color: $primary-color;
}
</style>