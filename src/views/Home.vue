<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <template v-for="product in products">
          <b-col class="product-container" xs="12" sm="12" md="4" lg="4" xl="2" :key="product.id">
            <div class="product-card card card-bordered">
              <b-img
                :src="require(`@/assets/img/products/product_${product.id}.jpg`)"
                class="product-image card-img-top"
              />
              <span class="product-title mt-1 ml-1">{{ product.name }}</span>
              <span class="product-price ml-1 text-danger">{{ product.price }}</span>
            </div>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Лагман',
          price: '175 сом'
        },
        {
          id: 2,
          name: 'Салат из греческого ореха',
          price: '180 сом'
        },
        {
          id: 3,
          name: 'Салат ассорти',
          price: '500 сом'
        },
        {
          id: 4,
          name: 'Ташкентский аш',
          price: '335 сом'
        },
        {
          id: 5,
          name: 'Простой аш',
          price: '65 сом'
        },
        {
          id: 6,
          name: 'Нарынские пельмени',
          price: '90 сом'
        },
        {
          id: 7,
          name: 'Шаурма два друга самые вкусные',
          price: '120 сом'
        },
        {
          id: 8,
          name: 'Гамбургер двойной',
          price: '210 055.100 сом'
        },
        {
          id: 9,
          name: 'Манты самые самые вкусные мантышки плюс много мясо в подарок',
          price: '135 сом'
        },
      ]
    }
  }
}
</script>
