<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          Metalscraps-Bot
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <router-link v-for="menu in menus" :key="menu" :to="menu.to" custom v-slot="{ navigate, isActive }">
            <li @click="navigate" class="nav-link px-2 text-white" :class="[isActive && 'router-link-active']">{{ menu.name }}</li>
          </router-link>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "LayoutHeader",
  data() {
    return {
      "menus": [
        {to: "commands", name: "Commands"},
        {to: "stats", name: "Stats"}
      ]
    }
  }
}
</script>

<style scoped>

</style>