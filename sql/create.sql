drop table "GlobalContent";
drop table "LocalContent";
drop table "Walls" Cascade;
drop table "UsersGroup";
drop table "Group";
drop table "Friends";
drop table "Message" CASCADE;
drop table "Dialogs";
drop table "SeeingFriends";
drop table "SeeingGroup";
drop table "Token" CASCADE;
drop table "FakeProfile" CASCADE;
drop table "Privacy" CASCADE;
drop table "Profile" CASCADE;
drop table "Authorization" CASCADE;
drop table "Posts" cascade;
drop table "Groups" cascade;
drop table "Comments" cascade;
drop table "LikesAndDislikes" cascade;
drop table "Messages" cascade;

create table if not exists "Authorization"(
	"Login" VARCHAR(20),
	"Password" text NOT NULL,
	"Id" serial UNIQUE,
	CONSTRAINT "pk_login" PRIMARY KEY ("Login")
);
create table if not exists "Profile"(
	"Id" INTEGER,
	"FakeId" integer,
	"Photo" Text,
	"SecondName" Text,
	"FirstName" Text NOT NULL,
	"FatherName" Text,
	"Age" INTEGER,
	"AboutMe" Text,
	"Status" text,
	"Date" timestamp without time zone,
	"LastActivity" timestamp without time zone,
	"StatusProfile" integer NOT NULL,
	"Gender" boolean,
	"City" text,
	CONSTRAINT "pk_id" PRIMARY KEY ("Id"),
	FOREIGN KEY ("Id") REFERENCES "Authorization"("Id") ON DELETE CASCADE
);
create table if not exists "Privacy"(
	"Id" INTEGER,
	"Invisibility" boolean,
	"FakeId" INTEGER UNIQUE,
	"ViewFriends" INTEGER,
	"ViewGroups" INTEGER,
	CONSTRAINT "pk_id_private" PRIMARY KEY ("Id"),
	FOREIGN KEY ("Id") REFERENCES "Profile"("Id") ON DELETE CASCADE
);
create table if not exists "SeeingGroup"(
	"IdUser" INTEGER NOT NULL,
	"IdFriend" INTEGER NOT NULL
);
create table if not exists "SeeingFriends"(
	"IdUser" INTEGER NOT NULL,
	"IdFriend" INTEGER NOT NULL
);
create table if not exists "Dialogs"(
	"IdDialog" INTEGER NOT NULL,
	"IdUser" INTEGER NOT NULL,
	"Status" INTEGER NOT NULL,
	"NameDialog" Text,
	"Name" Text,
	"Photo" text
);
create table if not exists "Messages"(
	"IdDialog" INTEGER NOT NULL,
	"IdUser" INTEGER NOT NULL,
	"IdMessage" INTEGER NOT NULL,
	"Message" Text,
	"Time" timestamp without time zone,
	"Status" INTEGER NOT NULL
);
create table if not exists "Friends"(
	"IdUser" INTEGER NOT NULL,
	"IdFriend" INTEGER NOT NULL,
	"Status" INTEGER NOT NULL,
	"WideStatus" Text
);
create table if not exists "Groups"(
	"IdGroup" INTEGER,
	"Name" Text,
	"Description" Text,
	CONSTRAINT "pk_id_group" PRIMARY KEY ("IdGroup")
);
create table if not exists "UsersGroup"(
	"IdGroup" INTEGER NOT NULL,
	"IdUser" INTEGER NOT NULL,
	FOREIGN KEY ("IdGroup") REFERENCES "Groups"("IdGroup") ON DELETE CASCADE
);
create table if not exists "Walls"(
	"IdWall" INTEGER NOT NULL,
	"IdPost" INTEGER NOT NULL UNIQUE,
	"Status" boolean
);
create table if not exists "LocalContent"(
	"IdContent" INTEGER NOT NULL,
	"IdFile" INTEGER NOT NULL
);
create table if not exists "GlobalContent"(
	"IdFile" INTEGER NOT NULL,
	"File" Text,
	"Status" integer NOT NULL
); 
CREATE TABLE if not exists "LikesAndDislikes"
(
	"IdPost" integer NOT NULL,
	"IdUser" integer NOT NULL,
	"Status" boolean NOT NULL
);
CREATE TABLE if not exists "Posts"
(
	"IdPost" integer NOT NULL UNIQUE,
	"IdUser" integer NOT NULL,
	"Content" text,
	"Time" timestamp without time zone,
	FOREIGN KEY ("IdPost") REFERENCES "Walls"("IdPost") ON DELETE CASCADE
);
CREATE TABLE if not exists "Comments"
(
	"IdPost" integer NOT NULL,
	"IdComment" integer NOT NULL,
	"Content" text,
	"Time" timestamp without time zone,
	FOREIGN KEY ("IdPost") REFERENCES "Posts"("IdPost") ON DELETE CASCADE
);	

delete from "Dialogs";