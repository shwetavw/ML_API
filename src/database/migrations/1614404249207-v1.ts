import {MigrationInterface, QueryRunner} from "typeorm";

export class v11614404249207 implements MigrationInterface {
    name = 'v11614404249207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying(50) NOT NULL, "username" character varying(30) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userfeature" ("enable" boolean NOT NULL, "userEmail" character varying(50) NOT NULL, "featureName" character varying(20) NOT NULL, CONSTRAINT "PK_64c429c35c83149634a0e750c55" PRIMARY KEY ("userEmail", "featureName"))`);
        await queryRunner.query(`CREATE TABLE "features" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "description" character varying(200) NOT NULL, CONSTRAINT "UQ_bcc3a344ae156a9fba128e1cb4d" UNIQUE ("name"), CONSTRAINT "PK_5c1e336df2f4a7051e5bf08a941" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "userfeature" ADD CONSTRAINT "FK_5fc16b8b9ebcac8321a8b5e46ca" FOREIGN KEY ("userEmail") REFERENCES "users"("email") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "userfeature" ADD CONSTRAINT "FK_01634691638a70f52fc78ac8bbb" FOREIGN KEY ("featureName") REFERENCES "features"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "userfeature" DROP CONSTRAINT "FK_01634691638a70f52fc78ac8bbb"`);
        await queryRunner.query(`ALTER TABLE "userfeature" DROP CONSTRAINT "FK_5fc16b8b9ebcac8321a8b5e46ca"`);
        await queryRunner.query(`DROP TABLE "features"`);
        await queryRunner.query(`DROP TABLE "userfeature"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
