migrate((db) => {
  const collection = new Collection({
    "id": "6reizrs8jib6okq",
    "created": "2023-01-06 15:37:31.955Z",
    "updated": "2023-01-06 15:37:31.955Z",
    "name": "payments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gdxmuart",
        "name": "date",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "l54ac9gg",
        "name": "store",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wy2l8n6z",
        "name": "price",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "hfbw9lmg",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6reizrs8jib6okq");

  return dao.deleteCollection(collection);
})
