migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  collection.viewRule = "@request.auth.id = owner.id"
  collection.createRule = "@request.auth.id = owner.id"
  collection.updateRule = "@request.auth.id = owner.id"
  collection.deleteRule = "@request.auth.id = owner.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
