<template>
  <div class="filters-page">
    <vuestic-widget headerText="Show filters">
      <div class="row">
        <div class="col-md-12">
          <div slot="body">
            <div class="row filters-page__filter-bar-container">
              <filter-bar
                v-model="name"
                class="filters-page__filter-bar"
                label="Name"
              ></filter-bar>
              <filter-bar
                v-model="email"
                class="filters-page__filter-bar"
                label="Email"
              ></filter-bar>
              <vuestic-simple-select
                class="filters-page__filter-bar"
                label="City"
                v-model="city"
                 :options="cityList" value=""
              ></vuestic-simple-select>
            </div>
          </div>
          <div class="filters-page__tags">
            <vuestic-tag
              v-if="name"
              :name="`Name: ${ name }`"
              removable
              @remove="name = ''"
            ></vuestic-tag>
            <vuestic-tag
              v-if="email"
              :name="`Email: ${ email }`"
              removable
              @remove="email = ''"
            ></vuestic-tag>
            <vuestic-tag
              v-if="city"
              :name="`City: ${ city }`"
              removable
              @remove="city = ''"
            ></vuestic-tag>
            <span
              v-if="this.city || this.name || this.email"
              class="filters-page__clear-all-text"
              @click="clearAll"
            >
              Clear all filters
            </span>
          </div>
        </div>
      </div>
    </vuestic-widget>
    <vuestic-widget>
      <div class="table-responsive">
        <table class="table table-striped first-td-padding">
          <thead>
          <tr>
            <td class="filters-page__table-heading">{{ $t('tables.headings.name') }}</td>
            <td class="filters-page__table-heading">{{ $t('tables.headings.email') }}</td>
            <td class="filters-page__table-heading">{{ $t('tables.headings.city') }}</td>
            <td class="filters-page__table-heading">{{ $t('tables.headings.score') }}</td><!--align="right" -->
            <td></td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in filteredItems" v-bind:key="item.email">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.score }}</td><!--align="right" -->
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </vuestic-widget>
  </div>
</template>

<script>
import VuesticWidget
  from '../../../vesc/widget/VuesticWidget.vue'
import FilterBar
  from '../../../vesc/datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '../../../vesc/simple-select/VuesticSimpleSelect.vue'
//import { SpringSpinner } from 'epic-spinners'
import { cityList, itemList } from './filtersData'
export default {
  name: 'filters',
  components: {
    VuesticWidget, FilterBar, VuesticSimpleSelect
  },
  data () {
    return {
      name: '',
      email: '',
      city: '',
      cityList: cityList,
      itemList: itemList,
    }
  },
  methods: {
    clearAll () {
      this.name = ''
      this.email = ''
      this.city = ''
    }
  },
  computed: {
    filteredItems () {
      let filteredItems = this.itemList
      if (this.name) {
        filteredItems = filteredItems.filter(item => item.name.toUpperCase()
          .search(this.name.toUpperCase()) !== -1)
      }
      if (this.email) {
        filteredItems = filteredItems.filter(item => item.email.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      }
      if (this.city) {
        filteredItems = filteredItems.filter(item => item.city.toUpperCase()
          .search(this.city.toUpperCase()) !== -1)
      }
      return filteredItems
    }
  }
}
</script>

<style lang="scss">
  @import "../../../sass/resources/resources";
.filters-page {
  &__tags {
    display: flex;
  }
  &__filter-bar {
    width: 300px;
  }
  &__filter-bar-container {
    margin: 0;
    justify-content: space-between;
  }
  &__table-heading {
    color: $vue-green
  }
  &__collapse {
    .vuestic-collapse__body {
      background-color: white;
    }
  }
  &__clear-all-text {
    cursor: pointer;
    color: $vue-green;
    margin-top: 0.3rem;
  }
}
</style>
