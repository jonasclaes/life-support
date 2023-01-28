migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gzuyvgbm",
    "name": "owner",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  // remove
  collection.schema.removeField("gzuyvgbm")

  return dao.saveCollection(collection)
})
