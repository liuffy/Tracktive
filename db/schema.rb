# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170225194817) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "likes", force: :cascade do |t|
    t.integer  "liker_id",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "tracktlist_id", null: false
  end

  add_index "likes", ["liker_id"], name: "index_likes_on_liker_id", using: :btree
  add_index "likes", ["tracktlist_id", "liker_id"], name: "index_likes_on_tracktlist_id_and_liker_id", unique: true, using: :btree

  create_table "tracktlists", force: :cascade do |t|
    t.string   "title",           null: false
    t.integer  "user_id",         null: false
    t.string   "index_image_url", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "playlistUrl",     null: false
    t.string   "artists",         null: false
    t.string   "username"
    t.integer  "num_tracks"
  end

  add_index "tracktlists", ["user_id"], name: "index_tracktlists_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
