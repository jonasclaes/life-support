migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7ak6hmfimfccx7")

  collection.listRule = "@request.auth.id = todo_list.owner.id"
  collection.viewRule = "@request.auth.id = todo_list.owner.id"
  collection.createRule = "@request.auth.id = todo_list.owner.id"
  collection.updateRule = "@request.auth.id = todo_list.owner.id"
  collection.deleteRule = "@request.auth.id = todo_list.owner.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7ak6hmfimfccx7")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
