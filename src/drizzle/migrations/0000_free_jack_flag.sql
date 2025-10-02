CREATE TYPE "public"."userRoleEnum" AS ENUM('User', 'Admin');--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(50) NOT NULL,
	"email" varchar(100) NOT NULL,
	"reg_no" varchar(30) NOT NULL,
	"phone_number" varchar(20) NOT NULL,
	"role" "userRoleEnum" DEFAULT 'User' NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_reg_no_unique" UNIQUE("reg_no"),
	CONSTRAINT "users_phone_number_unique" UNIQUE("phone_number")
);
