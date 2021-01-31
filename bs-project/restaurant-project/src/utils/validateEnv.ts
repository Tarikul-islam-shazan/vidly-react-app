import { cleanEnv, str } from 'envalid';

function validateEnv() {
    cleanEnv(process.env, {
        MONGO_USER: str(),
        MONGO_PASSWORD: str(),
        MONGO_PATH: str(),
        PORT: str()
    });
}

export default validateEnv;