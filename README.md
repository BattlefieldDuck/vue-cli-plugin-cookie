# vue-cli-plugin-cookie
🍪 Vue CLI 3/4 Plugin for handling browser cookies

### Install

add the cookie plugin with vue-cli or vue-cli UI. `import` and `.use()` will be added to main.js automatically
```sh
vue add cookie
```

### Example Usage

##### Get a cookie
```js
this.$cookie.get('jwt_token')
```

##### Set a cookie
```js
this.$cookie.set('jwt_token', 'cookie_data')
this.$cookie.set('jwt_token', 'cookie_data', { sameSite: 'Lax', expires: '1Y' }) // set SameSite to Lax, Expires to 1 year
this.$cookie.set('jwt_token', 'One year', { expires: '1Y' })
this.$cookie.set('jwt_token', 'One month', { expires: '1M' })
this.$cookie.set('jwt_token', 'One day', { expires: '1D' })
this.$cookie.set('jwt_token', 'One hour', { expires: '1h' })
this.$cookie.set('jwt_token', 'One minutes', { expires: '1m' })
this.$cookie.set('jwt_token', 'One seconds', { expires: '1s' })
```

##### Remove a cookie on the current domain
```js
this.$cookie.remove('jwt_token')
this.$cookie.delete('jwt_token') // alias of remove
this.$cookie.remove('jwt_token', { domain: 'parentdomain.com' }) // remove the parent domain's cookie
```

##### Get all cookies
```js
this.$cookie.getAll()
```
