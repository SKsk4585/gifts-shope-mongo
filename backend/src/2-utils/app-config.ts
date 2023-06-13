class AppConfig {
    public port = 3001
    public connectionString = "mongodb://127.0.0.1:27017/gifts-shope"
}

const appConfig = new AppConfig

export default appConfig