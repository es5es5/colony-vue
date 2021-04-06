<template>
  <tr v-if="(!_list || _list.length < 1) && _tag === 'tr'">
    <td :colspan="_colspan">{{ _loading ? loadingMessage : message }}</td>
  </tr>
  <ul v-else-if="(!_list || _list.length < 1) && _tag === 'ul'">
    <li>{{ _loading ? loadingMessage : message }}</li>
  </ul>
</template>

<script>
export default {
  name: 'NoDataMessage',
  created () {},
  mounted () {},
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true
    },
    colspan: {
      type: [Number, String],
      default: () => 1
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    message: {
      type: String,
      default: () => '검색 결과가 없습니다'
    },
    loadingMessage: {
      type: String,
      default: () => '데이터를 가져오는 중입니다'
    },
    tag: {
      type: String,
      default: () => 'tr'
    }
  },
  computed: {
    _colspan () {
      return this.colspan
    },
    _list () {
      return this.list
    },
    _loading () {
      return this.loading
    },
    _tag () {
      return this.tag
    }
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
