<template>
  <div class="app">
    <top-section></top-section>
    <offices></offices>
    <contacts-form></contacts-form>
  </div>
</template>

<script>
import TopSection from './components/TopSection'
import Offices from './components/Offices'
import ContactsForm from './components/ContactUs'
export default {
  components: {
    TopSection,
    ContactsForm,
    Offices
  }
}
</script>

<style lang="scss">
  @import './scss/settings/html-tags.scss';
  @import './scss/settings/title.scss';
</style>
