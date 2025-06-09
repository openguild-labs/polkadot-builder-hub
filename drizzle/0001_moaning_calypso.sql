CREATE TABLE "profile" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"bio" text,
	"skills" json,
	"location" text,
	"website" text,
	"linkedin" text,
	"github" text,
	"xdotcom" text,
	"discord" text,
	"telegram" text,
	"instagram" text,
	"facebook" text,
	"twitter" text,
	"youtube" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "post" ADD COLUMN "replied_to" text;--> statement-breakpoint
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;