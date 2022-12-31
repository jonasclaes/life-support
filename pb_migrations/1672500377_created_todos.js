migrate((db) => {
  const collection = new Collection({
    "id": "b7ak6hmfimfccx7",
    "created": "2022-12-31 15:26:17.672Z",
    "updated": "2022-12-31 15:26:17.672Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fsemobz8",
        "name": "todo_list",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "4gessh1r2ucixy5",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "83ih7iak",
        "name": "content",
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
        "id": "za1gdbfx",
        "name": "checked",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("b7ak6hmfimfccx7");

  return dao.deleteCollection(collection);
})
