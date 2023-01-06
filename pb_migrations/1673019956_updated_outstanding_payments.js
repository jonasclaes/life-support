migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epp2qyv05mqm1rb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lmkzottp",
    "name": "paid",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epp2qyv05mqm1rb")

  // remove
  collection.schema.removeField("lmkzottp")

  return dao.saveCollection(collection)
})
