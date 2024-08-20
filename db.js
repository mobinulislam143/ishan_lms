const connectDb = async () => {
    try {
        const dbPort = process.env.DB_PORT;
        await mongoose.connect(dbPort, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB Connected Successfully`);
    } catch (e) {
        console.error(`MongoDB Connection Error: ${e}`);
    }
};
