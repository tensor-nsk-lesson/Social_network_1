drop table "GlobalContent";
drop table "LocalContent";
drop table "Walls";
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

create table if not exists "Authorization"(
	"Login" VARCHAR(20),
	"Password" INTEGER NOT NULL,
	"Id" INTEGER NOT NULL UNIQUE,
	CONSTRAINT "pk_login" PRIMARY KEY ("Login")
);
create table if not exists "Profile"(
	"Id" INTEGER,
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
	"IdContent" integer NOT NULL,
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
create table if not exists"FakeProfile"(
	"Id" integer NOT NULL,
	"Photo" text,
	"SecondName" text,
	"FirstName" text,
	"FatherName" text,
	"Age" integer,
	"AboutMe" text,
	"Status" text,
	"Date" timestamp without time zone,
	"LastActivity" timestamp without time zone,
	"StatusProfile" integer NOT NULL,
	"Gender" boolean,
	"IdContent" integer NOT NULL,
	CONSTRAINT "pk_id_faik" PRIMARY KEY ("Id"),
	FOREIGN KEY ("Id") REFERENCES "Privacy"("FakeId") ON DELETE CASCADE
);
create table if not exists "Token"(
	"IdUser" INTEGER NOT NULL,
	"Password" INTEGER NOT NULL,
	"Time" timestamp without time zone,
	CONSTRAINT "pk_id_user" PRIMARY KEY ("IdUser"),
	FOREIGN KEY ("IdUser") REFERENCES "Authorization"("Id") ON DELETE CASCADE
);
create table if not exists "SeeingGroup"(
	"IdStatus" INTEGER NOT NULL,
	"IdUser" INTEGER NOT NULL
);
create table if not exists "SeeingFriends"(
	"IdStatus" INTEGER NOT NULL,
	"IdUser" INTEGER NOT NULL
);
create table if not exists "Dialogs"(
	"IdDialog" INTEGER NOT NULL,
	"IdUser" INTEGER NOT NULL,
	"Status" INTEGER NOT NULL,
	"NameDialog" Text,
	"Name" Text
);
create table if not exists "Message"(
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
create table if not exists "Group"(
	"IdGroup" INTEGER,
	"Name" Text,
	"Description" Text,
	CONSTRAINT "pk_id_group" PRIMARY KEY ("IdGroup")
);
create table if not exists "UsersGroup"(
	"IdGroup" INTEGER NOT NULL,
	"IdUser" INTEGER NOT NULL,
	FOREIGN KEY ("IdGroup") REFERENCES "Group"("IdGroup") ON DELETE CASCADE
);
create table if not exists "Walls"(
	"IdWall" INTEGER NOT NULL,
	"IdPost" INTEGER NOT NULL UNIQUE,
	"Time" timestamp without time zone
);
create table if not exists "LocalContent"(
	"IdContent" INTEGER NOT NULL,
	"IdFile" INTEGER NOT NULL,
	"File" Text,
	"Status" integer NOT NULL
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
	"Status" integer NOT NULL
);
CREATE TABLE if not exists "Posts"
(
	"IdPost" integer NOT NULL,
	"IdUser" integer NOT NULL,
	"Comment" text,
	"Time" timestamp without time zone,
	FOREIGN KEY ("IdPost") REFERENCES "Walls"("IdPost") ON DELETE CASCADE
)