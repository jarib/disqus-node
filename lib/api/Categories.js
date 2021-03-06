/**
 * [Up one level](/lib/index.html)
 * ### Categories API
 * See the disqus-node [Categories CLI](/lib/cli/categories.html).
 *
 * See the [Categories API on Disqus.com](https://disqus.com/api/docs/categories/).
 */
var methods = {
  create: {
    resource: 'categories',
    name: 'create',
    method: 'POST',
    requiredOptions: ['api_secret', 'forum', 'title'],
    availableOptions: ['default']
  },
  details: {
    resource: 'categories',
    name: 'details',
    method: 'GET',
    requiredOptions: ['api_secret', 'category'],
    availableOptions: []
  },
  list: {
    resource: 'categories',
    name: 'list',
    method: 'GET',
    requiredOptions: ['api_secret', 'forum'],
    availableOptions: ['since_id', 'cursor', 'limit', 'order']
  },
  listPosts: {
    resource: 'categories',
    name: 'listPosts',
    method: 'GET',
    requiredOptions: ['api_secret', 'category'],
    availableOptions: ['since', 'related', 'cursor', 'limit', 'query', 'include', 'order']
  },
  listThreads: {
    resource: 'categories',
    name: 'listThreads',
    method: 'GET',
    requiredOptions: ['api_secret', 'category'],
    availableOptions: ['since', 'related', 'cursor', 'limit', 'order']
  }
};

module.exports = function (util) {
  return function Category(config) {
    /**
     * ### create
     * Creates a new category.
     *
     * Signature:
     * ```js
     * Disqus#category.create(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.category.create({
     *     forum: '', // required
     *     title: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     default: false
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.category.create({
     *     forum: '', // required
     *     title: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     default: false
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.create = function (options, cb) {
      return util.executeAPIMethod(methods.create, options, config, cb);
    };

    /**
     * ### details
     * Returns category details.
     *
     * Signature:
     * ```js
     * Disqus#category.details(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.category.details({
     *     category: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.category.details({
     *     category: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.details = function (options, cb) {
      return util.executeAPIMethod(methods.details, options, config, cb);
    };

    /**
     * ### list
     * Returns a list of categories within a forum.
     *
     * Signature:
     * ```js
     * Disqus#category.list(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.category.list({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since_id: null,
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.category.list({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since_id: null,
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.list = function (options, cb) {
      return util.executeAPIMethod(methods.list, options, config, cb);
    };

    /**
     * ### listPosts
     * Returns a list of posts within a category.
     *
     * Signature:
     * ```js
     * Disqus#category.listPosts(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.category.listPosts({
     *     category: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     query: null,
     *     include: ['approved'],
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.category.listPosts({
     *     category: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     query: null,
     *     include: ['approved'],
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listPosts = function (options, cb) {
      return util.executeAPIMethod(methods.listPosts, options, config, cb);
    };

    /**
     * ### listThreads
     * Returns a list of threads within a category sorted by the date created.
     *
     * Signature:
     * ```js
     * Disqus#category.listThreads(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.category.listThreads({
     *     category: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.category.listThreads({
     *     category: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listThreads = function (options, cb) {
      return util.executeAPIMethod(methods.listThreads, options, config, cb);
    };
  };
};
