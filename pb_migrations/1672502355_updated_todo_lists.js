migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  collection.listRule = "@request.auth.id = owner.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  collection.listRule = null

  return dao.saveCollection(collection)
})
