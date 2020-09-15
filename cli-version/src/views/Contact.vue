<script>
export default {
  name: 'contact',
  data() {
    return {
      address: '9274 Beurre Ave, Paris, France',
      email: 'hello@cafewithavue.bakery',
      phone: '+08 88 88 88 88 88'
    }
  }
}
</script>

<template>
  <div>
    <h2>Contact Us</h2>

    <p>Address: <strong>{{ address }}</strong></p>
    <p>Phone: <strong>{{ phone }}</strong></p>
    <p>Email: <strong>{{ email }}</strong></p>

    <h2>Hours</h2>

    <ul>
      <li>M-F: <strong>06:00 to 16:00</strong></li>
      <li>Saturday: <strong>07:00 to 14:00</strong></li>
      <li>Sunday: <strong>07:00 to 12:00</strong></li>
    </ul>
  </div>
</template>

<style lang="scss">
ul {
  padding: 0 32px;
  list-style: none;
}
</style>