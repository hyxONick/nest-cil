export default () => ({
  // port: 27017,
  port: 3000,
  databaseConfig: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'shopping_day',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  },
});
