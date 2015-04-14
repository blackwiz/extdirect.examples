Ext.define('DemoTouch.model.TodoItem', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        fields: [{
            name: 'id'
           // ,mapping: '_id' // IMPORTANT! Add for MongoDb backend example
        }, {
            name: 'text',
            type: 'string'
        }, {
            name: 'complete',
            type: 'boolean'
        }],
        sorters: [
            {
                property : "id",
                direction: "DESC"
            }
        ],
        proxy: {
            //Set proxy type
            type: 'direct',

            //Define direct method. In Touch example we use only reading.
            //ExtJs counterpart have more sophisticated CRUD Master - Detail example.

            directFn: 'ExtRemote.DXTodoItem.read',

            reader: {
                type: 'json',
                rootProperty: 'data',
                messageProperty:'message'
            }
        }
    }
});