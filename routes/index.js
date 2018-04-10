const router = require('koa-router')()

import user from './api/user'

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Record!'
  })
})

router.use('/user', user.routes(), user.allowedMethods());

module.exports = router;
