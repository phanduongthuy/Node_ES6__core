import userRouter from "./user";
import testRouter from "./test";

export default function route(app) {
    app.use("/users", userRouter);
    app.use("/test", testRouter);
}
