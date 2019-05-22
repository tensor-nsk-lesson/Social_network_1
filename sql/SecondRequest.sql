DROP TABLE "Dialogs";
DROP TABLE "Friends";

CREATE TABLE IF NOT EXISTS "Dialogs" (
	"ID_dialogs" int,
	"ID_ChatMembers" int[],
	"Message" TEXT,
	"Time" TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "Friends" (
	"ID_User" int PRIMARY KEY,
	"ID_Friends" int[]
);

INSERT INTO "Dialogs"("ID_dialogs", "ID_ChatMembers", "Message", "Time")
	VALUES 	(201, '{101,102}', 'Hello!', NOW()),
		(201, '{101,102}', 'Как дела?',NOW()),
		(202, '{103,102,104}', 'World',NOW()),
		(202, '{103,102,104}', 'Car',NOW()),
		(203, '{101,102,104}', 'Cat',NOW()),
		(203, '{101,102,104}', 'Hello World!',NOW()),
		(203, '{103,102,104}', 'Hello my friends!',NOW()),
		(204, '{101,102,103,104}', 'How are you?',NOW()),
		(204, '{101,102,103,104}', 'Показать все',NOW()),
		(204, '{101,102,103,104}', 'Кто тут?',NOW());

		
SELECT * FROM "Dialogs";
SELECT * FROM "Dialogs" WHERE "ID_dialogs" = 201;
DELETE FROM "Dialogs";

INSERT INTO "Friends"("ID_User", "ID_Friends")
	VALUES 	(101, '{102,104}'),
		(102, '{101,103,104}'),
		(103, '{102,104}'),
		(104, '{101,102,103}');

SELECT * FROM "Friends";
SELECT * FROM "Friends" WHERE "ID_User" = 101 OR "ID_User" = 104;
DELETE FROM "Friends";