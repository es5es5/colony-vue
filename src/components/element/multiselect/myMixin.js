export default {
  mounted () {
    if (
      this.preselectFirst &&
      !this.internalValue.length &&
      this.options.length
    ) {
      if (this._isKey) {
        if (this.multiple) {
          const dataValueArray = this.dataValue.concat()
          dataValueArray.forEach(data => {
            const result = this.filteredOptions.filter(item => {
              return item[this.dataKey] === data
            })
            this.select(result[0])
          })
        } else {
          this.select(this.filteredOptions.filter(item => {
            return item[this.dataKey] === this.dataValue
          }))
        }
      } else {
        this.select(this.filteredOptions[0])
      }
    }
    this.initCallback = true
  },
  computed: {
    _isKey () { return this.dataKey && this.dataKey !== '' },
  },
  props: {
    dataKey: {
      type: String,
      default: () => ''
    },
    dataValue: {
      type: [String, Array],
      default: () => ''
    }
  },
  data () {
    return {
      initCallback: false,
      watcherCount: 0,
    }
  },
  watch: {
    value (newVal, oldVal) {
      let _newVal = null
      if (this.watcherCount === 0) {
        _newVal = this.multiple ? newVal : newVal[0]
      } else {
        _newVal = newVal
      }
      if (_newVal) {
        if (this.multiple) {
          const newValArray = _newVal.concat()
          this.$emit('update:dataValue', newValArray.map(item => item[this.dataKey]))
        } else {
          this.$emit('update:dataValue', _newVal[this.dataKey])
        }
      } else {
        this.$emit('update:dataValue', '')
      }
      this.watcherCount++
    }
  },
  methods: {
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select (option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option)
        return
      }
      if (this.blockKeys.indexOf(key) !== -1 ||
        this.disabled ||
        option.$isDisabled ||
        option.$isLabel
      ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id)
        this.search = ''
        if (this.closeOnSelect && !this.multiple) this.deactivate()
      } else {
        const isSelected = this.isSelected(option)

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option)
          return
        }

        this.$emit('select', option, this.id)

        if (this.multiple) {
          this.$emit('input', this.internalValue.concat([option]), this.id)
        } else {
          this.$emit('input', option, this.id)
        }

        if (this._isKey && this.initCallback) {
          this.$emit('callback', option[this.dataKey], this.id)
        }

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = ''
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate()
    },
  }
}
