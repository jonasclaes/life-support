migrate((db) => {
  const collection = new Collection({
    "id": "epp2qyv05mqm1rb",
    "created": "2023-01-06 15:45:27.145Z",
    "updated": "2023-01-06 15:45:27.145Z",
    "name": "outstanding_payments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xnm7wlre",
        "name": "payment",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "6reizrs8jib6okq",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "7wqn6nxn",
        "name": "person",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "ik3rcujq4hykj3x",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "tm3yfrwc",
        "name": "share",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 1
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
  const collection = dao.findCollectionByNameOrId("epp2qyv05mqm1rb");

  return dao.deleteCollection(collection);
})
