migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  collection.name = "todo_lists"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  collection.name = "todos"

  return dao.saveCollection(collection)
})
