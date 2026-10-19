import { PRODUCT_CATALOGUE } from "../catalogue";
import { runCatalogueCheck } from "./catalogue-check-runner";

const status = runCatalogueCheck(PRODUCT_CATALOGUE);
process.exitCode = status;
