migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epp2qyv05mqm1rb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lmkzottp",
    "name": "paid",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epp2qyv05mqm1rb")

  // update
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
})
