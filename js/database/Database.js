class Database {
    connection;

    // JSON
    settings = {
        name: 'my_to_do_list',
        version: '1.0',
        describe: 'Database about To Do List course.',
        size: 2 * 1024 * 1024
    };

    constructor(){
        this.connection = this.connect();
    }

    connect() {
        return openDatabase(this.settings.name, this.settings.version, this.settings.describe, this.settings.size);
    };

    createTable() {
    };

};