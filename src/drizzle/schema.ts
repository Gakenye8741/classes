import { text,pgTable, serial, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";

// PgEnum is used to show many options for a particular column
export const userRoleEnum = pgEnum("userRoleEnum", ["User", "Admin"]);

// Create user Table

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 50 }).notNull(),
  email: varchar("email", { length: 100 }).unique().notNull(),
  regNo: varchar("reg_no", { length: 30 }).unique().notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }).unique().notNull(),
  role: userRoleEnum("role").default("User").notNull(),
  password: text("password").notNull(), // store hash, not plain password
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// User Types
export type TSelectUser =typeof users.$inferSelect;
export type  TInsertUser = typeof users.$inferInsert;