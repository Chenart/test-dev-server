var schema = {
  "id": "fake-schema",
  "type": "object",
  "properties": {
    "kpString": {
      "type": "string",
      "faker": "lorem.sentence"
    },
    "isMissingTranslation": "true",
    "missingLanguages": "English",

    "timestamp": {
      "type": "integer",
      "faker": "date.recent"
    }
  },
  "required": [
    "kpString",
    "isMissingTranslation",
    "missingLanguages",
    "timestamp"
  ]
};

module.exports = schema;
