migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  // remove
  collection.schema.removeField("ztwsrhfn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hximupf3",
    "name": "image",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gessh1r2ucixy5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ztwsrhfn",
    "name": "image",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("hximupf3")

  return dao.saveCollection(collection)
})
