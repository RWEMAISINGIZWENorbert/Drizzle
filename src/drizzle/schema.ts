import { pgTable, uuid,  } from "drizzle-orm/pg-core";

export default pgTable("citizens", {
    id: uuid("id").primaryKey()
})