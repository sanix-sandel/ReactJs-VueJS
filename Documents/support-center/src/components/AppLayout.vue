<template>
    <div class="app-layout">
        <header class="header">
            
            <div>My shirt shop</div>
        </header>
    <!-- Menu will be here -->
        <router-view />
    </div>
</template>

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