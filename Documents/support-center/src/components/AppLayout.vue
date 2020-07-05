<template>
    <div class="app-layout">
        <header class="header">
            
            <div>My shirt shop</div>
        </header>
        <NavMenu/>
    <!-- Menu will be here -->
        <router-view />
    </div>
</template>


<script>
import NavMenu from './NavMenu.vue'
export default {
    components:{
        NavMenu,
    },
}
</script>


<style lang="stylus">
    @import '../style/main';
</style>

<style lang="stylus" scoped>
    .header {
        .img {
            width: 64px;
            height: 64px;
        }
    }
</style>