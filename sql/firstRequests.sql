drop table "Autorization" CASCADE;
drop table "Profile" CASCADE;
drop table "Privace" CASCADE;
drop table "FakeProfile" CASCADE;

create table if not exists "Autorization"(
	"Login" VARCHAR(20),
	"Password" INTEGER NOT NULL,
	"Id" INTEGER NOT NULL UNIQUE,
	CONSTRAINT "pk_login" PRIMARY KEY ("Login")
);
create table if not exists "Profile"(
	"Id" INTEGER,
	"SecondName" Text,
	"FirstName" Text NOT NULL,
	"FatherName" Text,
	"Age" INTEGER,
	"AboutMe" Text,
	CONSTRAINT "pk_id" PRIMARY KEY ("Id"),
	FOREIGN KEY ("Id") REFERENCES "Autorization"("Id") ON DELETE CASCADE
);
create table if not exists "Privace"(
	"Id" INTEGER,
	"Invisibility" boolean,
	"FakeId" INTEGER UNIQUE,
	"ViewFriends" INTEGER[],
	"ViewGroups" INTEGER[],
	CONSTRAINT "pk_id_private" PRIMARY KEY ("Id"),
	FOREIGN KEY ("Id") REFERENCES "Profile"("Id") ON DELETE CASCADE
);
create table if not exists"FakeProfile"(
	"Id" INTEGER,
	"SecondName" Text,
	"FirstName" Text,
	"FatherName" Text,
	"Age" INTEGER,
	"AboutMe" Text,
	CONSTRAINT "pk_id_faik" PRIMARY KEY ("Id"),
	FOREIGN KEY ("Id") REFERENCES "Privace"("FakeId") ON DELETE CASCADE
);

insert into "Autorization" ("Login", "Password", "Id") VALUES ('Person1', 1, 101),
							      ('Person2', 2, 102),
							      ('Person3', 3, 103),
							      ('Person4', 4, 104);
select * from "Autorization";
select * from "Autorization" where "Login" = 'Person1';
delete from "Autorization";

insert into "Profile" ("Id", "SecondName", "FirstName", "FatherName", "Age", "AboutMe") VALUES (101, 'Воландеморт', 'Олег', 'Витальевич', 18, 'Князь темного угла'),
												     (102, null, 'Лакистрайк', 'Анатольевич', 118, 'Холоп светлой стены'),
												     (103, null, 'Каблук', null, 50, 'Мне жена не разрешила писать здесь что-то'),
												     (104, null, 'Король', 'Треф', 88, null);
select * from "Profile";
select * from "Profile" where "SecondName" = 'Воландеморт' or "FirstName" = 'Лакистрайк';
select * from "Profile" where "Age" > 18;
delete from "Profile";

insert into "Privace" ("Id", "Invisibility", "FakeId", "ViewFriends", "ViewGroups") VALUES (101, false, null,'{102,103}', '{102}'),
											 (102, true, null, '{102,103,104}', '{102,104}'),
											 (103, false, 201, '{102,103}', '{102}'),
											 (104, false, 202, null, null);
select * from "Privace";
select * from "Privace" where "Invisibility" = 'true';
select * from "Privace" where "ViewFriends"[1] = 102;
delete from "Privace";

insert into "FakeProfile" ("Id", "SecondName", "FirstName", "FatherName", "Age", "AboutMe") VALUES (201, 'Secret1', 'Noname', 'Витальевич', 18, 'Холоп светлой стены'),
												     (202, null, 'Secret3', null, 50, 'Я сам себе хозяин');
select * from "FakeProfile";
select * from "FakeProfile" where "SecondName" = 'Secret1';
select * from "FakeProfile" where "Age" > 18;
delete from "FakeProfile";
