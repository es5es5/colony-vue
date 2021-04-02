# MulitiSelect

##### Overriding [Open Source](https://vue-multiselect.js.org/)
<!-- ##### 오픈소스를 뜯어서 만들었습니다. -->

 - 수정한 코드들은 모두 ./myMixin.js 에 작성.


### Needs
 - **개발자 편의**
 - v-on:change
 - just get ID
 - preselect for Detail Form using ID

### Props

##### Origin
 - id
 - hideSelected
 - closeOnSelect
 - options
 - label
 - trackBy
 - multiple

##### Custom
 - preselectFirst
 - dataKey
 - dataValue

### Event
 - callback

```js
Option Data Example.

let option = {
  id: '277a6c1e-eb06-48dc-b0ef-ead07c189c42',
  name: '김루이',
  title: '룰루랄라',
}
```

```js
dataKey="id"
trackBy="id"
label="name"

:dataValue.sync="dataForm.id"
