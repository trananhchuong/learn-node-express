const EventEmitter = require('events');

class Database extends EventEmitter {
  connect() {
    console.log('Connecting to database...');
    
    // Simulate connection
    setTimeout(() => {
      this.emit('connected');
    }, 1000);
  }
  
  disconnect() {
    console.log('Disconnecting...');
    this.emit('disconnected');
  }
  
  query(sql) {
    console.log('Executing:', sql);
    
    setTimeout(() => {
      const results = [{ id: 1, name: 'John' }];
      this.emit('queryResult', results);
    }, 500);
  }
}

// Sử dụng
const db = new Database();

db.on('connected', () => {
  console.log('✅ Database connected!');
});

db.on('disconnected', () => {
  console.log('❌ Database disconnected');
});

db.on('queryResult', (results) => {
  console.log('Query results:', results);
});

db.connect();
db.query('SELECT * FROM users');
db.disconnect();

// Output:
// Connecting to database...
// ✅ Database connected!
// Executing: SELECT * FROM users
// Query results: [{ id: 1, name: 'John' }]
// Disconnecting...
// ❌ Database disconnected