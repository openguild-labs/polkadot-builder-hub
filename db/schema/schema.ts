import { pgTable, text, timestamp, json } from "drizzle-orm/pg-core";
import { user } from "@/db/schema/auth-schema";

export const post = pgTable("post", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  repliedTo: text("replied_to"),
  authorId: text("author_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  tags: json("tags"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

export const postLike = pgTable("post_like", {
  id: text("id").primaryKey(),
  postId: text("post_id")
    .notNull()
    .references(() => post.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

export const profile = pgTable("profile", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  bio: text("bio"),
  skills: json("skills"),
  location: text("location"),
  website: text("website"),
  linkedin: text("linkedin"),
  github: text("github"),
  xdotcom: text("xdotcom"),
  discord: text("discord"),
  telegram: text("telegram"),
  instagram: text("instagram"),
  facebook: text("facebook"),
  twitter: text("twitter"),
  youtube: text("youtube"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

export const idea = pgTable("idea", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content"),
  category: text("category").notNull(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  level: text("level").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at")
  .$defaultFn(() => new Date())
  .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});