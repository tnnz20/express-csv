import "dotenv/config";
import { web } from "./applications/web.js";

const PORT = process.env.PORT || 5000;

web.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});
